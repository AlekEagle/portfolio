<template>
  <div class="hero">
    <img :src="props.src" />
    <div>
      <h1 v-text="props.title" />
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string;
    src: string;
  }>();
</script>

<style scoped>
  div.hero {
    display: flex;
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--secondary-text);
    box-shadow: 0 0 5px transparent;
    transition: box-shadow 0.25s, border-color 0.25s;
    cursor: pointer;
    user-select: none;
  }

  div.hero:hover {
    border-color: var(--primary-text);
    box-shadow: 0 0 10px var(--primary-text);
  }

  div.hero img {
    width: 100%;
    object-fit: cover;
  }

  div.hero div {
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    width: calc(100% - 30px);
    overflow-y: visible;
    height: 20%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 15px;
    opacity: 1;
    transition: opacity 0.25s 0s, height 0.25s 0s;
  }

  div.hero:hover div:not(:hover) {
    opacity: 0.25;
    transition: opacity 0.25s 0.5s, height 0.25s;
  }

  div.hero div:hover {
    height: calc(80% - 20px);
    overflow-y: auto;
  }

  div.hero div * {
    margin: 0;
  }

  div.hero div h1 {
    font-size: 1.3em;
  }
</style>
