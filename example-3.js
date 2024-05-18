function fetchData(callback) {
  setTimeout(() => {
    const data = "Returned data"; // I could have asynd request here
    callback(data);
  }, 2000);
}

console.log("Start");
fetchData((data) => {
  console.log(data);
});
console.log("End");
