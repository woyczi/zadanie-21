const btn = document.querySelector('.box-btn')
const firstIcon = document.querySelector('.one')
const secondIcon = document.querySelector('.two')
const thirdIcon = document.querySelector('.three')

const handleGear = () => {
    firstIcon.classList.toggle('animation-right')
    secondIcon.classList.toggle('animation-left')
    thirdIcon.classList.toggle('animation-right')
}



btn.addEventListener('click', handleGear)