<script setup lang="ts">
import { ref } from 'vue'
import { createUserService } from '@/services'
import { useToast } from 'vue-toastification'
import { VDateInput } from 'vuetify/labs/VDateInput'
import DatePicker from '@/components/DatePicker.vue'
import TimePicker from '@/components/TimePicker.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import chair from '@/assets/icons/Armchair.svg'
import { createEventsService } from '@/services/eventsService'

const toast = useToast()

const regTypes = [
  { title: 'Открытая', value: 'open' },
  { title: 'Закрытая', value: 'close' }
]

const placeTypes = [
  { title: 'Онлайн', value: 'online' },
  { title: 'Офлайн', value: 'offline' }
]
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
  place: '',
  price: '',
  discount: '',
  org_info: '',
  regType: '',
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
const validateForm = () => {
  errors.value.title = eventForm.value.title ? '' : 'Обязательно'

  errors.value.description = eventForm.value.description ? '' : 'Обязательно'

  errors.value.date = eventForm.value.date ? '' : 'Обязательно'
  errors.value.org_bio = eventForm.value.org_bio ? '' : 'Обязательно'
  errors.value.org_info = eventForm.value.org_info ? '' : 'Обязательно'
  errors.value.org_name = eventForm.value.org_name ? '' : 'Обязательно'
  errors.value.startTime = eventForm.value.startTime ? '' : 'Обязательно'
  errors.value.maxPlayers = eventForm.value.maxPlayers ? '' : 'Обязательно'
  errors.value.place = eventForm.value.place ? '' : 'Обязательно'
  errors.value.price = eventForm.value.price ? '' : 'Обязательно'
  errors.value.discount = eventForm.value.discount ? '' : 'Обязательно'
  errors.value.regType = eventForm.value.regType ? '' : 'Обязательно'
  errors.value.endTime = eventForm.value.endTime ? '' : 'Обязательно'

}
const isUpdateSuccess = ref(false)

const errors = ref({
  title: '',
  description: '',
  type: 'game',
  date: '',
  org_name: '',
  org_bio: '',
  startTime: '',
  maxPlayers: '',
  place: '',
  price: '',
  discount: '',
  org_info: '',
  regType: '',
  endTime: ''
})

