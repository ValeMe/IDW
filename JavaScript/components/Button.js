'use strict'

import createElement from '../utils/createElement.js'

/**
 * 
 * @param {string} button texto del boton
 * @returns una instacia del elemento button HTML
 */
 export const Button = button => createElement('button', { class: 'button' }, [button])
