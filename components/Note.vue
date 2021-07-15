<template>
  <div class="note" :color="color">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    color: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss">
.note {
  width: 295px;
  height: -webkit-max-content;
  height: -moz-max-content;
  height: max-content;
  line-height: 23px;
  padding: 20px 24px;
  border-radius: 20px;
  border-top-left-radius: 0;
  margin-bottom: 52px;
  position: relative;
  z-index: 1;
  background-color: #fff;
  &:before {
    content: '';
    position: absolute;
    top: -14px;
    left: -24px;
    width: 42px;
    height: 42px;
    z-index: -1;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA0NyA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNjk3NTEgMTYuNTMzNEw0Ni44ODE3IDE2LjA2ODNMMzAuMDg1MSA0OC4xNjkyTDguNjk3NTEgMTYuNTMzNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);
    background-repeat: no-repeat;
    background-size: contain;
  }

  &[color='green'] {
    background-color: var(--light-green);
  }

  &[color='green']:before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA0NyA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNjk3NTEgMTYuNTMzNEw0Ni44ODE3IDE2LjA2ODNMMzAuMDg1MSA0OC4xNjkyTDguNjk3NTEgMTYuNTMzNFoiIGZpbGw9IiNkM2Y3ZTkiLz4KPC9zdmc+Cg==);
  }

  &[color='yellow'] {
    background-color: var(--yellow);
  }

  &[color='yellow']:before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA0NyA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNjk3NTEgMTYuNTMzNEw0Ni44ODE3IDE2LjA2ODNMMzAuMDg1MSA0OC4xNjkyTDguNjk3NTEgMTYuNTMzNFoiIGZpbGw9IiNGRkVBQkUiLz4KPC9zdmc+Cg==);
  }
}

@media screen and (min-width: 1024px) {
  .note {
    width: 318px;
  }
}
</style>
