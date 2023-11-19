<script setup></script>

<template>
  <div class="container border">
    <div class="fl left_full_box">
      <ul class="fl" id="cat_menu" data="" data-member_srl="1395351">
        <li data="as" data-val="아시아" class="on">
          <img src="/res/img/workspace/new/cat_as.png" class="s" /><br />아시아
        </li>
        <li data="eu" data-val="유럽">
          <img src="/res/img/workspace/new/cat_eu.png" class="s" /><br />유럽
        </li>
        <li data="oc" data-val="남태평양">
          <img
            src="/res/img/workspace/new/cat_oc.png"
            class="s" /><br />남태평양
        </li>
        <li data="na" data-val="북아메리카">
          <img
            src="/res/img/workspace/new/cat_na.png"
            class="s" /><br />북아메리카
        </li>
        <li data="sa" data-val="중남미">
          <img
            src="/res/img/workspace/new/cat_sa.png"
            class="s"
            style="padding-bottom: 7px" /><br />중남미
        </li>
      </ul>
      <div class="fl" id="schedule_full_box" style="width: 265px" data="0">
        <div class="title_box">
          <div id="country_list_title">
            <div class="fl ct_title">아시아</div>
            <div class="clear"></div>
          </div>
          <div id="city_list_title">
            <div class="back_btn fl"></div>
            <div
              class="fl cu_title"
              style="width: 230px; padding-left: 10px; font-size: 15px">
              city
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div
          id="search_box"
          style="
            width: 100%;
            height: 51px;
            border-bottom: solid #d6d6d6 1px;
          "></div>
        <div id="country_list_box" style="height: 709px">
          <div
            class="item"
            data-no="0"
            data="338"
            data-latlng="28.39485700,84.12400800"
            data-val="네팔">
            <div class="img_box fl">
              <img
                src="http://mw2.google.com/mw-panoramio/photos/medium/72200085.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">네팔</div>
              <div class="info_sub_title">Nepal</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="1"
            data="26"
            data-latlng="24.92301400,121.24632200"
            data-val="대만">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/91/kaohsiung_1425362067.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">대만</div>
              <div class="info_sub_title">Taiwan</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="2"
            data="205"
            data-latlng="35.90775700,127.76692200"
            data-val="대한민국">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/310/seoul_1425373106.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">대한민국</div>
              <div class="info_sub_title">Republic of Korea</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="3"
            data="328"
            data-latlng="19.85627000,102.49549600"
            data-val="라오스">
            <div class="img_box fl">
              <img
                src="http://mw2.google.com/mw-panoramio/photos/medium/76227332.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">라오스</div>
              <div class="info_sub_title">Laos</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="4"
            data="9"
            data-latlng="22.19874500,113.54387300"
            data-val="마카오">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/16/macau_1426774435.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">마카오</div>
              <div class="info_sub_title">Macau</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="5"
            data="10"
            data-latlng="4.21048400,101.97576600"
            data-val="말레이시아">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/17/langkawi_1426774473.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">말레이시아</div>
              <div class="info_sub_title">Malaysia</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="6"
            data="344"
            data-latlng="1.97724700,73.53610340"
            data-val="몰디브">
            <div class="img_box fl">
              <img
                src="http://mw2.google.com/mw-panoramio/photos/medium/95769042.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">몰디브</div>
              <div class="info_sub_title">Maldives</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="7"
            data="330"
            data-latlng="21.91396500,95.95622300"
            data-val="미얀마(버마)">
            <div class="img_box fl">
              <img
                src="http://mw2.google.com/mw-panoramio/photos/medium/6535717.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">미얀마(버마)</div>
              <div class="info_sub_title">Myanmar</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="8"
            data="15"
            data-latlng="14.05832400,108.27719900"
            data-val="베트남">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/32/danang_1425366017.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">베트남</div>
              <div class="info_sub_title">Vietnam</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="9"
            data="345"
            data-latlng="7.87305400,80.77179700"
            data-val="스리랑카">
            <div class="img_box fl">
              <img
                src="http://mw2.google.com/mw-panoramio/photos/medium/2712178.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">스리랑카</div>
              <div class="info_sub_title">Sri Lanka</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="10"
            data="19"
            data-latlng="1.35208300,103.81983600"
            data-val="싱가포르">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/243/singapore_1426840110.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">싱가포르</div>
              <div class="info_sub_title">Singapore</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="11"
            data="327"
            data-latlng="23.42407600,53.84781800"
            data-val="아랍에미리트">
            <div class="img_box fl">
              <img
                src="http://mw2.google.com/mw-panoramio/photos/medium/86017015.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">아랍에미리트</div>
              <div class="info_sub_title">United Arab Emirates</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="12"
            data="20"
            data-latlng="20.59368400,78.96288000"
            data-val="인도">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/38/new-delhi_1425363969.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">인도</div>
              <div class="info_sub_title">India</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="13"
            data="301"
            data-latlng="-7.21083200,110.85177800"
            data-val="인도네시아">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/10024/bali_1428898505.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">인도네시아</div>
              <div class="info_sub_title">Indonesia</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="14"
            data="6"
            data-latlng="36.20482400,138.25292400"
            data-val="일본">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/49/kobe_1425362138.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">일본</div>
              <div class="info_sub_title">Japan</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="15"
            data="23"
            data-latlng="35.86166000,104.19539700"
            data-val="중국">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/71/shanghai_1425372227.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">중국</div>
              <div class="info_sub_title">China</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="16"
            data="24"
            data-latlng="12.56567900,104.99096300"
            data-val="캄보디아">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/244/siem-reap_1425526326.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">캄보디아</div>
              <div class="info_sub_title">Cambodia</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="17"
            data="25"
            data-latlng="15.87003200,100.99254100"
            data-val="태국">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/86/bangkok_1425369552.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">태국</div>
              <div class="info_sub_title">Thailand</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="18"
            data="202"
            data-latlng="12.87972100,121.77401700"
            data-val="필리핀">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/303/manila_1425367455.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">필리핀</div>
              <div class="info_sub_title">Philippines</div>
            </div>
            <div class="clear"></div>
          </div>
          <div
            class="item"
            data-no="19"
            data="28"
            data-latlng="22.39642800,114.10949700"
            data-val="홍콩">
            <div class="img_box fl">
              <img
                src="http://img.earthtory.com/img/city_images/245/hong-kong_1426839831.jpg" />
            </div>
            <div class="info_box fl">
              <div class="info_title">홍콩</div>
              <div class="info_sub_title">Hongkong</div>
            </div>
            <div class="clear"></div>
          </div>
        </div>

        <div id="city_list_box" style="height: 709px"></div>
      </div>

      <div class="clear"></div>
    </div>
  </div>
</template>

<style scoped></style>
