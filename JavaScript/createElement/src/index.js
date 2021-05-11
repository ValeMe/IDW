'use strict'

import { Title } from './components/Title.js'
import createElement from './utils/createElement.js'

const main = document.getElementById('main')
const titleEl = Title('Hi createElement')

const p = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt exercitationem, non ad iste suscipit libero reiciendis aperiam hic vitae. Sit blanditiis maxime eos incidunt veniam accusamus impedit adipisci ea.'

const P = createElement('p', {}, [p])

// add main children
main.appendChild(titleEl)
main.appendChild(P)
