




const livrosEmCategoria = [
    {   
        categoria: "Riqueza",
        livros: [
            {
                titulo:"Os segredos da mente milionária",
                autor:"T. Hary Eker",
            },
            {
                titulo:"O homem mais rico da Babilônia",
                autor:"George S. Clason",
            },
            {
                titulo:"Pai rico, pai pobre",
                autor:"Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },

    {
        categoria: "Inteligência Emocional",
        livros: [
            {
                titulo:"Você é Insubstituível",
                autor:"Augusto Cury",
            },
            {
                titulo:"Ansiedade - Como enfrentar o mal do século",
                autor:"Augusto Cury",
            },
            {
                titulo:"Os 7 hábitos das pessoas altamente eficazes",
                autor:"Stephen R. Covey",
            },
        ]
    }
]

const totalCategoria = livrosEmCategoria.length;
console.log(totalCategoria);

for(let categoria of livrosEmCategoria) {
    console.log("Total de livros da categoria: " + categoria.categoria);
    console.log(categoria.livros.length);
}

function totalAutores() {
    let autores = [];

    for(let categoria of livrosEmCategoria) {
        for( let livro of categoria.livros ) {
            if (autores.indexOf(livro.autor) == -1) {
                autores.push(livro.autor);
            }
        }
    }
    console.log(`Total de autores: ${autores.length}`);
}

function livrosOfAutor(autor) {
    let livros = [];

    for(let categoria of livrosEmCategoria) {
        for( let livro of categoria.livros ) {
            if (livro.autor === autor) {
                livros.push(livro.titulo);
            }
        }
    }
    console.log(`Livros do ${autor}: ${livros.join(", ")}`);
}



totalAutores();

livrosOfAutor("Augusto Cury");