const express = require("express")
const ejsMate = require("ejs-mate")
const app = express()
const bodyParser = require("body-parser")

// requiring routes
const indexRoutes = require("./routes/index")
const blogRoutes = require("./routes/blog")
const contactUsRoutes = require("./routes/contactUs")
const honeyBookRoutes = require("./routes/honeyBook")
const ourProcessRoutes = require("./routes/ourProcess")
const ourStoryRoutes = require("./routes/ourStory")
const packagesRoutes = require("./routes/packages")


app.engine('ejs', ejsMate)
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

//==========================================================================
//  To serve static files such as images, CSS files, and JavaScript files,
//  use the express.static built-in middleware function in Express. 
//  (express.static(root, [options]))
//==========================================================================

app.use(express.static(__dirname + "/public")) // https://expressjs.com/en/starter/static-files.html

app.use("/", indexRoutes)
app.use("/blogRoutes", blogRoutes)
app.use("/contactUsRoutes", contactUsRoutes)
app.use("/honeyBookRoutes", honeyBookRoutes)
app.use("/ourProcessRoutes", ourProcessRoutes)
app.use("/ourStoryRoutes", ourStoryRoutes)
app.use("/packagesRoutes", packagesRoutes)


const port = process.env.PORT || 8080
app.set('port', port);

app.listen(port, () => {
    console.log("Server Started!..")
    console.log(`Directory: ${__dirname}`)
    console.log("Port: " + port)

    app._router.stack.forEach((r) => {
        if (r.route && r.route.path) console.log(r.route.path)
    })
})