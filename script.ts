const toggleButton = document.getElementById('toogle-skills') as HTMLButtonElement
const skills=document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', ()=>  {
    if(skills.style.display === 'noon') {
        skills.style.display = 'block'
    
    } else {
        skills.style.display ='none'
    }
});