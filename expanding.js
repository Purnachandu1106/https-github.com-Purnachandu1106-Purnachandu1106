const panels=document.querySelectorAll('.panel');
panels.forEach((panel)=>{
    panel.addEventListener('click' , () =>{
        removeActClasses()
        panel.classList.add('active')
    })

})
function removeActClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}