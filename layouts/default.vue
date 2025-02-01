<script setup lang="ts">
useSeoMeta({
  title: 'Luke Gibson | Web Designer and Developer Hampshire',
  ogTitle: 'Luke Gibson | Web Designer and Developer Waterlooville, Hampshire',
  description: 'I create pixel-perfect, responsive, dynamic, seo friendly, engaging and accessible digital products.',
  ogDescription: 'I create pixel-perfect, responsive, dynamic, seo friendly, engaging and accessible digital products.',
  ogImage: 'https://res.cloudinary.com/dqqarxqbu/image/upload/v1720907553/cover_wfxyec.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <MouseMove>
    <HeaderComponent></HeaderComponent>
    <section class="pt-16 lg:w-2/3 lg:py-24 relative">
      <slot />
    </section>
  </MouseMove>
</template>
