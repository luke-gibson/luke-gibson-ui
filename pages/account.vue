<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
});

const client = useSupabaseClient();

const signOut = async () => {
  await client.auth.signOut();
  navigateTo('/');
};

const loggedInUser = await useLoggedInUser();
</script>

<template>
    <p>You're logged in as <strong> {{ loggedInUser.user.email }} </strong> click to <button class="font-bold" @click="signOut">Sign out</button></p>        
</template>