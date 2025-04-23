import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blogs.js"
import { AppState } from "@/AppState.js"

class BlogService {

  async getBlogsById(profileId) {
    AppState.profileBlogs = []
    const response = await api.get(`api/blogs?creatorId=${profileId}`)
    logger.log('got blogs by id!', response.data)
    AppState.profileBlogs = response.data.map(blogData => new Blog(blogData))
  }

  setActiveBlog(blogProp) {
    AppState.activeBlog = blogProp
    logger.log('setting active blog', blogProp)
  }

  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log('got blogs', response.data)
    const blogs = response.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
    logger.log('rendering blogs', AppState.blogs)
  }

}

export const blogService = new BlogService()