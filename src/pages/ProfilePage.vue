<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import BlogForm from '@/components/BlogForm.vue';
import { Profile } from '@/models/Profile.js';
import { blogService } from '@/services/BlogService.js';
import { profileService } from '@/services/ProfileService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const profile = computed(() => AppState.activeProfile)

const account = computed(() => AppState.account)

const blogs = computed(() => AppState.profileBlogs)


onMounted(() => {
  getProfileById()
  getBlogsById()
})

watch(route, () => {
  getProfileById()
  getBlogsById()
})


async function getProfileById() {
  try {
    await profileService.getProfileById(route.params.profileId)
  }
  catch (error) {
    Pop.error(error, 'COULD NOT GET PROFILE BY ID');
    logger.log('could not get profile by id', error)
  }
}

async function getBlogsById() {
  try {
    await blogService.getBlogsById(route.params.profileId)
  }
  catch (error) {
    Pop.error(error, 'COULD NOT GET BLOGS BY ID');
    logger.log('could not get blogs by id', error)
  }
}
</script>


<template>
  <section class="container">
    <div v-if="profile" class="row justify-content-center">
      <div
        class="col-md-10 d-flex justify-content-evenly m-5 border border-3 border-custom-purple rounded-4 p-3 profile-card">
        <img :src="profile.picture" :alt="`profile image of ${profile.name}`" class="profile-img">
        <h2>{{ profile.name }}</h2>
      </div>
    </div>
  </section>

  <BlogForm v-if="profile?.id == account?.id && account" />

  <section class="container">
    <div class="row justify-content-center">
      <h3 class="d-flex justify-content-center">{{ profile.name }}'s Blogs</h3>
      <div v-for="Blog in blogs" :key="Blog.id" class="col-md-10 p-0">
        <BlogCard :blogProp="Blog" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.profile-img {
  max-height: 40dvh;
  max-width: 40dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

h2 {
  display: inline-flex;
  align-items: center;
}

h3 {
  color: #B8ED12;
}

.profile-card {
  background-color: rgba(128, 128, 128, 0.531);
}
</style>