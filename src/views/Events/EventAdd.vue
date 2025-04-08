<script setup lang="ts">
import { ref } from 'vue'
import { createUserService } from '@/services'
import { useToast } from 'vue-toastification'
import { VDateInput } from 'vuetify/labs/VDateInput'

const toast = useToast()

const avatarUpload = ref(false)
const eventForm = ref({
  title: '',
  description: '',
  type: 'game',
  date: '',
  org_name: '',
  org_bio: '',
  startTime: '',
  maxPlayers: '',
  endTime: ''
})
const menu2 = ref(false)
const menu3 = ref(false)
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FormData()

    reader.append('file', file)
    createUserService().updateAvatar(reader).then(() => {
      toast.success('Avatar updated successfully')
    }).catch(error => {
      toast.error(error.message)
    }).finally(() => {
      avatarUpload.value = false
    })
  }
}
</script>

<template>
  <div class="create-event container">
    <div class="create-event__header">
      <h1 class="title">
        Создать событие
      </h1>
      <div class="event-types">
        <button class="event-types__type" :class="{
          _active: eventForm.type === 'game'
        }" @click="eventForm.type = 'game'">
          Игровая сессия
        </button>
        <button class="event-types__type" :class="{
        _active: eventForm.type === 'event'
        }" @click="eventForm.type = 'event'">
          Мероприятие
        </button>
      </div>
    </div>
    <div class="create-event__form">
      <h3>
        Основная информация
      </h3>

      <div class="event-main__info">
        <div class="event-main__titles">
          <div class="input__wrapper">
            <label for="title">Название</label>
            <div class="input__group">
              <input v-model="eventForm.title" type="text" name="title" id="title"
                     placeholder="Как будет называться мероприятие?">
            </div>
          </div>
          <div class="input__wrapper">
            <label for="about_you">Расскажите о себе</label>

            <textarea v-model="eventForm.description" type="text" name="about_you" id="about_you"
                      placeholder="Пусть весь мир узнает"></textarea>
            <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>

          </div>
        </div>
        <div class="event-main__image">
          <label for="image" class="settings__top-left">
            <img src="./images/Vector.svg" alt="">
            <input hidden="hidden" type="file" id="image" accept="image/jpeg, image/jpg, image/png"
                   @change="handleFileUpload">
            <div class="settings__left-title">Нажмите для выбора изображения, либо перетащите его</div>
            <div class="settings__left-subtitle">Формат jpeg, jpg, png, весом не более 1 MB и размером не более
              2000 × 200
            </div>
          </label>
        </div>
      </div>
    </div>

    <div class="create-event__form">
      <h3>
        Подробности меропрития
      </h3>
      <div class="event-main__desc">
        <div class="input__wrapper">
          <label for="about_you">Расскажите о себе</label>

          <textarea v-model="eventForm.description" type="text" name="about_you" id="about_you"
                    placeholder="Пусть весь мир узнает"></textarea>
          <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>

        </div>
        <div class="input__wrapper">
          <label for="about_you">Расскажите о себе</label>

          <textarea v-model="eventForm.description" type="text" name="about_you" id="about_you"
                    placeholder="Пусть весь мир узнает"></textarea>
          <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>

        </div>
      </div>
    </div>
    <div class="create-event__form">
      <h3>
        Дата и время проведения события
      </h3>

      <div class="event-main__dates">
        <div class="input__wrapper">
          <label for="date">Дата*</label>
          <div class="input__group">
            <v-date-input label="Date input" variant="solo-filled"></v-date-input>
          </div>
        </div>
        <div class="input__wrapper">
          <label for="time">Время начала*</label>
          <div class="input__group">
            <v-text-field
              v-model="eventForm.startTime"
              :active="menu2"
              :focus="menu2"
              label="Picker in menu"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
            >
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                activator="parent"
                transition="scale-transition"
              >
                <v-time-picker
                  v-if="menu2"
                  v-model="eventForm.startTime"
                  full-width
                ></v-time-picker>
              </v-menu>
            </v-text-field>
          </div>
        </div>
        <div class="input__wrapper">
          <label for="time">Окончание события*</label>
          <div class="input__group">
            <v-text-field
              v-model="eventForm.endTime"
              :active="menu3"
              :focus="menu3"
              label="Picker in menu"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
            >
              <v-menu
                v-model="menu3"
                :close-on-content-click="false"
                activator="parent"
                transition="scale-transition"
              >
                <v-time-picker
                  v-if="menu3"
                  v-model="eventForm.endTime"
                  full-width
                ></v-time-picker>
              </v-menu>
            </v-text-field>
          </div>
        </div>
        <div class="input__wrapper">
          <label for="">Место</label>
          <div class="input__group">
            <input v-model="eventForm.place" type="text" placeholder="Место">
            <i class="fal fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="create-event__form">
      <h3>
        Организационные моменты
      </h3>
      <div class="event-main__orginfo">
        <div class="input__wrapper">
          <label for="title">Стоимость участия*</label>
          <div class="input__group">
            <input v-model="eventForm.price" type="text" name="title" id="title"
                   placeholder="от 0 до 100 000 ₽ ">
          </div>
        </div>
        <div class="input__wrapper">
          <label for="title">Размер скидки, %</label>
          <div class="input__group">
            <input v-model="eventForm.discount" type="text" name="title" id="title"
                   placeholder="от 0 до 100">
          </div>
        </div>
        <div class="input__wrapper">
          <label for="title">Макс. количество игроков*</label>
          <div class="input__group">
            <input v-model="eventForm.maxPlayers" type="text" name="title" id="title"
                   placeholder="от 1 до 100">
          </div>
        </div>
        <div class="input__wrapper">
          <label for="title">Запись на событие*</label>
          <div class="input__group">
            <input v-model="eventForm.regType" type="text" name="title" id="title"
                   placeholder="Открытая или закрытая">
          </div>
        </div>
      </div>
    </div>

    <div class="create-event__form">
      <div class="create-event__totals">
        <div class="event-total__price">
          <p class="price-title">Итоговая цена с участника</p>
          <p class="price">
            {{ eventForm.price }}
          </p>
        </div>
        <div class="event-total__price">
          <p class="price-title">Формат события</p>
          <p class="price">
            Запись {{ eventForm.regType }}, {{ eventForm.maxPlayers }} игроков
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

