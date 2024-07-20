<script setup lang="ts"></script>

<template>
  <section class="flex flex-col align-middle" aria-label="Get in touch">        
    <article class="rounded bg-slate-800/50 flex flex-col shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] px-4 md:px-8 pt-10">                    
        <NuxtImg 
            alt="Image of Luke Gibson"
            src="https://res.cloudinary.com/dqqarxqbu/image/upload/v1721414529/Luke_Gibson_profile_p3kfbh.jpg"
            class="rounded-full mx-auto max-w-28 shadow-[0px_0px_0px_2px_rgba(77,182,172,0.8)]"></NuxtImg>
        <h1 class="text-center mt-6 text-2xl tracking-wider text-white">LUKE GIBSON</h1>
        <h3 class="text-center mb-8 text-xs tracking-wide">FRONT END WEB DEVELOPER</h3>
        <p class="text-center">
            I'm always looking to collaborate with fellow developers or businesses needing a website?
        </p>
        <p class="text-center mt-4 text-white/80">
            Let’s grab a coffee and chat!
        </p>
        <div class="mt-8 text-center flex flex-wrap justify-center">
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://wa.me/+447513822562" class="rounded-full bg-teal-400/10 hover:bg-teal-400/70 transition duration-300 px-5 py-3 text-xs font-medium leading-5 text-teal-300 hover:text-slate-950 mr-4 mb-4 max-h-[44px;] flex align-middle">
                Send me a WhatsApp <IconsWhatsApp class="ml-2"></IconsWhatsApp>
            </NuxtLink>
            <NuxtLink to="mailto:hello@lukegibsondesign.co.uk" class="rounded-full bg-teal-400/10 hover:bg-teal-400/70 transition duration-300 px-5 py-3 text-xs font-medium leading-5 text-teal-300 hover:text-slate-950 mr-4 mb-10 max-h-[44px;] flex align-middle">
                Send me an Email <IconsPlane class="ml-2"></IconsPlane>
            </NuxtLink>
        </div>
    </article>
  </section>
</template>