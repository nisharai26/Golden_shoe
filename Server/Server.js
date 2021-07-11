import express from 'express';

import mongoose from 'mongoose'; 
import userRouter from './router/userRouter.js';
import dotenv from 'dotenv';
import productRouter from './router/productRouter.js';
import orderRouter from './router/orderRouter.js';
dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// eslint-disable-next-line no-undef
const url = process.env.ATLAS_URI;
mongoose.connect(url || 5000,
  { useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true
     },
   
);


  


app.use('/api/users/',userRouter);
app.use('/api/products',productRouter);
app.use('api/orders',orderRouter);
app.get("/",(req,res)=>{
    res.send("server is running")
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res,next) => {
  res.status(500).send({ message: err.message });
});


// eslint-disable-next-line no-undef
const port =process.env.PORT||5000;
app.listen(port,() =>{
console.log(`server is http://localhost:${port}`);
});