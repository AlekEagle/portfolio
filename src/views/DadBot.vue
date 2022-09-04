<template>
  <h1>Dad Bot</h1>
  <h2>Discord's lovable stand-in father figure!</h2>
  <div class="quick-action-buttons-container">
    <button @click="openInvitePopup">Invite</button>
    <a href="https://github.com/AlekEagle/dadbot" rel="noopener" target="_blank"
      ><button>GitHub</button></a
    >
  </div>
  <img class="hero-img" src="@/assets/images/dad.png" alt="Dad Bot" />

  <div class="content-box-group-container">
    <ContentBox
      title="Built by the Community"
      span
      :click="{ newTab: true, to: 'https://github.com/AlekEagle/dadbot' }"
    >
      <p>
        Dad Bot's code is open source, so anyone can add to or improve Dad!
      </p>
    </ContentBox>
    <ContentBox
      title="Based on Reaxt's original bot"
      span
      :click="{ newTab: true, to: 'https://github.com/Reaxt' }"
    >
      <p>
        Thank you so much Reaxt for starting the original Dad Bot, without it there wouldn't be a Dad Bot to begin with!
      </p>
    </ContentBox>
    <ContentBox title="Biggest Father Figure on Discord">
      <p>
        With over 3 million users and more than 100 thousand servers, Dad Bot is
        the largest father on Discord!
      </p>
    </ContentBox>
    <ContentBox title="He has a Wife!" span click="/mom-bot">
      <p>
        Mom Bot is Dad Bot's wife, and they have a very special relationship.
      </p>
    </ContentBox>
    <ContentBox title="Batteries included!">
      <p>
        Dad Bot comes with batteries included (82 D Cells), so you don't have to
        worry about purchasing them yourself!
      </p>
    </ContentBox>
    <ContentBox title="Add him now!" span :click="openInvitePopup">
      <p>
        Dad Bot is a very special person, and you should add him to your server!
      </p>
    </ContentBox>
  </div>
</template>

<script lang="ts" setup>
  import ContentBox from '@/components/ContentBox.vue';

  const openInvitePopup = async () => {
    const url = 'https://alekeagle.com/dad-bot/invite';
    const win = window.open(
      url,
      '_blank',
      'width=600,height=600,menubar=no,toolbar=no,location=no,status=no'
    );
    win?.focus();
  };
</script>
