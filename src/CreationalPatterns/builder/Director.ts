import IPizzaBuilder from "./IPizzaBuilder"

// Purpose of director is to have variation function where sequence is imp
class Director {
    private pizzaBuilder!: IPizzaBuilder;

    public setBuilder(pizzaBuilder:IPizzaBuilder): void {
        this.pizzaBuilder = pizzaBuilder;
    }
    
    makeVeggiePizza() {
        this.pizzaBuilder.prepareDough()
        this.pizzaBuilder.makeBase()

        // Variation why we use director
        this.pizzaBuilder.bakeBase(420, 5)
        this.pizzaBuilder.makeSauceLayer()
        this.pizzaBuilder.addCheeseLayer()
        this.pizzaBuilder.addTopings()

        // Variation why we use director
        this.pizzaBuilder.bakeAgain(320, 15)
        this.pizzaBuilder.addGarnish()
        this.pizzaBuilder.serve()
    }

    makeKingCrush() {
        this.pizzaBuilder.prepareDough()
        this.pizzaBuilder.makeBase()

        // Variation why we use director
        this.pizzaBuilder.bakeBase(420, 10)
        this.pizzaBuilder.makeSauceLayer()
        this.pizzaBuilder.addCheeseLayer()
        this.pizzaBuilder.addTopings()

        // Variation why we use director
        this.pizzaBuilder.bakeAgain(520, 15)
        this.pizzaBuilder.addGarnish()
        this.pizzaBuilder.serve()
    }
}

export default Director