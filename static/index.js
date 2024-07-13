const menu=document.querySelector('#menu');
const menu2=document.querySelector('#menu2');
const hlinks=document.querySelectorAll('#hlink');

menu.addEventListener('click',()=>{
    menu2.classList.toggle('hidden');
    menu.classList.toggle('bg-white');
});

hlinks.forEach(link=>{
    link.addEventListener('click',()=>{
        menu2.classList.toggle('hidden');
        menu.classList.toggle('bg-white');
    }); 
});