<script setup lang="ts">


</script>
<template>
    <div class="profile">
        <div class="profile__top">
            <div class="profile__top-left">
                <img src="./images/avatar.png" alt="">
            </div>
            <div class="profile__top-right">
                <div class="profile__top-item">
                    <div class="profile__top-label">Имя</div>
                    <div class="profile__top-title">Котикуе</div>
                </div>
                <div class="profile__top-item">
                    <div class="profile__top-label">Ссылка на соц. сети</div>
                    <div class="profile__top-title">t.me/kotiqueee</div>
                </div>
                <div class="profile__top-item">
                    <div class="profile__top-label">Телефон</div>
                    <div class="profile__top-title">+7 999 999-99-99</div>
                </div>
                <div class="profile__top-item">
                    <div class="profile__top-label">EMAIL</div>
                    <div class="profile__top-title">fskookdfsko@gmail.com</div>
                </div>
                <div class="profile__top-item">
                    <div class="profile__top-label">Дата регистрации</div>
                    <div class="profile__top-title">28.10.2024</div>
                </div>
            </div>
        </div>
        <div class="profile__about">
            <div class="profile__about-label">Обо мне</div>
            <div class="profile__about-txt">Королевство Эландор когда‑то было процветающим и мирным местом, но теперь
                его окутала тьма. Древние пророчества шепчут о возвращении забытого</div>
        </div>
        <div class="profile__info">
            <div class="profile__info-item">
                <div class="profile__info-label">Стаж</div>
                <div class="profile__info-txt">365 дней</div>
            </div>
            <div class="profile__info-item">
                <div class="profile__info-label">Участник</div>
                <div class="profile__info-txt">10 событий</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.profile {
    padding: 28px;
    background: var(--plate-main,
            radial-gradient(closest-side,
                rgba(44, 38, 47, 0.3) 0%,
                rgba(21, 21, 22, 0.3) 100%));
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 28px;


    .profile__top {
        display: flex;
        gap: 30px;

        .profile__top-left {
            width: 256px;
            height: 256px;

            img {
                object-fit: cover;
            }
        }

        .profile__top-right {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .profile__top-item {
                max-width: 245px;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 11px;


                .profile__top-label {
                    color: #6a3b7b;
                    font-size: 20px;
                }

                .profile__top-title {
                    color: #eee0f1;
                    font-size: 24px;
                }
            }
        }
    }

    .profile__about {
        display: flex;
        flex-direction: column;
        gap: 14px;

        .profile__about-label {
            color: #6a3b7b;
            font-size: 20px;
        }

        .profile__about-txt {
            font-size: 20px;
            color: #eee0f1;
            max-width: 800px;
        }
    }

    .profile__info {
        display: flex;
        gap: 22px;

        .profile__info-item {
            padding: 16px;
            background: linear-gradient(257.41deg,
                    rgba(134, 72, 156, 0.2) 0%,
                    rgba(58, 58, 58, 0.2) 100%);
            border-radius: 10px;
            gap: 6px;

            .profile__info-label{
                font-size: 20px;
                color: #d5b0e4;
            }

            .profile__info-txt{
                color: #eee0f1;
                font-size: 32px;

            }
        }
    }
}
</style>