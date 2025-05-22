function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor){
    console.log(`Accessor ${name}`);
}

class fruit_basket {
    private _fruits: number = 436;

    @LogAccessor
    get fruits(){
        return this._fruits;
    }

    set fruits(value: number){
        this._fruits = value;
    }
}
