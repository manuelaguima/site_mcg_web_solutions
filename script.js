function gerarAleatorio(max, min) {
    let aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return aleatorio
}

function exe1() {
    let res1 = document.getElementById('res1')
    
    let matriz1 = [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]]

    let matriz2 = [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]]

    let somaMatriz = [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]]

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i + j == 6) {
                matriz1[i][j] = 5
            }
        }
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i == j) {
                matriz2[i][j] = 7
            }
        }
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            somaMatriz[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }

    res1.innerHTML = '<div> Primeira Matriz: <br>'
    for (let i = 0; i < 7; i++) {
        res1.innerHTML += matriz1[i] + '<br>'
    }

    res1.innerHTML += '</div> <div> Segunda Matriz: <br>'
    for (let i = 0; i < 7; i++) {
        res1.innerHTML += matriz2[i] + '<br>'
    }

    res1.innerHTML += '</div> <div> Soma das Matrizes: <br>'
    for (let i = 0; i < 7; i++) {
        res1.innerHTML += somaMatriz[i] + '<br>'
    }

    res1.innerHTML += '</div>'
}

//================================================================

function exe2() {
    let res2 = document.getElementById('res2')

    let matriz = [[0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]]

    let somaPar = 0, somaImpar = 0

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            matriz[i][j] = gerarAleatorio(20, 1)
        }
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (matriz[i][j] % 2 == 0) {
                somaPar += matriz[i][j]
            } else if (matriz[i][j] % 2 == 1) {
                somaImpar += matriz[i][j]
            }
        }
    }

    res2.innerHTML = 'Matriz: <br>'
    for(let i = 0; i < 7 ; i++) {
        res2.innerHTML += matriz[i] + '<br>'
    }
    res2.innerHTML += 'Soma dos pares: ' + somaPar + '<br>'
    res2.innerHTML += 'Soma dos impares: ' + somaImpar + '<br>'
}

//================================================================

function exe3() {
    let res3 = document.getElementById('res3')

    let matriz = [[0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]]

    let somaColuna = 0

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            matriz[i][j] = gerarAleatorio(50, 1)
        }
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 1) {
                somaColuna += matriz[i][j]
            }
        }
    }

    res3.innerHTML = 'Matriz: <br>'
    for(let i = 0; i < 7 ; i++) {
        res3.innerHTML += matriz[i] + '<br>'
    }
    res3.innerHTML += 'Soma dos números das colunas ímpares: '+ somaColuna
}

//================================================================

let arrayBubble = []

function gerarBubble() {
    let res4 = document.getElementById('res4')
    arrayBubble = []

    for(let i = 0 ; i < 5; i++) {
        arrayBubble.push(gerarAleatorio(10, 1))
    }

    res4.innerHTML = arrayBubble + '<br>'
}

function ordenarBubble() {
    let res4 = document.getElementById('res4')
    let cont = 0
    res4.innerHTML = arrayBubble + '<br>'
    res4.innerHTML += 'Ordenação com BubbleSort: <br>'
    for (let j = arrayBubble.length - 1; j > 0; j--) {
        for (let i = 0; i < arrayBubble.length - 1; i++) {
            if (arrayBubble[i] > arrayBubble[i + 1]) {
                let guard = arrayBubble[i]
                arrayBubble[i] = arrayBubble[i + 1]
                arrayBubble[i + 1] = guard
            }
            cont++
        }
        res4.innerHTML += arrayBubble + '<br>'
    }
    res4.innerHTML += 'Voltas: ' + cont + '<br>'
}

function inverterBubble() {
    let res4 = document.getElementById('res4')
    let cont = 0
    res4.innerHTML = arrayBubble + '<br>'
    res4.innerHTML += 'Ordenação Inversa com BubbleSort: <br>'
    for (let j = arrayBubble.length - 1; j > 0; j--) {
        for (let i = 0; i < arrayBubble.length - 1; i++) {
            if (arrayBubble[i] < arrayBubble[i + 1]) {
                let guard = arrayBubble[i]
                arrayBubble[i] = arrayBubble[i + 1]
                arrayBubble[i + 1] = guard
            }
            cont++
        }
        res4.innerHTML += arrayBubble + '<br>'
    }
    res4.innerHTML += 'Voltas: ' + cont
}

//================================================================

let arraySelection = []

function gerarSelection() {
    let res5 = document.getElementById('res5')
    arraySelection = []

    for(let i = 0 ; i < 5; i++) {
        arraySelection.push(gerarAleatorio(10, 1))
    }

    res5.innerHTML = arraySelection + '<br>'
}

