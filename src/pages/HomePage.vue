<script setup>
import { AppState } from '@/AppState.js';
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
  <section class="container">
    <div class="row">
      <div class="col-12">
        {{ blogs }}
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
