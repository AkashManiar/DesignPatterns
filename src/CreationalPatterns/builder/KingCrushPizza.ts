import IPizzaBuilder from "./IPizzaBuilder"
import IPizza from "./IPizza"

class KingCrushPizza implements IPizzaBuilder {
    private pizza:IPizza = {}

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.pizza = {};
        // this.pizza = new Pizza()
    }

    prepareDough() {
        this.pizza.dough = 'Only All purpose flour is used to make dough.'
    }
    makeBase() {
        this.pizza.base = 'Very thin base is been made, and rolled more to make it thin.'
    }
    bakeBase(temperature: number, time:number) {
        this.pizza.bake1 = `Bake at temperature ${temperature}F for ${time}mins`
    }
    makeSauceLayer() {
        this.pizza.sauce = 'Layer of Schezwan sauce is made.'
    }
    addCheeseLayer() {
        this.pizza.cheese = 'Melted Gouda cheese layer is added.'
    }
    addTopings() {
        this.pizza.toppings = 'Added: Corn, Coriander leaves, Bell Peppers'
    }
    bakeAgain(temperature: number, time:number) {
        this.pizza.bake2 = `Bake at temperature ${temperature}F for ${time}mins`
    }
    addGarnish() {
        this.pizza.garnish = 'Added Black pepper.'
    }
    serve() {
        this.pizza.serve = 'Served with Onion dipping sauce.'
    }

    getProduct():IPizza {
        return this.pizza
    }
    
}

export default KingCrushPizza