<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
  import Header from '@/components/Header.vue';
</script>

<style>
  :root {
    --header-font: Montserrat, sans-serif;
    --body-font: Ubuntu, sans-serif;
    --mono-font: 'Source Code Pro', monospace;
    --primary-ui: #272727;
    --secondary-ui: #161616;
    --primary-hover-ui: #3a3a3a;
    --secondary-hover-ui: #252525;
    --primary-text: #ffffff;
    --secondary-text: #949494;
    --primary-accent: #00faff;
    --secondary-accent: #7084e6;
  }

  ::-webkit-scrollbar {
    background-color: var(--secondary-ui);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary-text);
  }

  body {
    background-color: var(--primary-ui);
    color: var(--primary-text);
    margin: 0;
    overflow: hidden auto;
    font-family: var(--body-font);
  }

  a {
    background-image: linear-gradient(90deg, transparent, transparent);
    background-repeat: no-repeat;
    background-position: 0 95%;
    background-size: 100% 2px;
  }

  a:hover {
    background-image: linear-gradient(
      90deg,
      var(--primary-text),
      var(--secondary-text)
    );
  }

  a.router-link-active {
    background-image: linear-gradient(
      90deg,
      var(--primary-accent),
      var(--secondary-accent)
    );
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--header-font);
  }

  button {
    border: solid 1px var(--primary-ui);
    background-color: var(--secondary-ui);
    color: var(--primary-text);
    border-radius: 5px;
    font-family: 'Comic Sans MS', sans-serif;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.3rem;
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }

  button:hover {
    background-color: var(--secondary-hover-ui);
    border-color: var(--secondary-accent);
    box-shadow: inset 0 0 2px var(--secondary-accent),
      0 0 2px var(--secondary-accent);
  }

  button:active {
    border-color: var(--primary-accent);
    box-shadow: inset 0 0 5px var(--primary-accent),
      0 0 5px var(--primary-accent);
  }
</style>
