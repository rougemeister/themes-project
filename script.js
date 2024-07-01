// THEME


const theme = document.getElementById('theme')
const themeModal = document.querySelector('.customize-theme')
let root = document.querySelector(':root')


//Font sizes 
const fontSizes = document.querySelectorAll('.choose-size span')
console.log(fontSizes)

fontSizes.forEach(size =>{
    let fontSize;

    size.addEventListener('click', ()=>{
        if(size.classList.contains('font-size-1')){
            fontSize = '10px'
            root.style.setProperty('----sticky-top-left', "5.4rem")
            root.style.setProperty('----sticky-top-rigth', "5.4rem")
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('----sticky-top-left', "5.4rem")
            root.style.setProperty('----sticky-top-rigth', "-7rem")
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('----sticky-top-left', "-2rem")
            root.style.setProperty('----sticky-top-rigth', "-17rem")
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('----sticky-top-left', "-5.4rem")
            root.style.setProperty('----sticky-top-rigth', "-25rem")
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('----sticky-top-left', "-12rem")
            root.style.setProperty('----sticky-top-rigth', "-35rem")
        }
    
        document.querySelector('html').style.fontSize = fontSize
    })
    
    
})

theme.addEventListener('click', openThemeModal)

function openThemeModal(e){
    e.preventDefault();
    themeModal.style.display = 'grid'
}


//close modal 
themeModal.addEventListener('click', closeThemeModal)

function closeThemeModal(e){
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}