.create-event {
  padding: 145px 10px !important;

  h3 {
    font-weight: 500;
    font-size: 32px;
    line-height: 114.99999999999999%;
    letter-spacing: 0;
    color: #815692;
    margin-bottom: 24px;

  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    .title {
      color: #eee0f1 !important;
      width: 100%;
      font-size: calc(32px + 0.7291666667vw);
    }

    .event-types {
      //width: 380px;
      height: 55px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      overflow: hidden;

      &__type {
        width: 190px;
        height: 55px;
        justify-content: space-between;
        padding-top: 12px;
        padding-right: 16px;
        white-space: nowrap;
        padding-bottom: 12px;
        padding-left: 16px;
        background: #18171E;
        color: #D5B0E4;
        border: 1px solid #1F1821;

        &._active {
          background: #422748;
          color: #eee0f1;
        }
      }
    }
  }

  &__form {
    margin-bottom: 50px;

    .event-main {
      &__desc, &__dates, &__orginfo {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      &__info {
        display: flex;
        align-items: flex-end;
        gap: 16px;
        margin-top: 24px;

        .event-main__titles {
          display: flex;
          flex-direction: column;
          gap: 31px;
          width: 100%;

          .input__wrapper {
            width: 100%;
          }
        }

        .event-main__image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          border-radius: 16px;

          .settings__top-left {
            width: 100%;
            background: var(--03-dark-2, #18171e);
            border-radius: 5px;
            border-style: dashed;
            border-color: #321939;
            border-width: 1px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 32px 0;


            @media (max-width: 990px) {
              max-width: 100%;
            }

            img {
              margin-bottom: 12px;
            }

            .settings__left-title {
              color: var(--04-text-main, #eee0f1);
              text-align: center;
              font-size: var(--pc-button-1-font-size, 20px);
              margin-bottom: 33px;
            }

            .settings__left-subtitle {
              color: #815692;
              text-align: center;
              font-size: var(--pc-helper-text-font-size, 14px);
              max-width: 204px;
              width: 100%;
            }
          }

          label {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            text-align: center;

            img {
              margin-bottom: 8px;
            }
          }
        }
      }


    }
  }

  &__totals {
    display: flex;
    align-items: center;
    gap: 20px;

    .event-total {
      &__price {
        width: 100%;
        height: 126px;
        gap: 6px;
        border-radius: 5px;
        padding: 20px;
        background: linear-gradient(114.17deg, rgba(54, 38, 38, 0.3) -3.5%, rgba(34, 27, 36, 0.3) 47.08%, rgba(54, 38, 38, 0.3) 97.65%);
        border: 1px solid #1F1821;

        .price-title {
          font-weight: 400;
          font-size: 26px;
          line-height: 114.99999999999999%;
          letter-spacing: 0%;
          color: linear-gradient(90deg, #CBBECD 0%, #FFFFFF 46.5%, #CBBECD 100%);

        }

        .price {
          font-weight: 500;
          font-size: 46px;
          line-height: 100%;
          letter-spacing: 0%;

        }
      }
    }
  }
}

.input__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .input__wrapper-txt {
    color: #545560;
    font-size: 14px;
  }

  label {
    color: #eee0f1;
    font-size: 22px;
    white-space: nowrap;

    span {
      color: #f0515e;
    }
  }
}

.input__group {
  width: 100%;
}
</style>
