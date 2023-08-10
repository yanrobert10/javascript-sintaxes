// Exemplo em JS
const cart = {
    quantity: 2,
    total: 200
}

// não posso
cart.quantity = 3;

// deve sempre criar uma nova constante
const newCart = {...cart, quantity:3}

// Exemplo em ReactJS
const [amount, setAmount] = useState(0);

// não posso
amount = 2;

// tenho que usar o 
setAmount(2);