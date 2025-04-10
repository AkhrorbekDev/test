<template>
  <div class="calendar">
    <div class="calendar__header">
      <div v-for="day in weekDays" :key="day.name" class="calendar__day-name" :class="{
        'current-week-day': day.isCurrent
      }">{{ day.name }}
      </div>
    </div>
    <div class="calendar__body">
      <div v-for="(day, index) in days" :key="index" class="calendar__day" :class="{
        _active: day.isCurrent
      }">
        <div class="calendar__date" :class="{ 'calendar__date--current': day.isCurrent }">
          {{ day.date }}
        </div>

        <div v-for="(event, eventIndex) in day.events" :key="eventIndex" class="calendar__event" @click="openEventCardModal = true">
          <div class="calendar__event-time">{{ event.time }}</div>
          <div class="calendar__event-title">{{ event.title }}</div>

          <div class="calendar__event-tags">
            <span v-if="event.isGame" class="calendar__tag calendar__tag--game">Игра</span>
            <span v-if="event.isAction" class="calendar__tag calendar__tag--action">Боевик</span>
            <span v-if="event.isEvent" class="calendar__tag calendar__tag--event">Событие</span>
            <span v-if="event.hall" class="calendar__tag calendar__tag--hall">{{ event.hall }}</span>
            <span v-for="(icon, iconIndex) in event.icons" :key="iconIndex"
                  class="calendar__icon"
                  :class="`calendar__icon--${icon}`">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_482_1743)">
<path
  d="M7.20719 12.91C10.3568 12.91 12.91 10.3568 12.91 7.20719C12.91 4.05762 10.3568 1.50439 7.20719 1.50439C4.05762 1.50439 1.50439 4.05762 1.50439 7.20719C1.50439 10.3568 4.05762 12.91 7.20719 12.91Z"
  stroke="white" stroke-width="1.14056" stroke-linecap="round" stroke-linejoin="round" />
<path
  d="M4.92627 8.34749C4.92627 8.34749 5.78169 9.48805 7.20739 9.48805C8.63308 9.48805 9.4885 8.34749 9.4885 8.34749M5.49655 5.49609H5.50225M8.91822 5.49609H8.92393"
  stroke="white" stroke-width="1.14056" stroke-linecap="round" stroke-linejoin="round" />
</g>
<defs>
<clipPath id="clip0_482_1743">
<rect width="13.6867" height="13.6867" fill="white" transform="translate(0.36377 0.36377)" />
</clipPath>
</defs>
</svg>

            </span>
          </div>

        </div>
      </div>
    </div>
    <ModalComponent :is-open="openEventCardModal" @close="openEventCardModal = false">
      <EventCard />

    </ModalComponent>
  </div>
</template>

<script>
import EventCard from '@/views/CalendarPage/components/EventCard.vue'
import ModalComponent from '@/components/ModalComponents.vue'

