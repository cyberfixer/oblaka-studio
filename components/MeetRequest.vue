<template>
  <section class="meet-request container">
    <Slider :images="slides" class="studio-slider" />
    <button
      class="request btn btn-pinktoorange"
      @click="$store.dispatch('openModal', 'request')"
    >
      записаться на встречу
    </button>
  </section>
</template>

<script>
export default {
  name: 'MeetRequest',
  data() {
    return {
      slides: [
        'slides/oblaka-studio-slide-1-min.jpg',
        'slides/oblaka-studio-slide-2-min.jpg',
        'slides/oblaka-studio-slide-3-min.jpg',
        'slides/oblaka-studio-slide-4-min.jpg',
      ],
    }
  },
}
</script>

<style lang="scss">
.studio-slider {
  width: 308px;
  height: 206px;
  border: 6px solid #fff;
  border-radius: 10px;
  background: #c4c4c4;
  box-shadow: 0 4px 20px rgba(30, 63, 113, 0.15);
  margin: 6px auto 50px;
}
.request {
  display: block;
  margin: 0 auto 50px;
}
@media screen and (min-width: 1024px) {
  .meet-request {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: -65px;
      left: 20px;
      width: 170px;
      height: 170px;
      background-image: url('~@/assets/img/heart-s.png');
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 1;
    }
  }
  .studio-slider {
    width: 792px;
    height: 508px;
    margin: 22px auto 0;
    position: relative;
  }
  .request {
    margin-top: -24px;
    position: relative;
    z-index: 1;
  }
}
</style>
