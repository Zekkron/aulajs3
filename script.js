
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Bem-vindo à Nossa Loja de Jogos';
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.className = 'produto';


const nome = document.createElement('h2');
nome.textContent = 'Elden Ring Shadow of the Erdtree';
produto.appendChild(nome);

const imagem = document.createElement('img');
imagem.src = 'https://cdn11.bigcommerce.com/s-7tdfxdbqwx/products/404/images/1433/ER_SotE__39511.1710993274.1280.1280.jpg?c=1'
imagem.alt = 'Imagem do Produto';

imagem.style.width = '450px'; 
imagem.style.height = '400px'; 

produto.appendChild(imagem);

const descricao = document.createElement('p');
descricao.textContent = 'Uma expansão que traz uma história inédita ambientada na Terra das Sombras, cheia de mistérios, masmorras perigosas, novos inimigos e itens.';
produto.appendChild(descricao);

const preco = document.createElement('p');
preco.textContent = 'Preço: R$ 199,50';
produto.appendChild(preco);

document.body.appendChild(produto);