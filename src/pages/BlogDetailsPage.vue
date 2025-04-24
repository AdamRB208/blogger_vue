<script setup>
import { AppState } from '@/AppState.js';
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const blog = computed(() => AppState.activeBlog)


onMounted(() => {
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
  <section class="container">
    <div class="row">
      <div class="col-md-10">
        <h1>{{ blog.title }}</h1>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>