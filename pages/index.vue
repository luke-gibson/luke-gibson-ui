<script setup lang="ts">
const skills = [
  {
    name: 'HTML5',
  },
  {
    name: 'CSS/ SCSS',
  },
  {
    name: 'JavaScript ES6',
  },
  {
    name: 'Vue 3',
  },
  {
    name: 'Nuxt 3',
  },
  {
    name: 'Webpack/ Vite',
  },
  {
    name: 'Umbraco CMS',
  },
  {
    name: 'Optimizely CMS',
  },
  {
    name: 'Razor',
  },
  {
    name: 'MS SQL',
  },
  {
    name: 'Tailwind/ Bootstrap',
  },
  {
    name: 'WCAG Accessibility',
  },
  {
    name: 'Agile/ Scrum Master',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'DevOps/ Jira',
  },
]
</script>

<template>
  <section class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        About
      </h2>
    </div>
    <!-- <div class="mb-10">
      <nuxt-img class="h-auto max-w-full rounded-lg shadow-xl shadow-slate-600/10" 
        src="https://res.cloudinary.com/dqqarxqbu/image/upload/v1720904320/LukeGibsonFamily_mumeod.jpg" alt="family portrait">
      </nuxt-img>
    </div> -->
    <div>
      <p class="mb-4">
        Back in 2015, I was working as an Estate Agent when the agency I was with decided to rebrand. They needed a new logo, website, and email signatures. I’ve always been passionate about design, so I jumped at the chance to create the email signatures myself. After a bit of research, I opened Sublime Text and started writing HTML and CSS for the first time. I was hooked within hours.
      </p>
      <p class="mb-4">
        Today, I focus on creating accessible user interfaces for various freelance projects and employers. I love working in that perfect sweet spot between design and development, creating websites that not only look great and are user-friendly but are also well-built and easy to maintain.
      </p>
      <p>
        When I’m not at my laptop, you’ll find me spending time with my wife, our two children, and our dog, Teddy. I’ve also recently embraced a healthier lifestyle, focusing on fitness and nutrition.
      </p>
    </div>
    <h3 class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 mt-10 block">MY CORE SKLLSET</h3>            
    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">    
      <BadgeComponent v-for="skill in skills">
            {{ skill.name}}
      </BadgeComponent> 
    </ul>
  </section>
</template>
