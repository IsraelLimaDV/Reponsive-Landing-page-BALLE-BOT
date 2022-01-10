class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(){

        this.navList.classList.toggle(this.activeClass)
    }


    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick)
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".header-menu-item"
)

 mobileNavbar.init()



function hiddenButton(){
    let button = document.getElementById("main-container-button")

    if(button.style.visibility != 'hidden'){
        return button.style.visibility = 'hidden'
    }   else {
        setTimeout(()=>{
            button.style.visibility == 'hidden'
                return button.style.visibility = 'unset'
        }, 300)
    }
}


