<script setup lang="ts">
import { useMouse } from "@vueuse/core";
import HeaderComponent from "~/components/HeaderComponent.vue";

const { x, y } = useMouse();
</script>

<template>
  <main class="min-h-screen w-screen relative overflow-hidden bg-slate-900">
    <div
      class="absolute bg-[#1D4ED8] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl opacity-15"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `500px`,
        height: `500px`,
      }"
    ></div>
    <section
      class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <div class="lg:flex lg:justify-between lg:gap-4 min-h-screen">
        <slot />
      </div>
    </section>
  </main>
</template>
