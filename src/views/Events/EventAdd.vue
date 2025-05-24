<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { createUserService } from '@/services'
import { useToast } from 'vue-toastification'
import { VDateInput } from 'vuetify/labs/VDateInput'
import DatePicker from '@/components/DatePicker.vue'
import TimePicker from '@/components/TimePicker.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import chair from '@/assets/icons/Armchair.svg'
import { createEventsService } from '@/services/eventsService'
import { useRoute } from 'vue-router'
import { useDate } from 'vuetify/framework'
import { createAdminService } from '@/services/adminService'
import { createImageService } from '@/services/imageService'
import { filtersService } from '@/services/publicServices'

const toast = useToast()
const route = useRoute()
const regTypes = ref([])
const placeTypes = ref([])
const eventSystem = ref([])
const settings = ref([])
const eventDuration = ref([])
const eventExperience = ref([])
const eventGenre = ref([])
const eventPreparation = ref([])
const eventLevel = ref([])
const avatarUpload = ref(false)
const eventForm = ref({
  'title': '',
  'description': '',
  'shortDescription': '',
  'format': 'Игровая сессия',
  'date': '',
  'org_name': '',
  'org_bio': '',
  'startTime': '',
  'maxParticipants': '',
  'location': '',
  'imageUrl': '',
  'price': '',
  'discount': '',
  'organizerInfo': '',
  'isPrivate': '',
  'endTime': '',
  'system': '',
  'duration': '',
  'playerExperience': '',
  'genre': '',
  'preparation': '',
  'playerLevel': '',
  'setting': '',
  'status': ''
})
const menu2 = ref(false)
const menu3 = ref(false)
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FormData()

    reader.append('image', file)
    createImageService().uploadImage(reader).then((res) => {
      eventForm.value.imageUrl = res.imageUrl
      toast.success('Изображение успешно загружено')
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
  errors.value.shortDescription = eventForm.value.shortDescription ? '' : 'Обязательно'

  errors.value.date = eventForm.value.date ? '' : 'Обязательно'
  errors.value.organizerInfo = eventForm.value.organizerInfo ? '' : 'Обязательно'
  errors.value.startTime = eventForm.value.startTime ? '' : 'Обязательно'
  errors.value.maxParticipants = eventForm.value.maxParticipants ? '' : 'Обязательно'
  errors.value.location = eventForm.value.location ? '' : 'Обязательно'
  errors.value.price = eventForm.value.price ? '' : 'Обязательно'
  errors.value.discount = eventForm.value.discount ? '' : 'Обязательно'
  errors.value.isPrivate = eventForm.value.isPrivate ? '' : 'Обязательно'
  errors.value.endTime = eventForm.value.endTime ? '' : 'Обязательно'
  // errors.value.imageUrl = eventForm.value.imageUrl ? '' : 'Обязательно'

  if (eventForm.value.format === 'Игровая сессия') {
    errors.value.system = eventForm.value.system ? '' : 'Обязательно'
    errors.value.duration = eventForm.value.duration ? '' : 'Обязательно'
    errors.value.playerExperience = eventForm.value.playerExperience ? '' : 'Обязательно'
    errors.value.genre = eventForm.value.genre ? '' : 'Обязательно'
    errors.value.preparation = eventForm.value.preparation ? '' : 'Обязательно'
    errors.value.playerLevel = eventForm.value.playerLevel ? '' : 'Обязательно'
    errors.value.setting = eventForm.value.setting ? '' : 'Обязательно'
  }
}
const isUpdateSuccess = ref(false)

const errors = ref({
  title: '',
  description: '',
  shortDescription: '',
  format: '',
  date: '',
  startTime: '',
  maxParticipants: '',
  location: '',
  price: '',
  discount: '',
  organizerInfo: '',
  isPrivate: '',
  endTime: '',
  imageUrl: '',
  system: '',
  duration: '',
  playerExperience: '',
  genre: '',
  preparation: '',
  playerLevel: '',
  setting: '',
  regTypes: ''

})

const submit = (saveType) => {
  validateForm()

  if (saveType === 'draft') {
    eventForm.value.status = 'draft'
  } else if (saveType === 'create') {
    eventForm.value.status = 'pending'
  }
  if (saveType === 'create' && Object.values(errors.value).some(error => error)) {
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
    shortDescription: '',
    format: 'Игровая сессия',
    date: '',
    org_name: '',
    org_bio: '',
    startTime: '',
    maxParticipants: '',
    location: '',
    price: '',
    discount: '',
    organizerInfo: '',
    isPrivate: '',
    endTime: '',
    system: '',
    duration: '',
    playerExperience: '',
    genre: '',
    preparation: '',
    playerLevel: '',
    setting: ''


  }
}
const dateFormatter = useDate()
const edit = ref(false)
const confirmEvent = () => {
  createEventsService().updateEvent(eventForm.value._id, eventForm.value).then((res) => {
    toast.success(res.message || 'Событие успешно изменено')
  }).catch(error => {
    toast.error(error.data.error)
  })
}
const cancelEvent = () => {
  createEventsService().deleteEvent(eventForm.value._id).then(() => {
    toast.success(res.message || 'Событие успешно отменено')
  }).catch(error => {
    toast.error(error.data.error)
  })
}
onMounted(() => {
  if (route.params.id) {
    createEventsService().getEventById(route.params.id)
      .then(res => {
        eventForm.value = res
        eventForm.value.date = dateFormatter.format(new Date(res.date), 'YYYY-MM-DD')
        edit.value = true
      })
      .catch(err => {
        toast.error(err.message)
      })
  }

  filtersService().getFilters()
    .then((res) => {
      if (res) {
        res.forEach(item => {
          console.log(item.name)
          if (item.name === 'gameSystem') {
            eventSystem.value = item.options
          } else if (item.name === 'settings') {
            settings.value = item.options
          } else if (item.name === 'eventDuration') {
            eventDuration.value = item.options
          } else if (item.name === 'experienceLevel') {
            eventExperience.value = item.options
          } else if (item.name === 'gameStyle') {
            eventGenre.value = item.options
          } else if (item.name === 'eventPreparation') {
            eventPreparation.value = item.options
          } else if (item.name === 'eventLevel') {
            eventLevel.value = item.options
          } else if (item.name === 'gameFormat') {
            regTypes.value = item.options
          }
        })
      }
    })
})


</script>

<template>
  <div class="create-event container">
    <div class="create-event__header">
      <h1 class="title">
        Создать событие
      </h1>
      <div class="event-types">
        <button class="event-types__type" :class="{
          _active: eventForm.format === 'Игровая сессия'
        }" @click="eventForm.format = 'Игровая сессия'">
          Игровая сессия
        </button>
        <button class="event-types__type" :class="{
        _active: eventForm.format === 'Мероприятие'
        }" @click="eventForm.format = 'Мероприятие'">
          Мероприятие
        </button>
      </div>
    </div>
    <div class="create-event__form">
      <h3>
        Основная информация
      </h3>

      <template v-if="eventForm.format === 'Игровая сессия'">
        <div class="event-main__info">
          <div class="event-main__titles _game">
            <div class="input__wrapper">
              <label>Название<span>*</span></label>
              <div class="input__group">
                <input v-model="eventForm.title" type="text" name="title" id="title"
                       placeholder="Как будет называться мероприятие?">
              </div>
              <p v-if="errors.title" class="error-msg">{{ errors.title }}</p>

            </div>
            <div class="input__wrapper">
              <label>Система<span>*</span></label>
              <div class="input__group _no-padding">
                <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
                <!--            <i class="fal fa-chevron-down"></i>-->
                <BaseSelect v-model="eventForm.system" labelKey="fullName" valueKey="tagName" :items="eventSystem"
                            placeholder="Выберите из списка..." />
              </div>
              <p v-if="errors.system" class="error-msg">{{ errors.system }}</p>

            </div>
            <div class="input__wrapper">
              <label>Сеттинг<span>*</span></label>
              <div class="input__group _no-padding">
                <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
                <!--            <i class="fal fa-chevron-down"></i>-->
                <BaseSelect v-model="eventForm.setting" labelKey="fullName" valueKey="tagName" :items="settings"
                            placeholder="Выберите из списка..." />
                <p v-if="errors.setting" class="error-msg">{{ errors.settings }}</p>

              </div>
            </div>
            <div class="input__wrapper">
              <label>Длительность<span>*</span></label>
              <div class="input__group _no-padding">
                <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
                <!--            <i class="fal fa-chevron-down"></i>-->
                <BaseSelect v-model="eventForm.duration" labelKey="fullName" valueKey="tagName" :items="eventDuration"
                            placeholder="Нулевая сессия, ваншот, кампания..." />
              </div>
              <p v-if="errors.duration" class="error-msg">{{ errors.duration }}</p>
            </div>
            <div class="input__wrapper">
              <label>Опыт игроков<span>*</span></label>
              <div class="input__group _no-padding">
                <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
                <!--            <i class="fal fa-chevron-down"></i>-->
                <BaseSelect v-model="eventForm.playerExperience" labelKey="fullName" valueKey="tagName"
                            :items="eventExperience"
                            placeholder="Новички, опытные или оба?" />
              </div>
              <p v-if="errors.playerExperience" class="error-msg">{{ errors.playerExperience }}</p>
            </div>
            <div class="input__wrapper">
              <label>Жанр<span>*</span></label>
              <div class="input__group _no-padding">
                <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
                <!--            <i class="fal fa-chevron-down"></i>-->
                <BaseSelect v-model="eventForm.genre" labelKey="fullName" valueKey="tagName" :items="eventGenre"
                            placeholder="Фантастика, комедия, драма" />
              </div>
              <p v-if="errors.genre" class="error-msg">{{ errors.genre }}</p>

            </div>
            <div class="input__wrapper">
              <label>Необходимая подготовка игрока<span>*</span></label>
              <div class="input__group _no-padding">
                <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
                <!--            <i class="fal fa-chevron-down"></i>-->
                <BaseSelect v-model="eventForm.preparation" labelKey="fullName" valueKey="tagName"
                            :items="eventPreparation"
                            placeholder="Не требуется, минимальная или..." />
              </div>
              <p v-if="errors.preparation" class="error-msg">{{ errors.preparation }}</p>
            </div>
            <div class="input__wrapper">
              <label>Уровень персонажа<span>*</span></label>
              <div class="input__group _no-padding">
                <!--            <input v-model="eventForm.place" type="text" placeholder="Место">-->
                <!--            <i class="fal fa-chevron-down"></i>-->
                <BaseSelect v-model="eventForm.playerLevel" labelKey="fullName" valueKey="tagName" :items="eventLevel"
                            placeholder="Низкий, средний, высокий, эпик?" />
              </div>
              <p v-if="errors.playerLevel" class="error-msg">{{ errors.playerLevel }}</p>
            </div>

            <div class="titles-footer">
              <div class="input__wrapper">
                <label>Краткое описание<span>*</span></label>

                <textarea v-model="eventForm.shortDescription" type="text" name="about_you" id="about_you"
                          placeholder="Что планируется?"></textarea>
                <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>
                <p v-if="errors.shortDescription" class="error-msg">{{ errors.shortDescription }}</p>

              </div>
              <div class="event-main__image">

                <label class="settings__top-left">
                  <div class="file-upload__img" :style="{
                    '--background': eventForm.imageUrl ? 'url(' + eventForm.imageUrl + ') no-repeat center' : 'linear-gradient(114.17deg, rgba(54, 38, 38, 0.3) -3.5%, rgba(34, 27, 36, 0.3) 47.08%, rgba(54, 38, 38, 0.3) 97.65%)'
                  }">
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
        </div>
      </template>
      <template v-else>
        <div class="event-main__info">
          <div class="event-main__titles">
            <div class="input__wrapper">
              <label>Название</label>
              <div class="input__group">
                <input v-model="eventForm.title" type="text" name="title" id="title"
                       placeholder="Как будет называться мероприятие?">
              </div>
              <p v-if="errors.title" class="error-msg">{{ errors.title }}</p>

            </div>
            <div class="input__wrapper">
              <label>Расскажите о себе</label>

              <textarea v-model="eventForm.shortDescription" type="text" name="about_you" id="about_you"
                        placeholder="Пусть весь мир узнает"></textarea>
              <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>
              <p v-if="errors.shortDescription" class="error-msg">{{ errors.shortDescription }}</p>

            </div>
          </div>
          <div class="event-main__image">
            <label class="settings__top-left">
              <div class="file-upload__img" :style="{
                                       '--background': eventForm.imageUrl ? 'url(' + eventForm.imageUrl + ') no-repeat center' : 'linear-gradient(114.17deg, rgba(54, 38, 38, 0.3) -3.5%, rgba(34, 27, 36, 0.3) 47.08%, rgba(54, 38, 38, 0.3) 97.65%)'

                  }">
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
      </template>
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
          <p v-if="errors.description" class="error-msg">{{ errors.description }}</p>

        </div>
        <div class="input__wrapper">
          <label>Об организаторе</label>

          <textarea v-model="eventForm.organizerInfo" type="text" name="about_you" id="about_you"
                    placeholder="Расскажите о себе то, что считаете нужным..."></textarea>
          <div class="input__wrapper-txt">Не более 350 символов, включая пробелы</div>
          <p v-if="errors.organizerInfo" class="error-msg">{{ errors.organizerInfo }}</p>

        </div>
      </div>
    </div>
    <div class="create-event__form">
      <h3>
        Дата и время проведения события
      </h3>

      <div class="event-main__dates">
        <div class="input__wrapper">
          <label>Дата<span>*</span></label>
          <div class="input__group _no-padding">
            <DatePicker id="date" v-model="eventForm.date" />
          </div>
          <p v-if="errors.date" class="error-msg">{{ errors.date }}</p>

        </div>
        <div class="input__wrapper">
          <label>Время начала<span>*</span></label>
          <div class="input__group _no-padding">
            <TimePicker v-model="eventForm.startTime" />
          </div>
          <p v-if="errors.startTime" class="error-msg">{{ errors.startTime }}</p>

        </div>
        <div class="input__wrapper">
          <label>Окончание события<span>*</span></label>
          <div class="input__group _no-padding">
            <TimePicker v-model="eventForm.endTime" />
          </div>
          <p v-if="errors.endTime" class="error-msg">{{ errors.endTime }}</p>

        </div>
        <div class="input__wrapper">
          <label>Место</label>
          <div class="input__group">
            <input v-model="eventForm.location" type="text" placeholder="Место">
            <!--            <BaseSelect :icon="chair" v-model="eventForm.location" :items="placeTypes" placeholder="Место" />-->
          </div>
          <p v-if="errors.location" class="error-msg">{{ errors.location }}</p>

        </div>
      </div>
    </div>
    <div class="create-event__form">
      <h3>
        Организационные моменты
      </h3>
      <div class="event-main__orginfo">
        <div class="input__wrapper">
          <label>Стоимость участия<span>*</span></label>
          <div class="input__group">
            <input v-model="eventForm.price" type="text" name="title" id="title"
                   placeholder="от 0 до 100 000 ₽ ">
          </div>
          <p v-if="errors.price" class="error-msg">{{ errors.price }}</p>
        </div>
        <div class="input__wrapper">
          <label>Размер скидки, %</label>
          <div class="input__group">
            <input v-model="eventForm.discount" type="text" name="title" id="title"
                   placeholder="от 0 до 100">
          </div>
          <p v-if="errors.discount" class="error-msg">{{ errors.discount }}</p>
        </div>
        <div class="input__wrapper">
          <label>Макс. количество игроков<span>*</span></label>
          <div class="input__group">
            <input v-model="eventForm.maxParticipants" type="text" name="title" id="title"
                   placeholder="от 1 до 100">
          </div>
          <p v-if="errors.maxParticipants" class="error-msg">{{ errors.maxParticipants }}</p>
        </div>
        <div class="input__wrapper">
          <label>Запись на событие<span>*</span></label>
          <div class="input__group _no-padding">
            <BaseSelect :items="regTypes" labelKey="fullName" valueKey="tagName" v-model="eventForm.isPrivate"
                        placeholder="Открытая или закрытая" />

          </div>
          <p v-if="errors.isPrivate" class="error-msg">{{ errors.isPrivate }}</p>
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
            Запись {{ eventForm.isPrivate }}, {{ eventForm.maxParticipants }} игроков
          </p>
        </div>
      </div>
    </div>

    <div v-if="edit" class="settings__btns" style="flex-direction: column">
      <button type="button" class="settings__btn submit" @click="confirmEvent">
        <img src="@/assets/icons/arrow-cold.svg" alt="">Сохранить
      </button>
      <div class="settings__btn cancelEvent" @click="cancelEvent">
        <img src="@/assets/icons/Skull.svg" alt="">
        Отменить событие
      </div>
    </div>
    <div v-else class="settings__btns">
      <button type="button" class="settings__btn submit" @click="submit('create')">
        Отправить на утверждение
      </button>
      <div class="settings__btn cancel" @click="submit('draft')">Сохранить в черновики</div>
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

          &._game {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;

            .titles-footer {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-column: 1 / 4;
              gap: 20px;
            }
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
            background: transparent;
            border-radius: 15px;
            border-style: dashed;
            border-color: #321939;
            border-width: 1px;
            gap: 24px;
            display: flex;
            flex-direction: row !important;
            align-items: center;
            justify-content: center;
            padding: 14px 14px;
            margin-top: 28px;


            .file-upload__img {
              background: var(--background);
              background-size: cover;
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

.input-error input {
  border-color: #f0515e !important;
}

.error-msg {
  color: #f0515e;
  font-size: 14px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;

  }

  .submit {
    width: 100%;
    background: var(--05-success-main, #4a7548);
    border-radius: 10px;

    @media (max-width: 670px) {
      max-width: 100%;
    }
  }

  .cancelEvent {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1F1821;
    color: #D23C48;

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

@media (max-width: 576px) {
  .event-main__titles, .event-main__info, .create-event__totals {
    flex-direction: column;
  }
  .create-event__header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;

    .event-types__type {
      width: 100%;
    }
  }

  .event-types {
    width: 100%;
  }

  .event-main__titles {
    &._game {
      grid-template-columns: repeat(1, 1fr) !important;
      gap: 20px;

      .titles-footer {
        grid-template-columns: repeat(1, 1fr) !important;
        grid-column: 1 / 1 !important;
        gap: 20px;
      }
    }
  }

  .event-main__dates {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);

    .input__wrapper:nth-child(1), .input__wrapper:nth-child(4) {
      grid-column: 1 / 3;
    }
  }

  .event-main__orginfo {
    display: grid !important;
    grid-template-columns: repeat(1, 1fr);
  }
  .event-main__desc {
    flex-direction: column;
  }
}

</style>
