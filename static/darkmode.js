const body=document.querySelector("body");
const moon=document.querySelector("#sun");

moon.addEventListener('click',()=>{
    body.classList.toggle('dark');
    console.log('clicked on moon.');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('dark',isDarkMode);
});

const darkMode = localStorage.getItem('dark');
if (darkMode==='true'){
    document.body.classList.add('dark');
};