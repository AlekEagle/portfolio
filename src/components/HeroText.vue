<template>
  <div class="hero-text">
    <h2><slot name="title"></slot></h2>
    <p><slot name="content"></slot></p>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
  .hero-text {
    margin: 1rem;
    align-self: flex-start;
  }

  .hero-text h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .hero-text:nth-child(even) {
    text-align: right;
  }

  .hero-text p {
    line-height: 1.5;
    text-align: justify;
    font-size: large;
    padding: 0 3rem;
  }

  p a {
    color: var(--primary-accent);
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    .hero-text {
      text-align: center;
    }

    .hero-text:nth-child(even) {
      text-align: center;
    }

    .hero-text p {
      text-align-last: center;
      font-size: larger;
      padding: 0;
    }
  }
</style>
