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
    <div class="row">
      <div class="col">
        <div>{{ profile }}</div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>