function ordenarSelection() {
    let res5 = document.getElementById('res5')
    let cont = 0
    res5.innerHTML = arraySelection + '<br>'
    res5.innerHTML += 'Ordenação com SelectionSort: <br>'
    for (let i = 0; i < arraySelection.length; i++) {
        let menor = i
        for (let j = i + 1; j < arraySelection.length; j++) {
            if (arraySelection[j] < arraySelection[menor]) {
                menor = j
            }
            cont++
        }
        if (i != menor) {
            let guard = arraySelection[i]
            arraySelection[i] = arraySelection[menor]
            arraySelection[menor] = guard
        }
        res5.innerHTML += arraySelection + '<br>'
    }
    res5.innerHTML += 'Voltas: ' + cont + '<br>'
}

function inverterSelection() {
    let res5 = document.getElementById('res5')
    let cont = 0
    res5.innerHTML = arraySelection + '<br>'
    res5.innerHTML += 'Ordenação Inversa com SelectionSort: <br>'
    for (let i = 0; i < arraySelection.length; i++) {
        let menor = i
        for (let j = i + 1; j < arraySelection.length; j++) {
            if (arraySelection[j] > arraySelection[menor]) {
                menor = j
            }
            cont++
        }
        if (i != menor) {
            let guard = arraySelection[i]
            arraySelection[i] = arraySelection[menor]
            arraySelection[menor] = guard
        }
        res5.innerHTML += arraySelection + '<br>'
    }
    res5.innerHTML += 'Voltas: ' + cont + '<br>'
}

//================================================================

let arrayInsert = []

function gerarInsert() {
    let res6 = document.getElementById('res6')
    arrayInsert = []

    for(let i = 0 ; i < 5; i++) {
        arrayInsert.push(gerarAleatorio(10, 1))
    }

    res6.innerHTML = arrayInsert + '<br>'
}

function ordenarInsert() {
    let res6 = document.getElementById('res6')
    let cont = 0
    res6.innerHTML = arrayInsert + '<br>'
    res6.innerHTML += 'Ordenação com InsertSort: <br>'
    for (let i = 0; i < arrayInsert.length; i++) {
        let j = i - 1
        let guard = arrayInsert[i]
        while (j >= 0 && guard < arrayInsert[j]) {
            arrayInsert[j + 1] = arrayInsert[j]
            j--
        }
        cont++
        arrayInsert[j + 1] = guard
        res6.innerHTML += arrayInsert + '<br>'
    }
    res6.innerHTML += 'Voltas: ' + cont + '<br>'
}

function inverterInsert() {
    let res6 = document.getElementById('res6')
    let cont = 0
    res6.innerHTML = arrayInsert + '<br>'
    res6.innerHTML += 'Ordenação Inversa com InsertSort: <br>'
    for (let i = 0; i < arrayInsert.length; i++) {
        let j = i - 1
        let guard = arrayInsert[i]
        while (j >= 0 && guard > arrayInsert[j]) {
            arrayInsert[j + 1] = arrayInsert[j]
            j--
        }
        cont++
        arrayInsert[j + 1] = guard
        res6.innerHTML += arrayInsert + '<br>'
    }
    res6.innerHTML += 'Voltas: ' + cont + '<br>'
}

//================================================================

function exeFor() {
    let res7 = document.getElementById('res7')

    let array = []
    let soma = 0
    let media = 0


    for(let i = 0; i < 7; i++) {
        array.push(gerarAleatorio(10, 1))
    }   
    
    for(let i = 0; i < 7; i++) {
        soma = soma + array[i]
    }   

    media = soma / 7

    res7.innerHTML = 'Array:' + array + '<br>'
    res7.innerHTML += 'Média: ' + media.toFixed(2)
}

//================================================================

function exeWhile() {
    let res8 = document.getElementById('res8')
    let num8 = Number(document.getElementById('num8').value)

    let fatorial = num8
    num8 = num8 - 1

    while(num8 > 0) {
        fatorial = fatorial * num8

        num8 = num8 - 1
    }

    res8.innerHTML = 'O fatorial do seu número é:' + fatorial
}

function exeIf() {
    let res9 = document.getElementById('res9')
    let num9 = Number(document.getElementById('num9').value)

    if(num9 > 0) {
        res9.innerHTML = 'O número ' + num9 + ' é Positivo'
    } else if(num9 < 0) {
        res9.innerHTML = 'O número ' + num9 + ' é Negativo'
    } else {
        res9.innerHTML = 'O número é 0'
    }
}

//================================================================

function exeDOM() {
    let div = document.createElement('div')
    div.setAttribute('id', 'res10')   

    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = 'como podemos ver quando clicamos o botão o js é acionado e mostra tudo o que tem dentro do inner.HTML'

    div.appendChild(paragrafo)

    let dom = document.getElementById('dom')
    dom.appendChild(div)
}

//================================================================