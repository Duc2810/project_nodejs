import Express from "express"
import configViewEngine from "./configs/viewEngine"

const port = 3000
const app = Express()

configViewEngine(app)

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})