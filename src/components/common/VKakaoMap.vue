<script setup>
import { ref, watch, onMounted } from 'vue';

const map = ref(null);
const markers = ref(new Map()); // 마커를 저장할 Map 객체
const overlays = ref(new Map()); // 오버레이를 저장할 Map 객체
const polyline = ref(null);

const props = defineProps({
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
  const container = document.getElementById('map');
  let center = new kakao.maps.LatLng(33.450701, 126.570667);

  if (props.attractions && props.attractions.length > 0) {
    const avgCenter = calculateCenter(props.attractions);
    center = new kakao.maps.LatLng(avgCenter.lat, avgCenter.lng);
  }

  const options = {
    center: center,
    level: 9
  };

  map.value = new kakao.maps.Map(container, options);
  // displayMarkers(); // 지도가 초기화된 후에 마커를 표시
};

const loadKakaoMapScript = () => {
  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${import.meta.env.VITE_KAKAO_MAP_SERVICE_KEY}&libraries=services,clusterer`;
  script.onload = () => kakao.maps.load(initMap);
  document.head.appendChild(script);
};


const clearMarkersAndOverlays = () => {
  markers.value.forEach(marker => marker.setMap(null));
  markers.value.clear();
  overlays.value.forEach(overlay => overlay.setMap(null));
  overlays.value.clear();
  if (polyline.value) {
    polyline.value.setMap(null);  // 폴리라인도 제거
  }
};


// 마커, 오버레이, 폴리라인을 표시하는 함수
const displayMarkersAndPolyline  = () => {
  if (!window.kakao || !window.kakao.maps) {
    console.error("카카오맵 API 아직 호출 안됨!!!");
    return;
  }

  clearMarkersAndOverlays();

  let path = [];

  props.attractions.forEach(attraction => {
    const position = new kakao.maps.LatLng(attraction.latitude, attraction.longitude);
    // 마커 생성 설정
    const marker = new kakao.maps.Marker({
      map: map.value,
      position: position,
      // 마커에 숫자 표시하기 (추가적인 커스텀)
    });
    markers.value.set(attraction.content_id, marker);

    // 커스텀 오버레이 부분
    const content = `
    <div class="wrap">
      <div class="info">
        <div class="title">
          ${attraction.title}
        </div>
      </div>
    </div>
    `;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map.value,
      position: marker.getPosition()
    });

    overlays.value.set(attraction.content_id, overlay);
    map.value.setCenter(position);

    path.push(position);
  });

  polyline.value = new kakao.maps.Polyline({
    path: path, // 폴리라인 경로 설정
    strokeWeight: 5, // 선 두께
    strokeColor: '#FFAE00', // 선 색상
    strokeOpacity: 1, // 선 투명도
    strokeStyle: 'solid' // 선 스타일
  });
  polyline.value.setMap(map.value); // 폴리라인 지도에 표시
};

// 값 변경될때 마다 실행
watch(() => props.attractions, (newAttractions) => {
  displayMarkersAndPolyline();
}, { deep: true });

// 해당 컴포넌트 처음 마운트 될 때 실행
onMounted(() => {
  if (!window.kakao || !window.kakao.maps) {
    loadKakaoMapScript();
  } else {
    initMap();
  }
});




</script>

<template>
  <div id="map" style="width: 100%; height: 100%;"></div>
</template>

<style>
.overlay {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.wrap {
  font-size: 20px;
}

</style>
