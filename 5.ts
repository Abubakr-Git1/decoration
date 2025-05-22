function LogParam(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(`Param position: ${parameterIndex} in method ${String(propertyKey)}`);
}

class Mario {
    myMethod(@LogParam jump_high: string, speed: number) {
    }
}