import Express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "./route/web"
import pool from "./configs/connectDB"
require('dotenv').config() // import dotenv
const port = process.env.PORT || 8080;
const app = Express()

//use bodyParser
app.use(Express.urlencoded({ extended: true }))
app.use(Express.json())


//setup view engine
configViewEngine(app)
//init web route
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})