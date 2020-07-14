import IChair from "./IChair";
import ISofa from "./ISofa";
import ITable from "./ITable";

interface IFurnitureFactory {
    createChair(): IChair;
    createSofa(): ISofa;
    createTable(): ITable;
}

export default IFurnitureFactory