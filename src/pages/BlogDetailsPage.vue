<script setup>
import { AppState } from '@/AppState.js';
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const blog = computed(() => AppState.activeBlog)


onMounted(() => {
  AppState.activeBlog
  getBlogByBlogId()
})

async function getBlogByBlogId() {
  try {
    await blogService.getBlogByBlogId(route.params.blogId)
  }
  catch (error) {
    Pop.error(error, 'COULD NOT GET BLOGS BY Blog ID');
    logger.log('could not get blogs by blog id', error)
  }
}

</script>


<template>
  <section class="container" v-if="blog">
    <div class="row justify-content-center">
      <div class="col-md-10 border border-3 border-custom-purple rounded-4 mt-5">
        <div class="mt-3 mb-3 d-flex flex-column align-items-center">
          <div>
            <img
              :src="blog.imgUrl || 'https://media.istockphoto.com/id/1573249349/photo/cat-face-meme.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqbadSpx9y1sUvUjbO-zTr4iRDv2inL5XfOhts5-jGs='"
              alt="" class="pt-2 rounded-4">
          </div>
        </div>
        <div class="d-flex flex-row justify-content-evenly">
          <div>
            <img :src="blog.creator.picture" alt="" class="d-flex flex-start creator-img">
          </div>
          <div class="mt-3 mb-3 d-flex justify-content-center align-items-center">
            <span class="ms-3">
              <h1>{{ blog.title }}</h1>
              <small class="d-flex flex-column ms-0">{{ blog.creator.name }}</small>
              <small>Created on {{ blog.createdAt.toLocaleDateString() }}</small>
            </span>
          </div>
        </div>
        <div>
          <div>
            <p class="d-block fs-3 p-3">{{ blog.body }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
  <p v-else>Loading</p>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 8em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: flex-start;
}
</style>