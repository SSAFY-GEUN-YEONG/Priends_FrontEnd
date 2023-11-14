<script setup>

</script>

<template>
    <div class="container">
    <div class="main">
        <div class="form-label">이름</div>
        <div class="text-wrapper"> *</div>
        <div class="div">비밀번호</div>
        <div class="form-label-2"> *</div>
        <div class="form-input">
            <div class="div-placeholder">
                <div class="text-wrapper-2">이름을 입력해주세요.</div>
            </div>
        </div>
        <div class="div-placeholder-wrapper">
            <div class="div-placeholder">
                <div class="text-wrapper-3">ID@example.com</div>
            </div>
        </div>
        <div class="div-wrapper">
            <div class="div-placeholder">
                <p class="p">영문, 숫자, 특수문자 2가지 조합 8~15자</p>
            </div>
        </div>
        <div class="form-input-2">
            <div class="div-placeholder">
                <div class="text-wrapper-4">비밀번호를 한번 더 입력해주세요.</div>
            </div>
        </div>
        <p class="form">
            선택 정보에 대한 동의를 포함합니다. 전체 동의하기 선택 후 선택정보에 대한 동의를 변경 하실 수 있습니다.
        </p>
        <div class="form-label-strong">전체 약관 동의</div>
        <div class="form-2" />
        <div class="form-list">
            <div class="item">
                <button class="button">
                    <div class="text-wrapper-5">[필수] 만 14세 이상입니다.</div>
                </button>
                <div class="div-css">
                    <div class="span-css" />
                </div>
            </div>
            <div class="item-2">
                <div class="button-2">
                    <p class="text-wrapper-6">[필수] 회원가입 및 운영약관 동의</p>
                    <img class="ic-arrow-right-xs" alt="Ic arrow right xs" src="ic-arrow-right-xs-gray-300-svg.svg" />
                </div>
                <div class="div-css">
                    <div class="span-css" />
                </div>
            </div>
            <div class="item-3">
                <div class="button-2">
                    <p class="text-wrapper-7">[필수] 개인정보 수집 및 이용 동의</p>
                    <img class="ic-arrow-right-xs" alt="Ic arrow right xs" src="image.svg" />
                </div>
                <div class="div-css">
                    <div class="span-css" />
                </div>
            </div>
            <div class="item-4">
                <div class="button-2">
                    <p class="text-wrapper-8">[필수] 위치 정보 이용약관 동의</p>
                    <img class="ic-arrow-right-xs" alt="Ic arrow right xs" src="ic-arrow-right-xs-gray-300-svg-2.svg" />
                </div>
                <div class="div-css">
                    <div class="span-css" />
                </div>
            </div>
            <div class="item-5">
                <div class="button-2">
                    <p class="text-wrapper-9">[선택] 동행 알림 서비스 수신 이용 동의</p>
                    <img class="ic-arrow-right-xs" alt="Ic arrow right xs" src="ic-arrow-right-xs-gray-300-svg-3.svg" />
                </div>
                <div class="div-css">
                    <div class="span-css" />
                </div>
            </div>
        </div>
        <div class="form-button-button">
            <div class="text-wrapper-10">회원가입</div>
        </div>
        <div class="form-label-3">이메일</div>
        <div class="form-label-4">회원가입</div>
        <div class="form-label-5"> *</div>
        <div class="overlap-group">
            <div class="form-label-6">비밀번호 확인</div>
            <div class="form-label-7"> *</div>
        </div>
    </div>
</div>
</template>
  
<style scoped>
.container {
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center;     /* 수직 중앙 정렬 */
    min-height: 100vh;       /* 뷰포트 높이의 100% */
}

@media (max-width: 768px) {
    .main {
        width: 90%;  /* 모바일 화면에 맞게 너비 조정 */
        /* 필요한 경우 추가 스타일 조정 */
    }
}

.main {
    border: 1px solid;
    border-color: #dee2e6;
    border-radius: 2px;
    height: 819px;
    position: relative;
    width: 430px;
}

