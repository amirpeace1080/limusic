<template>
  <!-- Footer -->
  <mdb-footer color="indigo" class="font-small pt-0">
    <mdb-container>
      <mdb-row class="pt-5 mb-3 text-center d-flex justify-content-center">
        <mdb-col md="2" class="b-3">
          <h6 class="title font-weight-bold">
            <nuxt-link to="/vip">آهنگ های ویژه</nuxt-link>
          </h6>
        </mdb-col>
        <mdb-col md="2" class="b-3">
          <h6 class="title font-weight-bold">
            <nuxt-link to="/">آهنگ های جدید</nuxt-link>
          </h6>
        </mdb-col>
        <mdb-col md="2" class="b-3">
          <h6 class="title font-weight-bold">
            <nuxt-link to="/remix">دانلود ریمیکس</nuxt-link>
          </h6>
        </mdb-col>
        <mdb-col md="2" class="b-3">
          <h6 class="title font-weight-bold">
            <nuxt-link to="/madahi">دانلود مداحی</nuxt-link>
          </h6>
        </mdb-col>
        <mdb-col md="2" class="b-3">
          <h6 class="title font-weight-bold">
            <nuxt-link to="/contacts_us">تماس با ما</nuxt-link>
          </h6>
        </mdb-col>
      </mdb-row>
      <hr class="rgba-white-light" style="margin: '0 15%'" />
      <mdb-row class="d-flex text-center justify-content-center mb-md-0 mb-4">
        <mdb-col md="8" sm="12" class="mt-5">
          <p style="lineHeight: '1.7rem'">
            تمامی حقوق برای ال موزیک محفوظ می باشد.
          </p>
        </mdb-col>
      </mdb-row>
      <hr
        class="clearfix d-md-none rgba-white-light"
        style="margin: '10% 15% 5%'"
      />
      <mdb-row class="pb-3">
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a class="fb-ic"
              ><i class="fa fa-telegram fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="tw-ic"
              ><i class="fa fa-instagram fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="gplus-ic"
              ><i class="fa fa-google-plus fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="li-ic"
              ><i class="fa fa-linkedin-in fa-lg white-text mr-md-4"> </i
            ></a>
            <a class="ins-ic"
              ><i class="fa fa-twitter fa-lg white-text mr-md-4"> </i
            ></a>
            
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright:
        <a href="#"> AmirPeace1080 </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>
