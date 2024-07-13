<script setup lang="ts"></script>

<template>
  <MouseMove>
    <HeaderComponent></HeaderComponent>
    <section class="pt-16 lg:w-1/2 lg:py-24 relative">
      <slot />
    </section>
  </MouseMove>
</template>
