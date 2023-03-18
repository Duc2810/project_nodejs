import Express from "express";

const configViewEngine = (app) => {
    app.use(Express.static('./src/public'))// chi dc phep sd data tu file public

    app.set('view engine', 'ejs')
    app.set('views', './src/views')
}


export default configViewEngine;