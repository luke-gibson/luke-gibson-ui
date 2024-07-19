<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    copy: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image : {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true
    }
  });
</script>

<template>
  <li class="mb-12">
    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div class="z-10 sm:order-2 sm:col-span-5">
        <h3>
          <a
            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            :href="link"
            target="_blank"
            rel="noreferrer noopener"
            :aria-label="title">
            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {{ title }} <IconsArrow></IconsArrow>
            </span>
          </a>
        </h3>
        <p class="mt-2 text-sm leading-normal">
          {{ copy }}
        </p>
        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used" v-if="tags.length">      
        <BadgeComponent
          v-for="tag in tags" 
          :key="tag.name">
          {{ tag.name }} 
          </BadgeComponent>
        </ul>
      </div>
      <nuxt-img
        :alt="alt"
        loading="lazy"
        width="200"
        height="200"
        decoding="async"
        data-nimg="1"
        class="w-44 h-44 object-cover rounded-md transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-3 sm:translate-y-1"
        style="color: transparent"
        :src="image"
      ></nuxt-img>
    </div>
  </li>
</template>
