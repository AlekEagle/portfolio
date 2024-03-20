<template>
  <Transition name="img-viewer">
    <div class="fullscreen-image-viewer" v-if="showing" @click.self="close()">
      <img
        class="close"
        src="@/assets/images/close.svg"
        alt="Close Image Viewer"
        @click="close()"
      />
      <img :src="src" alt="Fullscreen image viewer" />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const showing = ref(false),
    src = ref('');

  function open(imgSrc: string) {
    src.value = imgSrc;
    showing.value = true;
  }

  function close() {
    showing.value = false;
    src.value = '';
  }

  // TODO: Zoom in and out on scroll using mouse pointer as pivot

  defineExpose({ open, close });
</script>

<style scoped>
  .fullscreen-image-viewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .fullscreen-image-viewer img.close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    filter: invert(1);
  }

  .fullscreen-image-viewer img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .img-viewer-enter-active,
  .img-viewer-leave-active {
    transition: opacity 0.5s;
  }

  .img-viewer-enter-from,
  .img-viewer-leave-to {
    opacity: 0;
  }

  .img-viewer-enter-to,
  .img-viewer-leave-from {
    opacity: 1;
  }
</style>
