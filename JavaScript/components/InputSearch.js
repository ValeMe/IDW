'use strict'

import createElement from '../utils/createElement.js'

/**
 * 
 * @returns instancia del elemento input HTML
 */
export const Input = input => createElement('input', { type: 'text' }, [])