<template>
  <div class="game-card">
    <h1 class="game-card__title">Название игры</h1>
    <p class="game-card__subtitle">Oneshot (3-4 часа)</p>

    <div class="game-card__tags">
      <span class="game-card__tag game-card__tag--genre">Жанр 1</span>
      <span class="game-card__tag game-card__tag--genre">Жанр 2</span>
      <span class="game-card__tag game-card__tag--setting">Сеттинг 1</span>
      <span class="game-card__tag game-card__tag--system">Система 1</span>
    </div>

    <div class="game-card__details">
      <p class="game-card__detail"><strong>Подготовка:</strong> минимальная</p>
      <p class="game-card__detail">Только новички</p>
      <p class="game-card__detail">
        <span>Проводит мастер </span>
        <span class="game-card__master">NickName</span>
      </p>
    </div>

    <div class="game-card__description">
      <p>
        В королевстве, охваченном тьмой, группа смелых искателей приключений
        отправляется в опасное путешествие, чтобы спасти мир от забытого зла.
        Их путь лежит через мрачные леса и заброшенные руины, где каждый шаг
        может стать последним.
      </p>
      <p>
        Смогут ли они преодолеть все преграды и вернуть свет в этот мир,
        или тьма поглотит их навсегда?..
      </p>
    </div>

    <div class="game-card__footer">
      <div class="game-card__status">
        <span class="game-card__occupancy">Занято 5/10</span>
      </div>
      <div class="game-card__price">2000 ₽</div>
    </div>

    <div class="game-card__actions">
      <button class="game-card__button game-card__button--details">Подробнее</button>
      <button class="game-card__button game-card__button--signup">Записаться</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
}
</script>

<style>
/* BEM methodology applied to the game card component */
.game-card {
  background-color: #121212;
  color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 20px;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Element: title */
.game-card__title {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
}

/* Element: subtitle */
.game-card__subtitle {
  font-size: 18px;
  color: #888888;
  margin: 0;
  margin-top: -10px;
}

/* Element: tags container */
.game-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
}

/* Element: tag */
.game-card__tag {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
}

/* Modifier: genre tag */
.game-card__tag--genre {
  background-color: #925657;
}

/* Modifier: setting tag */
.game-card__tag--setting {
  background-color: #649256;
}

/* Modifier: system tag */
.game-card__tag--system {
  background-color: #335781;
}

/* Element: details */
.game-card__details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Element: detail */
.game-card__detail {
  font-size: 18px;
  margin: 0;
}

/* Element: master name */
.game-card__master {
  font-weight: bold;
}

/* Element: description */
.game-card__description {
  font-size: 16px;
  line-height: 1.6;
  color: #cccccc;
}

.game-card__description p {
  margin: 0 0 15px 0;
}

.game-card__description p:last-child {
  margin-bottom: 0;
}

/* Element: footer */
.game-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

/* Element: occupancy status */
.game-card__occupancy {
  font-size: 24px;
  font-weight: bold;
  color: #815692;
}

/* Element: price */
.game-card__price {
  font-size: 36px;
  font-weight: bold;
  color: #963e40;
}

/* Element: actions */
.game-card__actions {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

/* Element: button */
.game-card__button {
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  flex: 1;
  text-align: center;
}

/* Modifier: details button */
.game-card__button--details {
  background-color: #1d1d1d;
  color: #ffffff;
}

/* Modifier: signup button */
.game-card__button--signup {
  background-color: #815692;
  color: #ffffff;
}

/* Responsive design */
@media (max-width: 480px) {
  .game-card {
    padding: 20px;
  }

  .game-card__title {
    font-size: 28px;
  }

  .game-card__subtitle {
    font-size: 16px;
  }

  .game-card__tag {
    font-size: 14px;
    padding: 6px 12px;
  }

  .game-card__detail {
    font-size: 16px;
  }

  .game-card__occupancy {
    font-size: 20px;
  }

  .game-card__price {
    font-size: 28px;
  }

  .game-card__actions {
    flex-direction: column;
  }
}
</style>
