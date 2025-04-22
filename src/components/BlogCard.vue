<script setup>
import { Blog } from '@/models/Blogs.js';


defineProps({
  blogProp: { type: Blog, required: true }
})
</script>


<template>
  <div class="mt-3 mb-3 border border-3 border-custom-purple rounded-4 p-2 blog-card">
    <div class="d-flex align-items-center">
      <!-- <RouterLink :to="{ name: 'Profile', params: { profileId: blogProp.creatorId } }"> -->
      <img :src="blogProp.creator.picture" alt="profile picture for user" class="creator-img me-3 mb-3"
        :title="`Check out ${blogProp.creator.name}'s profile'`">
      <span>{{ blogProp.creator.name }}</span>
      <!-- </RouterLink> -->
    </div>
    <div>
      <img
        :src="blogProp.imgUrl || 'https://media.istockphoto.com/id/1573249349/photo/cat-face-meme.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqbadSpx9y1sUvUjbO-zTr4iRDv2inL5XfOhts5-jGs='"
        :alt="`image for ${blogProp.creator.name}'s' blog ${blogProp.title}`" class="image-fluid mb-2 rounded-4">
      <h4>{{ blogProp.title }}</h4>
      <p>{{ blogProp.body }}</p>
      <small>{{ blogProp.createdAt }}</small>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img:not(.creator-img) {
  max-height: 50dvh;
  width: 100%;
  object-fit: cover;
}

.creator-img {
  height: 4em;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.blog-card {
  background-color: rgba(128, 128, 128, 0.531);
}

small {
  display: flex;
  justify-content: center;
}
</style>