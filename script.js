const input = document.getElementById('Id');
const form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value = '18129677'){
        window.open('/Umaid.html');
        input.value = '';
    }
})
