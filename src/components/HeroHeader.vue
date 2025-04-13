<template>
  <div class="hero-header" ref="heroHeader">
    <h1><slot name="title"></slot></h1>
    <h2><slot name="subtitle"></slot></h2>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, watchEffect } from 'vue';

  const { src } = defineProps<{
      src?: string;
    }>(),
    heroHeader = ref<HTMLElement>();

  onMounted(() => {
    watchEffect(() => {
      if (heroHeader.value && src) {
        heroHeader.value.style.backgroundImage = `url(${src})`;
      }
    });
  });
</script>

<style scoped>
  .hero-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 350px;
    background-image: url(@/assets/images/alekchin.jpg);

    background-position: center;
    background-size: max(60%, 512px);
    /* A silly trick to reduce the brightness of the background image */
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
    margin-bottom: 2rem;
  }
</style>
