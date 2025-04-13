<template>
  <div class="hero-texts">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  .hero-texts {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
</style>
