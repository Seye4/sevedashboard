const themeBtn = document.querySelector('.theme-btn')
const closeBtn = document.querySelector('.close-btn')
const bars = document.querySelector('.bars')
const themeToggler = document.querySelector(".themeToggler")
aside = document.querySelector('.aside')
// console.t

themeBtn.addEventListener('click', ()=> {
    let btns = themeBtn.querySelectorAll('.theme')

    btns.forEach(btn => {
        btn.classList.toggle('active')
      })

    document.body.classList.toggle('dark-theme-var')

    // themeBtn.querySelector('span').classList.toggle('active')
})

closeBtn.addEventListener('click', ()=> {
    aside.style.display = 'none' 
})

bars.addEventListener('click', ()=> {
    aside.style.display = 'block' 
})
