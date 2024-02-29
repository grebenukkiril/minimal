document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
        // const style = document.createElement('style');
        // style.textContent = 'body { overflow: hidden; }';
        // document.head.appendChild(style);
    })
})