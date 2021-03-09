//Get Data from Json file

const row = document.getElementById('row');
const getData = async () =>{
    const res = await fetch('data.json');
    if(res.ok){
        const data = await res.json();
        data.forEach(product =>{
          const div = document.getElementById("row");
            div.innerHTML +=`
            <div class = "col-4">
            <a href="product-detail.html"><img src="images/${product.image}" alt=""></a>
                <a href="product-detail.html"><h4>${product.productname}</h4></a>
           <div class="ratings">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star-half-alt"></i>
           </div>
           <p id="categories">${product.price}</p>`
        })
     }else{
        console.log(`Err:${res.status}`)
    }
}
getData();

const getFeatCat = async () =>{
    const featApi = fetch('data1.json');
    const res = await featApi;
    if(res.ok){
        const data = await res.json();
        data.forEach(product =>{
            const div = document.getElementById('feat__cat')
            div.innerHTML +=`<div class="col-3">
            <img src="images/${product.image}" alt="">
            <h4>${product.productname}</h4>
        </div>`
        
     })
    }else{
        console.log(`Err:${res.status}`)
    }
}

getFeatCat();

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

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;

}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}

//Sticky Navigation 
const nav = document.getElementById("navbar");
const section1 = document.getElementById("section1");
const initCords = section1.getBoundingClientRect();

window.addEventListener('scroll', function() {
 if(window.scrollY > initCords.top)
 
     nav.classList.add('sticky')
 else
     nav.classList.remove('sticky')
 
});