const submit = (saveType) => {
  validateForm()
  if (Object.values(errors.value).some(error => error)) {
    toast.error('Пожалуйста, исправьте ошибки в форме.')
    return
  }

  createEventsService().createEvent(eventForm.value).then(() => {
    toast.success('Событие успешно создано')
    isUpdateSuccess.value = true
  }).catch(error => {
    toast.error(error.message)
  }).finally(() => {
    isUpdateSuccess.value = false
  })

}
const cancelUpdate = () => {
  eventForm.value = {
    title: '',
    description: '',
    type: 'game',
    date: '',
    org_name: '',
    org_bio: '',
    startTime: '',
    maxPlayers: '',
    place: '',
    price: '',
    discount: '',
    org_info: '',
    regType: '',
    endTime: ''
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
            <label>Название</label>
            <div class="input__group">
              <input v-model="eventForm.title" type="text" name="title" id="title"
                     placeholder="Как будет называться мероприятие?">
            </div>
          </div>
          <div class="input__wrapper">
            <label>Расскажите о себе</label>

            <textarea v-model="eventForm.description" type="text" name="about_you" id="about_you"
                      placeholder="Пусть весь мир узнает"></textarea>
            <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>

          </div>
        </div>
        <div class="event-main__image">
          <label class="settings__top-left">
            <div class="file-upload__img">
              <img src="@/assets/icons/FilePlus.svg" alt="">
            </div>
            <input hidden="hidden" type="file" id="image" accept="image/jpeg, image/jpg, image/png"
                   @change="handleFileUpload">
            <div class="file-upload__info">
              <div class="settings__left-title">Нажмите для выбора изображения, либо перетащите его</div>
              <div class="settings__left-subtitle">Формат jpeg, jpg, png, весом не более 1 MB и размером не более
                2000 × 200
              </div>
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
          <label>Полное описание</label>

          <textarea v-model="eventForm.description" type="text" name="about_you" id="about_you"
                    placeholder="Что планируется?"></textarea>
          <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>

        </div>
        <div class="input__wrapper">
          <label>Об организаторе</label>

          <textarea v-model="eventForm.org_info" type="text" name="about_you" id="about_you"
                    placeholder="Расскажите о себе то, что считаете нужным..."></textarea>
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
          <label>Дата*</label>
          <div class="input__group _no-padding">
            <DatePicker id="date" v-model="eventForm.date" />
          </div>

        </div>
        <div class="input__wrapper">
          <label>Время начала*</label>
          <div class="input__group _no-padding">
            <TimePicker v-model="eventForm.startTime" />
          </div>

        </div>
        <div class="input__wrapper">
          <label>Окончание события*</label>
          <div class="input__group _no-padding">
            <TimePicker v-model="eventForm.endTime" />
          </div>
        </div>
        <div class="input__wrapper">
          <label>Место</label>
          <div class="input__group _no-padding">
            <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
            <!--            <i class="fal fa-chevron-down"></i>-->
            <BaseSelect :icon="chair" v-model="eventForm.place" :items="placeTypes" placeholder="Место" />
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
          <label>Стоимость участия*</label>
          <div class="input__group">
            <input v-model="eventForm.price" type="text" name="title" id="title"
                   placeholder="от 0 до 100 000 ₽ ">
          </div>
        </div>
        <div class="input__wrapper">
          <label>Размер скидки, %</label>
          <div class="input__group">
            <input v-model="eventForm.discount" type="text" name="title" id="title"
                   placeholder="от 0 до 100">
          </div>
        </div>
        <div class="input__wrapper">
          <label>Макс. количество игроков*</label>
          <div class="input__group">
            <input v-model="eventForm.maxPlayers" type="text" name="title" id="title"
                   placeholder="от 1 до 100">
          </div>
        </div>
        <div class="input__wrapper">
          <label>Запись на событие*</label>
          <div class="input__group _no-padding">
            <BaseSelect :items="regTypes" v-model="eventForm.regType" placeholder="Открытая или закрытая" />

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

    <div class="settings__btns">
      <button type="button" class="settings__btn submit" @click="submit('create')">
        Отправить на утверждение
      </button>
      <div class="settings__btn cancel" @click=" ('draft')">Сохранить в черновики</div>
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
        align-items: center;
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
            gap: 24px;
            display: flex;
            flex-direction: row !important;
            align-items: center;
            justify-content: center;
            padding: 14px 14px;


            .file-upload__img {
              background: linear-gradient(114.17deg, rgba(54, 38, 38, 0.3) -3.5%, rgba(34, 27, 36, 0.3) 47.08%, rgba(54, 38, 38, 0.3) 97.65%);
              min-width: 180px;
              height: 167px;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;

            }

            .file-upload__info {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              .settings__left-title {
                color: var(--04-text-main, #eee0f1);
                text-align: center;
                font-size: var(--pc-button-1-font-size, 20px);
                margin-bottom: 16px;
              }

              .settings__left-subtitle {
                color: var(--04-text-main, #eee0f1);
                text-align: center;
                max-width: unset;
              }
            }

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
          color: var(--04-text-main, #eee0f1);


        }

        .price {
          font-weight: 500;
          font-size: 46px;
          line-height: 100%;
          letter-spacing: 0%;
          color: #E44653;
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


  &._no-padding {
    padding: 0 12px;
  }
}

.settings__btns {
  display: flex;
  margin-top: 28px;
  gap: 19px;
  justify-content: space-between;

  @media (max-width: 670px) {
    flex-direction: column;
  }


  .settings__btn {
    padding: 15px 0;
    color: var(--04-text-main, #eee0f1);
    text-align: center;
    font-size: var(--pc-button-1-font-size, 20px);


  }

  .submit {
    width: 100%;
    background: var(--05-success-main, #4a7548);
    border-radius: 10px;

    @media (max-width: 670px) {
      max-width: 100%;
    }
  }

  .cancel {
    width: 100%;
    background: var(--08-unavailable-2, #545560);
    border-radius: 10px;

    @media (max-width: 670px) {
      max-width: 100%;
    }
  }
}
</style>
