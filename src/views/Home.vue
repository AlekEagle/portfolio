<template>
  <div class="fancy-header">
    <h1>Hey, my name is Alek.</h1>
    <h2
      >so yeah, im am a <span v-text="characterBuffer" /><span
        class="i-beam"
        v-show="!speltProperly"
    /></h2>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';

  const spellings = [
    'develope.r',
    'delvoepr',
    'deverlop',
    'developmer',
    'devoperl',
    'develper',
    'develoer',
  ];

  const characterBuffer = ref(''),
    speltProperly = computed(() => characterBuffer.value === 'developer.');

  async function typeDeveloper() {
    for (let i = 0; i < spellings.length; i++) {
      for (let j = 0; j < spellings[i].length; j++) {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.floor(Math.random() * 100) + 100),
        );
        characterBuffer.value += spellings[i][j];
      }
      await new Promise((resolve) => setTimeout(resolve, 1500));
      for (let j = 0; j < spellings[i].length; j++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        characterBuffer.value = characterBuffer.value.slice(0, -1);
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    // Eventually, we'll get it right
    for (let i = 0; i < 'developer'.length; i++) {
      await new Promise((resolve) =>
        setTimeout(resolve, Math.floor(Math.random() * 100) + 100),
      );
      characterBuffer.value += 'developer'[i];
    }
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // put a period at the end
    characterBuffer.value += '.';
  }

  typeDeveloper();
</script>

<style scoped>
  .fancy-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 350px;
    background-image: url(@/assets/images/alekchin.jpg);
    background-position: right;
    background-size: 100% 100%;
    /* A silly trick to reduce the brightness of the background image */
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
    margin-bottom: 2rem;
  }

  span.i-beam {
    display: inline-block;
    width: 1px;
    height: 1em;
    background-color: white;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
