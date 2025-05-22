function Component(constructor: Function) {
    console.log(`Class name: ${constructor.name}`);
}

@Component
class mouse {
    constructor(public name: string) { }

}

