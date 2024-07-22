<script setup lang="ts">

  interface Experience {
    id: number;
    title: string;
    company: string;
    date: string;
    url: string;
    content: string;
  }

  const experiences = ref<Experience[]>([]);
  const isLoading = ref<boolean>(true);
  const client = useSupabaseClient();

  const fetchExperiences = async () => {
    try {
      const { data, error } = await client
        .from<Experience>('experience')
        .select('id, title, company, date, url, content');

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        experiences.value = data;
      }
    } catch (err) {
      console.error('Error fetching experiences:', err);
    } finally {
      isLoading.value = false; 
    }
  };

  onMounted(() => {
    fetchExperiences();
  });
</script>

<template>
  <section class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
    <MobileTitle>
      Experience
    </MobileTitle>
    <div>
      <div v-if="isLoading" class="text-center text-gray-500">
        <div class="flex justify-center items-start">
          <div class="rounded-full h-10 w-10 bg-teal-300/50 animate-ping"></div>
        </div>
      </div>
      <ol v-else class="group/list">
        <ExperienceComponent
          v-for="experience in experiences"
          :id="experience.id"
          :key="experience.id"
          :title="experience.title"
          :company="experience.company"
          :date="experience.date"
          :url="experience.url"
          :content="experience.content"
        ></ExperienceComponent>
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