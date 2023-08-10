let number = 2;

// stateful function
function square() {
    return number * number;
}
number = square();

// stateless function
const aoQuadrado = n => n * n;

aoQuadrado(2);