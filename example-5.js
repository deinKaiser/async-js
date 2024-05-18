
console.log("Start");

const asyncFunction = async () => {
  console.log("BEFORE Async/Await");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Async/Await complete!");

   await new Promise((resolve) => setTimeout(resolve, 2000));
   
  console.log("Async/Await 2 complete!");

};

asyncFunction();

console.log("End");
