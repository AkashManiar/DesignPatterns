import IFurnitureFactory from "./IFurnitureFactory";
import IChair from "./IChair";
import ISofa from "./ISofa";
import ITable from "./ITable";
import { VictorianChair } from "./Chair"
import { VictorianSofa } from "./Sofa"
import { VictorianTable } from "./Table"


export default class VictorianFactory implements IFurnitureFactory {
    public createChair(): IChair {
        console.log('Creating Victorian chair...');
        const vChair:IChair = new VictorianChair()
        return vChair  
    }
    public createSofa(): ISofa {
        console.log('Creating Victorian Sofa...');
        const vSofa:ISofa = new VictorianSofa()
        return vSofa  
    }
    public createTable(): ITable {
        console.log('Creating Victorian Table...');
        const vTable:ITable = new VictorianTable()
        return vTable  
    }
}