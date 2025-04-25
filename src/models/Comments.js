
export class Comments {
  constructor(data) {
    this.body = data.body
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.createdAt = new Date
    this.updatedAt = data.updatedAt
    this.id = data.id
    this.blogId = data.blogId
  }
}