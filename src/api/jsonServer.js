import axios from 'axios';

export default axios.create({
  // http://....ngrok.io
  baseURL: process.env.BASE_URL
});
