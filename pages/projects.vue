<script setup lang="ts">
   interface Project {
    id: number;
    image: string;
    alt: string;
    title: string;
    copy: string;
    link: string;
  }

  const projects = ref<Project[]>([]);
  const isLoading = ref<boolean>(true);
  const client = useSupabaseClient();

  const fetchProjects = async () => {
    try {
      const { data, error } = await client
        .from<Project>('project')
        .select('id, image, alt, title, copy, link');

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        projects.value = data.sort((a, b) => b.id - a.id);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchProjects();
  });
</script>

<template>
  <section class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
    <MobileTitle>
      Projects
    </MobileTitle>
    <div v-if="isLoading" class="text-center text-gray-500">
      <div class="flex justify-center items-start">
          <div class="rounded-full h-10 w-10 bg-teal-300/50 animate-ping"></div>
        </div>
      </div>
      <ul class="group/list">
        <ProjectComponent 
          v-for="project in projects"
          :id="project.id"
          :image="project.image"
          :alt="project.alt"
          :title="project.title"
          :copy="project.copy"
          :link="project.link"
          ></ProjectComponent>
      </ul>
  </section>
</template>