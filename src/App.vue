<template>
  <!-- <v-app>
    <v-main>
      <Payment />
      <Dl />
      <Login />
      <link rel="styleshee" href="style.css" />
    </v-main>
  </v-app> -->
 <v-app>
  <v-main>

<router-link to="/login"></router-link>
<router-link to="/document"></router-link>
<router-view></router-view>
</v-main>

 </v-app>
</template>

<script setup>

</script>

<style lang="css">
main {
  background-image: url(./assets/BG.jpg);
  background-size: 100%;
  background-color: #f1f1f1;
}
</style>
