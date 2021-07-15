<template>
  <div v-if="images" class="slider">
    <div class="slides">
      <div v-for="slide in images" :key="slide" class="slide">
        <img :src="slide" alt="oblaka-studio-sbp" />
      </div>
    </div>
    <template v-if="images.length > 1">
      <button class="slide-next" @click="next">
        <img src="@/assets/img/svg/slider-arrow.svg" alt="next slide" />
      </button>
      <button class="slide-prev" @click="prev">
        <img src="@/assets/img/svg/slider-arrow.svg" alt="previous slide" />
      </button>
      <div class="points">
        <span
          v-for="point in images.length"
          :key="point"
          class="point"
          :class="{ active: point - 1 == count }"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
      sliderWidth: 0,
      touchStart: 0,
      touchEnd: 0,
    }
  },
  computed: {},
  mounted() {
    if (this.images) {
      this.optimizeWidth()
      window.addEventListener('resize', this.optimizeWidth)
      this.handleTouch()
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.optimizeWidth)
  },
  methods: {
    prev() {
      if (this.count === 0) this.count = this.images.length
      this.count -= 1
      this.move()
    },
    next() {
      this.count += 1
      if (this.count === this.images.length) this.count = 0
      this.move()
    },
    move() {
      this.$el.querySelector('.slides').style.left = `-${
        this.count * this.sliderWidth
      }px`
    },
    optimizeWidth() {
      this.sliderWidth = this.$el.offsetWidth
      this.$el.querySelectorAll('.slide').forEach((slide) => {
        slide.style.width = `${this.$el.offsetWidth}px`
      })
    },
    handleTouch() {
      this.$el.addEventListener('touchstart', (e) => {
        this.touchStart = e.touches[0].clientX
      })
      this.$el.addEventListener('touchend', (e) => {
        this.touchEnd = e.changedTouches[0].clientX
        if (this.touchStart < this.touchEnd) {
          this.prev()
        } else if (this.touchStart > this.touchEnd) {
          this.next()
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss">
.slider {
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  button {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 6px;
      height: 10px;
    }
  }
  .slide-next {
    right: 0;
    img {
      margin-right: 2px;
      box-shadow: 0 4px 50px rgba(0, 102, 255, 0.1);
    }
  }
  .slide-prev {
    left: 0;
    img {
      transform: rotate(180deg);
      margin-left: 2px;
      box-shadow: 0 4px 50px rgba(0, 102, 255, 0.1);
    }
  }
  .slides {
    display: flex;
    position: relative;
    left: 0;
    width: max-content;
    height: 100%;
    transition: all 0.5s ease;
  }
  .slide {
    width: 194px;
    img {
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .points {
    display: none;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(35, 35, 40, 0.4);
    padding: 0.125rem;
    border-radius: var(--fr);
  }

  .point {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 50%;
    &:not(:last-of-type) {
      margin-right: 0.25rem;
    }
    &.active {
      background-color: #565661;
    }
  }
}
@media screen and (min-width: 1024px) {
  .slider {
    button {
      width: 40px;
      height: 40px;
      img {
        width: 18px;
        height: 32px;
      }
    }
    .slide-next {
      right: 0;
      margin-right: 6px;
    }
    .slide-prev {
      left: 0;
      img {
        transform: rotate(180deg);
        margin-left: 6px;
      }
    }
    .points {
      padding: 0.25rem;
    }
    .point {
      width: 0.375rem;
      height: 0.375rem;
      &:not(:last-of-type) {
        margin-right: 0.375rem;
      }
    }
  }
}
</style>
