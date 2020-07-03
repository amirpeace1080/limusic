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
        <div class="col-lg-6 bg-white" style="height: auto; width: 100%">
          <div>
            <!-- start title music -->
            <div>
              <span class="fa fa-music fa-1x" style="color:blue"></span>
              <nuxt-link to="">
                <span class="size-title text-dark">
                  پخش موزیک و آهنگ شما
                </span>
              </nuxt-link>
            </div>
            <!-- end title music -->
            <br />
            <hr
              class="mt-3"
              style="border:2px solid #265379; border-radius:3px"
            />
            <div class="mt-3 text-center">
              <p>شرایط پخش موزیک در رسانه بزرگ ال موزیک ، موزیکفا و موزیکو:</p>
              <p>
                پخش موزیک و آهنگ شما آهنگ ارسالی باید از خوانندگان مجاز مرد و
                مطابق با قوانین کشورمان باشد.
              </p>
              <p>
                موزیک ارسالی حتما باید دارای کاور مناسب با سایز 500×500 باشد و
                هیچگونه تصویری از خانم نباشد.
              </p>
              <p>
                از پخش آثار خوانندگان زن و یا آهنگ دارای الفاظ رکیک معذوریم و به
                هیچ عنوان پخش نخواهد شد.
              </p>
              <br />
              <p>مزایای پخش موزیک شما در رسانه های ما:</p>
              <p>پربازدیدترین رسانه موسیقی داخل کشور</p>
              <p>رتبه اول جستجوی موزیک در بین سایت های دیگر</p>
              <p>ماندگاری دائمی موزیک شما در سایت بدون هزینه اضافی</p>
              <p>ماندگاری بیشتر موزیک شما در صفحه آهنگ های جدید و اصلی</p>
              <p>
                تعداد محدود پخش آهنگ روزانه که باعث افزایش بازدهی از موزیک شما
                خواهد شد
              </p>
              <img
                src="https://upmusics.com/wp-content/uploads/2019/10/release.jpg"
                alt="limusic"
                style="height:200px; width:96%"
              />
              <p>هزینه های پخش آهنگ:</p>
              <p>رسانه ال موزیک ~ عادی: 100 هزار تومان / ویژه هفتگی: 250 تومان</p>
              <p></p>
              <p></p>
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
      title: "پخش موزیک و آهنگ شما"
    };
  }
};
</script>
