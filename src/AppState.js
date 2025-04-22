import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Blogs.js').Blog[]} user info from the Codeworks API*/
  blogs: [],
  /** @type {import('./models/Blogs.js').Blog} user info from the Codeworks API*/
  activeBlog: null,
  /** @type {import('./models/Profile.js').Profile} selected profile from the database*/
  activeProfile: null,
})

