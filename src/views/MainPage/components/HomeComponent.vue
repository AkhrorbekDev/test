
<script setup lang="ts">
</script>
<template>
  <div class="home">
    <img class="home__bg" src="../images/home/bg.png" alt="" />
    <div class="home__container container">
      <div class="home__content">
        <div class="home__content-brand">
          <img src="@/assets/images/logo-row.svg" alt="" />
        </div>
        <h3 class="home__content-title">аутентичный клуб для игр в D&D в Москве</h3>
        <p class="home__content-txt">Погрузитесь в фэнтезийную атмосферу вместе с нами!</p>
        <div class="home__content-btn">К приключениям!</div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.home {
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  

  .home__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    
  }

  .home__content {
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .home__content-title {
      color: #fff;
      font-size: 45px;
      text-transform: uppercase;
      font-family: 'Alegreya-Bold';
      font-weight: 700;
    }

    .home__content-txt {
      font-size: 24px;
      font-family: 'Alegreya-Regular';
      font-weight: 400;
      color: #fff;
      margin-top: 50px;
    }

    .home__content-btn {
      padding: 20px 40px;
      background: linear-gradient(313.32deg, #6e3284 17.58%, #86489c 131.17%);
      color: #fff;
      border-radius: 10px;
      font-size: 32px;
      margin-top: 50px;
      margin-bottom: 30px;
    }
  }

  .home__container {
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
