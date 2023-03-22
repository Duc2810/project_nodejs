import Express from "express";
import homeController from "../controller/homeController";
let router = Express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:userId', homeController.getDetailPage)
    router.post('/create-users', homeController.createUser)



    return app.use("/", router)

}

export default initWebRoute;