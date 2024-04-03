const express = require("express");
require("../src/db/connection");

const MedProducts = require("../src/models/product");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//post request
app.post("/product",async(req,res) =>{
    try{
    const addingMedProducts =new MedProducts(req.body)

    console.log(req.body);
    const insertproduct =await addingMedProducts.save(); 

    console.log(insertproduct)
    res.status(200).json(insertproduct)
    }catch(e){
                res.status(400).send(e);
    }

})
//get request
app.get("/product",async(req,res) =>{
    try{
     const getMedProducts =await MedProducts.find({});
   // console.log(insertproduct)
      res.json(getMedProducts)
    }catch(e){
                res.status(400).send(e);
    }

})
//get request for individual 
app.patch("/product/:productId",async(req,res) =>{
    try{
        const _id= req.params.productId;
     const getProducts =await MedProducts.findById(_id);
      console.log(req.params);
      res.json(getProducts)
    }catch(e){
                res.status(500).send(e);
    }

})
//delete request for individual 
app.delete("/product/:productId",async(req,res) =>{
    try{
    const _id = req.params.productId;
     const deleteProducts =await MedProducts.findByIdAndDelete(_id);
     // console.log(req.params);
      res.json(deleteProducts)
    }catch(e){
                res.status(500).send(e);
    }

})




app.listen(port,() =>{
    console.log(`connection is live at port no. ${port}`);
})