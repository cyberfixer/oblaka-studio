<template>
  <section class="team section">
    <div class="inner">
      <h2>Команда</h2>
      <ul class="ul">
        <li v-for="item in teamList" :key="item">{{ item }}</li>
      </ul>
      <img
        src="slides/oblaka-studio-slide-bonus-3.jpg"
        alt="oblaka-studio-sbp"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      teamList: null,
    }
  },
  async fetch() {
    this.teamList = await this.$content('lists')
      .fetch()
      .then((r) => r.teamList)
  },
}
</script>

<style lang="scss">
.team {
  padding: 72px 0 160px;
  img {
    object-fit: cover;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    right: -10px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 4px 50px rgba(180, 210, 255, 0.1);
    transform: rotate(-2deg);
    z-index: -2;
  }
  &,
  .inner {
    margin: 0 auto;
    position: relative;
  }
  .inner {
    width: 310px;
  }
  h2:before {
    background-image: url('@/assets/img/svg/h2-team.svg');
  }
  .ul {
    li {
      &:last-of-type {
        margin-bottom: 18px;
      }
      &:first-child {
        &:after {
          content: 'и заряжает нереально...';
          right: 0;
          bottom: -8px;
          transform: rotate(-3deg);
        }
      }
      &:nth-child(3):after {
        content: 'они у нас классные)';
        right: 0;
        bottom: -20px;
        transform: rotate(-3deg);
      }
    }
  }
  img {
    display: block;
    position: absolute;
    left: 80px;
    width: 148px;
    height: 102px;
    border: 6px solid #fff;
    filter: drop-shadow(0 4px 20px rgba(30, 63, 113, 0.15));
    transform: rotate(-2deg);
  }
}
@media screen and (min-width: 1024px) {
  .team {
    padding: 72px 0 140px;
    &:before {
      transform: rotate(-1deg);
    }
    .inner {
      width: 792px;
    }
    .ul {
      li {
        &:first-child {
          &:after {
            right: -130px;
            bottom: -26px;
            transform: rotate(0);
          }
        }
        &:nth-child(3):after {
          right: -220px;
          bottom: -4px;
          transform: rotate(-1deg);
        }
      }
    }
    img {
      left: calc(50% - 131px);
      bottom: -230px;
      width: 262px;
      height: 178px;
      transform: rotate(1deg);
    }
  }
}
</style>
