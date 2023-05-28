//------NAVBAR-----///
const ham = document.querySelector(".ham");
const list = document.querySelector(".list");
ham.addEventListener('click', function(e){
    list.classList.toggle('hidden');
    
});

const nav = document.querySelector(".nav");
nav.addEventListener('click', function(e){
    list.classList.toggle('hidden')
});

//---------Cart-----------//
const cart = document.querySelector(".cart");
const add = document.querySelector(".feet-right");
const addShoe = document.querySelector(".add-shoe");
const cartPar = document.querySelector(".tpcart");
//-----------adding info of shoe to cart------------//
add.addEventListener('click', function(e){
    outPut.textContent = "1";
    cartPar.classList.add('hide');
    addShoe.style.display = "block";
});
//---------------show cart---------------////
const imgCart = document.querySelector("#cart1");
imgCart.addEventListener("click", function(e) {
    cart.classList.toggle('hidden');
});

const del = document.querySelector("#del");
del.addEventListener("click", function(e) {
    addShoe.style.display = "none";
    cartPar.classList.remove('hide');
    outPut.textContent = "0";
})

//----------------increase counter--------------//
const plus = document.querySelector("#add");
const remove = document.querySelector("#remove");
const outPut = document.querySelector(".out");
let count = 0;

function increase() {
    count += 1;
    outPut.textContent = count;
};

function decrease() {
    if(count >= 1){
        count -= 1;
        outPut.textContent = count;
    } else{
        outPut.textContent = 0;

    }
};


//------------LIGHT-BOX----------------//
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
