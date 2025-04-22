<script setup>
import { AppState } from '@/AppState.js';
import { profileService } from '@/services/ProfileService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const profile = computed(() => AppState.account)


async function getProfileById() {
  try {
    const creatorId = route.params.creatorId
    await profileService.getProfileById(creatorId)
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