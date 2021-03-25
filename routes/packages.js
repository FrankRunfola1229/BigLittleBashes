const express = require("express")
const router = express.Router()

// nfl route
router.get("/", (req, res) => {
    res.render("packages")
})

// weddings route
router.get("/weddings", (req, res) => {
    res.render("packages/weddings")
})

// birthdays route
router.get("/birthdays", (req, res) => {
    res.render("packages/birthdays")
})

// showers route
router.get("/showers", (req, res) => {
    res.render("packages/showers")
})

// milestones route
router.get("/milestones", (req, res) => {
    res.render("packages/milestones")
})


// holidays route
router.get("/holidays", (req, res) => {
    res.render("packages/holidays")
})

// eastMeetsWest route
router.get("/eastMeetsWest", (req, res) => {
    res.render("packages/eastMeetsWest")
})

module.exports = router