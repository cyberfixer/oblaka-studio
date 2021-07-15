<template>
  <section class="work-description">
    <Note color="green">
      <h3>Ты еще не работала в вебкаме?</h3>
      <button
        class="btn btn-green"
        @click="$store.dispatch('openModal', 'description')"
      >
        Кратко о работе веб-модели
      </button>
    </Note>
  </section>
</template>

<script>
export default {
  name: 'WorkDescription',
}
</script>

<style lang="scss">
.work-description {
  padding: 32px 0;
  position: relative;
  margin-bottom: 72px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    right: -4px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 4px 50px rgba(180, 210, 255, 0.1);
  }
  .note {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &::after {
      content: '';
      position: absolute;
      bottom: -46px;
      right: 6px;
      width: 83px;
      height: 64px;
      background-image: url('@/assets/img/pepper.png');
      background-size: contain;
    }
  }
  h3 {
    font-size: inherit;
    margin-bottom: 12px;
  }
}
@media screen and (min-width: 1024px) {
  .work-description {
    padding: 48px 0;
    margin-top: 20px;
    &::before {
      transform: rotate(1deg);
    }
    .note:after {
      bottom: -80px;
      right: -60px;
      width: 116px;
      height: 90px;
      background-image: url('@/assets/img/pepper.png');
    }
  }
}
</style>
