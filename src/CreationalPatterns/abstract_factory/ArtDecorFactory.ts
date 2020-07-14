import IFurnitureFactory from "./IFurnitureFactory";
import IChair from "./IChair";
import ISofa from "./ISofa";
import ITable from "./ITable";
import { ArtDecorChair } from "./Chair"
import { ArtDecorSofa } from "./Sofa"
import { ArtDecorTable } from "./Table"

class ArtDecorFactory implements IFurnitureFactory {
    public createChair(): IChair {
        console.log('Creating ArtDecor chair...');
        const aChair:IChair = new ArtDecorChair()
        return aChair  
    }
    public createSofa(): ISofa {
        console.log('Creating ArtDecor Sofa...');
        const aSofa:ISofa = new ArtDecorSofa()
        return aSofa  
    }
    public createTable(): ITable {
        console.log('Creating ArtDecor Table...');
        const aTable:ITable = new ArtDecorTable()
        return aTable  
    }
}

export default ArtDecorFactory