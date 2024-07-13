const alert = document.querySelector('#alert');
const close = document.querySelector('#close');

close.addEventListener('click', () => {
    alert.classList.toggle('hidden');
});

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

setTimeout(function () {
    document.querySelector("#alert").style.display = "none";
}, 5000);