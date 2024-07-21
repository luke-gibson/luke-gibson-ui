<script setup lang="ts">
  const client = useSupabaseClient();
  const { data: experiences } = await client.from("experience").select("title, company, date, url, content");
</script>

<template>
  <section class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
    <MobileTitle>
      Experience
    </MobileTitle>
    <div>
      <ol class="group/list">
        <ExperienceComponent
          v-for="experience in experiences"
          :key="experience.title"
          :title="experience.title"
          :company="experience.company"
          :date="experience.date"
          :url="experience.url"
          :content="experience.content"
        ></ExperienceComponent>
        <!-- <ExperienceComponent
          v-for="experience in experiences"
          :key="experience.title"
          :title="experience.title"
          :company="experience.company"
          :date="experience.date"
          :url="experience.url"
          :content="experience.content"
          :skills="experience.skills"
        ></ExperienceComponent> -->
      </ol>
      <div class="mt-12">
        <NuxtLink
          class="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          to="/LukeGibsonCV2024.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Current (opens in a new tab)">
          <span>View Current CV<IconsArrow></IconsArrow></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
