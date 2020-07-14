import VictorianFactory from "./VictorianFactory";
import ModernFactory from "./ModernFactory";
import ArtDecorFactory from "./ArtDecorFactory";
import IFurnitureFactory from "./IFurnitureFactory";

const Client = (furniture:IFurnitureFactory) => {
    const chair = furniture.createChair()
    const sofa = furniture.createSofa()
    const table = furniture.createTable()
}

const AbstractFactoryPattern = () => {
console.log('---Victorian Furniture---');

const vF:IFurnitureFactory = new VictorianFactory()
Client(vF);

console.log('---Modern Art Furniture---');

const mf:IFurnitureFactory = new ModernFactory()
Client(mf);

console.log('---Art Decor Furniture---');
const aF:IFurnitureFactory = new ArtDecorFactory()
Client(aF);
}

export default AbstractFactoryPattern
