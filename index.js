const ham = document.querySelector(".ham");
const list = document.querySelector(".list");
ham.addEventListener('click', function(e){
    console.log(list);
    list.classList.toggle('hidden');
});

const nav = document.querySelector(".nav");
nav.addEventListener('click', function(e){
    list.classList.toggle('hidden')
});

const cart = document.querySelector(".cart");
const add = document.querySelector(".feet-right");
add.addEventListener('click', function(e){
    cart.classList.toggle('hidden');
});

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
   
}

