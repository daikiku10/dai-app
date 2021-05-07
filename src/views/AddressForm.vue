<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12 mt-16 pt-16>
        <h1>住所入力</h1>
        <!--郵便番号（3ケタ）- 郵便番号（4ケタ）-->
          〒 <input type="text" name="zip21" size="4" maxlength="3"> － <input type="text" name="zip22" size="5" maxlength="4" onKeyUp="AjaxZip3.zip2addr('zip21','zip22','pref21','addr21');">
        <!--都道府県-->
          都道府県：<input type="text" name="pref21" size="40">
        <!--市区町村-->
          市区町村：<input type="text" name="addr21" size="40">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  // import AjaxZip3
</script>