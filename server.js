const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const db = require("./db");


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("public"));


// Register User

app.post("/register",(req,res)=>{

    let {name,email,password}=req.body;


    bcrypt.hash(password,10,(err,hash)=>{

        let sql =
        "INSERT INTO users(name,email,password) VALUES(?,?,?)";


        db.query(sql,[name,email,hash],(err,result)=>{

            if(err)
            {
                res.send("User already exists");
            }
            else
            {
                res.send("Registration Successful");
            }

        });


    });

});



// Login

app.post("/login",(req,res)=>{


let {email,password}=req.body;


db.query(
"SELECT * FROM users WHERE email=?",
[email],

(err,result)=>{


if(result.length==0)
{
    res.send("User not found");
}
else
{


bcrypt.compare(password,result[0].password,
(err,response)=>{

if(response)
{
res.send("Login Success");
}
else
{
res.send("Wrong Password");
}

});

}


});

});



// Products

app.get("/products",(req,res)=>{


db.query(
"SELECT * FROM products",

(err,result)=>{

res.json(result);

});


});




// Add Cart

app.post("/cart",(req,res)=>{


let {user_id,product_id}=req.body;


db.query(

"INSERT INTO cart(user_id,product_id) VALUES(?,?)",

[user_id,product_id],

(err,result)=>{


res.send("Added to cart");


});


});




// Get Cart

app.get("/cart/:id",(req,res)=>{


db.query(

`SELECT products.name,products.price 
FROM cart 
JOIN products 
ON cart.product_id=products.id
WHERE user_id=?`,

[req.params.id],

(err,result)=>{


res.json(result);


});


});



app.listen(3000,()=>{

console.log("Server running at port 3000");

});
