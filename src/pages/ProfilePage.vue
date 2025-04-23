<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { Profile } from '@/models/Profile.js';
import { profileService } from '@/services/ProfileService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const profile = computed(() => AppState.activeProfile)

const blogs = computed(() => AppState.blogs)


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
    await profileService.getBlogsById(route.params.profileId)
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
      <div class="col-md-10 d-flex justify-content-evenly m-5 border border-custom-purple rounded-4 p-3">
        <img :src="profile.picture" :alt="`profile image of ${profile.name}`" class="profile-img">
        <h3>{{ profile.name }}</h3>
      </div>
    </div>
    <div class="row">
      <div v-for="Blog in blogs" :key="Blog.id" class="col-md-9">
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

h3 {
  display: inline-flex;
  align-items: center;
}

.col-md-10 {
  background-color: rgba(128, 128, 128, 0.531);
}
</style>