<template>
  <div class="fancy-header">
    <h1>Hey, my name is Alek.</h1>
    <h2>so yeah, im am a {{ developer }}.</h2>
  </div>
  <HeroContainer>
    <Hero title="I write code." :src="chatGPT" @click="fiv?.open(chatGPT)">
      And sometimes it works.
    </Hero>
    <Hero title="I also made Dad Bot" :src="dad">
      That Dad Joke Discord Bot.
    </Hero>
  </HeroContainer>
  <FullscreenImageViewer :src="alekChin" ref="fiv" />
</template>

<script lang="ts" setup>
  import FullscreenImageViewer from '@/components/FullscreenImageViewer.vue';
  import HeroContainer from '@/components/HeroContainer.vue';
  import Hero from '@/components/Hero.vue';
  import alekChin from '@/assets/images/alekchin.jpg';
  import dad from '@/assets/images/dad.png';
  import alerkPog from '@/assets/images/alerkpog.png';
  import chatGPT from '@/assets/images/chatgpt.png';
  import { ref, computed } from 'vue';

  const fiv = ref<InstanceType<typeof FullscreenImageViewer>>(),
    developer = computed(() => {
      const msgs = [
        'developer',
        'develope.r',
        'delvoepr',
        'deverlop',
        'developmer',
        'devoperl',
        'develper',
        'develoer',
      ];
      return msgs[Math.floor(Math.random() * msgs.length)];
    });
</script>

<style scoped>
  .fancy-header {
    text-align: center;
    padding: 20px;
    background-image: url(@/assets/images/alekchin.jpg);
    background-position: right;
    background-size: 100% 100%;
    /* A silly trick to reduce the brightness of the background image */
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
    margin-bottom: 2rem;
  }
</style>
