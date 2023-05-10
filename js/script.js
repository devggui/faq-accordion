async function showAnswer(id, event) {
       
  let answer = document.getElementById(`answer${id}`)        
 
  const img = event.target.parentElement.querySelector('img')        
  const question = event.target  

  if(answer.style.display == 'none') {    
    answer.style.display = 'block'    
    await img.classList.add('rotate-180')       
    await question.classList.remove('text-[var(--Very-dark-grayish-blue)]')
    await question.classList.add('text-[var(--Very-dark-desaturated-blue)]')     
    await question.classList.add('font-bold')
  } else {
    answer.style.display = 'none'
    await img.classList.remove('rotate-180')    
    await question.classList.remove('text-[var(--Very-dark-desaturated-blue)]')     
    await question.classList.add('text-[var(--Very-dark-grayish-blue)]')
    await question.classList.remove('font-bold')
  }  
}