<script lang="ts" setup>

</script>
<template>
    <div class="types">
        <div class="types__container container">
            <h3 class="types__title">Какие бывают типы игр?</h3>

            <div class="types__boxes">
                <div class="types__box">
                    <div class="types__box-top">
                        <div class="types__box-title">Нулевая сессия</div>
                        <div class="types__box-info">Около двух часов</div>
                    </div>
                    <div class="types__box-descr">Это подготовительная встреча перед началом приключения
                        (в основном длительных компаний). <br><br>

                        На этой сессии игроки создают персонажей, обсуждают ожидания от игры, выбирают правила
                        и проясняют детали предстоящего приключения. Это отличная возможность познакомиться с Мастером
                        и другими игроками. Такие встречи могут проводиться бесплатно на базе клуба или онлайн.</div>
                    <div class="types__box-link">Подобрать игру <i class="fal fa-arrow-right"></i></div>
                </div>
                <div class="types__box">
                    <div class="types__box-top">
                        <div class="types__box-title">Нулевая сессия</div>
                        <div class="types__box-info">Около двух часов</div>
                    </div>
                    <div class="types__box-descr">Это подготовительная встреча перед началом приключения
                        (в основном длительных компаний). <br><br>

                        На этой сессии игроки создают персонажей, обсуждают ожидания от игры, выбирают правила
                        и проясняют детали предстоящего приключения. Это отличная возможность познакомиться с Мастером
                        и другими игроками. Такие встречи могут проводиться бесплатно на базе клуба или онлайн.</div>
                    <div class="types__box-link">Подобрать игру <i class="fal fa-arrow-right"></i></div>
                </div>
                <div class="types__box">
                    <div class="types__box-top">
                        <div class="types__box-title">Нулевая сессия</div>
                        <div class="types__box-info">Около двух часов</div>
                    </div>
                    <div class="types__box-descr">Это подготовительная встреча перед началом приключения
                        (в основном длительных компаний). <br><br>

                        На этой сессии игроки создают персонажей, обсуждают ожидания от игры, выбирают правила
                        и проясняют детали предстоящего приключения. Это отличная возможность познакомиться с Мастером
                        и другими игроками. Такие встречи могут проводиться бесплатно на базе клуба или онлайн.</div>
                    <div class="types__box-link">Подобрать игру <i class="fal fa-arrow-right"></i></div>
                </div>
                <div class="types__box">
                    <div class="types__box-top">
                        <div class="types__box-title">Нулевая сессия</div>
                        <div class="types__box-info">Около двух часов</div>
                    </div>
                    <div class="types__box-descr">Это подготовительная встреча перед началом приключения
                        (в основном длительных компаний). <br><br>

                        На этой сессии игроки создают персонажей, обсуждают ожидания от игры, выбирают правила
                        и проясняют детали предстоящего приключения. Это отличная возможность познакомиться с Мастером
                        и другими игроками. Такие встречи могут проводиться бесплатно на базе клуба или онлайн.</div>
                    <div class="types__box-link">Подобрать игру <i class="fal fa-arrow-right"></i></div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.types {
    margin-top: 80px;
    padding: 0 10px 0 10px;

    .types__title {
        color: #ffffff;
        font-family: 'Alegreya-Medium';
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;

        font-size: calc(20px + 26 * (100vw / 1920));




        @media (max-width: 320px) {
            font-size: calc(20px + (26 + 26 * 0.7) * ((100vw - 320px) / 1920));
        }
    }

    .types__boxes {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;

        .types__box {
            padding: 40px 28px;
            max-width: 580px;
            width: 100%;
            background: var(--plate-02,
                    linear-gradient(109.35deg,
                        rgba(0, 0, 0, 0.3) 0%,
                        rgba(22, 19, 23, 0.3) 50%,
                        rgba(0, 0, 0, 0.3) 100%));
            border-radius: 15px;

            .types__box-top {
                display: flex;
                gap: 24px;
                margin-bottom: 30px;

                .types__box-title {
                    font-size: 32px;
                    color: #86489c;
                    font-weight: 500;
                    font-family: 'Alegreya-Medium';

                    font-size: calc(22px + 10 * (100vw / 1920));




                    @media (max-width: 320px) {
                        font-size: calc(22px + (10 + 10 * 0.7) * ((100vw - 320px) / 1920));
                    }
                }

                .types__box-info {
                    padding: 8px 16px;
                    background: #742628;
                    color: #d5b0e4;
                    font-family: "Alegreya-Regular";
                    border-radius: 40px;
text-align: center;
                    font-size: calc(14px + 2 * (100vw / 1920));

                    @media (max-width: 320px) {
                        font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px) / 1920));
                    }
                }
            }

            .types__box-descr {
                color: #fff;
        
                margin-bottom: 28px;

                font-size: calc(16px + 4 * (100vw / 1920));

                @media (max-width: 320px) {
                    font-size: calc(16px + (4 + 4 * 0.7) * ((100vw - 320px) / 1920));
                }
            }

            .types__box-link {
                color: #d23c48;
            
                font-family: 'Alegreya-Bold';

                display: flex;
                align-items: center;
                gap: 16px;

                font-size: calc(22px + 10 * (100vw / 1920));




                @media (max-width: 320px) {
                    font-size: calc(22px + (10 + 10 * 0.7) * ((100vw - 320px) / 1920));
                }

            }
        }
    }
}
</style>