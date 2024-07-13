<script setup lang="ts">
  
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 relative">
    <div class="text-white z-10">
      <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <NuxtLink to="/">
          Luke Gibson
        </NuxtLink>
      </h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Front End Web Developer
      </h2>
      <p class="mt-4 max-w-xs leading-normal font-light text-slate-400">
        I create pixel-perfect, responsive, dynamic, seo friendly, engaging and accessible
        digital products.
      </p>
      <NavComponent></NavComponent>
    </div>
    <div class="ml-1 mt-16 flex items-center">
      <SocialIcon to="https://github.com/luke-gibson" aria-label="Luke Gibson GitHub">
        <IconsGitHub></IconsGitHub>
      </SocialIcon>
      <SocialIcon to="https://www.behance.net/lukegibson1" aria-label="Luke Gibson Behance">
        <IconsBeHance></IconsBeHance>
      </SocialIcon>
      <SocialIcon to="https://codepen.io/luke-gibson" aria-label="Luke Gibson Codepen">
        <IconsCodePen></IconsCodePen>
      </SocialIcon>
      <SocialIcon to="https://www.instagram.com/lukegibsondesign" aria-label="Luke Gibson Instagram">
        <IconsInstagram></IconsInstagram>
      </SocialIcon>
      <SocialIcon to="https://www.linkedin.com/in/lukegibson90/" aria-label="Luke Gibson Linkedin">
        <IconsLinkedIn></IconsLinkedIn>
      </SocialIcon>
    </div>
  </header>
</template>