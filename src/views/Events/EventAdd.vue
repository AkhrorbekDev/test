<script setup lang="ts">
import { ref } from 'vue'
import { createUserService } from '@/services'
import { useToast } from 'vue-toastification'

const toast = useToast()

const avatarUpload = ref(false)
const eventForm = ref({
  title: '',
  description: '',
  type: 'game',
  date: '',
  org_name: '',
  org_bio: ''
})
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
        <button class="event-types__type">
          Игровая сессия
        </button>
        <button class="event-types__type">
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
            <label for="desc">Краткое описание*</label>
            <div class="input__group">
              <input v-model="eventForm.description" type="text" name="desc" id="desc"
                     placeholder="Напишите здесь что-нибудь">
            </div>
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

  </div>
</template>

<style scoped lang="scss">

.create-event {
  padding: 145px 10px !important;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      color: #eee0f1 !important;
      width: 100%;
      font-size: calc(32px + 0.7291666667vw);
    }
    .event-types {
      display: flex;
    }
  }

  &__form {

    .event-main__info {
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
        height: 200px;
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

    span {
      color: #f0515e;
    }
  }
}

.input__group {
  width: 100%;
}
</style>
