<script setup lang="ts">
interface Props {
  id: number;
  title: string;
  company: string;
  date: string;
  url: string;
  content: string;
}

interface Skill {
  id: number;
  name: string;
}

interface JobSkill {
  id: number;
  skill: Skill;
}

interface ExperienceData {
  id: number;
  jobSkill: JobSkill[];
}

const props = defineProps<Props>();
const client = useSupabaseClient();
const skills = ref<string[]>([]);

const fetchSkills = async (experienceId: number): Promise<string[]> => {
  try {
    const { data, error } = await client
      .from<ExperienceData>('experience')
      .select(`
        id,
        jobSkill (
          id,
          skill (
            id,
            name
          )
        )
      `)
      .eq('id', experienceId);

    if (error) {
      throw new Error(error.message);
    }

    return data?.[0]?.jobSkill.map(js => js.skill.name) || [];
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
    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" :aria-label="date">
        {{ date }}
      </header>
      <div class="z-10 sm:col-span-6">
        <h3 class="font-medium leading-snug text-slate-200">
          <div>
            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              :href="url"
              target="_blank"
              rel="noreferrer noopener"
              :aria-label="`${title} at ${company} (opens in a new tab)`">
              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{{ title }} · 
                <span class="inline-block">
                  {{ company }}
                  <IconsArrow></IconsArrow>
                  </span>
              </span>
            </a>
          </div>
        </h3>
        <p class="mt-2 text-sm leading-normal">
          {{ content }}
        </p>
        <ul class="mt-2 flex flex-wrap" aria-label="Technologies used" v-if="skills.length">            
            <BadgeComponent 
                v-for="skill in skills" 
                :key="skill">
                  {{ skill }}
            </BadgeComponent> 
        </ul>
      </div>
    </div>
  </li>
</template>