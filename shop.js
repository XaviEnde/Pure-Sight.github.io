const glasses1 = {
    price: 40,
    color: "black",
    name: "glasses 1",
    itemValue: 1
}
const glasses2 = {
    price: 90,
    color: "black",
    name: "glasses 1",
    itemValue: 1
}
const glasses3 = {
    price: 60,
    color: "black",
    name: "glasses 1",
    itemValue: 1
}
const glasses1Btn = document.getElementsByClassName("glasses1");
const glasses2Btn = document.getElementsByClassName("glasses2");
const glasses3Btn = document.getElementsByClassName("glasses3");
const cartItemsSecction = document.getElementById("cartItems");
const totalDisplay = document.getElementById("total");
const cartFlex = document.getElementById("cartFlex")
const checkoutDiv = document.getElementById("checkoutDiv");
const checkoutBtn = document.createElement("button");


let price = 0;
let items = [];
let priceArray1 = [];
let priceArray2 = [];
let priceArray3 = [];
let finalTotal = 0;
let ItemCount1 = 0;
let ItemCount2 = 0;
let ItemCount3 = 0;
let Item1Value = 0;
let Item2Value = 0;
let Item3Value = 0;

let glasNumber = 0
let item1Count = 0;
let img1 = false
let img2 = false
let img3 = false
let price1 = 0;
let price2 = 0;
let price3 = 0;


let checkout = false

    const itemDiv1 = document.createElement("div");

    
    
function addItem1 (){
    cartFlex.classList.add("displayTotal")

    cartItemsSecction.style.display = "block";
    cartItemsSecction.style.paddingBottom = "1rem";

    price1 += glasses1.price
    Item1Value += glasses1.itemValue
    priceArray1.push(price1);
    ItemCount1++;

    

    if(img1 == false){
        itemDiv1.classList.add("itemDiv1")
        cartItemsSecction.appendChild(itemDiv1);
        itemDiv1.innerHTML = `<img class="cartImg" src="img/glas1.webp">
        <div class="priceDiv1" id="priceDiv1">${price1}</div>
        <button class="PlusMinusBtns" id="PlusBtn1" onclick="addItem1()">+</button>
        <button class="PlusMinusBtns" id="MinusBtn1" onclick="removeItem1()">-</button>`
        ;

        img1 = true
    }
    
    if(checkout == false){
        checkoutBtn.classList.add("checkoutBtn"); 
        checkoutBtn.innerHTML = "Check Out";
        checkoutBtn.setAttribute("onclick", goToCheckout)
        checkoutDiv.appendChild(checkoutBtn);
        checkout = true
    }
   

   const priceDiv1 = document.getElementById("priceDiv1");

   price1 = glasses1.price * priceArray1.length;
   priceDiv1.innerHTML = `$${price1}`


   updateTotal()
}


function addItem2 (){

    cartFlex.classList.add("displayTotal")

    cartItemsSecction.style.display = "block"
    cartItemsSecction.style.paddingBottom = "1rem";

    price2 += glasses2.price
    Item2Value += glasses2.itemValue
    priceArray2.push(price2);
    ItemCount2++;

    if(img2 == false){
        const itemDiv2 = document.createElement("div");
        itemDiv2.classList.add("itemDiv2")
        cartItemsSecction.appendChild(itemDiv2);
        itemDiv2.innerHTML = `<img class="cartImg" src="img/glas2.webp">
        <div class="priceDiv2" id="priceDiv2">${price2}</div>
        <button class="PlusMinusBtns" id="PlusBtn2" onclick="addItem2()">+</button>
        <button class="PlusMinusBtns" id="MinusBtn2" onclick="removeItem2()">-</button>`;
        img2 = true
    }

    if(checkout == false){
        checkoutBtn.classList.add("checkoutBtn"); 
        checkoutBtn.innerHTML = "Check Out";
        checkoutBtn.setAttribute("onclick", goToCheckout)
        checkoutDiv.appendChild(checkoutBtn);
        checkout = true
    }
    


    const priceDiv2 = document.getElementById("priceDiv2");

    price2 = glasses2.price * priceArray2.length;
    priceDiv2.innerHTML = `$${price2}`

    updateTotal()
}

function addItem3 (){

    cartFlex.classList.add("displayTotal")

    cartItemsSecction.style.display = "block"
    cartItemsSecction.style.paddingBottom = "1rem";

    price3 += glasses3.price
    Item3Value += glasses3.itemValue
    priceArray3.push(price3);
    ItemCount3++;


    if(img3 == false){
        const itemDiv3 = document.createElement("div");
        itemDiv3.classList.add("itemDiv3")
        cartItemsSecction.appendChild(itemDiv3);
        itemDiv3.innerHTML = `<img class="cartImg" src="img/glas3.webp">
        <div class="priceDiv3" id="priceDiv3">${price3}</div>
        <button class="PlusMinusBtns" id="PlusBtn3" onclick="addItem3()">+</button>
        <button class="PlusMinusBtns" id="MinusBtn3" onclick="removeItem3()">-</button>`;
        
        
        img3 = true
    }

    if(checkout == false){
        checkoutBtn.classList.add("checkoutBtn"); 
        checkoutBtn.innerHTML = "Check Out";
        checkoutBtn.setAttribute("onclick", goToCheckout)
        checkoutDiv.appendChild(checkoutBtn);
        checkout = true
    }
    
    


    const priceDiv3 = document.getElementById("priceDiv3");

    price3 = glasses3.price * priceArray3.length;
    priceDiv3.innerHTML =`$${price3}` 

    updateTotal()
}

function removeItem1(){
    priceArray1.pop();
    price1 = glasses1.price * priceArray1.length;

        if(ItemCount1 < 0){
            ItemCount1 = 0;
        }
        else if(ItemCount1 > 0){
            ItemCount1--;
        }
       
    priceDiv1.innerHTML = price1

    updateTotal()
}
function removeItem2(){
    priceArray2.pop();
    price2 = glasses2.price * priceArray2.length;

    if(ItemCount2 < 0){
        ItemCount2 = 0;
    }
    else if(ItemCount2 > 0){
        ItemCount2--;
    }
       
    priceDiv2.innerHTML = price2

    updateTotal()
}
function removeItem3(){
    priceArray3.pop();
    price3 = glasses3.price * priceArray3.length;

        if(ItemCount3 < 0){
            ItemCount3 = 0;
        }
        else if(ItemCount3 > 0){
            ItemCount3--;
        }
       
    priceDiv3.innerHTML = price3

    updateTotal()
}


checkoutBtn.addEventListener("click", goToCheckout)


function updateTotal(){
    let total1 = priceArray1.length > 0 ? priceArray1[priceArray1.length - 1] : 0;
    let total2 = priceArray2.length > 0 ? priceArray2[priceArray2.length - 1] : 0;
    let total3 = priceArray3.length > 0 ? priceArray3[priceArray3.length - 1] : 0;

    finalTotal = total1 + total2 + total3;


    const DisplayPrice = document.getElementById("totalPrice");
    DisplayPrice.innerHTML = `Price: $${finalTotal}`


    let TotalItems = ItemCount1 + ItemCount2 + ItemCount3

    const DisplayItemsTotal = document.getElementById("totalItems");
    DisplayItemsTotal.innerHTML = `Items: ${TotalItems}`

  
}




function showCartItems(){
    if(!cartFlex.classList.contains("displayTotal"))
    cartFlex.classList.add("displayTotal")
    else{
        cartFlex.classList.remove("displayTotal")
    }
}


function goToCheckout(){
    console.log(`Total is ${finalTotal}`);
}

























