
function getElementByID (id){

    const element = document.getElementById(id);

    const convertElement = parseInt(element.innerText);
     
  
    return convertElement;

}

// main action 
// Sob "Completed" button select kora

const buttons = document.querySelectorAll('.card button');

// console.log(buttons);
  
 for( const button of buttons) {
     
    button.addEventListener('click' , function (e) {
        
        alert("Board Updated Successfully");
        button.disabled = true;
        button.classList.remove('bg-[#3752FD]', 'text-white')
        button.classList.add('bg-gray-300', 'text-gray-500')
    

     // task-assigned section

        const taskAssigned = document.getElementById('task-assigned') 

        const taskAssignedValue = getElementByID('task-assigned');
        
        taskAssigned.innerText = taskAssignedValue - 1;

        
        if(taskAssigned.innerText == 0){
            alert("Congratulations! You have completed all tasks.");
        }
        
    //    nav-cheak section 
       
    const navCheak = document.getElementById('nav-cheak')
    
    const navCheakValue = getElementByID('nav-cheak');

    navCheak.innerText = navCheakValue + 1;

     
    // add activity section  

    const addActivity = document.getElementById('activity')

    const p = document.createElement('p');


     
   
    const card  = button.parentElement.parentElement.parentElement;

    const cardTitle = card.querySelector('.text-2xl').innerText;
  
     
   const time = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });


   p.innerHTML = `
    <p class="px-3 text-[18px] py-4 mb-5 bg-[#F4F7FF] text-[#00303C] font-semibold rounded-lg"> You Have Completed the Task <span class="text-green-500"> ${cardTitle}</span> at ${time}</p>

   `
  addActivity.appendChild(p);
      
   
 
   



    });

    
}


// clear history section

document.getElementById('clear-btn').addEventListener('click', function(){


    const addActivity = document.getElementById('activity')

    addActivity.innerHTML = '';

  


})


// discover card

document.getElementById("discover-card").addEventListener("click", function(){
    window.location.href = "qnapage.html";

});