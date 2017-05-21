import bp from "babel-polyfill";
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
  const google = await axios.get('http://www.google.com');
  const amazon = await axios.get('http://www.google.com');
  yield await google;
  yield await amazon;
}

async function wait() {
  let ticks = [];
  for await (const responses of tick()) {
    ticks.push(responses);
  }

  return ticks;
}

wait().then(e =>{
  console.log(e)
});
