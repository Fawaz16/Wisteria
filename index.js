
let minidiv = document.querySelector('.minidiv')
let hamburger = document.querySelector('.hamburger')
let closebtn = document.querySelector('.close')
let cards = document.querySelector('.carousel')
let holly = document.querySelector('#holly')
let popular = document.querySelector('#popular')
let trending = document.querySelector('#trending')
let form = document.querySelector('.f-form')


hamburger.addEventListener("click",() =>{
    minidiv.style.transform="translateX(0px)";
if (minidiv.style.transform="translateX(0px)") {
    closebtn.style.display="block"
   hamburger.style.display="none"
   form.style.display="none"
  //  cards.style.opacity="0.5"
  //  holly.style.opacity="0.5"
  //  popular.style.opacity="0.5"
  //  trending.style.opacity="0.5"
    
}
})
closebtn.addEventListener("click",() =>{
    minidiv.style.transform="translateX(-768px)";
if (minidiv.style.transform="translateX(-768px)") {
    hamburger.style.display="block"
    closebtn.style.display="none"
    form.style.display="none"
    // cards.style.opacity="1"
    // holly.style.opacity="1"
    // popular.style.opacity="1"
    // trending.style.opacity="1"
 
}
})


$(".bb-text").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  
  
  
  

