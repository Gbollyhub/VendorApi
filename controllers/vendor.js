//The controller contains the functions of the endpoints

// importing the vendor model from model folder
const Vendor = require('../model/vendor')

//Function for get the vendor by their Id

//so anything the app sees /:vendorId it finds that vendor and saves the details in the background as req.profile
exports.getById = (req, res, next, id) => {

    Vendor.findById(id) //here we just said Mongodb find this id in the database
    .exec((err, result) => { //here takes two argument error and result
        if(err || !result ){ // if it returns error or no post
          return res.status(400).json({error: err}) // return th error
        }
            req.profile = result; // save the result iin req.profile
            next(); //go to the next function
    })
}

//Function for deleting the vendor
exports.DeleteVendor = (req, res) => {
    //here remember req.profile is details of the vendor which was saved in the background
    //so we put it in a variable vendor
    let vendor = req.profile
    // which is then removed in the database
    vendor.remove( (err, vendor) => {
          if(err){
            return res.status(400).json({
                error: err,
                message: "Unable to delete"
            });
          }
          res.json({
              message: "Post Deleted",
              vendor: req.profile
          })
    })
}

//function for adding vendor
exports.addVendor = (req, res) => {   
   const vendor = new Vendor(req.body); // req.body is input from the user
   vendor.save((err, result) => {
       if(err){
        return  res.status(400).json({
               error: err
           })
       }
       res.json(result)
   })
}

//fuction for grabing all the vendors
exports.allVendor = (req, res) => {
  const posts = Vendor.find()
   .sort({ created : -1})
   .then( posts => {
       res.json(posts)
   })
}

// return the vendors details 
exports.getVendor = (req, res) => {
     return res.json(req.profile);
  }