import express from 'express'
import AbstractFactoryPattern from "./CreationalPatterns/abstract_factory"
import GenerateBuilder from "./CreationalPatterns/builder"


const app = express()
const add = (a: number, b: number): number => a + b

app.get('/', (req, res) => {
    res.send('This is a Home page')
    console.log(add(5, 5));
})

app.listen(5000, () => console.log('Server running at 5000'))


// Design Patterns

// Abstract Factory Pattern
// AbstractFactoryPattern()

// Builder
GenerateBuilder()