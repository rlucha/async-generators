import axios from 'axios';

// async function* tick() {
//   const gen = yield;
//   const total = 0;
//
//   await setTimeout(() => yield 'tick', 1000);
//
//   if(total = 3) {
//     return 'done' ;
//   }
//
// }

async function* tick() {
  debugger;
  const thing = await axios.get('http://www.google.com');
  yield await thing;
}

async function wait() {
  const ticks = await tick().next();
  return ticks;
}

wait().then(e =>{
  debugger;
  console.log(e.value)
});
