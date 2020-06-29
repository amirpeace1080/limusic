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
                <div class="col-12 border mt-3"  >
                  <!-- start main all -->
                  <div style="width:100%; height:500px">
                    <!-- start title music -->
                    <div>
                      <span class="fa fa-music fa-2x" style="color:blue"></span>
                      <span > {{ musics }} </span>
                    </div>
                    <!-- end title music -->
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
    return {
    };
  },
  computed: {
    musics() {
      return this.$store.state.musics
    }
  },
  created() {
    this.$store.dispatch("loadUsers");
  }
};
</script>

<style scoped></style>
