<template>
  <h1>Mom Bot</h1>
  <h2>Discord's lovable mother figure!</h2>
  <div class="quick-action-buttons-container">
    <button @click="openInvitePopup">Invite</button>
    <a href="https://github.com/AlekEagle/mombot" rel="noopener" target="_blank"
      ><button>GitHub</button></a
    >
  </div>
  <img class="hero-img" src="@/assets/images/mom.png" alt="Mom Bot" />

  <div class="content-box-group-container">
    <ContentBox
      title="Built by the Community"
      span
      :click="{ newTab: true, to: 'https://github.com/AlekEagle/mombot' }"
    >
      <p>
        Like her husband, Mom Bot's code is also open source, so anyone can add
        to or improve Mom!
      </p>
    </ContentBox>
    <ContentBox title="Know her husband?" span click="/dad-bot">
      <p> She's the wife of the biggest father on Discord! </p>
    </ContentBox>
    <ContentBox title="Batteries included!">
      <p>
        Mom Bot comes with batteries included (82 D Cells), so you don't have to
        worry about purchasing them yourself!
      </p>
    </ContentBox>
    <ContentBox title="Add her now!" span :click="openInvitePopup">
      <p>
        Mom Bot is a very special woman, and you should add her to your server!
      </p>
    </ContentBox>
  </div>
</template>

<script lang="ts" setup>
  import ContentBox from '@/components/ContentBox.vue';

  const openInvitePopup = async () => {
    const url = 'https://alekeagle.com/mom-bot/invite';
    const win = window.open(
      url,
      '_blank',
      'width=600,height=600,menubar=no,toolbar=no,location=no,status=no'
    );
    win?.focus();
  };
</script>
