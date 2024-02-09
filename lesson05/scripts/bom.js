       
const button = document.querySelector('button');
const ul = document.querySelector('#list');
const input = document.querySelector('#favchap'); 

button.addEventListener('click', function(){
    if (input.value !== ''){
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = input.value;
        deletebutton.textContent  = '❌';
        li.appendChild(deletebutton);
        deletebutton.addEventListener('click', function() {
            ul.removeChild(li);
            input.focus(); 
        });
        ul.appendChild(li);
        input.value = ''
    } else {
    input.focus();
    alert('Please enter a chapter')
    }
})
