import IPizzaBuilder from "./IPizzaBuilder"
import VeggiePizza from "./VeggiePizza"
import Director from "./Director"
import KingCrushPizza from "./KingCrushPizza"

const ClientCode = (director: Director) => {
    const veggieBuilder = new VeggiePizza()
    director.setBuilder(veggieBuilder)
    director.makeVeggiePizza()
    console.log('------------------Veggie Pizza--------------------')
    console.log(veggieBuilder.getProduct());
    console.log('');
    console.log('---------------King Crush Pizza------------------')
    const kingCrushBuilder = new KingCrushPizza()
    director.setBuilder(kingCrushBuilder)
    director.makeKingCrush()
    console.log(kingCrushBuilder.getProduct());
}

const GenerateBuilder = () => {
    const director = new Director()

    ClientCode(director)
}

export default GenerateBuilder