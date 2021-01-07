const input = document.getElementById('Id');
const form = document.getElementById('form2');
const button = document.getElementById('check');
setTimeout(()=>{
const aud = document.getElementById('audio');
    aud.play();
},3000)

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
        else if(input.value == '18140301'){
        window.open('./aisha.html');
            input.value = '';
        }
        else{
        alert('No Result Found');
        }
    })
})
