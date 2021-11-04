import { handleStatus, log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js';

const action = debounceTime(500, 
  takeUntil(3, () => 
    service
      .sumItems('2143')
      .then(log) // 590
      .catch(log)
  )
)


document
  .querySelector('#myButton')
  .onclick = action;
