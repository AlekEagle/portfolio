<template>
  <HeroHeader>
    <template v-slot:title>Hey, my name is Alek.</template>
    <template v-slot:subtitle>
      So yeah, I'm a
      <span
        v-text="characterBuffer"
        @click="typeDeveloper"
        :class="{ 'spelt-properly': speltProperly }"
      />
      <span class="i-beam" v-show="!speltProperly" />
    </template>
  </HeroHeader>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import HeroHeader from '@/components/HeroHeader.vue';

  const spellings = [
    'delvoepr',
    'develoep',
    'develoepr',
    'develoepr',
    'develoer',
    'develoerp',
    'develoerp',
    'develope.r',
    'developmer',
    'develper',
    'develpoer',
    'develpoer',
    'deverlop',
    'devoperl',
    'dvlelper',
    'dvleopor',
    'delvekjalekjlerjoseopselkseljreosepsenelper',
  ];

  const characterBuffer = ref(''),
    speltProperly = ref(true);

  const shuffleArray = (array: any[]) => {
    // Fisher-Yates shuffle (returns a new shuffled array)
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  };

  const typeMinDuration = 70,
    typeMaxDuration = 190,
    deleteInterval = 75,
    reviewDuration = 15e2,
    nextSpellPrepareDuration = 5e2,
    pageLoadWaitDuration = 1e3;

  // I know, this looks like a mess, but it's just a fun way to type out "developer."
  async function typeDeveloper() {
    // If developer hasn't been spelt properly yet and the function is called, then quit early
    if (!speltProperly.value) return;
    // Set speltProperly to false
    speltProperly.value = false;
    // If the character buffer is not empty, clear it
    for (; characterBuffer.value.length > 0; ) {
      await new Promise((resolve) => setTimeout(resolve, deleteInterval));
      characterBuffer.value = characterBuffer.value.slice(0, -1);
    }
    // Shuffle the spellings and take the first 5
    const shuffledSpellings = shuffleArray(spellings).slice(0, 5);
    // Wait a second when the page first loads.
    await new Promise((resolve) => setTimeout(resolve, pageLoadWaitDuration));
    // Loop over the spellings
    for (let i = 0; i < shuffledSpellings.length; i++) {
      // Loop over the characters in the spelling
      for (let j = 0; j < shuffledSpellings[i].length; j++) {
        // Wait a random amount of time between typeMinDuration and typeMaxDuration
        // to simulate typing
        await new Promise((resolve) =>
          setTimeout(
            resolve,
            Math.floor(Math.random() * typeMaxDuration - typeMinDuration) +
              typeMinDuration,
          ),
        );
        // Add the character to the buffer
        characterBuffer.value += shuffledSpellings[i][j];
      }
      // Wait a second to review the spelling
      await new Promise((resolve) => setTimeout(resolve, reviewDuration));
      // Delete the spelling one character at a time
      for (let j = 0; j < shuffledSpellings[i].length; j++) {
        // Delete the last character in intervals determined by deleteInterval, like as if you were
        // holding backspace
        await new Promise((resolve) => setTimeout(resolve, deleteInterval));
        characterBuffer.value = characterBuffer.value.slice(0, -1);
      }
      // Wait half a second before typing the next spelling
      await new Promise((resolve) =>
        setTimeout(resolve, nextSpellPrepareDuration),
      );
    }
    // Eventually, we'll get it right
    for (let i = 0; i < 'developer'.length; i++) {
      await new Promise((resolve) =>
        setTimeout(
          resolve,
          Math.floor(Math.random() * typeMaxDuration - typeMinDuration) +
            typeMinDuration,
        ),
      );
      characterBuffer.value += 'developer'[i];
    }
    await new Promise((resolve) => setTimeout(resolve, reviewDuration));
    // put a period at the end
    characterBuffer.value += '.';
    // Set speltProperly to true
    speltProperly.value = true;
  }

  typeDeveloper();
</script>

<style scoped>
  span.spelt-properly {
    cursor: pointer;
  }

  span.i-beam {
    display: inline-block;
    width: 1px;
    height: 1em;
    background-color: white;
    animation: blink 1s infinite;
    margin-bottom: -3px;
  }

  @keyframes blink {
    5% {
      opacity: 1;
    }
    45% {
      opacity: 0;
    }
    55% {
      opacity: 0;
    }
    95% {
      opacity: 1;
    }
  }
</style>
