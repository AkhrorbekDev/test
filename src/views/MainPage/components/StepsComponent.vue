<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.utils.toArray('.steps__pirates-item').forEach((item: any, index: number) => {
        gsap.fromTo(
            item,
            {
                opacity: 0,
                y: 50,
                x: index % 2 === 0 ? -100 : 100, // Чередуем направление
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });
});

</script>
<template>
    <div class="steps">
        <div class="stpes__container container">
            <h3 class="steps__title">Следуйте этим советам и все получится!</h3>

            <div class="steps__pirates-map">
                <svg class="steps__line" width="91" height="640" viewBox="0 0 91 640" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5691 639.035C226.844 357.019 -115.153 330.465 47.1584 0.966796" stroke="#391648"
                        stroke-width="3" stroke-dasharray="10 10" />
                </svg>
                <div class="steps__pirates-item">
                    <div class="steps__pirates-top">
                        <h3 class="steps__pirates-title">Запишитесь на игру</h3>
                        <img src="../images/steps/edit.svg" alt="">
                    </div>
                    <div class="steps__pirates-txt"> В нашем расписании выберите игру для новичков или обратитесь
                        к <span>Привратнику</span> за советом —
                        мы ответим
                        на любые вопросы и подберём для вас наиболее подходящую игру.</div>

                </div>
                <div class="steps__pirates-item">
                    <div class="steps__pirates-top">
                        <h3 class="steps__pirates-title">Поговорите с Мастером</h3>
                        <img src="../images/steps/people.svg" alt="">
                    </div>
                    <div class="steps__pirates-txt">Перед игрой вы сможете познакомиться с Мастером, который объяснит
                        правила, поможет создать персонажа и ответит на все вопросы</div>

                </div>
                <div class="steps__pirates-item">
                    <div class="steps__pirates-top">
                        <h3 class="steps__pirates-title">Создайте персонажа</h3>
                        <img src="../images/steps/robot.svg" alt="">
                    </div>
                    <div class="steps__pirates-txt">Это ваш герой, которым вы будете управлять во время игры. Его можно
                        сделать вместе с Мастером перед игрой или просто выбрать готового из предложенных,
                        чтобы вы могли быстрее включиться в игру.</div>

                </div>
                <div class="steps__pirates-item">
                    <div class="steps__pirates-top">
                        <h3 class="steps__pirates-title">Вникайте по ходу игры</h3>
                        <img src="../images/steps/three.svg" alt="">
                    </div>
                    <div class="steps__pirates-txt">
                        Вам не нужно знать все правила заранее. Мастер будет вести игру и подсказывать вам, что делать
                        в каждой ситуации
                    </div>

                </div>
                <div class="steps__pirates-item">
                    <div class="steps__pirates-top">
                        <h3 class="steps__pirates-title">Наслаждайтесь процессом!</h3>
                        <img src="../images/steps/edit.svg" alt="">
                    </div>
                    <div class="steps__pirates-txt">Самое важное — это просто расслабиться и получать удовольствие.
                        Не бойтесь задавать вопросы и экспериментировать!</div>

                </div>

            </div>

            <div class="steps__bottom">
                <div class="steps__bottom-txt">Наш клуб всегда рад новичкам и готов помочь вам сделать первые шаги
                    в удивительный мир настольных ролевых игр!</div>
                <img src="../images/steps/sword.svg" alt="">
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.steps {
    padding-top: 81px;


    .steps__title {
        color: #ffffff;
        font-size: 46px;
        font-family: 'Alegreya-Medium';
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }

    .steps__pirates-map {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;

        .steps__line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 638px;
            z-index: -1;
        }

        .steps__pirates-item {
            display: flex;
            flex-direction: column;
            gap: 22px;

            max-width: 543px;

            &:nth-of-type(even) {
                align-self: flex-end;

                .steps__pirates-top {
                    flex-direction: row-reverse;
                }

                .steps__pirates-txt {
                    text-align: right;
                }
            }

            .steps__pirates-top {
                display: flex;
                gap: 16px;
                align-items: center;

                .steps__pirates-title {
                    color: #815692;
                    font-size: 32px;
                    font-family: 'Alegreya-Medium';
                    font-weight: 700;
                }
            }

            .steps__pirates-txt {
                color: var(--04-text-main, #eee0f1);
                text-align: left;
                font-family: var(--pc-p3-font-family, "Alegreya-Regular");
                font-size: var(--pc-p3-font-size, 20px);
                line-height: var(--pc-p3-line-height, 120%);
                font-weight: var(--pc-p3-font-weight, 400);

                span {
                    color: var(--02-accent-2, #f0515e);
                    font-family: var(--pc-p3-font-family, "Alegreya-Bold");
                    font-size: var(--pc-p3-font-size, 20px);
                    line-height: var(--pc-p3-line-height, 120%);
                    font-weight: var(--pc-p3-font-weight, 700);
                }
            }

        }
    }

    .steps__bottom {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        margin-top: 20px;

        .steps__bottom-txt {
            color: var(--02-accent-3, #ff7e7e);
            text-align: right;
            font-family: var(--pc-h4-font-family, "AlegreyaSc-Regular");
            font-size: var(--pc-h4-font-size, 26px);
            line-height: var(--pc-h4-line-height, 115%);
            font-weight: var(--pc-h4-font-weight, 400);
            max-width: 566px;
            margin-right: 175px;
        }

        img {
            position: absolute;
        }
    }
}
</style>