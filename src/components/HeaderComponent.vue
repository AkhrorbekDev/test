<script lang="ts" setup>
import LoginModal from './LoginModal.vue';
import { ref } from 'vue';


const isLoginModalOpen = ref(false);
</script>

<template>
  <nav class="navbar">
    <div class="navbar__container container">
      <div class="navbar__wrapper">
        <div class="navbar__left">
          <div class="navbar__brand">
            <img src="@/assets/images/main-logo.svg" alt="Logo" class="navbar__logo" />
          </div>
          <div class="navbar__socials">
            <div class="navbar__socials-btn"><i class="fab fa-vk"></i></div>
            <div class="navbar__socials-btn"><i class="fab fa-telegram-plane"></i></div>
          </div>
        </div>
        <div class="navbar__center">
          <ul class="navbar__list">
            <li class="navbar__list-item"><router-link to="/tariffs" class="navbar__list-link">О клубе</router-link>
            </li>
            <li class="navbar__list-item"><router-link to="/tariffs" class="navbar__list-link">Тарифы</router-link></li>
            <li class="navbar__list-item navbar__list-wings">
              <img src="@/assets/icons/left-wing-icon.svg" alt="" />
              <a href="" class="navbar__list-link">К приключениям</a>
              <img src="@/assets/icons/right-wing-icon.svg" alt="" />
            </li>
            <li class="navbar__list-item"><a href="" class="navbar__list-link">Новости</a></li>
            <li class="navbar__list-item"><router-link to="/contacts" class="navbar__list-link">Контакты</router-link>
            </li>
          </ul>
        </div>
        <div class="navbar__right">
          <div class="navbar__right-btn" @click="isLoginModalOpen = true">
            <i class="fas fa-user-circle"></i>
            Войти
          </div>
        </div>
      </div>
    </div>
  </nav>
  <LoginModal :isOpen="isLoginModalOpen" @close="isLoginModalOpen = false" />
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(257.41deg, rgba(90, 51, 98, 0.2) -4.79%, rgba(31, 24, 33, 0.2) 86.4%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}

.navbar__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__container {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
}

.navbar__left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar__socials {
  display: flex;
  gap: 10px;
  align-items: center;

  .navbar__socials-btn {
    padding: 5px 10px;
    background: #ff7e7e0f;

    i {
      color: #742628;
      font-size: 20px;
    }
  }
}

.navbar__list {
  display: flex;
  align-items: center;
  gap: 36.5px;

  .navbar__list-wings {
    position: relative;

    img {
      position: absolute;

      &:nth-of-type(1) {
        left: -24px;
        top: -6px;
      }

      &:nth-of-type(2) {
        right: -24px;
        top: -6px;
      }
    }
  }

  .navbar__list-link {
    font-family: 'Alegreya-Medium';
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    transition: all 0.4s ease;

    &:hover {
      color: var(--01-primary-color-main, #86489c);
    }
  }
}

.navbar__right-btn {
  background: var(--plate-03,
      linear-gradient(114.17deg,
        rgba(54, 38, 38, 0.3) 0%,
        rgba(34, 27, 36, 0.3) 50%,
        rgba(54, 38, 38, 0.3) 100%));
  border-radius: 5px;
  padding: 12px 24px 12px 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 54px;
  position: relative;
  color: #fff;

  i {
    color: var(--01-primary-color-main, #86489c);
    font-size: 18px;
  }
}
</style>
