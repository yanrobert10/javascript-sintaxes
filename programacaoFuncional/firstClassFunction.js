// First-class Function
// Podem esta em qualquer lugar inclusive, como parâmetro de outras funções
// A função poderá ser entendida como uma variável

const sayMyName = () => console.log("Hi Yan");
const runFunction = (fn) => fn();

sayMyName();
runFunction(sayMyName);
runFunction(() => console.log("Rodando função com outra função"));

console.log(runFunction(Math.random));