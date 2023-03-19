const simpleFunction = () => {
    console.log("Hello");
  };
  const higherOrderFunction = (fn, times) => {
    for (let i = 0; i < times; i++) {
      fn();
    }
  };
  higherOrderFunction(simpleFunction, 5);