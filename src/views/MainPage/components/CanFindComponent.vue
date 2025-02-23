<script lang="ts" setup>
</script>
<template>
  <div class="canfind">
    <div class="canfind__container container">
      <h3 class="canfind__title">У нас вы найдете</h3>

      <div class="canfind__box">
        <div class="canfind__box-left">
          <h3 class="canfind__box-title">Уникальное сообщество</h3>

          <div class="canfind__box-items">
            <div class="canfind__box-item">
              <img src="../images/canfind/userfour.svg" alt="" />
              <p class="canfind__box-txt">
                Команда крутых Мастеров, готовых провести игры из различных систем и сеттингов
                (не только D&D)
              </p>
            </div>
            <div class="canfind__box-item">
              <img src="../images/canfind/maskhappy.svg" alt="" />
              <p class="canfind__box-txt">
                Регулярные мероприятия, турниры и тематические вечера для всех любителей
                настольно-ролевых игр
              </p>
            </div>
            <div class="canfind__box-item">
              <img src="../images/canfind/winner.svg" alt="" />
              <p class="canfind__box-txt">
                Различные конкурсы, розыгрыши и возможность участвовать в жизни клуба для всех
              </p>
            </div>
          </div>
        </div>
        <div class="canfind__box-right">
          <img src="../images/canfind/ava.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.canfind__container {
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
}

.canfind__title {
  font-size: 46px;
  font-family: 'Alegreya-Meduim';
  font-weight: 500;
  color: #fff;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.canfind__box {
  background: linear-gradient(
    114.17deg,
    rgba(54, 38, 38, 0.3) -3.5%,
    rgba(34, 27, 36, 0.3) 47.08%,
    rgba(54, 38, 38, 0.3) 97.65%
  );
  border-radius: 28px;
  padding: 28px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.canfind__box-left {
  .canfind__box-title {
    color: #9e2014;
    font-size: 32px;
    font-family: 'Alegreya-Meduim';
    font-weight: 500;
    margin-bottom: 35px;
  }
  .canfind__box-items {
    display: flex;
    flex-direction: column;
    gap: 22px;

    .canfind__box-item {
      display: flex;
      gap: 20px;

      .canfind__box-txt {
        color: #eee0f1;
        font-size: 22px;
        font-family: 'Alegreya-Regular';
        max-width: 505px;
        width: 100%;
      }
    }
  }
}
</style>
