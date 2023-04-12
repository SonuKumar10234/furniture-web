
// var quickLinks = document.getElementById('quick-links');
window.addEventListener('scroll', () => {
    var header = document.querySelector('html');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})

var openButton = document.getElementById('open-nav').addEventListener('click', function(){
    var nav = document.getElementById('nav');
    var htmlTag = document.querySelector('html');
    if(nav.hasAttribute('style')){
        nav.removeAttribute('style');
        htmlTag.classList.remove('opened-nav');
    }
    else{
        nav.style.cssText ='display: flex; opacity: 1;';
        htmlTag.classList.add('opened-nav');
    }
    
})


// for(var menuItem of quickLinks.children){
//     menuItem.addEventListener('click', ()=>{
//         menuItem.classList.add('current-menu-item');
//         console.log(menuItem)
//     })
// }


