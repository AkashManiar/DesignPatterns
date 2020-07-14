/* to avoid creating multiple files, 
I have provided implementation of all Tables in one file */

import ITable from "./ITable"

class VictorianTable implements ITable {
    constructor() {
        console.log(this.getLegs())
    }
    public getLegs():string {
        return 'Victorian chair size is quite bigger in shape. \n'
    }
}

class ArtDecorTable implements ITable {
    constructor() {
        console.log(this.getLegs())
    }
    public getLegs():string {
        return 'Victorian chair size is quite bigger in shape. \n'
    }
}

class ModernTable implements ITable {
    constructor() {
        console.log(this.getLegs())
    }
    public getLegs():string {
        return 'Victorian chair size is quite bigger in shape. \n'
    }
}

export {VictorianTable, ArtDecorTable, ModernTable }