<script setup lang="ts">
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const uiError = ref("");

const login = async () => {
  uiError.value = "";

  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    uiError.value = "Please enter correct credentials";
  } else {
    uiError.value = "";
    navigateTo("/account");
  }
};
</script>

<template>
  <section class="flex flex-col align-middle" aria-label="Get in touch">
    <article
      class="rounded bg-slate-800/50 flex flex-col shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] px-4 md:px-8 py-10"
    >
      <form @submit.prevent="login">
        <div class="">
          <label
            class="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
            for="inline-full-name"
          >
            Email
          </label>
          <input
            v-model="email"
            class="bg-transparent border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight text-white focus:text-slate-900 focus:outline-none focus:bg-white focus:border-teal-400/70"
            type="text"
          />
        </div>

        <div class="mt-4">
          <label
            class="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200"
            for="inline-password"
          >
            Password
          </label>
          <input
            v-model="password"
            class="bg-transparent appearance-none border-2 transition-all border-gray-200 rounded w-full py-2 px-4 text-white focus:text-slate-900 leading-tight focus:outline-none focus:bg-white focus:border-teal-400/70"
            type="password"
          />
          <span v-if="uiError" class="mt-2 block text-red-600"
            >{{ uiError }}</span
          >
        </div>
        <input
          type="submit"
          class="mt-6 inline-block rounded-full bg-teal-400/10 hover:bg-teal-400/70 transition duration-300 px-5 py-2 cursor-pointer text-xs font-medium leading-5 text-teal-300 hover:text-slate-95"
        />
      </form>
    </article>
  </section>
</template>
