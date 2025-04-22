<script setup>
import { AppState } from '@/AppState.js';
import { Profile } from '@/models/Profile.js';
import { profileService } from '@/services/ProfileService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const profile = computed(() => AppState.activeProfile)


onMounted(() => {
  getProfileById()
})

watch(route, () => {
  getProfileById()
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
</script>


<template>
  <section class="container">
    <div v-if="profile" class="row justify-content-center">
      <div class="col-md-10 d-flex justify-content-evenly m-5 border border-custom-purple rounded-4 p-3">
        <img :src="profile.picture" :alt="`profile image of ${profile.name}`" class="profile-img">
        <h3>{{ profile.name }}</h3>
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
</style>