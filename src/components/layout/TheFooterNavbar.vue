<script setup>
import "@/assets/css/footer.css";
</script>

<template>
  <footer class="navbar-fixed-bottom mt-5">
    <div class="row justify-content-center">
      <div class="footer-content col-md-2">
        <div class="footer-title">Priends</div>
        <p>여행지</p>
        <p>여행 계획</p>
        <p>커뮤니티</p>
        <p>동행</p>
      </div>
      <div class="footer-content col-md-2">
        <div class="footer-title">회사이야기</div>
        <p>회사소개</p>
        <p>이용방법</p>
        <p>광고 및 제휴</p>
      </div>
      <div class="footer-content col-md-2">
        <div class="footer-title">고객센터</div>
        <p>FAQ</p>
        <p>문의하기</p>
        <p>이용약관</p>
        <p>개인정보 처리방침</p>
      </div>
    </div>

    <div class="div-footer-bottom d-flex">
      <p>Copyright ⓒ 2023 Priends.com, All Rights Reserved.</p>
      <p>제휴문의: Priends@ssafy.com | 02-1111-2222</p>
    </div>
  </footer>
</template>

<style scoped>
/* 스타일 수정 */
.navbar-fixed-bottom {
  position: relative;
  bottom: 0;
  width: 100%;
}
* {
  font-size: 10px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  color: #ffffff;
  background-color: #363c48;
}
.footer-title {
  font-weight: 700;
  height: 30px;
  border-bottom: 1px solid #424753;
  color: #999999; /* 원하는 색상으로 변경하세요 */
  margin: 10px auto; /* 상하 여백을 추가할 수 있습니다. */
}

.div-footer-bottom {
  background-color: #2e333d;
  color: #c9c9c9;
}

.div-footer-bottom > p {
  margin: 0 auto;
}
</style>
