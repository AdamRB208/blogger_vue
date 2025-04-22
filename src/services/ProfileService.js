import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { Profile } from "@/models/Profile.js"

class ProfileService {
  async getProfileById(profileId) {
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('got profile by id', response.data)
    const profile = new Profile(response.data)
    AppState.activeProfile = profile
  }

}

export const profileService = new ProfileService()