<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12 mt-16 pt-16>
        <h1>ホーム画面</h1>
        <p class="set">必ずログインをしてください！</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',

  }
</script>

<style>
.set{
  color: red;
  font-weight: bold;
}
</style>
