<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)

</script>


<template>
  <div class="blogModal modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div v-if="blog" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="blogModalLabel">{{ blog.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="blog.imgUrl" :alt="`image for ${blog.creator.name}'s blog post`" class="blog-img w-100 mb-3">
          <p>{{ blog.body }}</p>
          <p>-{{ blog.creator.name }}</p>
        </div>
        <div>
          <p>{{ blog.tags }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.blog-img {
  max-height: 20em;
  object-fit: cover;
}

.blogModal {
  --bs-modal-width: 700px;
}
</style>