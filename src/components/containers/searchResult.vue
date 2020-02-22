<template>
  <div v-if="flightItem" class="flights mb-12">
    <div class="flights__main">
      <div class="_middle-block">
        <span class="logo"
          ><img
            src=" https://aviata.kz/static/airline-logos/80x80/KC.png"
            alt=""
          />Air Astana</span
        >
        <div class="date">
          <span>25 ноя, вс</span>
          <h2>23:25</h2>
        </div>
        <div class="flight-time">
          <div class="flight-location-and-time">
            <h2 class="location start">ALA</h2>
            <span class="time">4 ч 20 м</span>
            <h2 class="location end">TSE</h2>
          </div>
          <div class="_line">
            <div class="elipse-group">
              <div class="_elipse _start"></div>
              <div class="_elipse _moddle"></div>
              <div class="_elipse _end"></div>
            </div>
          </div>
          <h1>через Шымкент, 1 ч 50 м</h1>
        </div>
        <div class="date">
          <span>25 ноя, вс</span>
          <h2>23:25</h2>
        </div>
      </div>
      <div class="_bottom-block">
        <span>Детали перелета</span>
        <span>Условия тарифа</span>
        <div class="non-refundeble">
          <img :src="require('../../assets/img/non-refundeble.svg')" alt="" />
          <span>невозвратный</span>
        </div>
      </div>
    </div>
    <div class="flights__rigth">
      <h1 class="">590 240 ₸</h1>
      <selectButton text="Выбрать" />
      <h2>Цена за всех пассажиров</h2>
      <div class="services">
        <span class="none__services">Нет багажа</span>
        <linkButton text="+ Добавить багаж" />
      </div>
    </div>
  </div>
</template>

<script>
import greenButton from "../buttons/greenButton";
import linkButton from "../buttons/linkButton";
export default {
  name: "searchResult",
  components: {
    selectButton: greenButton,
    linkButton
  },
  props: {
    flightItem: {
      type: Object,
      require: true
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
      & span {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        margin-right: 23px;
        color: #7284e4;
        cursor: pointer;
        border-bottom: 1px dashed #7284e4;
      }
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
