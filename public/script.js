
// B.1 


const catalogo = [
    {
        id: 1,
        titulo: "Vingadores",
        tipo: "filme",
        ano: 2012,
        generos: ["ação", "aventura"],
        nota: 8.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },
    {
        id: 3,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção"],
        nota: 9.0,
        assistido: false
    },
    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção", "terror"],
        nota: 8.9,
        assistido: true
    },
    {
        id: 5,
        titulo: "Titanic",
        tipo: "filme",
        ano: 1997,
        generos: ["romance", "drama"],
        nota: 8.0,
        assistido: false
    },
    {
        id: 6,
        titulo: "Dark",
        tipo: "serie",
        ano: 2017,
        generos: ["mistério", "ficção"],
        nota: 9.3,
        assistido: false
    }
];


// B.2 

console.log("===== DADOS INICIAIS =====");
console.log(catalogo);

console.log("\n===== ACESSO DIRETO =====");
console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas 1 gênero.");
}


// B.3

// forEach
console.log("\n===== LISTA DE FILMES E SÉRIES =====");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// map
console.log("\n===== TÍTULOS EM CAIXA ALTA =====");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);


// filter
console.log("\n===== NÃO ASSISTIDOS =====");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Quantidade:", naoAssistidos.length);
console.log(naoAssistidos);


// find
console.log("\n===== PRIMEIRO COM NOTA >= 9 =====");
const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {
    console.log(`${notaAlta.titulo} - Nota: ${notaAlta.nota}`);
} else {
    console.log("Nenhum encontrado.");
}


// reduce
console.log("\n===== MÉDIAS =====");

const mediaGeral = catalogo.reduce((soma, item) => soma + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);

const mediaAssistidos = assistidos.reduce((soma, item) => soma + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

// some e every
console.log("\n===== CHECAGENS =====");

const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", existeAntigo);
console.log("Todos têm gênero?", todosTemGenero);

// B.4

const totalFilmes = catalogo.filter(item => item.tipo === "filme").length;
const totalSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

document.getElementById("output").innerHTML = `
    <h3>Resumo do Catálogo</h3>
    <p>Total de itens: ${catalogo.length}</p>
    <p>Filmes: ${totalFilmes}</p>
    <p>Séries: ${totalSeries}</p>
    <p>Não assistidos: ${naoAssistidos.length}</p>
    <p>Média geral: ${mediaGeral.toFixed(2)}</p>

    <h4>Top 3</h4>
    <ul>
        ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
    </ul>
`;