const{ Router } = require("express")
const { getCar, postCar, updateCar, getCarOne } = require("../controllers/car.controller")
const router = Router()

router.route('/').get(getCar).post(postCar);
router.route("/:id").get(getCarOne).put(updateCar);

module.exports = router