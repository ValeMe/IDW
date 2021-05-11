'use strict'

import { Title } from './components/Title.js'
import { Button } from './components/Button.js'
import { Input } from './components/InputSearch.js'
import createElement from './utils/createElement.js'
import { GET } from './utils/httpGet.js'

const url = 'https://idwapi-juvasquez88.vercel.app/js'

const main = document.getElementById('main')
const titleEl = Title('Welcome Javascript')

const list = createElement('ul', {id: 'list'}, []);

const inputSearch = Input('')
// Añadir el evento cuando se da enter
inputSearch.addEventListener('keyup', function(e){
    if (e.code == 'Enter'){
        GET(url, inputSearch.value, list)
    }
})

const btnSearch = Button('Search');
// Añadir el evento cuando se da click
btnSearch.addEventListener('click', function () {
    GET(url, inputSearch.value, list)
})

// add main children
main.appendChild(titleEl)
main.appendChild(list)
main.appendChild(inputSearch)
main.appendChild(btnSearch)
main.appendChild(list)

GET(url, '', list)
