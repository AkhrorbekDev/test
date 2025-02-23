<script setup lang="ts">

</script>

<template>
  <div class="price">
    <div class="price__container container">
      <h3 class="price__title">Тарифы</h3>
      <div class="price__boxes">
        <div class="price__box">
          <div class="price__box-title">Игра с нашими Мастерами <span>*</span></div>
          <div class="price__box-flex">
            <div class="price__box-schedule">
              <div class="price__schedule-day">В будние дни</div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">13:00–18:00</div>
                <div class="price__schedule-price">1500₽</div>
              </div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">18:00–23:30</div>
                <div class="price__schedule-price">2000₽</div>
              </div>
            </div>
            <div class="price__box-schedule">
              <div class="price__schedule-day">В выходные</div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">13:00–18:00</div>
                <div class="price__schedule-price">2200₽</div>
              </div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">18:00–23:30</div>
                <div class="price__schedule-price">2500₽</div>
              </div>
            </div>
          </div>
          <div class="price__schedule-warning"><span>*</span>финальная цена всегда указана в анонсе События!</div>
        </div>
        <div class="price__box">
          <div class="price__box-title">Аренды комнаты <span>*</span></div>
          <div class="price__box-flex">
            <div class="price__box-schedule">
              <div class="price__schedule-day">В будние дни</div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">13:00–18:00</div>
                <div class="price__schedule-price">5000₽</div>
              </div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">18:00–23:30</div>
                <div class="price__schedule-price">8000₽</div>
              </div>
            </div>
            <div class="price__box-schedule">
              <div class="price__schedule-day">В выходные</div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">13:00–18:00</div>
                <div class="price__schedule-price">9000₽</div>
              </div>
              <div class="price__schedule-item">
                <div class="price__schedule-time">18:00–23:30</div>
                <div class="price__schedule-price">10000₽</div>
              </div>
            </div>
          </div>
          <div class="price__schedule-warning"><span>*</span>финальная цена всегда указана в анонсе События!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.price {
  padding-top: 50px;

  .price__title {
    color: #ffffff;
    font-size: 46px;
    font-family: 'Alegreya-Medium';
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }

  .price__boxes {
    display: flex;
    gap: 21px;

    .price__box {
      max-width: 579px;
      width: 100%;

      background: linear-gradient(114.17deg,
          rgba(54, 38, 38, 0.3) 0%,
          rgba(34, 27, 36, 0.3) 50%,
          rgba(54, 38, 38, 0.3) 100%);
      border-radius: 10px;

      padding: 30px;

      .price__box-title {
        color: #eee0f1;
        font-size: 32px;
        font-family: 'Alegreya-Medium';
        margin-bottom: 32px;

        span {
          color: #e44653 !important;
        }
      }

      .price__box-flex {
        display: flex;
        align-items: start;
        justify-content: space-between;

        .price__box-schedule {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 442px;
          width: 100%;

          .price__schedule-day {
            color: #d5b0e4;
            font-size: 26px;
            font-family: 'Alegreya-Regular';
          }

          .price__schedule-item {
            display: flex;
            flex-direction: column;

            .price__schedule-time {
              color: #cdc2d1;
              font-size: 20px;
              font-family: 'Alegreya-Regular';
            }

            .price__schedule-price {
              font-size: 36px;
              color: #86489c;
              font-family: 'Alegreya-Medium';
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .price__schedule-warning {
    color: #d5b0e4;
    font-size: 20px;
    font-family: 'Alegreya-Regular';
    margin-top: 40px;

    span {
      color: #e44653 !important;
    }
  }
}
</style>