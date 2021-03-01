//Get Data from Json file
// fetch("data.json")
// .then(response => response.json())
// .then(data => {
//     console.log(typeof data)
    
//     data.forEach((element,i) => {
//         let row = document.createElement('div')
//         row.classList.add('row')
//         let col = document.createElement('div');
//         col.classList.add('col-4');
//         let img = document.createElement('img')
//         img.src = `/images/${element.image}.jpg`
//         let productName = document.createElement('h4')
//         productName.innerHTML = element.productName
//         col.appendChild(img)
//         row.appendChild(col)
//         document.getElementById('products').appendChild(row)
//     });
// }) 

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
let smallImg = document.getElementsByClassName(".small-img");

// smallImg[0].onclick = function () {
//     productImg.src = smallImg[0].src;

// }
// smallImg[1].onclick = function () {
//     productImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function () {
//     productImg.src = smallImg[2].src;
// }

// smallImg[3].onclick = function () {
//     productImg.src = smallImg[3].src;
// }

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
