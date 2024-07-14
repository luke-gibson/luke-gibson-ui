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
    <MobileTitle>
      About
    </MobileTitle>
    <div>
      <p class="mb-4">
        Back in 2015, I was working as an Estate Agent when the agency I was with decided to rebrand. They needed a new logo, website, and email signatures. I’ve always been passionate about design, so I jumped at the chance to create the email signatures myself. After a bit of research, I opened Sublime Text and started writing HTML and CSS for the first time. I was hooked within hours.
      </p>
      <p class="mb-4">
        Today, I focus on creating accessible user interfaces for my employer and various freelance projects. I love working in that perfect sweet spot between design and development, creating websites that not only look great and are user-friendly but are also well-built and easy to maintain.
      </p>
      <p>
        When I’m not at my laptop, you’ll find me spending time with my wife, our two children, and our dog, Teddy. I’ve also recently embraced a healthier lifestyle, focusing on fitness and nutrition.
      </p>
    </div>
    <h3 class="nav-text text-xs font-bold uppercase tracking-widest text-slate-400  mt-10 block">MY CORE SKLLSET</h3>            
    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">    
      <BadgeComponent v-for="skill in skills">
            {{ skill.name}}
      </BadgeComponent> 
    </ul>
  </section>
</template>
