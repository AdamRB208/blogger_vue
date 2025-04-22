<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { Blog } from '@/models/Blogs.js';
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
})

async function getBlogs() {
  try {
    await blogService.getBlogs()
  }
  catch (error) {
    Pop.error(error, 'COULD NOT GET BLOGS');
    logger.log('could not get blogs', error)
  }
}

</script>

<template>
  <section class="container d-flex">
    <div class="row justify-content-center">
      <div v-for="Blog in blogs" :key="Blog.id" class="col-11">
        <BlogCard :blogProp="Blog" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
