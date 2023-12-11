function calculator(){
    let height=document.getElementById('height')
    let weight=document.getElementById('weight')
    let result=weight.value/(height.value * height.value).toFixed()
    
    if(result<18.5){
        document.getElementById('result').innerText='UnderWeight🥶'
    }
    else if(result>18.5  && result<24.9){
        document.getElementById('result').innerText='Normal😊'
    }
    else if(result>25  && result<29.9){
        document.getElementById('result').innerText='OverWeight🤣'
    }
    else if(result>30 && result<35){
        document.getElementById('result').innerText='obesity😒'
    }
    else {
        document.getElementById('result').innerText='Sevre Obesity😂'
    }
    
    document.getElementById('result1').innerText=result
}