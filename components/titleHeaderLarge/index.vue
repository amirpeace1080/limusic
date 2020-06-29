<template>
  <div class="d-none d-md-block style-main">
    <!-- start logo site -->
    <div class="bg-white" style="width:100%; height:150px">
      <div>
        <nuxt-link to="/">
          <img
            class="style-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyWUAV2yn-kS8mvA1giT5ROJb0pE6-m-GNcfQIaqpJR3Va6JQk&usqp=CAU"
            alt="LOGO"
          />
        </nuxt-link>
      </div>
    </div>
    <!-- end logo site -->
    <div style="width:100%; height:150px">
      <!-- start tablig -->
      <div>
        <img
          class="style-tablig border"
          src="https://cloudir.cf/iranicard2.az"
        />
      </div>
      <!-- end tablig -->
    </div>
  </div>
</template>

<style scoped>
.style-main {
  width: 100%;
  height: 300px;
  background-image: url("https://downloadly.ir/wp-content/themes/downloadly/images/bg.jpg");
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
}

.style-logo {
  width: 25%;
  height: 134px;
  border-radius: 20px;
  margin-right: 14%;
  margin-top: 8px;
}

.style-tablig {
  width: 58%;
  height: 90px;
  display: block;
  margin-right: 33%;
  margin-top: 30px;
  border-radius: 8px;
}
</style>