.main .form-label {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 7px;
    font-weight: 500;
    height: 21px;
    left: 54px;
    letter-spacing: -0.2px;
    line-height: 21px;
    position: absolute;
    top: 324px;
    white-space: nowrap;
}

.main .text-wrapper {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 14px;
    font-weight: 500;
    height: 16px;
    left: 103px;
    letter-spacing: 0;
    line-height: 21px;
    position: absolute;
    top: 319px;
    white-space: nowrap;
    width: 10px;
}

.main .div {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 7px;
    font-weight: 500;
    height: 21px;
    left: 54px;
    letter-spacing: -0.2px;
    line-height: 21px;
    position: absolute;
    top: 155px;
    white-space: nowrap;
    width: 36px;
}

.main .form-label-2 {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 14px;
    font-weight: 500;
    height: 16px;
    left: 103px;
    letter-spacing: 0;
    line-height: 21px;
    position: absolute;
    top: 150px;
    white-space: nowrap;
    width: 10px;
}

.main .form-input {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px #ced4da;
    height: 40px;
    left: 50px;
    overflow: hidden;
    position: absolute;
    top: 346px;
    width: 332px;
}

.main .div-placeholder {
    height: 16px;
    left: 11px;
    position: relative;
    top: 12px;
    width: 310px;
}

.main .text-wrapper-2 {
    color: #adb5bd;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 7.2px;
    font-weight: 500;
    height: 16px;
    left: 0;
    letter-spacing: -0.2px;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 66px;
}

.main .div-placeholder-wrapper {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px #ced4da;
    height: 40px;
    left: 50px;
    overflow: hidden;
    position: absolute;
    top: 92px;
    width: 332px;
}

.main .text-wrapper-3 {
    color: #adb5bd;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 13.2px;
    font-weight: 500;
    height: 16px;
    left: 0;
    letter-spacing: -0.2px;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 109px;
}

.main .div-wrapper {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px #ced4da;
    height: 40px;
    left: 50px;
    overflow: hidden;
    position: absolute;
    top: 176px;
    width: 332px;
}

.main .p {
    color: #adb5bd;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 8px;
    font-weight: 500;
    height: 16px;
    left: 0;
    letter-spacing: -0.2px;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 128px;
}

.main .form-input-2 {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px #ced4da;
    height: 40px;
    left: 50px;
    overflow: hidden;
    position: absolute;
    top: 262px;
    width: 332px;
}

.main .text-wrapper-4 {
    color: #adb5bd;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 7.2px;
    font-weight: 500;
    height: 16px;
    left: 0;
    letter-spacing: -0.2px;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 84px;
}

.main .form {
    color: #848c94;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 6px;
    font-weight: 500;
    height: 18px;
    left: 88px;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    top: 434px;
    white-space: nowrap;
    width: 270px;
}

.main .form-label-strong {
    color: #343a40;
    font-family: "Noto Sans KR-Bold", Helvetica;
    font-size: 7px;
    font-weight: 700;
    height: 16px;
    left: 88px;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    top: 417px;
    white-space: nowrap;
    width: 58px;
}

.main .form-2 {
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0px 0px 0px 1px #ced4da;
    height: 18px;
    left: 60px;
    position: absolute;
    top: 428px;
    width: 18px;
}

.main .form-list {
    border: 1px solid;
    border-color: #dee2e6;
    border-radius: 4px;
    height: 202px;
    left: 46px;
    position: absolute;
    top: 500px;
    width: 336px;
}

.main .item {
    height: 18px;
    left: 17px;
    position: absolute;
    top: 21px;
    width: 310px;
}

.main .button {
    all: unset;
    box-sizing: border-box;
    height: 18px;
    left: 28px;
    position: absolute;
    top: 0;
    width: 282px;
}

