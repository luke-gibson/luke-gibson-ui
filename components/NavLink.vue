<template>
    <NuxtLink class="group flex items-center py-3">
      <span class="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
        <slot/>
      </span>
    </NuxtLink>
</template>
<style scoped>
  .group.router-link-active .nav-indicator {
    width: 4rem;
    background-color: #e2e8f0;
  }

  .group.router-link-active .nav-text {
    color: #e2e8f0;
  }
</style>