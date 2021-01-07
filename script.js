const input = document.getElementById('Id');
const button = document.getElementById('check');
setTimeout(()=>{
const aud = document.getElementById('audio');
    aud.play();
},3000)
    button.addEventListener('click',()=>{  
        window.open('./Umaid.html');
                if(input.value == '18129677'){
                    window.open('./Aalim.html');
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
                    alert('You are not Qualified');
                    }
    })
