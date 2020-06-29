<template>
  <div class="background-all-page">
    <Header class="background-color-header mt-1" />
    
    <v-content class="margin-all">
        <nuxt />
    </v-content>
    
    <Footer class="background-color-footer mt-2"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style>

html {
    font-size: 16px;
    direction: rtl;
    color: #373C43;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

.background-all-page{
  background-image: url('https://downloadly.ir/wp-content/themes/downloadly/images/bg.jpg');
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

.margin-all{
  margin-left: 20px;
  margin-right: 20px;
}

.background-color-header{
  background-color: #f5f5f5;
}

.background-color-footer{
  background-color: #f5f5f5;
}
</style>
