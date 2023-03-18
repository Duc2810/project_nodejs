import Express from "express"
import configViewEngine from "./configs/viewEngine"


require('dotenv').config() // import dotenv
const port = process.env.PORT || 8080;
const app = Express()

configViewEngine(app)

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})