'use strict'
import createElement from './createElement.js'

export function GET(url, word, list){
    
    list.innerHTML = ' '
    
    fetch(url).then(response => response.json())
                .then(receive => Object.values(receive['phrases']))
                .then(datos => {filtrar(datos, word, list)})
                .catch(err =>console.log(err.message))
}


export function filtrar(datos, word, list){
    var contains = false
    
    for (let i in datos){
        let value = String(Object.values(datos[i]))
        let element = createElement('li', {}, [])
        
        if(value.toLowerCase().includes(word.toLowerCase())){
            element.appendChild(document.createTextNode(value))
            list.appendChild(element)
            contains = true;
        }
    }
    
    if(contains == false){
        let text = createElement('p', {}, [])
        text.appendChild(document.createTextNode('No hay elementos'))
        list.appendChild(text)
    }
}