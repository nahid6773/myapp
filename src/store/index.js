import {applyMiddleware, createStore } from 'redux'
import { reduser } from './reduser'
import thunk from 'redux-thunk'

export const store=createStore(reduser,applyMiddleware(thunk));