//make this the auth slide thing up and down from the hero image
window.onload = function () {
    const auth_menu = document.querySelector('#authMenu')
    const auth_btn = document.querySelector('#authMenuButton')
    auth_btn.addEventListener('click', function () {
        auth_menu.classList.toggle('hidden')
       
    })
}