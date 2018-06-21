'use strict'
import {combineReducers} from 'redux'
import ChangReducer from './ChangReduce'
export  default  combineReducers({
   userStore:ChangReducer
})

