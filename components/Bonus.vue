<template>
  <section class="bonus section container">
    <h2>Приятное</h2>
    <ul class="ul">
      <li v-for="item in bonusList" :key="item">{{ item }}</li>
    </ul>
    <div class="images">
      <img
        class="images-1"
        :src="`${$router.options.base}slides/oblaka-studio-slide-bonus-1.jpg`"
        alt="oblaka-studio-sbp"
      />
      <img
        class="images-2"
        :src="`${$router.options.base}slides/oblaka-studio-slide-bonus-2.jpg`"
        alt="oblaka-studio-sbp"
      />
      <img
        class="images-3"
        :src="`${$router.options.base}slides/oblaka-studio-slide-bonus-3.jpg`"
        alt="oblaka-studio-sbp"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Bonus',
  data() {
    return {
      bonusList: null,
    }
  },
  async fetch() {
    this.bonusList = await this.$content('lists')
      .fetch()
      .then((r) => r.bonusList)
  },
}
</script>

<style></style>
