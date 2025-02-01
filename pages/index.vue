<script setup lang="ts">
const skills = [
  {
    name: 'HTML5',
  },
  {
    name: 'CSS',
  },
  {
    name: 'SCSS'
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'React',
  },
  {
    name: 'Next JS',
  }, 
  {
    name: 'Vue 3',
  },
  {
    name: 'Nuxt JS',
  },
  {
    name: 'Jest'
  },
  {
    name: 'Docker'
  },
  {
    name: 'Webpack',
  },
  {
    name: 'Vite'
  },
  {
    name: 'Strapi CMS'
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
    name: 'Figma'
  },
  {
    name: 'Adobe CC'
  },
  {
    name: 'Affinity'
  },
  {
    name: 'DevOps',
  },
  {
    name: 'Jira'
  },
  {
    name: 'Trello'
  },
  {
    name: 'Monday'
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
        Back in 2015, my journey into web design and development started unexpectedly while working as an Estate Agent. When my agency decided to rebrand, they needed a new logo, website, and email signatures. Always passionate about design, I eagerly took on the challenge of creating the email signatures myself. After researching best practices, I opened Sublime Text and started writing HTML and CSS for the first time. Within hours, I was hooked, and what started as a small task quickly turned into a deep fascination with web development.
      </p>
      <p class="mb-4">
        Since then, I’ve honed my skills, specialising in building accessible, user-friendly, and visually engaging websites. As a web designer and developer based in Hampshire, I focus on creating seamless user experiences, ensuring that every site I build is not only beautifully designed but also well-structured, responsive, and easy to maintain. Whether working on freelance projects or for my employer, I love that perfect balance between creativity and functionality, bringing ideas to life through intuitive web design and clean, efficient code.
      </p>
      <p class="mb-4">
        With years of experience in front-end and back-end development, I’ve worked with technologies such as HTML, CSS, JavaScript, and content management systems like Strapi, Umbraco, and Optimizely. My goal is to build websites that not only look great but also perform exceptionally well in terms of speed, accessibility, and SEO.
      </p>
      <p>
        If you’re looking for a web designer and developer in Hampshire to create a bespoke website, refresh your existing site, or provide ongoing web support, I’d love to help bring your vision to life.
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
