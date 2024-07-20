<script setup lang="ts">
  const projects = [
    {
      image: "https://res.cloudinary.com/dqqarxqbu/image/upload/v1721416168/Luke%20Gibson%20Design/czone_suvy2t.jpg",
      alt: "Czone - Image of a boat sailing",
      title: "CZONE - Navico Group Employee",
      copy: "As the Lead Developer on this project at Navico Group, I built the CZone brand website using Optimizely CMS 12, focusing on SEO and technical performance. I created a user-friendly CMS experience that allows our web managers to quickly build high-quality websites without compromising on technical standards.",
      link: "https://czone.navico.com",
      tags: [
        {
          name: "Navico Group Employee",
        },
        {
          name: "Lead Developer",
        },
        {
          name: "Optimizely CMS 12",
        },
        {
          name: "Assisted UX/ UI Design",
        },
      ]
    },
    {
      image: "https://res.cloudinary.com/dqqarxqbu/image/upload/v1639579118/Luke%20Gibson%20Design/New%20site/spectrumWebP_eju1zo.webp",
      alt: "Spectrum Workplace - Image of a finely designed and decorated office",
      title: "SPECTRUM WORKPLACE",
      copy: "I collaborated with SPECTRUM WORKPLACE to design and develop their website from scratch using the Umbraco CMS, empowering them with full control over their site’s content. This seamless integration ensures they can easily manage and update their digital presence to meet evolving business needs.",
      link: "https://spectrumworkplace.co.uk/",
      tags: [
        {
          name: "Freelance Developer",
        },
        {
          name: "Umbraco CMS",
        },
        {
          name: "UX/ UI Design",
        },
        {
          name: "Web Hosting/ Support",
        },
        {
          name: "Organic SEO",
        },
        {
          name: "Umbraco Forms",
        },
      ]
    },
    {
      image: "https://res.cloudinary.com/dqqarxqbu/image/upload/v1639579119/Luke%20Gibson%20Design/New%20site/agilitaWebP_oqn1jf.webp",
      alt: "Agilita Workspace - Image of a bespoke piece of office furniture",
      title: "AGILITA WORKSPACE",
      copy: "As a freelance web developer and designer, I transformed their website concept into a fully responsive site built on the Umbraco CMS. This involved crafting a user-friendly design and implementing dynamic features, ensuring seamless performance across all devices.",
      link: "https://agilita.co.uk/",
      tags: [
        {
          name: "Freelance Developer",
        },
        {
          name: "Umbraco CMS",
        },
        {
          name: "UX/ UI Design",
        },
        {
          name: "Web Hosting/ Support",
        },
        {
          name: "Organic SEO",
        },
      ]
    },
  ]
</script>

<template>
  <section class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
    <MobileTitle>
      Projects
    </MobileTitle>
    <div>
      <ul class="group/list">
        <ProjectComponent 
          v-for="project in projects"
          :image="project.image"
          :alt="project.alt"
          :title="project.title"
          :copy="project.copy"
          :link="project.link"
          :tags="project.tags"
          ></ProjectComponent>
      </ul>
    </div>
  </section>
</template>