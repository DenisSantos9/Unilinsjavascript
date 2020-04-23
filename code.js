function contar(){
    let ini = document.getElementById('text1')
    let fim = document.getElementById('textf')
    let passo = document.getElementById('textp')
    let res = document.getElementById('res')

    if(ini.nodeValue.length == 0 || fim.nodeValue.length == 0 || passo.nodeValue.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
    }
    else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
            if (p <=0){
                window.alert('Passo invalido! Considerando Passo 1')
                p = 1
            }
            if (i < f) {
                // Contagem crescente
                for(let c = i; c <= f; c += p){
                    res.innerHTML += '${c} \u{1F449}'
                }
                else {
                    //Contagem regressiva
                    for(let c = i; c >= f; c -= p){
                        res.innerHTML += '${c} \u{1F449}'
                }
            }
            res.innerHTML += '\u{1F3C1}'
    }
}
