<template>
  <div id="app">
    <Header />
    <MeetRequest />
    <WorkDescription />
    <Conditions />
    <Team />
    <Bonus />
    <Interview />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style lang="scss">
.bonus {
  padding: 76px 0 160px;
  h2:before {
    background-image: url('@/assets/img/svg/h2-bonus.svg');
  }
  .ul {
    li {
      &:first-child::after {
        content: '';
        right: 246px;
        bottom: 2px;
        width: 27px;
        height: 11px;
        background-image: url('@/assets/img/svg/bonus-li-1.svg');
        background-size: contain;
      }

      &:nth-child(3):after {
        content: '';
        right: 20px;
        top: 6px;
        width: 30px;
        height: 10px;
        background-image: url('@/assets/img/svg/bonus-li-3.svg');
        background-size: contain;
      }
      &:nth-child(5):after {
        content: 'о, это всегда круто!';
        right: 8px;
        bottom: -82px;
        width: 65px;
        transform: rotate(-3deg);
      }
    }
  }
  .images {
    width: 310px;
    height: 182px;
    position: relative;
    filter: drop-shadow(0 4px 20px rgba(30, 63, 113, 0.15));
    img {
      position: absolute;
      border: 6px solid #fff;
      object-fit: cover;
    }
  }
  .images-1 {
    width: 164px;
    height: 104px;
    top: 45px;
    left: 0;
    transform: rotate(-5deg);
  }
  .images-2 {
    z-index: -1;
    width: 164px;
    height: 106px;
    bottom: 0;
    right: 0;
    transform: rotate(4.91deg);
  }
  .images-3 {
    z-index: -2;
    width: 164px;
    height: 106px;
    left: 60px;
    transform: rotate(5deg);
  }
}
@media screen and (min-width: 1024px) {
  .bonus {
    padding: 192px 0;
    .ul {
      li {
        &:first-child::after {
          right: -54px;
          width: 37px;
          height: 21px;
        }

        &:nth-child(3):after {
          right: -54px;
          width: 37px;
          height: 21px;
        }
        &:nth-child(5) {
          white-space: pre-wrap;
          width: 350px;
          &:after {
            width: max-content;
            right: 60px;
          }
        }
      }
    }
    .images {
      bottom: 120px;
      right: -50%;
      width: 414px;
      height: 242px;
    }
    .images-1 {
      width: 214px;
      height: 136px;
      top: 65px;
    }

    .images-2 {
      z-index: -1;
      width: 214px;
      height: 136px;
    }

    .images-3 {
      z-index: -2;
      width: 214px;
      height: 136px;
      left: 90px;
    }
  }
}
</style>
