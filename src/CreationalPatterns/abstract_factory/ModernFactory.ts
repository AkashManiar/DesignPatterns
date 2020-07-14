import IFurnitureFactory from "./IFurnitureFactory";
import IChair from "./IChair";
import ISofa from "./ISofa";
import ITable from "./ITable";
import { ModernChair } from "./Chair"
import { ModernSofa } from "./Sofa"
import { ModernTable } from "./Table"

class ModernFactory implements IFurnitureFactory {
    public createChair(): IChair {
        console.log('Creating Modern chair...');
        const mChair:IChair = new ModernChair()
        return mChair  
    }
    public createSofa(): ISofa {
        console.log('Creating Modern Sofa...');
        const mSofa:ISofa = new ModernSofa()
        return mSofa  
    }
    public createTable(): ITable {
        console.log('Creating Modern Table...');
        const mTable:ITable = new ModernTable()
        return mTable  
    }
}

export default ModernFactory