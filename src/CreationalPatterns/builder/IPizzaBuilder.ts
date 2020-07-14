interface IPizzaBuilder {
    prepareDough(): any
    makeBase(): any
    bakeBase(temperature: number, time:number): any
    makeSauceLayer(): any
    addCheeseLayer(): any
    addTopings(): any
    bakeAgain(temperature: number, time:number): any
    addGarnish(): any
    serve(): any
}

export default IPizzaBuilder