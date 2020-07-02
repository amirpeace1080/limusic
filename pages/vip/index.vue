<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- start list khanandeha (for size large) -->
        <div class="col-lg-3">
          <listKhanandeh />
        </div>
        <!-- end list khanandeha (for size large) -->

        <!-- start main item -->
        <div class="col-lg-6">
          <div>
            <div class="container-fluid">
              <div class="row">
                <div
                  class="col-12 border mt-3 bg-white"
                  v-for="vip in vip.vip"
                  :key="vip.title"
                >
                  <!-- start main all -->
                  <div style="width:100%; height:832px">
                    <!-- start title music -->
                    <div>
                      <span class="fa fa-music fa-1x" style="color:blue"></span>
                      <nuxt-link to="">
                        <span class="size-title"> {{ vip.title }} </span>
                      </nuxt-link>
                    </div>
                    <!-- end title music -->
                    <br />
                    <hr
                      class="mt-3"
                      style="border:2px solid #265379; border-radius:3px"
                    />
                    <!-- start content music -->
                    <span class="size-content"> {{ vip.content }} </span>
                    <!-- end content music -->

                    <!-- start pic -->
                    <img class="size-img" :src="vip.pic" :alt="vip.title" />
                    <!-- end pic -->

                    <!-- start edame matlab -->
                    <nuxt-link to="">
                      <p class="size-edame-matlab text-center">ادامه مطلب</p>
                    </nuxt-link>
                    <!-- end edame matlab -->

                    <!-- start audio -->
                    <audio
                      controls
                      class="size-sound"
                      :src="vip.sound"
                    ></audio>
                    <!-- end audio -->

                    <img
                      class="img-specter"
                      src="https://tabanmusic.com//wp-content/uploads/seprator.png"
                      alt=""
                    />
                  </div>
                  <!-- end main all -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end main item  -->

        <!-- start ahang hay bartar -->
        <div class="col-lg-3">
          <listAhang />
        </div>
        <!-- end ahang hay bartar -->
      </div>
    </div>
  </div>
</template>

<script>
import listKhanandeh from "./../../components/listKhanandeh";
import listAhang from "./../../components/listAhang";

export default {
  components: {
    listKhanandeh,
    listAhang
  },
  data() {
    return {};
  },
  computed: {
    vip() {
      return this.$store.state.vip;
    }
  },
  created() {
    this.$store.dispatch("loadVip");
  }
};
</script>

<style scoped>
.size-title{
  font-size: 16px;
}
.size-content{
  font-size: 12px;
  font-weight: bold;
}
.size-img{
  margin-top: 20px;
  height:450px;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.size-edame-matlab{
font-size: 12px;
margin-top: 20px;
color: black;
}
.size-edame-matlab:hover{
color: rgb(211, 241, 76);
}
.size-sound{
  width: 100%; cursor:pointer;
   border: 1px dashed rgb(142, 65, 181);
   border-radius: 24px;
}
.img-specter{
  width:100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  margin: 30px 0;
  border: 0;
}
</style>
