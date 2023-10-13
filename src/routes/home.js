const { Router } = require('express')
const axios = require('axios')

const router = Router();

router.all('/about', (req, res) => {
  res.send('about page')
})

router.get('/contact', (req, res) => {
  res.send('contact page')
})

router.get('/dashboard', (req, res) => {
  res.send('dashboard page')
})

router.get('/posts', async (req, res) => {

  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response.data);

  res.send('posts page')
})

module.exports = router;