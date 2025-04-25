import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "@/models/Blogs.js"
import { AppState } from "@/AppState.js"
import { Comments } from "@/models/Comments.js"

class BlogService {
  async getCommentsByBlogId(blogId) {
    AppState.Comments = []
    const response = await api.get(`api/blogs/${blogId}/comments`)
    logger.log('got comments', response.data)
    AppState.Comments = response.data.map(commentData => new Comments(commentData))
    logger.log(AppState.Comments)
  }

  async getBlogByBlogId(blogId) {
    AppState.activeBlog = null
    const response = await api.get(`api/blogs/${blogId}`)
    logger.log('got blogs by blog id', response.data)
    const blog = new Blog(response.data)
    AppState.activeBlog = blog
    logger.log('rendering active blogs', AppState.activeBlog)
  }

  async deleteBlog(blogId) {
    const response = await api.delete(`api/blogs/${blogId}`)
    logger.log('deleted blog', response.data)
    const blogs = AppState.blogs
    const blogsIndex = blogs.findIndex(blogs => blogs.id == blogId)
    blogs.splice(blogsIndex, 1)
  }

  async createBlog(value) {
    const response = await api.post('api/blogs', value)
    logger.log('created blog', response.data)
    const createdBlog = new Blog(response.data)
    AppState.profileBlogs.unshift(createdBlog)
  }

  async getBlogsById(profileId) {
    AppState.profileBlogs = []
    const response = await api.get(`api/blogs?creatorId=${profileId}`)
    logger.log('got blogs by profile id!', response.data)
    AppState.profileBlogs = response.data.map(blogData => new Blog(blogData))
  }

  // setActiveBlog(blogProp) {
  //   AppState.activeBlog = blogProp
  //   logger.log('setting active blog', blogProp)
  // }

  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log('got blogs', response.data)
    const blogs = response.data.map(pojo => new Blog(pojo))
    AppState.blogs = blogs
    logger.log('rendering blogs', AppState.blogs)
  }

}

export const blogService = new BlogService()