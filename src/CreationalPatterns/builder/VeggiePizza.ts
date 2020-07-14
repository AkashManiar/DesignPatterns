import IPizzaBuilder from "./IPizzaBuilder"
import IPizza from "./IPizza"
import Pizza from "./Pizza";

class VeggiePizza implements IPizzaBuilder {
    private pizza:IPizza = {}

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.pizza = {};
        // this.pizza = new Pizza()
    }

    prepareDough() {
        this.pizza.dough = 'Making a mixture of wheat and all purpose flour, along with yeast to make it fluffy.'
    }
    makeBase() {
        this.pizza.base = 'Base is usually of medium size, if big than it should be bit thick.'
    }
    bakeBase(temperature: number, time:number) {
        this.pizza.bake1 = `Bake at temperature ${temperature}F for ${time}mins`
    }
    makeSauceLayer() {
        this.pizza.sauce = 'Tomato sauce layer is been added'
    }
    addCheeseLayer() {
        this.pizza.cheese = 'Melted Mozzarella cheese layer is added.'
    }
    addTopings() {
        this.pizza.toppings = 'Added: Capsicum, Jalapenos, Mushrooms, BlackOlives, RedPepper, RedChili'
    }
    bakeAgain(temperature: number, time:number) {
        this.pizza.bake2 = `Bake at temperature ${temperature}F for ${time}mins`
    }
    addGarnish() {
        this.pizza.garnish = 'Added coriander leaves'
    }
    serve() {
        this.pizza.serve = 'Served with "Veggie Pizza" Label Plate.'
    }
    
    getProduct():IPizza {
        return this.pizza
    }
}

export default VeggiePizza