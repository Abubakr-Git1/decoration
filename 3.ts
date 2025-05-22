function LogProperty(target: any, propertyKey: string){
    console.log(`Bu property nomi: ${propertyKey}`);
}

class burger {
    @LogProperty
    bread: string;

    @LogProperty
    steak: number = 10;

    constructor(t: string) {
        this.bread = t;
    }
}
