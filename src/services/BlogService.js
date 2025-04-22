import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blogs.js"
import { AppState } from "@/AppState.js"

class BlogService {
  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log('got blogs', response.data)
    const blogs = response.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
    logger.log('rendering blogs', AppState.blogs)
  }

}

export const blogService = new BlogService()