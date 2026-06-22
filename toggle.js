   /* for content center CSS*/

const content = document.getElementById('content')
content.classList.add('container')

const input = document.getElementById('actionByUser')
content.addEventListener('change',function(){
    if(input.checked){
        document.body.classList.add('dark')

    }
    else{
        document.body.classList.remove('dark')
        
    }
})