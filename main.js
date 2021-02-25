//Get Data from Json file
fetch("data.json")
.then(response => response.json())
.then(data => {
    document.getElementsByTagName('p').innerText = data.productname
}) 

const navMenu = document.getElementById('menu-nav');
const closeBtn = document.getElementById('close-btn');

document.getElementById('menu-btn').addEventListener('click',function(){
     navMenu.style.maxHeight = "200px";
    closeBtn.style.display = 'block';
})

document.getElementById('close-btn').addEventListener('click',function(){
    navMenu.style.maxHeight ="0px";
      
})

let productImg = document.getElementById('productImg');
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = ()=>{
    productImg.src = smallImg[0].src;
    
}
smallImg[1].onclick = ()=>{
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = ()=>{
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = ()=>{
    productImg.src = smallImg[3].src;
}
