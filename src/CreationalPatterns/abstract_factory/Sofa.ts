import ISofa from "./ISofa"

/* to avoid creating multiple files, 
I have provided implementation of all Sofas in one file */

class VictorianSofa implements ISofa {
    constructor() {
        console.log(this.getFabricMaterial())
    }
    public getFabricMaterial():string {
        return 'Victorian sofas are made of silk and cotton with embroidery on it. \n'
    }
}

class ArtDecorSofa implements ISofa {
    constructor() {
        console.log(this.getFabricMaterial())
    }
    public getFabricMaterial():string {
        return 'ArtDecorSofa sofas are made of just cotton with less or more embroidery on it. \n'
    }
}

class ModernSofa implements ISofa {
    constructor() {
        console.log(this.getFabricMaterial())
    }
    public getFabricMaterial():string {
        return 'Modern sofas have leather coating on its seat. \n'
    }
}

export {VictorianSofa, ArtDecorSofa, ModernSofa }