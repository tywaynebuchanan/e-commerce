function myFunction() {
    alert('This works');
}

const navMenu = document.getElementById('menu-nav');
const closeBtn = document.getElementById('close-btn');
document.getElementById('menu-btn').addEventListener('click',function(){
    navMenu.style.display = 'block';
    closeBtn.style.display = 'block';
})

document.getElementById('close-btn').addEventListener('click',function(){
    navMenu.style.display ='none';
})