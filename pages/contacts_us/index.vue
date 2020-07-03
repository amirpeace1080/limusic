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
        <div class="col-lg-6 bg-white" style="height: 210px; width: 100%">
          <div>
            <!-- start title music -->
            <div>
              <span class="fa fa-music fa-1x" style="color:blue"></span>
              <nuxt-link to="">
                <span class="size-title text-dark">
                  تماس با مدیریت ال موزیک
                </span>
              </nuxt-link>
            </div>
            <!-- end title music -->
            <br />
            <hr
              class="mt-3"
              style="border:2px solid #265379; border-radius:3px"
            />
            <div class="mt-3">
                <p class="text-center">برای تماس مدیریت رسانه ال موزیک از راه های زیر اقدام کنید :</p>
                <p class="text-center">Phone: 09334135275</p>
                <p class="text-center">E-Mail: grotelbot @ Gmail.com</p>
            </div>
          </div>
        </div>
        <!-- end main item -->

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
  head() {
    return {
      title: "تماس با مدیریت"
    };
  }
};
</script>
