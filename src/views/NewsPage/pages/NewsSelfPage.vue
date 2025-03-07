<script setup lang="ts">
import { useRouter } from "vue-router";
import picture from "../images/pic.png"

const router = useRouter()

const goBack = () => {
    router.go(-1)
}
</script>
<template>
    <div class="news__self">
        <div class="news__self-container container">
            <div class="news__self-top">
                <h3 class="news__self-title">Название новости</h3>
                <div class="news__self-back" @click="goBack"><i class="fal fa-chevron-left"></i></div>
            </div>

            <div class="news__self-more">
                <div class="news__more-left">
                    <img :src="picture" alt="">
                </div>
                <div class="news__self-right">
                    <div class="news__right-top">
                        <div class="news__right-title">25 ноября 2050</div>
                    </div>
                    <div class="news__right-descr">
                        В королевстве, охваченном тьмой, группа смелых искателей приключений отправляется в опасное
                        путешествие, чтобы спасти мир от забытого зла. Их путь лежит через мрачные леса и заброшенные
                        руины, где каждый шаг может стать последним. <br><br>

                        Смогут ли они преодолеть все преграды и вернуть свет в этот мир, или тьма поглотит
                        их навсегда?‥Смогут ли они преодолеть все преграды и вернуть свет в этот мир, или тьма поглотит
                        их навсегда?‥Смогут ли они преодолеть все преграды и вернуть свет в этот мир, или тьма поглотит
                        их навсегда?‥Смогут ли они преодолеть все преграды и вернуть свет в этот мир, или тьма поглотит
                        их навсегда?‥Смогут ли они преодолеть все преграды и вернуть свет в этот мир, или тьма поглотит
                        их навсегда?‥Смогут ли они преодолеть все преграды и вернуть свет в этот мир, или тьма поглотит
                        их навсегда?‥Смогут ли они преодолеть все преграды и вернуть свет в этот мир, или тьма поглотит
                        их навсегда?‥
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
.news__self {
    padding: 150px 0;

    .news__self-top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .news__self-title {
            color: #ffffff;
            font-size: 46px;
            font-family: 'Alegreya-Medium';
            font-weight: 500;

            margin-bottom: 40px;

            font-size: calc(32px + 14 * (100vw / 1920));

            @media (max-width: 320px) {
                font-size: calc(32px + (14 + 14 * 0.7) * ((100vw - 320px) / 1920));
            }
        }

        .news__self-back {
            width: 55px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--03-dark-2, #18171e);
            border-radius: 10px;

            i {
                color: #d5b0e4;
                font-size: 20px;
            }
        }
    }

    .news__self-more {
        background: var(--plate-main,
                radial-gradient(closest-side,
                    rgba(44, 38, 47, 0.3) 0%,
                    rgba(21, 21, 22, 0.3) 100%));
        border-radius: 15px;
        border-style: solid;
        border-color: var(--based-stroke, #18171e);
        border-width: 1px;
        padding: 28px;

        display: flex;
        gap: 28px;

        @media (max-width: 1024px) {
            flex-direction: column;
        }

        .news__more-left {
            max-width: 352px;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 15px;

            @media (max-width: 1024px) {
                max-width: 100%;
                height: 500px;
            }


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }


        .news__self-right {
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-width: 740px;
            width: 100%;

            @media (max-width: 1024px) {
                max-width: 100%;
            }

            .news__right-top {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .news__right-title {
                    color: var(--04-text-1, #cdc2d1);
                    text-align: left;
                    font-family: "Alegreya-Medium";
                    font-size: calc(22px + 10 * (100vw / 1920));

                    @media (max-width: 320px) {
                        font-size: calc(22px + (10 + 10 * 0.7) * ((100vw - 320px) / 1920));
                    }
                }


            }

            .news__right-descr {
                color: var(--04-text-main, #eee0f1);
                text-align: left;
                font-family: "Alegreya-Regular";
                font-size: calc(16px + 4 * (100vw / 1920));

                @media (max-width: 320px) {
                    font-size: calc(16px + (4 + 4 * 0.7) * ((100vw - 320px) / 1920));
                }
            }


        }
    }
}
</style>
