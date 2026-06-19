
// Load Products


fetch("/products")

.then(res=>res.json())

.then(data=>{


let html="";


data.forEach(product=>{


html+=`

<div class="card">

<h2>${product.name}</h2>

<p>₹${product.price}</p>


<button onclick="addCart(${product.id})">

Add Cart

</button>


</div>

`;


});


document.getElementById("products").innerHTML=html;



});




// Register


function register(){


fetch("/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name.value,

email:email.value,

password:password.value

})


})

.then(res=>res.text())

.then(alert);


}





// Login


function login(){


fetch("/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email:email.value,

password:password.value

})


})

.then(res=>res.text())

.then(alert);


}




// Cart


function addCart(id){


fetch("/cart",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

user_id:1,

product_id:id

})


})


.then(res=>res.text())

.then(alert);


}
