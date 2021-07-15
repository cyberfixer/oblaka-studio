<template>
  <footer class="footer">
    <div class="container">
      <div class="address">
        <div class="street">
          Загородный пр. 8
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/house/zagorodny_prospekt_8/Z0kYdQNlS0cCQFtjfXVzdnxjbA==/?ll=30.345225%2C59.927009&z=17.11"
            target="_blank"
            >На карте</a
          >
        </div>
        <div class="city">г. Санкт-Петербург</div>
        <div class="metro">м.Достоевская / Владимирская</div>
      </div>
      <a href="tel:+79774269778" class="tel">+7 977 426 97 78</a>
      <div class="social">
        <a href="https://wa.me/+79774269778" target="_blank">
          <img src="@/assets/img/svg/i-whatsapp.svg" alt="whatsapp" />
        </a>
        <a href="https://telegram.im/@oblkstd" target="_blank">
          <img src="@/assets/img/svg/i-telegramm.svg" alt="telegramm" />
        </a>
        <a href="https://vk.com" target="_blank">
          <img src="@/assets/img/svg/i-vk.svg" alt="vk" />
        </a>
      </div>
    </div>
    <h4>Oblaka studio</h4>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.footer {
  background: linear-gradient(180deg, #f0f6ff, #fcfdff 90.9%);
  padding: 163px 0 0;
  h4 {
    width: 100%;
    font-family: 'Hattori Hanzo Light';
    font-size: 36px;
    color: #28323b;
    text-align: center;
    padding: 85px 0 143px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    &:after,
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    &:before {
      bottom: 0;
      z-index: -2;
      background-image: url('@/assets/img/bg--header-m.jpg');
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: cover;
    }
    &:after {
      height: 360px;
      z-index: -1;
      background: linear-gradient(
        1turn,
        rgba(242, 247, 255, 0) 36.13%,
        #f8fbff 81.15%
      );
    }
  }
  .address {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
      margin-bottom: 26px;
    }
  }
  .street a {
    margin-left: 4px;
    color: #24a1dd;
  }
  .city {
    order: 3;
  }
  .tel {
    font-family: 'Adobe Clean Bold';
    font-size: 21px;
    margin-bottom: 42px;
  }

  .social {
    width: 214px;
    display: flex;
    justify-content: space-between;
    img {
      width: 50px;
      height: 50px;
    }
  }
}
@media (min-width: 420px) {
  .footer h4:before {
    background-image: url('@/assets/img/bg--header-s.jpg');
    background-size: cover;
  }
}
@media screen and (min-width: 1024px) {
  .footer {
    padding: 225px 0 0;
    .address {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 40px;
      div:not(:last-of-type) {
        position: relative;
        margin-right: 30px;
        &:after {
          content: '';
          position: absolute;
          width: 7px;
          height: 7px;
          top: 50%;
          transform: translateY(-25%);
          border-radius: 50%;
          background-color: #bccee8;
          right: -35px;
        }
      }
    }
    .metro {
      order: 3;
    }

    .tel {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
