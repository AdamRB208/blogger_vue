<script setup>
import { AppState } from '@/AppState.js';
import { Blog } from '@/models/Blogs.js';
import { computed } from 'vue';


const blogs = computed(() => AppState.activeBlog)

defineProps({
  blogProp: { type: Blog, required: true }
})

</script>


<template>
  <div class="blogModal modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div v-if="blogs" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="blogModalLabel">{{ blogProp.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ blogProp.body }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>