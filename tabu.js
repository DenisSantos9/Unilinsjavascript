function tabuada(){
    let num = document.getElementById('txtn')
    let num = document.getElementById('seltab')
        if (num.value.length == 0 ){
            window.alert('Por favor,digite um nummero!')
        }
        else{
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
        while (c <= 10){
            let intem = document.createElement('option')
            item.text = '${n} x ${c} = ${n*c}'
            item.value = 'tab${c}'
            tab.appendChild(item)
            c++ 
        }
        }
}