import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogService {
  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log('got blogs', response.data)
  }

}

export const blogService = new BlogService()