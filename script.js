// NAV
const bar =  document.getElementById('bar');
const close =  document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


// container
const signUpButton = document.getElementById('singUp');
const signInButton = document.getElementById('singIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>{
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () =>{
    container.classList.remove("right-panel-active");
});