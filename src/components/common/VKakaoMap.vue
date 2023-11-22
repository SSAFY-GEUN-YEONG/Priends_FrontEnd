<script setup>
import { ref, watch, onMounted } from "vue";

const map = ref(null);
const markers = ref([]);
const overlay = ref(null);
const overlays = ref([]); // 오버레이를 저장할 배열 추가

const props = defineProps({
  selectStation: Object,
  attractions: Array
});

// 관광지들의 평균 위치를 계산하는 함수
const calculateCenter = (attractions) => {
  let totalLat = 0;
  let totalLng = 0;
  attractions.forEach(attraction => {
    totalLat += attraction.latitude;
    totalLng += attraction.longitude;
  });
  return {
    lat: totalLat / attractions.length,
    lng: totalLng / attractions.length
  };
};


// 지도 초기화 함수
const initMap = () => {
  const container = document.getElementById("map");
  let center = new kakao.maps.LatLng(33.450701, 126.570667); // 기본 중심 좌표

  // // props.attractions가 있으면, 중심 좌표를 업데이트
  if (props.attractions && props.attractions.length > 0) {
    const avgCenter = calculateCenter(props.attractions);
    center = new kakao.maps.LatLng(avgCenter.lat, avgCenter.lng);
  }

  const options = {
    center: center,
    level: 10,
  };

  map.value = new kakao.maps.Map(container, options);
  if (props.selectStation) {
    updateMap(props.selectStation);
  }
 
};

// 카카오 맵 스크립트 로드 함수
const loadKakaoMapScript = () => {
  const script = document.createElement("script");
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${
    import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY
  }&libraries=services,clusterer`;
  script.onload = () => kakao.maps.load(initMap);
  document.head.appendChild(script);
};

// 마커 업데이트 함수
const updateMap = (newVal) => {
  // 지도 객체가 아직 준비되지 않았다면 종료
  if (!map.value) {
    return;
  }

  // 새로운 위치로 LatLng 객체 생성
  const moveLatLon = new kakao.maps.LatLng(newVal.lat, newVal.lng);

  // 기존 마커를 제거
  markers.value.forEach(marker => marker.setMap(null));
  markers.value = [];

  // 새 마커를 생성하고 지도에 추가
  const marker = new kakao.maps.Marker({
    map: map.value,
    position: moveLatLon
  });
  // 지도에 마커 찍기
  markers.value.push(marker);
  // 지도 중심을 이동시킴
  map.value.setCenter(moveLatLon);

  const content = `
    <div class="wrap">
      <div class="info">
        <div class="title">
          ${newVal.title}
          <div class="close" onclick="closeOverlay()" title="닫기"></div>
        </div>
        <div class="body">
          <div class="img">
            <img src="${newVal.first_image}" width="73" height="70">
          </div>
          <div class="desc">
            <div class="ellipsis">${newVal.addr1}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.value = new kakao.maps.CustomOverlay({
    content: content,
    map: map.value,
    position: marker.getPosition()
  });

  kakao.maps.event.addListener(marker, 'click', function () {
    overlay.value.setMap(map.value);
  });

  window.closeOverlay = () => {
    if (overlay.value) {
      overlay.value.setMap(null);
    }
  };

};


// 마커를 생성하고 지도에 추가하는 함수
const addMarkers = () => {
  if (!window.kakao || !window.kakao.maps) {
    return; // kakao 맵이 로드되지 않았다면 함수 실행 중지
  }

  // 기존 마커 및 오버레이를 제거
  markers.value.forEach(marker => marker.setMap(null));
  overlays.value.forEach(overlay => overlay.setMap(null));
  markers.value = [];
  overlays.value = [];

  // 새 마커 및 오버레이 추가
  props.attractions.forEach(attraction => {
    const position = new kakao.maps.LatLng(attraction.latitude, attraction.longitude);
    const marker = new kakao.maps.Marker({ map: map.value, position: position });
    markers.value.push(marker);

    const content = `
    <div class="wrap">
      <div class="info">
        <div class="title">
          ${attraction.title}
        </div>
        <div class="body">
          <div class="img">
            <img src="${attraction.first_image}" width="73" height="70">
          </div>
          <div class="desc">
            <div class="ellipsis">${attraction.addr1}</div>
          </div>
        </div>
      </div>
    </div>
  `;

    const overlay = new kakao.maps.CustomOverlay({ content, map: map.value, position });
    overlays.value.push(overlay);

  });



  // 랜덤 마커 선택 및 중심 설정
  if (markers.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * markers.value.length);
    const randomMarkerPosition = markers.value[randomIndex].getPosition();
    // 오차값을 추가하기 위한 랜덤 위도와 경도 오차 생성
    const latOffset = (Math.random() - 0.1) * 0.001; // 예: 0.001은 약 111m를 의미
    const lngOffset = (Math.random() - 0.1) * 0.001; // 지도의 확대 레벨에 따라 이 값을 조정

    // 오차값을 더해 새로운 중심 좌표 생성
    const newCenter = new kakao.maps.LatLng(
      randomMarkerPosition.getLat() + latOffset,
      randomMarkerPosition.getLng() + lngOffset
    );

    map.value.setCenter(newCenter);
    map.value.relayout(); // 지도 크기 재조정
  }
};

// 관측하여 마커 업데이트
watch(() => props.attractions, (newAttractions) => {
  if (map.value && newAttractions && newAttractions.length > 0) {
    addMarkers(); // 마커를 추가하는 함수
  }
}, { deep: true });

onMounted(async () => {
  if (!window.kakao || !window.kakao.maps) {
    loadKakaoMapScript();
  } else {
    initMap();
  }

});



</script>

<template>
  <div id="map"></div>
</template>

<style>
#map {
  width: 100%;
}
.overlay {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.wrap {position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
    .wrap * {padding: 0;margin: 0;}
    .wrap .info {width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
    .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
    .info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
    .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
    .info .close:hover {cursor: pointer;}
    .info .body {position: relative;overflow: hidden;}
    .info .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
    .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
    .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
    .info .link {color: #5085BB;}
</style>
