import axios from 'axios'

const baseURL = process.env.VUE_APP_BASE_UR

export default axios.create({
  baseURL
})
