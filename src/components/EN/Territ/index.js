import "./index.css";
import ENEmbasa  from "./embasamento"
import ENBacias  from "./bacias_marginais";
import ENGeomorfologia from './geomorfor';
import ENHidrografia from './hidrografia';
import ENClima  from './clima';
import ENVegetacao  from './vegetacao';
import ENSolo  from './solo';
import ENAntecedentes from "./antecendentes";
import ENCronistas  from "./cronistas";
import ENIconografia from "./iconografia";
import ENDemografia  from "./demografia";
import ENTurismo from "./turismo";

export function ENTerrit(){
    return(
    <>
    <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Quadro Natural
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body flags">
              <div className="container" id="myGroup">
                <p>
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#geologia" aria-expanded="true" aria-controls="collapseExample">
                    Geologia
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#geomorfologia" aria-expanded="false" aria-controls="collapseExample">
                    Geomorfologia
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#hidrografia" aria-expanded="false" aria-controls="collapseExample">
                    Hidrografia
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#clima" aria-expanded="false" aria-controls="collapseExample">
                    Clima
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#vegetacao" aria-expanded="false" aria-controls="collapseExample">
                    Vegetação
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#solo" aria-expanded="false" aria-controls="collapseExample">
                    Solo
                  </button>
                </p>
                
                <div className="collapse" id="geologia" data-parent="#myGroup">
                  <div className="card card-body flags">
                  <div className="container" id="myGroup1">
                      <p>
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#embasamento" aria-expanded="true" aria-controls="collapseExample">
                          Embasamento Cristalino
                        </button>
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                          Bacias Marginas
                        </button>
                      </p>
                      
                      <div className="collapse" id="embasamento" data-parent="#myGroup1">
                        <div className="card card-body">
                          <ENEmbasa />
                        </div>
                      </div>
                      
                      <div className="collapse" id="collapseExample2" data-parent="#myGroup1">
                        <div className="card card-body">
                          <ENBacias />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                <div className="collapse" id="geomorfologia" data-parent="#myGroup">
                  <div className="card card-body flags">
                    <ENGeomorfologia />
                  </div>
                </div>
                
                <div className="collapse" id="hidrografia" data-parent="#myGroup">
                  <div className="card card-body">
                    <ENHidrografia />
                  </div>
                </div>
                <div className="collapse" id="clima" data-parent="#myGroup">
                  <div className="card card-body">
                    <ENClima />
                  </div>
                </div>
                <div className="collapse" id="vegetacao" data-parent="#myGroup">
                  <div className="card card-body">
                    <ENVegetacao />
                  </div>
                </div>
                <div className="collapse" id="solo" data-parent="#myGroup">
                  <div className="card card-body">
                    <ENSolo />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Quadro Histórico
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body flags">
                <div className="container" id="myGroup2">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#antecedentes" aria-expanded="true" aria-controls="collapseExample">
                      Antecedentes Históricos
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#cronistas" aria-expanded="false" aria-controls="collapseExample">
                      Cronistas
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#iconografia" aria-expanded="false" aria-controls="collapseExample">
                      Iconografia
                  </button>
                  <div className="collapse" id="antecedentes" data-parent="#myGroup2">
                  <div className="card card-body">
                    <ENAntecedentes />
                  </div>
                  </div>
                  <div className="collapse" id="cronistas" data-parent="#myGroup2">
                  <div className="card card-body">
                    <ENCronistas />
                  </div>
                  </div>
                  <div className="collapse" id="iconografia" data-parent="#myGroup2">
                  <div className="card card-body">
                    <ENIconografia />
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Quadro Sociêconomico
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
              <div className="container" id="myGroup3">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#demografia" aria-expanded="true" aria-controls="collapseExample">
                      Demografia
                  </button>
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#turismo" aria-expanded="false" aria-controls="collapseExample">
                      Turismo
                  </button>
                  <div className="collapse" id="demografia" data-parent="#myGroup3">
                  <div className="card card-body">
                    <ENDemografia />
                  </div>
                  </div>
                  <div className="collapse" id="turismo" data-parent="#myGroup3">
                  <div className="card card-body">
                    <ENTurismo />
                  </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
    </>
    )
}