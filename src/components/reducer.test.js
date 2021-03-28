'use strict'

import { expect } from 'chai'
import reducer from './reducer'

it('reducer should be a function', () => {
   expect(reducer).to.be.a('function')
})

it('reducer should set a news', () => {
   const before = { news: {} }
   const action = { type: "SET_NEWS", news: { title: "teste", description: "teste", uf: "teste", city: "teste", dateNews: "teste" } }
   const after = { news: { title: "teste", description: "teste", uf: "teste", city: "teste", dateNews: "teste" } }
   expect(reducer(before, action)).to.be.deep.equal(after)
})

it('reducer should set change current news', () => {
   const before = { news: { title: "teste", description: "teste", uf: "teste", city: "teste", dateNews: "teste" } }
   const action = { type: "SET_NEWS", news: { title: "teste2", description: "teste2", uf: "teste2", city: "teste2", dateNews: "teste2" } }
   const after = { news: { title: "teste2", description: "teste2", uf: "teste2", city: "teste2", dateNews: "teste2" } }
   expect(reducer(before, action)).to.be.deep.equal(after)
})

it('Should return same state if action is unknown', () => {
   const before = { news: { title: "teste", description: "teste", uf: "teste", city: "teste", dateNews: "teste" } }
   const action = { type: "UNKNOWN" }
   const after = { news: { title: "teste", description: "teste", uf: "teste", city: "teste", dateNews: "teste" } }
   expect(reducer(before, action)).to.be.deep.equal(after)
})

it('Should return initial state if last state is undefined', () => {
   const before = undefined
   const action = {}
   const after = { news: { title: "", description: "", uf: "", city: "", dateNews: "" } }
   expect(reducer(before, action)).to.be.deep.equal(after)
})


