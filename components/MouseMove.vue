<script setup lang="ts">
  import { useMouse } from "@vueuse/core";
  const { x, y } = useMouse();
</script>

<template>
  <main class="min-h-screen relative bg-slate-900">
    <div
      class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      :style="{
        background: `radial-gradient(500px at ${x}px ${y}px, rgba(29, 78, 216, 0.2), transparent 80%)`
      }">
    </div>
    <section class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:flex lg:justify-between lg:gap-4 min-h-screen">
        <slot />
      </div>
    </section>
  </main>
</template>