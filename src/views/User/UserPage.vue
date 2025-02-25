<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import UserNav from './components/UserNav.vue';

const route = useRoute();

const pageTitles: Record<string, string> = {
    'user-profile': 'Профиль',
    'user-events': 'Мои события',
    'user-notifications': 'Уведомления',
    'user-favourites': 'Избранное',
    'user-settings': 'Настройки'
};

const pageTitle = computed(() => pageTitles[route.name as string] || 'Профиль');

</script>
<template>
    <div class="user">
        <div class="user__container container">
            <div class="user__header">
                <div class="user__header-title">{{ pageTitle }}</div>
                <div class="user__header-username"><span class="kotiqueee-span3">Kotiqueee</span>
                    <span class="kotiqueee-span4">(игрок)</span>
                </div>
            </div>
            <div class="user__wrapper">
                <UserNav />
                <div class="user__wrapper-layout">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.user {
    padding: 145px 0;

    .user__header {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 55px;

        .user__header-title {
            background: var(--04-text-h1-style,
                    linear-gradient(90deg,
                        rgba(203, 190, 205, 1) 0%,
                        rgba(255, 255, 255, 1) 46.50000035762787%,
                        rgba(203, 190, 205, 1) 100%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 46px;

            max-width: 300px;
            width: 100%;
        }

        .user__header-username {

            .kotiqueee-span3 {
                color: var(--03-dark-3, #422748);
                font-family: var(--pc-h3-font-family, "AlegreyaSc-Medium");
                font-size: var(--pc-h3-font-size, 32px);
                line-height: var(--pc-h3-line-height, 115%);
                font-weight: var(--pc-h3-font-weight, 500);
            }

            .kotiqueee-span4 {
                color: var(--06-second-accent-dark, #233751);
                font-family: var(--pc-h3-font-family, "AlegreyaSc-Medium");
                font-size: var(--pc-h3-font-size, 32px);
                line-height: var(--pc-h3-line-height, 115%);
                font-weight: var(--pc-h3-font-weight, 500);
            }

        }
    }

    .user__wrapper {
        display: flex;
        gap: 20px;
    }

    .user__wrapper-layout {
        max-width: 880px;
        width: 100%;
    }
}
</style>