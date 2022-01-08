// import World from './world'


// const root = document.getElementById('root')
// const world = new World('Hello Wor!')
// world.sayHello(root)

//03.基本の型定義
// import {anySample, notExistSample, primitiveSample,unknownSample } from "./basic";

// anySample()
// notExistSample()
// primitiveSample()
// unknownSample()

//04.関数の形定義
import { logMessage, logMessage5} from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript!')
logMessage5('Hello Type Signature!')
isUserSignedIn('ABC', 'Hikari')
isUserSignedIn('123')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(1000, 2000, 500, 3000, 250)
console.log('Function parameters sample 5: Total price:', sum)