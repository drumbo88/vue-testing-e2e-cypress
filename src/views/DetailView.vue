<template>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <RouterLink to="/">Volver atrás</RouterLink>
</template>

<script lang="ts" setup>
import PostService from "@/services/PostService";
import { onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const postService = new PostService();
const post = postService.getPost();
onMounted(async () => {
    const route = useRoute()
    const id = route.params.id
    await postService.fetchById(id);
});
</script>
