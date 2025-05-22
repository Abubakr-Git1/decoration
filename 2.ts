
function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor){
    console.log(`Shu method ${methodName} chaqirildi`);
    console.log('Target', target);
    console.log('Descriptor', descriptor);
}

class boat {
    @LogMethod
    drive(){
        console.log('swiming...')
    }
}
