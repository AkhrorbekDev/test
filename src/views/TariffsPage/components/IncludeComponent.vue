<script lang="ts" setup>

</script>

<template>
    <div class="include">
        <div class="include__container container">
            <h3 class="include__title">
                Что входит в стоимость
            </h3>
            <div class="include__grid">
                <div class="include__grid-item">
                    <img src="../images/1.png" alt="">
                    <div class="include__grid-txt">
                        Полный доступ к выбранной игровой комнате с тематическим оформлением
                        и управляемым освещением
                    </div>
                </div>
                <div class="include__grid-item">
                    <img src="../images/2.png" alt="">
                    <div class="include__grid-txt">
                        Предоставление любого игрового инвентаря:
                        дайсы, миниатюры, маты, ширмы для Мастеров и т.д.
                    </div>
                </div>
                <div class="include__grid-item">
                    <img src="../images/3.png" alt="">
                    <div class="include__grid-txt">
                        Доступ к аудио- и видеосистемам для создания игровой атмосферы
                    </div>
                </div>
                <div class="include__grid-item">
                    <img src="../images/4.png" alt="">
                    <div class="include__grid-txt">
                        Вкусный черный и зеленый чай, ароматный кофе и разнообразные снеки для
                        всех гостей
                    </div>
                </div>
                <div class="include__grid-item">
                    <img src="../images/5.png" alt="">
                    <div class="include__grid-txt">
                        Доступ в комфортную зону отдыха на все время посещение клуба
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
.include {
    margin-top: 81px;

    .include__title {
        color: #ffffff;
        font-size: 46px;
        font-family: 'Alegreya-Medium';
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }

    .include__grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .include__grid-item {
            max-width: 380px;
            background: var(--plate-01,
                    linear-gradient(257.41deg,
                        rgba(90, 51, 98, 0.2) 0%,
                        rgba(31, 24, 33, 0.2) 100%));
            border-radius: 10px;
            position: relative;
            padding: 50px 0;
            overflow: hidden;

            display: flex;
            justify-content: center;
            align-items: center;

            img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: -1;
            }

            &:nth-of-type(1),
            &:nth-of-type(2) {
                min-width: 580px !important;
            }

            .include__grid-txt {
                max-width: 517px;
                width: 100%;
                color: #eee0f1;
                font-size: 22px;
                text-align: center;
            }
        }


    }
}
</style>