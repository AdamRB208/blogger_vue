export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.published = data.published
    this.creator = data.creator
    this.createdAt = new Date()
    this.creatorId = data.creatorId
  }
}