/* to avoid creating multiple files, 
I have provided implementation of all chairs in one file */

import IChair from "./IChair"

class VictorianChair implements IChair {
    constructor() {
        console.log(this.getChairSize())
        console.log(this.getLegShape())
    }
    public getChairSize():string {
        return 'Victorian chair size is quite bigger in shape. \n'
    }
    public getLegShape(): string {
        return 'Victorian chairs leg shapes are bit curvy. \n'
    }
}

class ArtDecorChair implements IChair {
    constructor() {
        console.log(this.getChairSize())
        console.log(this.getLegShape())
    }
    public getChairSize():string {
        return 'ArtDecorChair size is quite biggest among all shaped chairs. \n'
    }
    public getLegShape(): string {
        return 'ArtDecorChair chairs leg shapes are big and spacious. \n'
    }
}

class ModernChair implements IChair {
    constructor() {
        console.log(this.getChairSize());
        console.log(this.getLegShape());
    }
    public getChairSize():string {
        return 'ArtDecorChair size is quite biggest among all shaped chairs. \n'
    }
    public getLegShape(): string {
        return 'ArtDecorChair chairs leg shapes are big and spacious. \n'
    }
}

export {VictorianChair, ArtDecorChair, ModernChair }