<template>
  <HeroTextContainer>
    <HeroText>
      <template v-slot:title>So Who Am I?</template>
      <template v-slot:content>
        I am a passionate computer science enthusiast with a strong interest in
        programming, web development, and cybersecurity. I have been programming
        since 2017, and I have experience with a wide range of technologies and
        languages. I am always eager to learn new things and take on new
        challenges.
      </template>
    </HeroText>
    <HeroText>
      <template v-slot:title>Computer Science</template>
      <template v-slot:content>
        With extensive experience in computer science, I have had the
        opportunity to work with a wide range of technologies, including
        microcontrollers, RESTful APIs, web apps, and mobile apps. My expertise
        also extends to hardware and server setup and maintenance. I take pride
        in my ability to write code for diverse applications and effectively
        manage servers for personal projects, small businesses, and non-profit
        organizations.
      </template>
    </HeroText>
    <HeroText>
      <template v-slot:title>Cybersecurity</template>
      <template v-slot:content>
        With a deep passion for computer science, I have acquired extensive
        knowledge and experience in the field, specializing in offensive and
        defensive cybersecurity. I take pride in my ability to secure systems
        and identify vulnerabilities, providing assistance to friends, family,
        and organizations in meeting their cybersecurity needs. Notably, my team
        achieved 3rd place in the silver tier nationally in the prestigious
        CyberPatriot competition. I am actively pursuing certifications,
        including CompTIA A+, Security+, and Network+, to further enhance my
        skills and expertise.
      </template>
    </HeroText>
    <HeroText>
      <template v-slot:title>Programming Languages</template>
      <template v-slot:content>
        My exploration of programming languages encompasses a wide range,
        including C, C++, C#, Java, JavaScript, TypeScript, Python, Rust, Lua,
        and more. While my primary focus remains on JavaScript and TypeScript,
        knowledge of the other languages has allowed me to develop a deeper
        understanding of programming concepts and paradigms.
      </template>
    </HeroText>
    <HeroText>
      <template v-slot:title>Web Development</template>
      <template v-slot:content>
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
      </template>
    </HeroText>
    <HeroText>
      <template v-slot:title>Open Source</template>
      <template v-slot:content>
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
      </template>
    </HeroText>
  </HeroTextContainer>
</template>

<script lang="ts" setup>
  import HeroText from '@/components/HeroText.vue';
  import HeroTextContainer from '@/components/HeroTextContainer.vue';
</script>
