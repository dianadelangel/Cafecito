const nav= document.querySelector('nav');

window.addEventListener('scroll', function(){
     nav.classlist.toggle('active', window.scrollY >0)
})