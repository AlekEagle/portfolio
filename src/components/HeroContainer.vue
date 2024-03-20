<template>
  <div class="heroes">
    <slot />
  </div>
</template>

<style scoped>
  div.heroes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    width: calc(100% - 6rem);
    gap: 2rem;
    margin: 3rem;
  }
</style>
