const express = require("express")
const router = express.Router()

// root route
router.get("/", (req, res) => {
    res.render("ourProcess")
})
module.exports = router