export const DetailsCard = () => {
	return (
		<div style={{display:'flex'}}> {/* flex */}
			<div> {/* imagem a esquerda */}
				<img src="" alt="" /> 
                <p>imagem</p>
			</div>

			<div> {/* dados a direita */}
                <div>
                    <h2>NOME DO POKEMON / NUMERO DO POKEMON</h2>
                    <p>TIPOS DO POKEMON</p>
                </div>

                <div>
                    <h3>Abilities:</h3> <p> ? </p> {/* HOVER = CLIQUE PARA LER A HABILIDADE */}
                    <ul>
                        <li>
                            <p>abilities list</p>  {/* se clicado mostrar um card de ability info */}
                            <p>ability info</p>{/* card paragrafo de ability info */}
                           
                        </li> 
                    </ul>
                </div>

                <div>
                    <h3>Moves:</h3>
                    <ul>
                        <li>move list</li> {/* FUTURO limitar a 5 */}
                    </ul>
                    <button>Show all moves</button> {/* FUTURO mostrar todos se clicado */}
                </div>
            </div>
		</div>
	)
}
