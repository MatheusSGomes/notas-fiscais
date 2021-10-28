import { handleStatus, log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';

const ehDivisivel = (divisor, numero) => !(numero % divisor);

// console.log(ehDivisivel(2, 10)); // true
// console.log(ehDivisivel(2, 5)); // false

const ehDivisivelPorDois = ehDivisivel.bind(null, 2)

console.log(ehDivisivelPorDois(10)); // true
console.log(ehDivisivelPorDois(5)); // false


document
.querySelector('#myButton')
.onclick = () => 
  service
  .sumItems('2143')
  .then(log) // 590
  .catch(log)
