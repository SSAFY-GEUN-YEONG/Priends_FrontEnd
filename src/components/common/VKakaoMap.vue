<script setup>
import { ref, onMounted } from "vue";

const map = ref(null);
const markers = ref([]);
const overlay = ref(null); // 오버레이를 저장할 ref 추가

const props = defineProps({
  selectStation: Object
});

// 지도 초기화 함수
const initMap = () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
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

  // 커스텀 오버레이 생성 및 추가
  // const content = `
  //   <div class="overlay">
  //     <h3>${newVal.title}</h3>
  //     <p>${newVal.addr1}</p>
  //     <img src="${newVal.first_image}" alt="${newVal.title}" style="width: 100px; height: auto;">
  //     <button @click="closeOverlay">닫기</button>
  //   </div>
  // `;

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

onMounted(() => {
  if (!window.kakao || !window.kakao.maps) {
    loadKakaoMapScript(); // 카카오 맵 스크립트 로드
  } else {
    initMap();  // 지도 초기화
  }
});

</script>

<template>
  <div id="map"></div>
</template>

<style>
#map {
  width: 100%;
  height: 700px;
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
