import { Link } from "react-router-dom";
import "./index.css";

function Locais(){
  document.title = "Locais de Interesse"
    return(
        <div className="container">
        <h2 className="font-weight-bold">Locais de Interesse</h2><br />
        <br />
          <div className="card-deck">
          <div className="card">
          <div className="card-body">
            <Link to="local/1" className="card-title">Fonte Tambiá</Link>
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <Link to="local/2" className="card-title">Bica da Maria Feia</Link>
            <p className="card-text"></p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <Link to="local/3" className="card-title">Praça da Independência</Link>
          </div>
        </div>
      </div>
      <br />
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <Link to="local/4" className="card-title">Praça João Pessoa</Link>
          </div>
        </div>
      <div className="card">
          <div className="card-body">
            <Link to="local/5" className="card-title">Praça da Pedra</Link>
            <p className="card-text"></p>
          </div>
      </div>
        <div className="card">
          <div className="card-body">
            <Link to="local/6" className="card-title">Cemitério Senhor da Boa Sentença</Link>
          </div>
      </div>
      </div>
      <br />
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <Link to="local/7" className="card-title">Afloramento da Formação Gramame</Link>
            <p className="card-text"></p>
          </div>
      </div>
        <div className="card">
          <div className="card-body">
            <Link to="local/8" className="card-title">Cacimba do Povo</Link>
            <p className="card-text"></p>
          </div>
      </div>
        <div className="card">
          <div className="card-body">
            <Link to="local/9" className="card-title">Balaustrada das Trincheiras</Link>
            <p className="card-text"></p>
          </div>
      </div>
      </div>
      <br />
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <Link to="local/10" className="card-title">Afloramento da Formação Beberibe</Link>
            <p className="card-text"></p>
          </div>
      </div>
          <div className="card">
          <div className="card-body">
            <Link to="local/11" className="card-title">Gruta da Marés</Link>
            <p className="card-text"></p>
          </div>
      </div>
          <div className="card">
          <div className="card-body">
            <Link to="local/12" className="card-title">Arenização do Barreiras</Link>
            <p className="card-text"></p>
          </div>
      </div>
      
      </div>
      <br />
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <Link to="local/13" className="card-title">Fóssil das Trincheiras</Link>
            <p className="card-text"></p>
          </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Link to="local/14" className="card-title">Dolina dos Irerês</Link>
          <p className="card-text"></p>
        </div>
    </div>
    <div className="card">
      <div className="card-body">
        <Link to="local/15" className="card-title">Santa Casa da Misericórdia</Link>
        <p className="card-text"></p>
      </div>
    </div>
      </div>
      <br />
      <div className="card-deck">
          <div className="card">
              <div className="card-body">
                <Link to="local/16" className="card-title">Praça Rio Branco</Link>
                <p className="card-text"></p>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                <Link to="local/17" className="card-title">Praça Dom Adauto</Link>
                <p className="card-text"></p>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                <Link to="local/18" className="card-title">Academia Paraibana de Letras</Link>
                <p className="card-text"></p>
              </div>
          </div>
    
      </div>
      <br />
      <div className="card-deck">
          <div className="card">
              <div className="card-body">
                <Link to="local/19" className="card-title">Centro Cultural São Francisco</Link>
                <p className="card-text"></p>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                <Link to="local/20" className="card-title">Fonte de Santo Antônio</Link>
                <p className="card-text"></p>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                <Link to="local/21" className="card-title">Praça Dom Ulrico</Link>
                <p className="card-text"></p>
              </div>
          </div>
    
    
      </div>
      <br />
      <div className="card-deck">
          <div className="card">
              <div className="card-body">
                <Link to="local/22" className="card-title">Mosteiro de São Bento</Link>
                <p className="card-text"></p>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                <Link to="local/23" className="card-title">Fonte dos Milagres</Link>
                <p className="card-text"></p>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                <Link to="local/24" className="card-title">Falha de Sanhauá</Link>
                <p className="card-text"></p>
              </div>
          </div>
    
      </div>
      <br />
      <div className="card-deck">
          <div className="card">
              <div className="card-body">
                <Link to="local/25" className="card-title">Casa do Quartzo Rosa</Link>
                <p className="card-text"></p>
              </div>
          </div>
    
      </div>    
      </div>
    )
}


export default Locais;