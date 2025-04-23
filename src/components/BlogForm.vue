<script setup>
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const blogData = ref({
  title: '',
  imgUrl: '',
  body: '',
})

async function createBlog() {
  try {
    logger.log(blogData.value)
    await blogService.createBlog(blogData.value)
  }
  catch (error) {
    Pop.error(error, 'COULD NOT CREATE BLOG');
    logger.log('could not create blog', error)
  }
}

</script>


<template>
  <section class="container d-flex">
    <div class="row justify-content-center w-50">
      <div class="col-md-6 w-100">
        <form @submit.prevent="createBlog()" class="rounded p-2 mb-5">
          <h4>Create a new blog</h4>
          <div class="mb-3">
            <label for="blogTitle" class="form-label">Title</label>
            <input v-model="blogData.title" type="text" class="form-control" id="blogTitle" name="blogTitle" required
              minlength="1" maxlength="100">
          </div>
          <div class="mb-3">
            <label for="blogUrl" class="form-label">Image URL here</label>
            <input v-model="blogData.imgUrl" type="url" class="form-control" id="blogUrl" name="blogUrl"
              maxlength="500">
          </div>
          <div class="mb-3">
            <label for="blogBody" class="form-label">Body</label>
            <textarea v-model="blogData.body" type="text" class="form-control" id="blogBody" name="blogBody"
              maxlength="10000"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Post It!</button>
        </form>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
h4 {
  color: #B8ED12;
}

input {
  outline: solid 1px #4712ED, ;
}

textarea {
  outline: solid 1px #4712ED, ;
}

button {
  border-color: #B8ED12;
  background-color: #B8ED12;
}

form {
  background-color: rgba(128, 128, 128, 0.531);
}

.form-control {
  background-color: rgba(128, 128, 128, 0.531);
}
</style>