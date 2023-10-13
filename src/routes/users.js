function UsersRoutes(app) {
  app.get('/profile', (req, res) => {
    res.send('profile page')
  })

  app.get('/userName', (req, res) => {
    res.send('profile user name')
  })
}

module.exports = UsersRoutes