<template>
  <header class="header">
    <section class="first-screen">
      <h1>Oblaka studio</h1>
      <div class="container">
        <Note class="hello-text">
          Привет, подруга)<br /><br />
          Давай к нам в вебкам-студию Oblaka!<br /><br />
          Смотри, как мы здесь работаем:
        </Note>
        <ul class="ul">
          <li v-for="item in headerList" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      headerList: null,
    }
  },
  async fetch() {
    this.headerList = await this.$content('lists')
      .fetch()
      .then((r) => r.headerList)
  },
}
</script>

<style lang="scss">
.header {
  position: relative;
  padding: 0 32px;
  margin-bottom: 4px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  &::before {
    background-image: url('~@/assets/img/bg--header-m.jpg');
    background-repeat: no-repeat;
    background-size: contain;
  }
  &::after {
    background: linear-gradient(
      1turn,
      #fcfdff 36.13%,
      rgba(252, 253, 255, 0) 81.15%
    );
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.first-screen {
  h1 {
    width: 100%;
    font-family: 'Hattori Hanzo Light';
    font-size: 36px;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 50px #620052;
    padding: 38px 0;
  }
  .hello-text {
    &::after {
      content: '';
      position: absolute;
      width: 99px;
      height: 99px;
      background-image: url('~@/assets/img/heart-m.png');
    }
    br {
      display: none;
    }
  }
  .ul {
    li {
      &:nth-child(1) {
        &::after {
          content: '';
          left: 44px;
          bottom: -8px;
          width: 56px;
          height: 9px;
          background-image: url('~@/assets/img/svg/trap-li-1.svg');
          background-size: cover;
        }
      }
      &:nth-child(2) {
        &::after {
          content: 'не подвал!';
          right: -8px;
          bottom: -30px;
          transform: rotate(-3deg);
        }
      }
      &:nth-child(4) {
        &::after {
          content: '!!';
          right: -24px;
          bottom: -4px;
        }
      }
      &:nth-child(5) {
        &::after {
          content: 'посмотри';
          height: 60px;
          right: -8px;
          bottom: -40px;
          transform: rotate(-3deg);
          background-image: url('~@/assets/img/svg/trap-li-5.svg');
          background-position: bottom 0 left 34px;
        }
      }
    }
  }
}
@media (min-width: 420px) {
  .header {
    &::before {
      background-image: url('~@/assets/img/bg--header-s.jpg');
      background-size: cover;
    }
  }
}

@media (min-width: 1024px) {
  .header {
    .first-screen {
      h1 {
        font-size: 60px;
        padding: 92px 0 72px;
      }
      .hello-text {
        margin-right: 52px;
        &::after {
          content: '';
          position: absolute;
          width: 58px;
          height: 24px;
          right: -40px;
          background-image: url('~@/assets/img/svg/hello-text-arrow.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50%;
        }
        br {
          display: block;
        }
      }
      .ul {
        li {
          display: block;
          &:nth-child(2) {
            display: inline-block;
            &:after {
              right: -48px;
            }
          }
          &:nth-child(4) {
            display: inline-block;
          }
          &:nth-child(5) {
            width: 260px;
            &::after {
              height: 80px;
              right: -100px;
              bottom: -50px;
              transform: rotate(-3deg);
              background-image: url('~@/assets/img/svg/trap-li-5-m.svg');
            }
          }
        }
      }
    }
  }
}
</style>
