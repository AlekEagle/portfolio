<template>
  <div class="fancy-header">
    <h1>Hey, my name is Alek.</h1>
    <h2>
      So yeah, I'm a <span v-text="characterBuffer" />
      <span class="i-beam" v-show="!speltProperly" />
    </h2>
  </div>

  <div class="hero-texts">
    <div class="hero-text">
      <h2>Computer Science</h2>
      <p>
        With extensive experience in computer science, I have had the
        opportunity to work with a wide range of technologies, including
        microcontrollers, RESTful APIs, web apps, and mobile apps. My expertise
        also extends to hardware and server setup and maintenance. I take pride
        in my ability to write code for diverse applications and effectively
        manage servers for personal projects, small businesses, and non-profit
        organizations.
      </p>
    </div>
    <div class="hero-text">
      <h2>Cybersecurity</h2>
      <p>
        With a deep passion for computer science, I have acquired extensive
        knowledge and experience in the field, specializing in offensive and
        defensive cybersecurity. I take pride in my ability to secure systems
        and identify vulnerabilities, providing assistance to friends, family,
        and organizations in meeting their cybersecurity needs. Notably, my team
        achieved 3rd place in the silver tier nationally in the prestigious
        CyberPatriot competition. I am actively pursuing certifications,
        including CompTIA A+, Security+, and Network+, to further enhance my
        skills and expertise.
      </p>
    </div>
    <div class="hero-text">
      <h2>Programming Languages</h2>
      <p>
        My exploration of programming languages encompasses a wide range,
        including C, C++, C#, Java, JavaScript, TypeScript, Python, Rust, Lua,
        and more. While my primary focus remains on JavaScript and TypeScript,
        knowledge of the other languages has allowed me to develop a deeper
        understanding of programming concepts and paradigms.
      </p>
    </div>
    <div class="hero-text">
      <h2>Web Development</h2>
      <p>
        My experience towards web development in particular has been a large
        portion of my journey. Working with technologies such as HTML, CSS,
        JavaScript, TypeScript, Vue.js, Node.js, Express.js, PostgreSQL, etc. I
        have been able to create in-depth web apps and websites, a notable
        example being
        <a href="https://alekeagle.me" target="_blank" ref="noreferrer">
          Cumulonimbus</a
        >, an open-source file hosting platform that has been in active
        development since 2019. With the backend written in TypeScript with
        Node.js and Express.js, and the frontend written in TypeScript with
        Vue.js, Cumulonimbus has been a project that has allowed me to explore
        the depths of web development such as RESTful APIs, user authentication,
        and more.
      </p>
    </div>
    <div class="hero-text">
      <h2>Open Source</h2>
      <p>
        Open-source software has been and continues to be a significant part of
        my journey. From contributing to projects and learning how to work with
        others, to creating my own projects and maintaining them, I have gained
        both a deep appreciation for the open-source community and a wealth of
        knowledge and experience that I would not have otherwise learned in a
        traditional setting. I am a firm believer in the power of open-source
        software and the benefits it brings to the world. Because of this, I try
        to contribute to the community as much as I can, whether it be through
        contributing to other projects, creating my own projects, or helping
        others with their projects.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';

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
  ];

  const characterBuffer = ref(''),
    speltProperly = computed(() => characterBuffer.value === 'developer.');

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

  // I know, this looks like a mess, but it's just a fun way to type out "developer."
  async function typeDeveloper() {
    const shuffledSpellings = shuffleArray(spellings).slice(0, 5);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    for (let i = 0; i < shuffledSpellings.length; i++) {
      for (let j = 0; j < shuffledSpellings[i].length; j++) {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.floor(Math.random() * 120) + 70),
        );
        characterBuffer.value += shuffledSpellings[i][j];
      }
      await new Promise((resolve) => setTimeout(resolve, 1500));
      for (let j = 0; j < shuffledSpellings[i].length; j++) {
        await new Promise((resolve) => setTimeout(resolve, 75));
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

  .hero-texts {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .hero-text {
    margin: 1rem;
    align-self: flex-start;
  }

  .hero-text h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 4px var(--primary-accent);
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

    .hero-text p {
      text-align-last: center;
      font-size: larger;
      padding: 0;
    }
  }
</style>
