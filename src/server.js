import Express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "./route/web"

require('dotenv').config() // import dotenv
const port = process.env.PORT || 8080;
const app = Express()

//setup view engine
configViewEngine(app)
//init web route
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})