//The routes folder contains all the endpoints for the api
 // imported express server
const express = require('express');

//imported the router fuction from express
const router = express.Router();

//imported functions from controller folder
const { addVendor,getVendor, allVendor, getById, DeleteVendor } = require("../controllers/vendor")

//All the endpoints
router.get('/', allVendor)
router.post('/add-vendor', addVendor)
router.delete('/vendor/:vendorId', DeleteVendor)
router.get('/vendor/:vendorId', getVendor)

//This one means that anytime the app sees /:vendorId eg vendor/3u3h3gt367 (the vendor id), it would fire getById function in the controller
router.param("vendorId", getById)

//exporting the router
module.exports = router;