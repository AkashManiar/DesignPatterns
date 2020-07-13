interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}


class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}


class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}


// Type: AX

//Base Interface
interface AbstractProductA {
    usefulFunctionA(): string;
}

// Concrete classes
class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return "This is a Implementation of usefulFunction A for Concrete product 'A1'"
    }
}

class ConcreteProductA2 {
    public usefulFunctionA(): string {
        return "This is a Implementation of usefulFunction A for Concrete product 'A2'"
    }
}


// Type: BX

//Base Interface
interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

// Concrete classes
class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'This is result of product B1'
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA):string {
        const result = collaborator.usefulFunctionA();
        return `This is result of B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'This is a result of product B2'
    }
    public anotherUsefulFunctionB(collaborator: AbstractProductA):string {
        const result = collaborator.usefulFunctionA();
        return `This result of the B2 collaborating with (${result})`
    }
}

const ClientCode = (factory: AbstractFactory) => {
    const productA = factory.createProductA()
    const productB = factory.createProductB()

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
ClientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
ClientCode(new ConcreteFactory2());