// Captura dos elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando texto ao título e ao link
titulo.innerText = 'Bem-vindo ao Projeto HTML e JavaScript!';
link.innerText = 'Acesse a Prozeducação';

// Adicionando itens na lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens na lista ordenada com links
listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
    <li><a href="https://wikipedia.org" target="_blank">Wikipedia</a></li>
`;
