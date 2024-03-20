<template>
  <header>
    <div class="primary-header-row">
      <div class="logo-name">
        <RouterLink to="/">
          <img src="@/assets/images/alek-sphere.gif" />
          <h1>Alek Evans</h1>
        </RouterLink>
      </div>
      <div class="hamburger" @click="showNav = !showNav">
        <div />
        <div />
        <div />
      </div>
    </div>
    <Transition name="nav">
      <nav v-if="showNav">
        <ul>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/projects">Projects</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const showNav = ref(false);
</script>

<style scoped>
  header {
    background-color: var(--secondary-ui);
    box-shadow: 0 0 5px 5px var(--secondary-ui);
    padding: 1rem;
    padding-bottom: calc(1rem - 5px);
    /* Lock header to top of page */
    position: sticky;
    top: 0;
    width: calc(100% - 2rem);
    z-index: 5;
  }

  header .primary-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header .primary-header-row .logo-name {
    display: inline-block;
  }

  header .primary-header-row .logo-name a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--primary-text);
    text-decoration: none;
    background-image: unset;
  }

  header .primary-header-row .logo-name a img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 0 15px -3px var(--secondary-text);
  }

  header .primary-header-row .logo-name a h1 {
    font-size: 1.5rem;
    font-family: var(--header-font);
    text-shadow: 0 0 5px var(--secondary-text);
    margin: 0;
    background-image: linear-gradient(90deg, transparent, transparent);
    background-repeat: no-repeat;
    background-position: 0 95%;
    background-size: 100% 2px;
  }

  header .primary-header-row .logo-name a:hover h1 {
    background-image: linear-gradient(
      90deg,
      var(--primary-text),
      var(--secondary-text)
    );
  }

  header .primary-header-row .logo-name a.router-link-active h1 {
    background-image: linear-gradient(
      90deg,
      var(--primary-accent),
      var(--secondary-accent)
    );
  }

  header .primary-header-row .hamburger {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  header .primary-header-row .hamburger div {
    width: 100%;
    height: 2px;
    background-color: var(--primary-text);
  }

  header nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--secondary-ui);
    box-shadow: 0 0 5px 5px var(--secondary-ui);
    position: absolute;
    right: 0;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }

  header nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 1rem;
  }

  header nav ul li a {
    color: var(--primary-text);
    text-decoration: none;
    font-family: var(--header-font);
    font-weight: bold;
    font-size: 1.5rem;
    text-shadow: 0 0 5px var(--secondary-text);
  }

  .nav-enter-active,
  .nav-leave-active {
    transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
  }

  .nav-enter-from,
  .nav-leave-to {
    opacity: 0;
    transform: translateY(-15%);
  }

  .nav-enter-to,
  .nav-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>
