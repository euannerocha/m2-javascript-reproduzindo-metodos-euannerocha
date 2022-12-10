let meuArray = [0, 1, 2, 3, 4, 5]



//MAP

function minhaCallBackMap(valorAtual, indice) {
    return valorAtual + indice
}


function meuMetodoMap(array, callback) {
    let newArr = []


    for (let i = 0; i < array.length; i++) {

        newArr.push(callback(array[i], i, array))
    }

    return newArr
}


console.log(meuMetodoMap(meuArray, minhaCallBackMap))


//FILTER

function meuMetodoFilter(arrayF, callbackF) {
    let newArrFilter = []

    for (let i = 0; i < arrayF.length; i++) {
        if (callbackF(arrayF[i])) {
            newArrFilter.push(arrayF[i])
        }
    }

    return newArrFilter
}

console.log(meuMetodoFilter(meuArray, (elementF)=>{
    return elementF < 2
}))
console.log(meuMetodoFilter(meuArray, (elementF)=>{
    return elementF < 3
}))
console.log(meuMetodoFilter(meuArray, (elementF)=>{
    return elementF < 4
}))


//FIND

function meuMetodoFind(arrayFind, callbackFind) {

    for (let i = 0; i < arrayFind.length; i++) {
        if (callbackFind(arrayFind[i])) {
            return arrayFind[i]
        }
    }

    return undefined
}

console.log(meuMetodoFind(meuArray, (elementFind) => {
    return elementFind === 3
}))

console.log(meuMetodoFind(meuArray, (elementFind) => {
    return elementFind !== 3
}))

console.log(meuMetodoFind(meuArray, (elementFind) => {
    return elementFind === 9
}))


//REDUCE

function meuMetodoReduce(array, callback, valorInicial) {

    let initial = 0

    if (valorInicial !== undefined) {
        initial = valorInicial
    }

    for (let i = 0; i < array.length; i++) {
        initial = callback(initial, array[i])
    }
    return initial
}

console.log(meuMetodoReduce(meuArray, (acumulator, elementReduce) => {
    return acumulator + elementReduce
}))
console.log(meuMetodoReduce(meuArray, (acumulator, elementReduce) => {
    return acumulator * elementReduce
}, 1))
console.log(meuMetodoReduce(meuArray, (acumulator, elementReduce) => {
    return acumulator - elementReduce
}))


//INCLUDES

function meuMetodoIncludesTrue(searchElement) {

    for (let i = 0; i < searchElement.length; i++) {
        if (searchElement[i] === 4) {
            return true
        }
    }

    return false
}

console.log(meuMetodoIncludesTrue(meuArray))

function meuMetodoIncludesFalse(searchElement) {

    for (let i = 0; i < searchElement.length; i++) {
        if (searchElement[i] === 8) {
            return true
        }
    }

    return false
}

console.log(meuMetodoIncludesFalse(meuArray))


//INDEXOF

function meuMetodoIndexOfUnexist(arrayI) {

    for (let i = 0; i < arrayI.length; i++) {
        if (arrayI[i] === 7) {
            return [i]
        }
    }

    return -1
}

console.log(meuMetodoIndexOfUnexist(meuArray))
