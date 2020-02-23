<template>
  <div v-if="flightItem" class="flights mb-12">
    <div class="flights__main">
      <div class="_middle-block">
        <span class="logo"
          ><img
            :src="
              `https://aviata.kz/static/airline-logos/80x80/${flightItem.itineraries[0][0].carrier}.png`
            "
            alt=""
          />{{ flightItem.itineraries[0][0].carrier_name }}</span
        >
        <div class="date">
          <span>{{
            getPrettyDate(flightItem.itineraries[0][0].segments[0].dep_time)
              .date
          }}</span>
          <h2>
            {{
              getPrettyDate(flightItem.itineraries[0][0].segments[0].dep_time)
                .time
            }}
          </h2>
        </div>
        <div class="flight-time">
          <div class="flight-location-and-time">
            <h2 class="location start">
              {{ flightItem.itineraries[0][0].segments[0].origin_code }}
            </h2>
            <span class="time">{{
              getCurrentSegmetsTime(flightItem.itineraries[0][0])
            }}</span>
            <h2 class="location end">
              {{
                flightItem.itineraries[0][0].segments[
                  flightItem.itineraries[0][0].segments.length - 1
                ].origin_code
              }}
            </h2>
          </div>
          <div class="_line">
            <div class="elipse-group">
              <div class="_elipse _start"></div>
              <!-- eslint-disable -->
              <div v-if="segmentsSecond"
                v-for="dots in flightItem.itineraries[0][0].segments"
                class="_elipse _moddle"
                :key="dots.dest_code"
              >
              </div>
              <div v-if="!segmentsSecond  && !segmentsOne"  class="_elipse _moddle"></div>
              <div class="_elipse _end"></div>
            </div>
          </div>

          <h1 v-if="segmentsOne">прямой рейс</h1>
          <h1 v-else>
            через
            <span v-if="segmentsSecond" v-for="item in flightItem.itineraries[0][0].segments"
              >{{ item.dest }}, {{waitingTime(item.segments)}}</span
            >
            <span v-if="!segmentsSecond"
              >{{ flightItem.itineraries[0][0].segments[0].dest }}, {{waitingTime(flightItem.itineraries[0][0].segments)}}</span
            >
          </h1>
        </div>
        <!-- eslint-enable -->
        <div class="date">
          <span>{{
            getPrettyDate(
              flightItem.itineraries[0][0].segments[
                flightItem.itineraries[0][0].segments.length - 1
              ].arr_time
            ).date
          }}</span>
          <h2>
            {{
              getPrettyDate(
                flightItem.itineraries[0][0].segments[
                  flightItem.itineraries[0][0].segments.length - 1
                ].arr_time
              ).time
            }}
          </h2>
        </div>
      </div>
      <div class="_bottom-block">
        <blueLink title="Детали перелета" />
        <blueLink title="Условия тарифа" />
        <div v-if="noRefundable" class="non-refundeble">
          <img :src="require('../../assets/img/non-refundeble.svg')" alt="" />
          <span>невозвратный</span>
        </div>
      </div>
    </div>
    <div class="flights__rigth">
      <h1 class="">{{ flightItem.price }} &#8376;</h1>
      <selectButton text="Выбрать" />
      <h2>Цена за всех пассажиров</h2>
      <div v-if="noServices(flightItem.services)" class="services">
        <span class="none__services">Нет багажа</span>
        <linkButton text="+ Добавить багаж" />
      </div>
    </div>
  </div>
</template>

<script>
import greenButton from "../buttons/greenButton";
import linkButton from "../buttons/linkButton";
import blueLink from "../buttons/blueLink";
export default {
  name: "searchResult",
  components: {
    selectButton: greenButton,
    linkButton,
    blueLink
  },
  props: {
    flightItem: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      segmentsData: null
    };
  },
  computed: {
    noRefundable: function() {
      return !this.flightItem.refundable;
    },
    segmentsOne: function() {
      return this.flightItem.itineraries[0][0].segments.length === 1;
    },
    segmentsSecond: function() {
      return this.flightItem.itineraries[0][0].segments.stops > 1;
    }
  },
  methods: {
    getPrettyDate: function(fullDate) {
      return {
        date: `
        ${fullDate.split(" ")[0]}
        ${fullDate.split(" ")[1]}
        ${fullDate.split(" ")[2]}
        `,
        time: fullDate.split(" ")[3]
      };
    },
    getCurrentSegmetsTime(itineraries) {
      let currentHours =
          new Date(itineraries.arr_date).getHours() -
          new Date(itineraries.dep_date).getHours(),
        currentMinutes =
          new Date(itineraries.arr_date).getMinutes() -
          new Date(itineraries.dep_date).getMinutes();
      return `${Math.abs(currentHours)} ч ${
        Math.abs(currentMinutes) === 0 ? "" : Math.abs(currentMinutes) + " м"
      }`;
    },
    waitingTime(segments) {
      let firstDate = "",
        secondDate = "";
      segments.forEach((seg, index) => {
        firstDate = firstDate === "" ? seg.arr_time_iso : firstDate;
        secondDate = segments.length - 1 === index ? seg.dep_time_iso : "";
      });
      let currentHours =
          new Date(firstDate).getHours() - new Date(secondDate).getHours(),
        currentMinutes =
          new Date(firstDate).getMinutes() - new Date(secondDate).getMinutes();
      return `${Math.abs(currentHours)} ч ${
        Math.abs(currentMinutes) === 0 ? "" : Math.abs(currentMinutes) + " м"
      }`;
    },
    noServices(item) {
      return Object.keys(item).indexOf("0PC") >= 0 ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.flights {
  width: 880px;
  height: 168px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
  & .flights__main {
    width: 72.8%;
    display: flex;
    flex-direction: column;
    & ._middle-block {
      width: inherit;
      height: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 40px 90px 0 43px;
      & .logo {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: #202123;
        & img {
          height: 20px;
          padding-right: 12px;
        }
      }
      & .date {
        & span {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          color: #202123;
        }
        & h2 {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 33px;
          color: #202123;
        }
      }
      & .flight-time {
        width: 168px;
        & ._line {
          /*border: 1px solid #b9b9b9;*/
          height: 2px;
          background: #b9b9b9;
          & .elipse-group {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            & ._elipse {
              width: 5px;
              height: 5px;
              background: #ffffff;
              border: 1px solid #b9b9b9;
              border-radius: 50%;
              box-sizing: border-box;
            }
          }
        }
        & .flight-location-and-time {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          & .location {
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            color: #b9b9b9;
          }
          & .time {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #202123;
          }
        }
        & h1 {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          color: #ff9900;
        }
      }
    }
    & ._bottom-block {
      width: 100%;
      height: 50%;
      padding: 46px 231px 17px 43px;
      display: flex;
      flex-direction: row;
      justify-content: start;
      & .non-refundeble {
        display: flex;
        flex-direction: row;
        & img {
          width: 14.81px;
          height: 14.81px;
        }
        & span {
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          color: #707276;
          border-bottom: none;
        }
      }
    }
  }
  & .flights__rigth {
    background: #f5f5f5;
    border-radius: 0px 4px 4px 0px;
    width: 22.8%;
    padding: 12px 20px 18px 20px;
    & h1 {
      margin: 0;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #202123;
      padding-bottom: 13px;
    }
    & h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #707276;
      padding: 8px 0 12px 0;
    }
    & .services {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      & .none__services {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #202123;
      }
    }
  }
}
</style>
