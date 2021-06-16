import NavBar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop"

function Historia(){
    return(
        <>
        <ScrollToTop />
        <NavBar />
        <div className="container">
            <h2 className="font-weight-bold">Sobre o Centro Histórico</h2>
            <p className="paragraphy">A primeira proposta de delimitação do Centro Histórico de João Pessoa, então denominado “Área de Interesse Histórico e Artístico de João Pessoa”, data de 1975, fazendo parte do Plano Diretor da cidade, foi subdividida em ‘área de importância ambiental’ e, no seu interior, a ‘área de preservação rigorosa’. Entretanto, essa delimitação padecia de vários problemas, onde boa parte de edificações do período colonial, como os do Largo Frei São Pedro Gonçalves ou o Parque Solon de Lucena, entre outros, não foram incluídos na área de preservação rigorosa, enquanto outras áreas historicamente importantes, como a atual Praça João Pessoa, foram excluídas da área de importância ambiental (COSTA, 2009).</p>
            <p className="paragraphy">Em 1987, foi realizado um convênio Brasil-Espanha de suma importância para a aplicabilidade de um plano geral, a partir da adoção de uma metodologia de análise dos diversos monumentos, resultando em um plano específico de revitalização. Inicialmente, foi delimitado um novo perímetro para o Centro Histórico, bem menor que o anterior, restrito à cidade alta e Varadouro (117 ha), núcleo inicial de formação da cidade (SCOCUGLIA, 2004; NOGUEIRA, 2005 apud COSTA, 2009). Posteriormente, uma equipe local desenvolveu as atividades, com supervisão do IPHAN e de técnicos espanhóis, por meio da criação da Oficina-Escola e da <strong>Comissão Permanente de Desenvolvimento do Centro Histórico de João Pessoa.</strong> Os primeiros frutos desse convênio começaram a aparecer na década seguinte, com a revitalização de quatro espaços, nomeadamente o Conjunto Carmelita, o Mosteiro de São Bento, o Complexo Franciscano e a Igreja São Frei Pedro Gonçalves, ícones religiosos do período colonial, além da Praça Venâncio Neiva e do casario da Praça Anthenor Navarro e adjacências, esse último tendo um papel fundamental como “polo atrativo para se atingir a sustentabilidade econômica da área do Varadouro e do antigo Porto do Capim” (COSTA, 2009, p. 123).</p>
            <p className="paragraphy">Em 2004, a Comissão redefiniu o perímetro do Centro Histórico, aumentando-o em cerca de quatro vezes (decreto Estadual nº 25.138), dividindo-o em ‘área de preservação do entorno’ e, no seu interior, a ‘área de preservação rigorosa’, composta de ruas e praças onde estão assentadas as edificações, incluindo elementos do geopatrimônio, como a Dolina dos Irerês (atual Parque Solon de Lucena) e algumas fontes. Assim, tanto o IPHAEP quanto a Comissão Permanente agora iriam atuar conjuntamente utilizando a mesma proposta de perímetro, apesar de alguns bens tombados pelo IPHAN, a exemplo da Fonte de Tambiá, no Parque Arruda Câmara e da Capela do Engenho da Graça, limítrofes ao perímetro, não estarem nele inclusos nessa.</p>
        </div>
        </>
    )
}


export default Historia;