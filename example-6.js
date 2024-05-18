(async () => {
  console.log("Start");

  const asyncFunction = async () => {
    console.log("BEFORE Async/Await");

    await new Promise((resolve) => setTimeout(resolve, 2000))
    .then(() => {console.log("Async/Await complete!")})
    .then(() => Promise((resolve, reject) => resolve()))
    .then(() => {console.log("Async/Await 2 complete!")});

  };

  await asyncFunction();

  console.log("End");
})();