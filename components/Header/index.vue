<template>
  <div>
    <titleHeaderLarge />

    <!-- start navbar -->
    <div>
      <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-toggle target="nav-collapse">
          <span class="fa fa-bars fa-2x"></span>
          <span>فهرست</span>
        </b-navbar-toggle>

        <nuxt-link to="/">
          <b-navbar-brand class="d-lg-none d-xl-block">
            <div class="d-lg-none">
              <img
                class="style-logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyWUAV2yn-kS8mvA1giT5ROJb0pE6-m-GNcfQIaqpJR3Va6JQk&usqp=CAU"
                alt="LOGO"
              />
            </div>
          </b-navbar-brand>
        </nuxt-link>

        <!-- start space item for item center -->
        <b-navbar-nav>
          <b-nav-item>
            <span class="mr-lg-5"></span>
            <span class="mr-lg-5"></span>
            <span class="mr-lg-5"></span>
          </b-nav-item>
        </b-navbar-nav>
        <!-- end space item for item center -->
        <b-collapse id="nav-collapse" is-nav>
          <!-- start one item(vip) -->
          <b-navbar-nav>
            <b-nav-item class="item-hover">
              <nuxt-link to="/vip" class="text-dark">
                آهنگ های ویژه
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
          <!-- end one item(vip) -->

          <!-- start two item(new) -->
          <b-navbar-nav>
            <b-nav-item class="item-hover">
              <nuxt-link to="/" class="text-dark">
                دانلود آهنگ جدید
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
          <!-- end two item(new) -->

          <!-- start three item(remix) -->
          <b-navbar-nav>
            <b-nav-item class="item-hover">
              <nuxt-link to="/remix" class="text-dark">
                دانلود ریمیکس
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
          <!-- end three item(remix) -->

          <!-- start four item(madahi) -->
          <b-navbar-nav>
            <b-nav-item class="item-hover">
              <nuxt-link to="/madahi" class="text-dark">
                دانلود مداحی
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
          <!-- end four item(madahi) -->

          <!-- start five item(contact us) -->
          <b-navbar-nav>
            <b-nav-item class="item-hover">
              <nuxt-link to="/contacts_us" class="text-dark">
                تماس باما
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
          <!-- end five item(contact us) -->

          <!-- start six item(pakhshe music) -->

          <b-navbar-nav>
            <b-nav-item class="item-hover">
              <nuxt-link to="/pakhsh" class="text-dark">
                پخش موزیک
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
          <!-- end six item(pakhsh music) -->

          <!-- start span for space search -->
          <span class="mr-lg-5"></span>
          <span class="mr-lg-5"></span>
          <span class="mr-lg-5"></span>
          <!-- end span for space search -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- end navbar -->

    <!-- start list bartarin ahangha -->
    <div class="container mt-3">
      <!-- start row -->
      <v-container>
        <v-row>
          <!-- start space -->
          <v-col lg="1" class="d-none d-md-block"></v-col>
          <!-- end space -->
          <v-col cols="4" lg="2" sm="4">
            <div class="border bg-white" style="width:95%; height:150px">
              <nuxt-link to="">
                <img
                  src="https://upmusics.com/wp-content/uploads/2020/07/Mohsen-Ebrahimzadeh-Pantomime-130x130.jpg"
                  style="height:120px; width:100%"
                />
                <p class="font-title-ahang" style="heigth:30px; width:100%">
                  محسن ابراهیم زاده پانتومیم
                </p>
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="4" lg="2" sm="4">
            <div class="border bg-white" style="width:95%; height:150px">
              <nuxt-link to="">
                <img src="https://upmusics.com/wp-content/uploads/2020/06/vcbn-130x130.jpg" style="height:120px; width:100%" />
                <p class="font-title-ahang" style="heigth:30px; width:100%">محمد علیزاده خنده هاتو قربون</p>
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="4" lg="2" sm="4">
            <div class="border bg-white" style="width:95%; height:150px">
              <nuxt-link to="">
                <img src="https://upmusics.com/wp-content/uploads/2020/07/Ali-Afaghi-Sheare-Nafasgir.jpg" style="height:120px; width:100%" />
                <p class="font-title-ahang" style="heigth:30px; width:100%">علی آقافی شعر نفس گیر</p>
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="4" lg="2" sm="4">
            <div class="border bg-white" style="width:95%; height:150px">
              <nuxt-link to="">
                <img src="https://upmusics.com/wp-content/uploads/2020/06/photo_2020-06-26_18-21-55-130x130.jpg" style="height:120px; width:100%" />
                <p class="font-title-ahang" style="heigth:30px; width:100%">مهرداد جم چرا ساکتی</p>
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="4" lg="2" sm="4">
            <div class="border bg-white" style="width:95%; height:150px">
              <nuxt-link to="">
                <img src="https://upmusics.com/wp-content/uploads/2020/06/awr-3-130x130.jpg" style="height:120px; width:100%" />
                <p class="font-title-ahang" style="heigth:30px; width:100%">علی زند وکیلی آقازاده</p>
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- end row -->
    </div>
    <!-- end list bartarin ahangha -->
  </div>
</template>

<script>
import titleHeaderLarge from "@/components/titleHeaderLarge";

export default {
  components: {
    titleHeaderLarge
  }
};
</script>

<style scoped>
.style-logo {
  width: 100px;
  height: 60px;
  border-radius: 10px;
  margin-top: 1px;
}

.item-hover:hover {
  background-color: red;
}

.font-title-ahang {
  font-size: 11px;
  color: black;
  text-align: center;
}
</style>
