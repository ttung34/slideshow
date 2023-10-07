let item = document.querySelectorAll('.item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let dots = document.querySelectorAll('.slider .dots li');
let list = document.querySelector('.list');
console.log(item)
console.log(prev)
console.log(next)
console.log(dots)
console.log(list)

let active = 0;
let lengthItems = item.length -1;

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

var reloadSlider= ()=> {
    list.style.left = -item[active].offsetLeft + 'px';

    let liActive = document.querySelectorAll('.active');
    liActive.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li,key)=>{
    li.addEventListener('click',()=>{
        active=key;
        reloadSlider()
    })
})

window.onresize = function(event) {
    reloadSlider();
};


// let slider = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let dots = document.querySelectorAll('.slider .dots li');

// console.log(slider)
// console.log(items)
// console.log(next)
// console.log(prev)
// console.log(dots)


// let lengthItems = items.length - 1;
// let active = 0;

// next.onclick = function(){
//     active = active + 1 <= lengthItems ? active + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : lengthItems;
//     reloadSlider();
// }
// // ÷let refreshInterval = setInterval(()=> {next.click()}, 3000);
// function reloadSlider(){
//     slider.style.left = -items[active].offsetLeft + 'px';
//     // 
//     let last_active_dot = document.querySelector('.slider .dots li.active');
//     last_active_dot.classList.remove('active');
//     dots[active].classList.add('active');

//     clearInterval(refreshInterval);
//     // refreshInterval = setInterval(()=> {next.click()}, 3000);

    
// }

// dots.forEach((li, key) => {
// li.addEventListener('click', ()=>{
//     active = key;
//     reloadSlider();
// })
// })
// window.onresize = function(event) {
//      reloadSlider();
// };