<template>
  <section class="conditions section container">
    <h2>Условия</h2>
    <ul class="ul">
      <li v-for="item in conditionsList" :key="item">{{ item }}</li>
    </ul>
    <img
      class="first"
      :src="'slides/oblaka-studio-slide-5-min.jpeg'"
      alt="oblaka-studio-sbp"
    />
    <img
      class="second"
      :src="'slides/oblaka-studio-slide-6-min.jpeg'"
      alt="oblaka-studio-sbp"
    />
  </section>
</template>

<script>
export default {
  name: 'Conditions',
  data() {
    return {
      conditionsList: null,
    }
  },
  async fetch() {
    this.conditionsList = await this.$content('lists')
      .fetch()
      .then((r) => r.conditionsList)
  },
}
</script>

<style lang="scss">
.conditions {
  margin-bottom: 72px;
  h2:before {
    background-image: url('~@/assets/img/svg/h2-conditions.svg');
  }
  .ul {
    li {
      &:nth-child(2):after {
        content: 'от 50%, понятно';
        right: -40px;
        bottom: -28px;
        transform: rotate(-3deg);
      }
      &:nth-child(3):after {
        content: '';
        right: 100px;
        bottom: 12px;
        width: 48px;
        height: 11px;
        background-image: url('~@/assets/img/svg/conditions-li-3.svg');
        background-size: contain;
      }
      &:nth-child(5):after {
        content: '';
        left: 70px;
        bottom: 20px;
        width: 42px;
        height: 5px;
        background-image: url('~@/assets/img/svg/conditions-li-5.svg');
        background-size: contain;
      }
      &:nth-child(6):after {
        content: '';
        right: 114px;
        bottom: 2px;
        width: 23px;
        height: 24px;
        background-image: url('~@/assets/img/svg/conditions-li-6.svg');
        background-size: contain;
      }
      &:nth-child(8):after {
        content: 'а в комнатах можно айкос';
        white-space: nowrap;
        left: 80px;
        bottom: -26px;
        transform: rotate(-3deg);
      }
    }
  }
  img {
    margin: auto 0;
    &.first,
    &.second {
      width: 118px;
      height: 78px;
      border: 6px solid #fff;
      transform: rotate(2deg) translateX(-10px);
      z-index: -1;
    }
    &.first {
      width: 173px;
      height: 135px;
      border: 10px solid #fff;
      transform: rotate(-2deg);
    }
    &.second {
      filter: drop-shadow(0 4px 20px rgba(30, 63, 113, 0.15));
    }
  }
}
@media screen and (min-width: 1024px) {
  .conditions {
    position: relative;
    margin-bottom: 196px;
    h2:before {
      left: 39%;
    }
    .ul {
      li {
        &:nth-child(2):after {
          right: -180px;
          bottom: -6px;
          transform: rotate(-3deg);
        }
        &:nth-child(3):after {
          content: '';
          left: 180px;
          bottom: -10px;
        }
        &:nth-child(5):after {
          content: '';
          left: 410px;
          bottom: -4px;
        }
        &:nth-child(6):after {
          right: -36px;
          bottom: 2px;
        }
        &:nth-child(8):after {
          content: 'а в комнатах можно айкос';
          white-space: nowrap;
          left: 230px;
          bottom: -8px;
          transform: rotate(-3deg);
        }
      }
    }
    img {
      margin: 0;
      &.first {
        position: absolute;
        bottom: -90px;
        right: 30px;
        width: 270px;
        height: 198px;
        border: 10px solid #fff;
        filter: drop-shadow(0 4px 20px rgba(30, 63, 113, 0.15));
        transform: rotate(-0.91deg);
      }
      &.second {
        display: none;
      }
    }
  }
}
</style>
