


const offer_section = document.querySelector('#offer_section');
const Popular_Dishes = document.querySelector('.Popular_Dishes');
window.onscroll = function () {
     //  Animation offer section
    if (window.scrollY >= offer_section.offsetTop - 300) {
        document.querySelector('.offer_image').classList.add('active_offer')
        document.querySelector('.offer_section_items').classList.add('active_offer')
    }

    //  Animation offer section
    if (window.scrollY >= Popular_Dishes.offsetTop - 300) {
        document.querySelectorAll('.Popular_Dishes .item').forEach(item => {
            item.style.transform = "translateX(0)";
        })
    }
}

window.onload = function () {

    if (window.scrollY >= offer_section.offsetTop - 400) {
        document.querySelector('.offer_image').classList.add('active_offer')
        document.querySelector('.offer_section_items').classList.add('active_offer')
    }
    if (window.scrollY >= Popular_Dishes.offsetTop - 300) {
        document.querySelectorAll('.Popular_Dishes .item').forEach(item => {
            item.style.transform = "translateX(0)";
        })
    }
}







// media query

//  open list navbar
document.querySelector('.open_ListMedia').addEventListener("click", function () {
    document.querySelector('.navbarList').classList.toggle('active_listNavbar')
})

//  onclick in link navbar 
document.querySelectorAll('.navbarList a').forEach(a => {
    a.onclick = function () {
        document.querySelector('.navbarList').classList.remove('active_listNavbar')   
    }
})







