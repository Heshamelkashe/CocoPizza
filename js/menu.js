
// show from input search
document.querySelector('.openSearchForm').onclick = function () {
    
    if (document.querySelector('.navbar form').style.display == "flex")
    {
        document.querySelector('.navbar form').style.display="none" 
    } else {
        document.querySelector('.navbar form').style.display="flex"
    }
}

// show and close container create Account
document.querySelector('.btnOpen_Account').onclick = function()
{
    document.querySelector('.createAccount').style.display = "flex";
}
document.querySelector('.close_Account').onclick = function()
{
    document.querySelector('.createAccount').style.display = "none";
}

// chang buttons class sign in or create  create Account 
const btn_Account = document.querySelectorAll('.createAccount .buttons_mainAccount button');
btn_Account.forEach(btn => {
    btn.addEventListener("click", function () {
        btn_Account.forEach(el => el.classList.remove('active_btn'))
        this.classList.add('active_btn')
    })
})

//  sign In
document.querySelector('.SignIn_btn').onclick = function () {
    document.querySelector('.list_Account  .list_item').style.transform =
        "translateX(0)"
}

//  Create Account
document.querySelector('.createAccount_btn').onclick = function () {
    document.querySelector('.list_Account  .list_item').style.transform =
        "translateX(-352px)"
}
