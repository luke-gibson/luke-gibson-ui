<script setup lang="ts">
const experiences = [
  {
    title: "Front End Developer",
    company: "Navico Group",
    date: "2023 - PRESENT",
    url: "https://www.navico.com/",
    content:
      "I collaborate closely with UI/UX designers on various projects. Together, we have developed a comprehensive component library for our B2C brands. After reviewing our legacy codebase, I recommended rewriting our websites and CMS platform using Optimizely CMS 12. I then built a platform allowing users to create multiple brand websites without development or production releases. I drive all technical decisions, coding standards, and architectural designs. My project enables global style updates in the CMS and selection of components from a large library, resulting in stylish, efficient websites with over 100% improved technical performance and WCAG level AA compliance. Following the successful launch of our first website, I empowered the Digital Marketing team to speed up website delivery by over 70%, while eliminating developer responsibilities for brand styling changes and releases.",
    skills: [      
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript ES6",
      },
      {
        name: "Vue 3"
      },
      {
        name: "Optimizely CMS"
      },
      {
        name: "Figma"
      },
      {
        name: "Gulp/ Webpack"
      },
      {
        name: "BEMIT"
      },
    ],
  },
  {
    title: "Software Developer ",
    company: "Conduent",
    date: "2020 - 2023",
    url: "https://www.conduent.com/",
    content:
      "Working within a medium sized team of developers we collaboratively worked on a number of greenfield and existing projects. Most of my day to day activities include extending .Net Core Web API applications and working on a Blazor frontend. I also utilised my FrontEnd Experience to help create a SCSS/ JavaScript ES6 boilerplate for our Online Case Management applications to enable quick release websites for 30+ dierent councils ensuring WCAG 2.1 compliance to level AA. Whilst employed I obtained a Scrum Master Certificate, helping the team to follow Agile Methodologies.",
    skills: [
      {
        name: ".Net"
      },
      {
        name: "C#"
      },
      {
        name: "Razor"
      },
      {
        name: "REST API"
      },
      {
        name: "SQL"
      },
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Blazor"
      },
    ],
  },
  {
    title: "Junior Software Developer ",
    company: "System1 Group",
    date: "2019 - 2020",
    url: "https://system1group.com/",
    content:
      "Becoming a Junior Software Developer was exactly the challenge I had been waiting for. I worked on a team of 4 developers, as a Junior I was supported by the Senior Developers and regularly use Linkedin Learning and training projects to improve my progression. My day to day role involved working on .Net Core Web & API applications using Entity Framework and the Mediator design patern. Using SQL Server Management Studio I read, create and modify database tables, views and stored procedures where required and within my skill set.",
    skills: [
      {
        name: ".Net"
      },
      {
        name: "C#"
      },
      {
        name: "Razor"
      },
      {
        name: "REST API"
      },
      {
        name: "SQL"
      },
      {
        name: "Entity Framework"
      },
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      }
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "FatFace",
    date: "2018 - 2019",
    url: "https://www.fatface.com/",
    content:
      "I was responsible for creating new templates and pages complying with a strict style guide, ensuring my code was delivered to a high standard. I had very close contact with designers ensuring digital design principles were followed and that accessibility standards, the users experience and a mobile first approach was applied.",
    skills: [
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Gulp",
      },
      {
        name: "Adobe CC",
      },
      {
        name: "Salesforce Commerce",
      },
      {
        name: "Amplience CDN",
      },
      {
        name: "BEMIT"
      },
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Markerstudy",
    date: "2017 - 2018",
    url: "https://www.markerstudy.com/",
    content:
      "After being made redundant in March I was invited back to join the new E-Commerce Team. Working on Pet Insurance websites and providing a white label solution for them to use as a base for all future projects.",
    skills: [
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "jQuery",
      },
      {
        name: ".Net",
      },
      {
        name: "Razor",
      },
      {
        name: "Umbraco CMS",
      },
      {
        name: "Adobe CC",
      },
      {
        name: "BEMIT"
      },
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "TGDH",
    date: "2017 - 2017",
    url: "https://www.tgdh.co.uk",
    content:
      "I worked in a small team building websites using Umbraco. I worked closely with Designers and had regular contact with clients ensuring their requirements were met and provided personal training on Umbraco.",
    skills: [
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "jQuery",
      },
      {
        name: "Umbraco CMS",
      },
      {
        name: "Grunt/Gulp",
      },
      {
        name: "Adobe CC",
      },
      {
        name: "BEMIT"
      },
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Markerstudy",
    date: "2015 - 2017",
    url: "https://www.markerstudy.com/",
    content:
      "I was responsible for building and maintaining Front Ends for insurance websites, working closely with our teams .NET Developers and Project Managers delivering quote and buy websites to tight deadlines.",
    skills: [
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "jQuery",
      },
      {
        name: ".Net",
      },
    ],
  },
];
</script>

<template>
  <section
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>
    </div>
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
          :skills="experience.skills"
        ></ExperienceComponent>
      </ol>
      <div class="mt-12">
        <NuxtLink
          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          to="~/public/LukeGibsonCV2024.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
          ><span
            >View Current
            <!-- -->
            <span class="inline-block"
              >CV<IconsArrow></IconsArrow></span></span
        ></NuxtLink>
      </div>
    </div>
  </section>
</template>
