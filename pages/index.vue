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
                  v-for="music in musics.music"
                  :key="music.title"
                >
                  <!-- start main all -->
                  <div style="width:100%; height:500px">
                    <!-- start title music -->
                    <div>
                      <span class="fa fa-music fa-1x" style="color:blue"></span>
                      <nuxt-link to="">
                        <span class="size"> {{ music.title }} </span>
                      </nuxt-link>
                    </div>
                    <!-- end title music -->
                    <br>
                    <hr class="mt-3" style="border:2px solid #265379; border-radius:3px">

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
import listKhanandeh from "./../components/listKhanandeh";
import listAhang from "./../components/listAhang";

export default {
  components: {
    listKhanandeh,
    listAhang
  },
  data() {
    return {};
  },
  computed: {
    musics() {
      return this.$store.state.musics;
    }
  },
  created() {
    this.$store.dispatch("loadUsers");
  }
};
</script>

<style scoped>
.size{
  font-size: 16px;
}
</style>
