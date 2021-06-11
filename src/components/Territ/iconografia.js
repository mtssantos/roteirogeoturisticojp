import imagepdf1 from '../../assets/imagepdf1.png';
import imagepdf2 from '../../assets/imagepdf2.png';
import artigo_mercator from '../../documents/artigo_mercator_luciano_schaefer.pdf';
import artigo_passos from '../../documents/artigo_passos_luciano_schaefer.pdf';


function Iconografia(){
    return(
        <>
            <h3>Anexos</h3>
            <p className="paragraphy">No primeiro card abaixo remete ao artigo “Geodiversity of Parahyba in the colonial period (Pereira e Pereira, 2017)”, cujo objetivo é apresentar a percepção dos vários escritores presentes na Capitania da Parahyba, durante o período colonial, sobre os elementos da geodiversidade primordiais para a consolidação e expansão urbana de sua capital, Nossa Senhora das Neves. </p>
            <p className="paragraphy">No segundo card abaixo remete ao artigo “A paisagem cultural da Capitania da Parahyba, Brasil, na otica da iconografia do período colonial (Pereira, 2017)”, cujo objetivo é e apresentar a percepção que viajantes que estiveram na Capitania da Parahyba possuíam acerca do ambiente físico, representado em iconografias, que foi primordial para a consolidação e expansão urbana da capital, resultando em sua paisagem cultural.</p>
                <div className="card-group">
                     <div className="card cartao">
                        <img src={imagepdf1} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Geodiversity of Parahyba in the colonial period (Pereira e Pereira, 2017)</h5>
                        </div>
                        <div className="card-body">
                            <a href={artigo_mercator} rel="noreferrer" download={artigo_mercator} target="_blank" className="card-link">Baixar Arquivo</a>
                        </div>
                     </div>  
                     <div className="card cartao">
                        <img src={imagepdf2} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">A paisagem cultural da Capitania da Parahyba, Brasil, na otica da iconografia do período colonial (Pereira, 2017)</h5>
                        </div>
                        <div className="card-body">
                            <a href={artigo_passos} rel="noreferrer" download={artigo_passos} target="_blank" className="card-link">Baixar Arquivo</a>
                        </div>
                     </div>  
                     </div>
        </>
    )
}

export default Iconografia