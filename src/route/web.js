import Express from "express";
import homeController from "../controller/homeController";
let router = Express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomePage)


    return app.use("/", router)

}

export default initWebRoute;