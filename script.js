// THEME


const theme = document.getElementById('theme')
const themeModal = document.querySelector('.customize-theme')
let root = document.querySelector(':root')
const BG1 = document.querySelector('.bg-1')
const BG2 = document.querySelector('.bg-2')
const BG3 = document.querySelector('.bg-3')


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


const colorPalette = document.querySelectorAll('.choose-color span')
console.log(colorPalette)

// change primary colors 
colorPalette.forEach(color => {
    color.addEventListener('click', ()=>{
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else  if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else  if(color.classList.contains('color-4')){
            primaryHue = 152
        }else  if(color.classList.contains('color-5')){
            primaryHue = 202
        }

        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})


//Change background

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}


BG1.addEventListener('click', ()=>{
    
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';


    BG1.classList.add('active')
    BG2.classList.remove('active')
    BG3.classList.remove("active")
    changeBG();
})

BG2.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '25%';
    lightColorLightness = '15%';


    BG2.classList.add('active')
    BG1.classList.remove('active')
    BG3.classList.remove("active")

    changeBG()
})



BG3.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';


    BG3.classList.add('active')
    BG1.classList.remove('active')
    BG2.classList.remove("active")

    changeBG()
})