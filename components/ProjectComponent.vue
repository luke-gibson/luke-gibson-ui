<script setup lang="ts">
  interface Props {
  id: number;
  image: string;
  alt: string;
  title: string;
  copy: string;
  link: string;
}

interface Skill {
  id: number;
  name: string;
}

interface ProjectSkill {
  id: number;
  skill: Skill;
}

interface ProjectData {
  id: number;
  projectSkill: ProjectSkill[];
}

const props = defineProps<Props>();
const client = useSupabaseClient();
const skills = ref<string[]>([]);

const fetchSkills = async (projectId: number): Promise<string[]> => {
  try {
    const { data, error } = await client
      .from<ProjectData>('project')
      .select(`
        id,
        projectSkill (
          skill (
            name
          )
        )
      `)
      .eq('id', projectId);

    if (error) {
      throw new Error(error.message);
    }

    return data?.[0]?.projectSkill.map(js => js.skill.name) || [];
  } catch (err) {
    console.error('Error fetching skills:', err);
    return [];
  }
};

onMounted(async () => {
  skills.value = await fetchSkills(props.id);
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
        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used" v-if="skills.length">      
        <BadgeComponent
          v-for="skill in skills" 
          :key="skill">
          {{ skill }} 
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
