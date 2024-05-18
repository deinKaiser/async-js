const { default: axios } = require("axios");

const promise = new Promise((resolve, reject) => {
  axios.get("https://swapi.dev/api/people/1/").then((response) => {
    resolve(response.data);
  });
  // fetch("https://swapi.dev/api/people/1/",(data)=> resolve(data))
  // setTimeout(() => {
  //   const data = "Returned data to resolve in the promise";
  //   resolve(data);
  // }, 2000);
});

console.log("Start");

promise.then((message) => {
  console.log(message);
});

console.log("End");
