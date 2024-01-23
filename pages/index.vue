<script setup lang="ts">
useSeoMeta({
  title: 'Inicio',
});

const { data } = await useFetch('/api/posts', {
  key: 'posts',
});
</script>

<template>
  <h1 class="text-xl lg:text-2xl font-bold tracking-tight">Para ti</h1>
  <PostsCard
    v-if="data?.posts.length"
    v-for="post in data?.posts"
    :key="post.id"
    v-bind="post"
  />
  <p v-else>No hay posts en este momento.</p>
</template>

<style scoped></style>
