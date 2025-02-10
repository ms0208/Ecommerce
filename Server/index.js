const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT  // Provide a default port
const databaseConnection = require('./config/db.js');

app.use(express.json());
app.use(cors());

// Database 
databaseConnection();

// Image storage Engine

const multer = require('multer');
const { default: mongoose } = require('mongoose');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:storage});

// Creating upload EndPoint
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})

//Schema for Creating Products
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    image:{
       type:String,
       required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})
//api 
app.get('/',(req,res)=>{
    res.send("API IS RUNNING ");
})

app.listen(PORT,()=>{
    console.log(`PORT IS RUNNING ON ${PORT}`);
})