export default {
  name: 'EventsCalendar',
  components: { ModalComponent, EventCard },
  data() {
    return {
      openEventCardModal: false,
      weekDays: [
        {
          name: 'Понедельник',
          isCurrent: false
        },
        {
          name: 'Вторник',
          isCurrent: false
        },
        {
          name: 'Среда',
          isCurrent: false
        },
        {
          name: 'Четверг',
          isCurrent: false
        },
        {
          name: 'Пятница',
          isCurrent: false
        },
        {
          name: 'Суббота',
          isCurrent: false
        },
        {
          name: 'Воскресенье',
          isCurrent: true
        }
      ],
      days: [
        {
          date: '28',
          isCurrent: false,
          events: [
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              hall: 'Зал #2',
              icons: ['gold', 'green', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'История о том...',
              isEvent: true,
              icons: ['gold', 'green', 'green', 'green']
            }
          ]
        },
        {
          date: '29',
          isCurrent: false,
          events: [
            {
              time: '18:00',
              title: 'История о том...',
              isEvent: true,
              icons: ['gold', 'green', 'green', 'green']
            }
          ]
        },
        {
          date: '30',
          isCurrent: false,
          events: [
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              hall: 'Зал #2',
              icons: ['gold', 'green', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'История о том...',
              isEvent: true,
              icons: ['gold', 'green', 'green', 'green']
            }
          ]
        },
        {
          date: '31',
          isCurrent: false,
          events: [
            {
              time: '18:00',
              title: 'История о том...',
              isEvent: true,
              icons: ['gold', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              icons: ['gold', 'green', 'green', 'green']
            }
          ]
        },
        {
          date: '1',
          isCurrent: true,
          events: [
            {
              time: '18:00',
              title: 'История о том...',
              isEvent: true,
              icons: ['gold', 'green', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              icons: ['gold', 'green', 'green', 'green']
            }
          ]
        },
        {
          date: '2',
          isCurrent: false,
          events: [
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              hall: 'Зал #2',
              icons: ['gold', 'green', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'История о том...',
              isEvent: true,
              icons: ['gold', 'green', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              icons: ['gold', 'green', 'green', 'green']
            }
          ]
        },
        {
          date: '3',
          isCurrent: false,
          events: [
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              hall: 'Зал #2',
              icons: ['gold', 'green', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'История о том...',
              isEvent: true,
              icons: ['gold', 'green', 'green', 'green']
            },
            {
              time: '18:00',
              title: 'Название игры',
              isGame: true,
              isAction: true,
              icons: ['gold', 'green', 'green', 'green']
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
/* BEM methodology applied to the calendar component */
.calendar {
  color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 28px 27px;
  border-radius: 12px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: radial-gradient(53.64% 101.47% at 51.36% 54.36%, rgba(44, 38, 47, 0.3) 0%, rgba(21, 21, 22, 0.3) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid #18171E;
}

/* Block: calendar header */
.calendar__header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #222231;
}

.calendar__day-name {
  text-align: center;
  padding: 10px;
  font-size: 16px;
  color: #969696;
  background: linear-gradient(114.17deg, rgba(54, 38, 38, 0.3) -3.5%, rgba(34, 27, 36, 0.3) 47.08%, rgba(54, 38, 38, 0.3) 97.65%);
  border-right: 1px solid #222231;
  cursor: pointer;

}

.calendar__day-name.current-week-day {
  background: #18171E;
  color: #ffffff;
  font-weight: bold;
}

/* Block: calendar body */
.calendar__body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 10px;
  overflow: auto;

}

/* Element: day */
.calendar__day {
  background: linear-gradient(109.35deg, rgba(0, 0, 0, 0.3) -1.6%, rgba(22, 19, 23, 0.3) 48.61%, rgba(0, 0, 0, 0.3) 98.83%);

  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 13.41px;
  min-height: 200px;
}

.calendar__day._active {
  background: #18171E;
}

/* Element: date */
.calendar__date {
  margin-bottom: 10px;
  color: #86489c;
  font-family: Alegreya SC;
  font-weight: 500;
  font-size: 46px;
  line-height: 100%;
  letter-spacing: 0%;
  font-variant-numeric-figure: lining-nums;
  font-variant-numeric-spacing: proportional-nums;

}

/* Modifier: current date */
.calendar__date--current {
  color: #ffffff;
}

/* Element: event */
.calendar__event {
  border-bottom: 1px solid #422748;
  padding-bottom: 15px;
  cursor: pointer;
}

.calendar__event:hover .calendar__event-title {
  text-decoration: underline;
  text-decoration-color: #86489c;
}

.calendar__event:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

/* Element: event time */
.calendar__event-time {
  color: #86489c;
  font-family: Alegreya SC;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0%;

}

/* Element: event title */
.calendar__event-title {
  font-family: Alegreya;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0%;
  font-variant-numeric-figure: lining-nums;
  font-variant-numeric-spacing: proportional-nums;
  margin: 5px 0;
  color: #ffffff;
}

/* Element: event tags */
.calendar__event-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
}

/* Element: tag */
.calendar__tag {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
}

/* Modifier: game tag */
.calendar__tag--game {
  background-color: #86489c;
  color: #ffffff;
}

/* Modifier: action tag */
.calendar__tag--action {
  background-color: #d23c48;
  color: #ffffff;
}

/* Modifier: event tag */
.calendar__tag--event {
  background-color: #86489c;
  color: #ffffff;
}

/* Modifier: hall tag */
.calendar__tag--hall {
  background-color: #335781;
  color: #ffffff;
}

/* Element: event icons */
.calendar__event-icons {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}

/* Element: icon */
.calendar__icon {
  width: 24px;
  height: 24px;
  border-radius: 6.7px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modifier: gold icon */
.calendar__icon--gold {
  background-color: #886535;
}

/* Modifier: green icon */
.calendar__icon--green {
  background-color: #4a7548;
}

/* Responsive design */
@media (max-width: 768px) {
  .calendar__header,
  .calendar__body {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .calendar__header,
  .calendar__body {
    grid-template-columns: 1fr;
  }

  .calendar__day-name {
    margin-bottom: 5px;
  }
}
</style>
