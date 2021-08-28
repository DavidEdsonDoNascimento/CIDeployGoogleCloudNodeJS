const { Router } = require('express')
const router = Router()

router.get('/heartbeat', (req, res) => {
    res.status(200).json({ msg: 'there is heartbeat', api: true })
})

module.exports = router