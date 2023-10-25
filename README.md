### <div align="center">Escolha seu idioma | Choose your language </div>

<div align="center">

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/edilan-ribeiro/pokemon-project/blob/main/README.md) 
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/edilan-ribeiro/pokemon-project/blob/main/README.en.md)<br>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

</div>
<br>
<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/github_username/pokemon-project">
    <img src="./public/images/readme/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Pokemon Project - Powered by PokeApi</h3>

  <p align="center">
    Mostra dados dados de pokemons!
  </p>
  
  <a href="https://pokemon-project-rho.vercel.app/">View Demo</a>
</div>

<br>

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#notas-de-destaque">Notas de destaque</a></li>
        <li><a href="#desafios-e-aprendizados">Desafios e aprendizados</a></li>
        </ul>
    </li>
    <li><a href="#utilização">Utilização</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<br><br>
## Sobre o projeto

 <img src="./public/images/readme/desktop.gif" alt="gif do projeto no desktop" width="300" height="250">


<br>Esse projeto permite o usuário obter alguns dados de pokemons seja na lista padrão, pelo campo de busca ou pelo tipo.

Os dados vem da PokeApi e são filtrados para a exibição.

Ele é totalmente responsivo!

<img src="./public/images/readme/mobile.gif" alt="gif do projeto no celular" width="150" height="330">


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Feito com

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%2320232a.svg?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Notas de destaque

Para construção do projeto foi necessário o uso de diversas bibliotecas adicionais como:

- React Hook Form:  para gerenciamento do formulário
- Zod: para validação do formulário
- React Spring: para animações de transição
- React Router: para gerenciar o caminho das páginas
- useAnimations: para carregamento
- React Icons: para ícones
- React testing library + Vitest + Jsdom: para realização dos testes

Embora muitos desenvolvedores já tenham realizado projetos semelhantes (seria este um <a href="https://media.tenor.com/GESYbde0oaYAAAAd/canon-event-lochan-bwefi.gif" target="_blank">evento canônico</a>? 🕸), a experiência de construir os componentes, lidar com diversas condições e lidar com as chamadas de api foi incrivelmente enriquecedora. O processo não apenas solidificou meu entendimento prático, mas também proporcionou insights valiosos sobre a arquitetura e a otimização do código.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Desafios e aprendizados

|💂🏼 | 👮🏼‍♀️| Separação de responsabilidades foi um desafio inicial, porque no começo de um projeto não existem todos os componentes e mesmo com muito planejamento acaba aparecendo algo novo pra adicionar durante a criação.

📜 Formulários no React funcionam de uma forma um pouco diferente do que eu estava acostumado, aqui precisamos gerenciar os inputs de diversas formas e graças ao react hook forms consegui implementar o funcionamento de uma forma mais sucinta e otimizada.

🕵️‍♂️ Ainda sobre formulários a validação impôs um enorme desafio, porque com a criação de schema no Zod podemos determinar a forma que o dado será tratado, eu optei por string o que gerou o questionamento:

"E se o usuário colocar um ID inválido de um pokemon?? Vai ficar fazendo call pra api mesmo sabendo que os dados não são válidos?? 🤔"

Para evitar isso foi necessário criar uma regra que verifica o tipo de input com um regex, se for aceito converte o input em número e dai então utiliza esse input convertido como parâmetro para validar (🤯):
```javascript
 .refine(
	(value) =>
		/^\d+$/.test(value)
			? ((currentNumber) => {
					return (
						!isNaN(currentNumber) &&
						currentNumber >= 1 &&
						currentNumber <= 1017
					)
				})(Number(value))
			: value,
		{ message: "Must be a number between 1 and 1017" }
 )
```

💅 Um novo aprendizado foi o uso de Styled Components para ter os estilos dentro dos componentes, as maiores vantagens estão em saber exatamente aonde esta o estilo daquele pedaço específico do código e o uso de props para modificar o estilo de forma condicional.

🎨 O design foi complicado porque não sou a pessoa mais criativa do mundo, ter de navegar pelos intricados detalhes do design exigiu uma consideração cuidadosa de cada elemento visual. Ao enfrentar esse desafio, pude explorar e desenvolver estratégias para superar um pouco as limitações da minha abordagem menos criativa, resultando em um design que, embora desafiador, acabou sendo uma conquista significativa.

📑TESTES! Desenvolver testes para um site React proporcionou desafios estimulantes. A intricada natureza das funcionalidades demandou uma abordagem meticulosa, enfatizando a necessidade de uma cobertura abrangente na testagem automatizada. A criação completa da estrutura de testes, felizmente, elevou consideravelmente a confiança na qualidade do código, proporcionando uma compreensão mais aprofundada nos processos de teste.

Em resumo foi possível aprender e praticar:
 - Testes frontend com React testing library
 - Componentes e modificação props
 - Formulários e validações usando react hook form e zod
 - Aplicação de useContext
 - Páginas com React router
 - Estilização com styled components

 <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Utilização

Após clonar, baixar ou fazer um fork, utilize o comando abaixo para instalar as dependências do projeto:

```shell
npm install
```

Para rodar os testes utilize:
```shell
npm test
```

Esse projeto te permite:
- Buscar pelo nome de um pokémon
- Buscar pelo ID de um pokémon
- Filtrar pokémons por tipo
- Ver detalhes como tipos, habilidades e movimentos de um pokémon desejado
- Como desenvolvedor, rodar testes na aplicação!


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contato

💌 Para me mandar uma mensagem basta usar um dos botões abaixo!<br>

  <a href = "mailto:edilanbusiness@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-gmail-333333?style=flat&logo=gmail&logoColor=EA4335" height="25"></a>
  <a href="https://www.linkedin.com/in/edilan-ribeiro-santos" target="_blank"><img src="https://img.shields.io/badge/-linkedin-333333?style=flat&logo=linkedin&logoColor=0A66C2" height="25"></a> 
  <a href="https://whatsa.me/5561983769634/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20GitHub!" target="_blank">
  <img src="https://img.shields.io/badge/-whatsapp-333333?style=flat&logo=whatsapp&logoColor=25D366" height="25"></a>



<p align="right">(<a href="#readme-top">back to top</a>)</p>
