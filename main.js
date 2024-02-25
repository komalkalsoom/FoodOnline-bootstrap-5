
// active navbar gave white color on scroll
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');
    }
}

// nav hide when click on link in small devices
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove('show')
    })
})

// counter code
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let getid = document.getElementById(id),
        current = start,
        range  = end - start;
        increment = end > start ? 1 : -1,
        stop = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current += increment;
            getid.textContent = current;
            if(current == end){
                clearInterval(timer)
            }
        },stop);

    }
    counter("count1",0,1287,3000);
    counter("count2",100,1287,2500);
    counter("count3",0,1440,3000);
    counter("count4",0,7110,3000);
})