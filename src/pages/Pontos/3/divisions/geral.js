import indep_1 from './media/indep_1.jpg';
import "../../1/index.css"

export function Geral(){
    return(
        <>
            <div className="container text-1">
                        <p className="text-article">Localiza-se no bairro de Tambiá, situa-se em entroncamento para várias direçõ	es: a Avenida Epitácio Pessoa, que liga o centro à praia; a Avenida Maximiano de Figueiredo, sentido sul, e as Avenidas Monsenhor Walfredo Leal e D. Pedro I, em direção ao centro.</p>
                        <p className="text-article">Sua origem remonta da abertura da Avenida Epitácio Pessoa, nos anos 1920, quando o então prefeito Guedes Pereira (1921-1924), detentor de um sítio naquele local, resolveu doá-lo para a prefeitura, em comemoração ao centenário de independência do Brasil (1922). A escritura de doação contém uma cláusula de reversão, ou seja, deve permanecer como praça indeterminadamente para que não seja devolvida aos herdeiros.</p>
                        <p className="text-article">Em seu entorno existem prédios e monumentos de inegável importância cultural e histórica: a norte, o coreto em estilo eclético, que é contemporâneo à ereção do obelisco existente no centro, ambos tombados pelo IPHAEP, em 26 de agosto de 1980; a sul, a residência onde morou o presidente João Pessoa; a leste, o busto em homenagem ao presidente Epitácio Pessoa, no início da avenida homônima; e a oeste, o Colégio Marista Pio X e sua arquitetura eclética (foto 1). O obelisco no centro da praça e o busto de Epitácio Pessoa foram selecionados para a avaliação qualitativa, por possuírem rochas que não são encontradas no substrato físico da capital.</p>

                            <figure className="figure">
                                    <a href={indep_1}><img src={indep_1} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Foto 1</figcaption>
                            </figure>

            </div>
        </>
    )
}