.main .text-wrapper-5 {
    color: #343a40;
    font-family: "Noto Sans KR-DemiLight", Helvetica;
    font-size: 7.7px;
    font-weight: 300;
    height: 16px;
    left: 6px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 85px;
}

.main .div-css {
    height: 18px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;
}

.main .span-css {
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0px 0px 0px 1px #ced4da;
    height: 18px;
    width: 18px;
}

.main .item-2 {
    height: 18px;
    left: 17px;
    position: absolute;
    top: 59px;
    width: 310px;
}

.main .button-2 {
    height: 18px;
    left: 28px;
    position: absolute;
    top: 0;
    width: 282px;
}

.main .text-wrapper-6 {
    color: #343a40;
    font-family: "Noto Sans KR-DemiLight", Helvetica;
    font-size: 7px;
    font-weight: 300;
    height: 16px;
    left: 6px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 98px;
}

.main .ic-arrow-right-xs {
    height: 16px;
    left: 256px;
    position: absolute;
    top: 2px;
    width: 16px;
}

.main .item-3 {
    height: 18px;
    left: 17px;
    position: absolute;
    top: 97px;
    width: 310px;
}

.main .text-wrapper-7 {
    color: #343a40;
    font-family: "Noto Sans KR-DemiLight", Helvetica;
    font-size: 7px;
    font-weight: 300;
    height: 16px;
    left: 6px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 109px;
}

.main .item-4 {
    height: 18px;
    left: 17px;
    position: absolute;
    top: 135px;
    width: 310px;
}

.main .text-wrapper-8 {
    color: #343a40;
    font-family: "Noto Sans KR-DemiLight", Helvetica;
    font-size: 7px;
    font-weight: 300;
    height: 16px;
    left: 6px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 95px;
}

.main .item-5 {
    height: 18px;
    left: 17px;
    position: absolute;
    top: 173px;
    width: 310px;
}

.main .text-wrapper-9 {
    color: #343a40;
    font-family: "Noto Sans KR-DemiLight", Helvetica;
    font-size: 7px;
    font-weight: 300;
    height: 16px;
    left: 6px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 115px;
}

.main .form-button-button {
    background-color: #dec2e0;
    border-radius: 4px;
    height: 52px;
    left: 46px;
    position: absolute;
    top: 739px;
    width: 332px;
}

.main .text-wrapper-10 {
    color: #ffffff;
    font-family: "Noto Sans KR-Bold", Helvetica;
    font-size: 8px;
    font-weight: 700;
    height: 24px;
    left: 119px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: center;
    top: 11px;
    white-space: nowrap;
    width: 78px;
}

.main .form-label-3 {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 7px;
    font-weight: 500;
    height: 21px;
    left: 54px;
    letter-spacing: -0.2px;
    line-height: 21px;
    position: absolute;
    top: 70px;
    white-space: nowrap;
    width: 20px;
}

.main .form-label-4 {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 21px;
    left: 162px;
    letter-spacing: -0.2px;
    line-height: 21px;
    position: absolute;
    top: 25px;
    white-space: nowrap;
    width: 91px;
}

.main .form-label-5 {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 14px;
    font-weight: 500;
    height: 16px;
    left: 103px;
    letter-spacing: 0;
    line-height: 21px;
    position: absolute;
    top: 64px;
    white-space: nowrap;
    width: 10px;
}

.main .overlap-group {
    height: 25px;
    left: 51px;
    position: absolute;
    top: 235px;
    width: 62px;
}

.main .form-label-6 {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 7px;
    font-weight: 500;
    height: 21px;
    left: 0;
    letter-spacing: -0.2px;
    line-height: 21px;
    position: absolute;
    top: 4px;
    white-space: nowrap;
    width: 53px;
}

.main .form-label-7 {
    color: #495056;
    font-family: "Noto Sans KR-Medium", Helvetica;
    font-size: 14px;
    font-weight: 500;
    height: 16px;
    left: 52px;
    letter-spacing: 0;
    line-height: 21px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 10px;
}
</style>
  