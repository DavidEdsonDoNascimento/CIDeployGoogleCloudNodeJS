const { Router } = require('express')
const router = Router()

router
  .get('/', (req, res) => {
    res.send(`
    <h1>Link para documentação:</h1>
    <a href="https://github.com/DavidEdsonDoNascimento/NodeJsCIDeployGoogleCloud" target="_blank">Clique aqui</a>`
    )
  })
  .get('/heartbeat', (req, res) => {
    res.status(200).json({ msg: 'there is heartbeat', api: true })
  })

module.exports = router
