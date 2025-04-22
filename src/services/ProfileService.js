import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blogs.js"
import { logger } from "@/utils/Logger.js"
import { Account } from "@/models/Account.js"

class ProfileService {
  async getProfileById(creatorId) {
    AppState.activeProfile = null
    const response = await api.get(`api/profile/${creatorId}`)
    const profile = new Account(response.data)
    AppState.activeProfile = profile
    logger.log('got profile by id')
  }

}

export const profileService = new ProfileService()