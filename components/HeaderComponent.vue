<script setup lang="ts">
import NavComponent from './NavComponent.vue';
</script>

<template>
  <header
          class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 relative"
        >
          <div class="text-white z-10">
            <h1 class="ftext-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Luke Gibson
            </h1>
            <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Front End Web Developer
            </h2>
            <p class="mt-4 max-w-xs leading-normal font-light text-slate-400">
              I create pixel-perfect, dynamic, seo friendly, engaging and accessible
              digital products.
            </p>
            <NavComponent></NavComponent>
          </div>
          <div class="ml-1 mt-8 flex items-center">
            <NuxtLink to="/">SOCIAL MEDIA</NuxtLink>
            <NuxtLink to="/">SOCIAL MEDIA</NuxtLink>
          </div>
        </header>
</template>