<template>
  <div class="interview">
    <Note color="yellow">
      <p>В общем, приходи в Oblaka, все посмотришь! До встречи!)</p>
      <button
        class="btn btn-pinktoorange"
        @click="$store.dispatch('openModal', 'request')"
      >
        записаться на встречу
      </button>
    </Note>
  </div>
</template>

<script>
export default {
  name: 'Interview',
}
</script>

<style lang="scss">
.interview {
  position: relative;
  &:after,
  &:before {
    content: '';
    position: absolute;
    background-color: #f0f6ff;
  }
  &:before {
    top: 50%;
    left: 0;
    right: 0;
    height: 100%;
    transform: rotate(3deg);
  }
  &:after {
    left: calc(50% - 164px);
    top: -89px;
    width: 212px;
    height: 212px;
    border-radius: 50%;
    border: 50px solid #fffffd;
    box-shadow: 0 4px 50px rgba(0, 102, 255, 0.1);
  }
  .note {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &:after {
      content: '';
      position: absolute;
      top: -80px;
      right: -16px;
      width: 117px;
      height: 117px;
      background-image: url('@/assets/img/interview-heart.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  p {
    line-height: 23px;
    margin-bottom: 12px;
  }
}
@media screen and (min-width: 1024px) {
  .interview {
    &:after {
      left: calc(50% - 220px);
      top: -152px;
      width: 286px;
      height: 286px;
      border: 80px solid #fffffd;
    }
    .note {
      height: 141px;
      &:after {
        top: -150px;
        right: -116px;
        width: 175px;
        height: 175px;
      }
    }
  }
}
</style>
