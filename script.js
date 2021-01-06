const input = document.getElementById('Id');
const form = document.getElementById('form2');
const button = document.getElementById('check');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    button.addEventListener('click',()=>{  
    if(input.value == '18129677'){
        window.open('./Umaid.html');
        input.value = '';
    }
        else if (input.value =='hira roll no'){
            window.open('./hira.html')
            input.value = '';
        }
        else if(input.value == 'aisha roll no'){
        window.open('./aisha.html');
            input.value = '';
        }
    })
})
