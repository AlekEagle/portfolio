<template>
  <h1>My Portfolio</h1>
  <h2>
    Welcome! This is my portfolio for what I've done! Feel free to look around!
    And maybe even hire me!
  </h2>
  <div class="quick-action-buttons-container">
    <button @click="aboutMeModal?.show">About Me</button>
  </div>
  <div class="content-box-group-container">
    <ContentBox title="Dad Bot" span :src="dadImg" click="/dad-bot">
      <p>I'm the guy that made one of Discord's most annoying bots.</p>
    </ContentBox>
    <ContentBox title="Mom Bot" span :src="momImg" click="/mom-bot">
      <p>And Dad Bot's wife of course.</p>
    </ContentBox>
    <ContentBox
      title="Discord RPC"
      span
      :src="drpcImg"
      :click="{ newTab: true, to: 'https://github.com/AlekEagle/discord-rpc' }"
    >
      <p>A program to control your rich presence for Discord!</p>
    </ContentBox>
    <ContentBox
      title="Cumulonimbus"
      span
      :src="cumulonimbusImg"
      :click="{ newTab: true, to: 'https://alekeagle.me' }"
    >
      <p>My public and open-source file sharing service.</p>
    </ContentBox>
    <ContentBox
      title="My GitHub"
      span
      :src="githubImg"
      :click="{ newTab: true, to: 'https://github.com/AlekEagle' }"
    >
      <p>My GitHub profile.</p>
    </ContentBox>
    <ContentBox
      title="This Website"
      span
      :src="circleImg"
      :click="{ newTab: true, to: 'https://github.com/AlekEagle/portfolio' }"
    >
      <p>This website!</p>
    </ContentBox>
    <ContentBox
      title="My GPG Public Key"
      span
      :src="circleImg"
      :click="{ newTab: true, to: 'https://alekeagle.com/pubkey.asc' }"
    >
      <p>
        Need to know it's me or communicate securely? Here's my public GPG key!
        (Also available on the OpenPGP keyserver.)
      </p>
    </ContentBox>
    <ContentBox
      title="Uploadr"
      span
      :src="circleImg"
      :click="{ newTab: true, to: 'https://github.com/AlekEagle/uploadr' }"
    >
      <p>An unofficial successor to ShareNix.</p>
    </ContentBox>
    <ContentBox
      title="Mess with my Keyboard"
      span
      :src="circleImg"
      :click="{ newTab: true, to: 'https://keyboard.alekeagle.com' }"
    >
      <p>Play around and draw all over my keyboard!</p>
    </ContentBox>
    <ContentBox
      title="My Discord Server"
      span
      :src="alekSphereImg"
      :click="{ newTab: true, to: 'https://alekeagle.com/d' }"
    >
      <p>My Discord server.</p>
    </ContentBox>
  </div>

  <iframe
    src="https://canary.discord.com/widget?id=456542159210807307&theme=dark"
    width="350"
    height="500"
    allowtransparency="true"
    frameborder="0"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  ></iframe>

  <Modal title="About Me" cancelable ref="aboutMeModal">
    <p>
      Hi! My name is Alek Evans, and I'm a developer of a myriad of different
      things. I do full-stack web development, but I'm also interested in
      developing Discord bots and programs associated with Discord itself. I'm
      19 and from Utah, but currently I live in Alaska. If you want to get in
      touch, feel free to email me @
      <a href="mailto:contact@alekeagle.com">contact@alekeagle.com</a>.
    </p>
  </Modal>
</template>

<script lang="ts" setup>
  import Modal from '@/components/Modal.vue';
  import ContentBox from '@/components/ContentBox.vue';
  import { ref } from 'vue';
  import circleImg from '@/assets/images/circle.png';
  import dadImg from '@/assets/images/dad.png';
  import momImg from '@/assets/images/mom.png';
  import drpcImg from '@/assets/images/discordrpc.png';
  import cumulonimbusImg from '@/assets/images/Cumulonimbus.svg';
  import githubImg from '@/assets/images/github.svg';
  import alekSphereImg from '@/assets/images/alek-sphere.gif';

  const aboutMeModal = ref<typeof Modal>();
</script>
