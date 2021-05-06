import "./index.css";

export function Territ(){
    return(
    <>
    <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Quadro Natural
                </button>
              </h2>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
              <div class="container" id="myGroup">
                <p>
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#geologia" aria-expanded="true" aria-controls="collapseExample">
                    Geologia
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#geomorfologia" aria-expanded="false" aria-controls="collapseExample">
                    Geomorfologia
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#hidrografia" aria-expanded="false" aria-controls="collapseExample">
                    Hidrografia
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#clima" aria-expanded="false" aria-controls="collapseExample">
                    Clima
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#vegetacao" aria-expanded="false" aria-controls="collapseExample">
                    Vegetação
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#solo" aria-expanded="false" aria-controls="collapseExample">
                    Solo
                  </button>
                </p>
                
                <div class="collapse" id="geologia" data-parent="#myGroup">
                  <div class="card card-body">
                  <div class="container" id="myGroup1">
                      <p>
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#embasamento" aria-expanded="true" aria-controls="collapseExample">
                          Embasamento Cristalino
                        </button>
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                          Bacias Marginas
                        </button>
                      </p>
                      
                      <div class="collapse" id="embasamento" data-parent="#myGroup1">
                        <div class="card card-body">
                          Conteúdo do botão 1
                        </div>
                      </div>
                      
                      <div class="collapse" id="collapseExample2" data-parent="#myGroup1">
                        <div class="card card-body">
                          Conteúdo do botão 2
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                <div class="collapse" id="geomorfologia" data-parent="#myGroup">
                  <div class="card card-body">
                    Conteúdo do botão 2
                  </div>
                </div>
                
                <div class="collapse" id="hidrografia" data-parent="#myGroup">
                  <div class="card card-body">
                    Conteúdo do botão 3
                  </div>
                </div>
                <div class="collapse" id="clima" data-parent="#myGroup">
                  <div class="card card-body">
                    Conteúdo do botão 4
                  </div>
                </div>
                <div class="collapse" id="vegetacao" data-parent="#myGroup">
                  <div class="card card-body">
                    Conteúdo do botão 5
                  </div>
                </div>
                <div class="collapse" id="solo" data-parent="#myGroup">
                  <div class="card card-body">
                    Conteúdo do botão 6
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Quadro Histórico
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <div class="container" id="myGroup2">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#antecedentes" aria-expanded="true" aria-controls="collapseExample">
                      Antecedentes Históricos
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#cronistas" aria-expanded="false" aria-controls="collapseExample">
                      Cronistas
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#iconografia" aria-expanded="false" aria-controls="collapseExample">
                      Iconografia
                  </button>
                  <div class="collapse" id="antecedentes" data-parent="#myGroup2">
                  <div class="card card-body">
                    Conteúdo do botão 1
                  </div>
                  </div>
                  <div class="collapse" id="cronistas" data-parent="#myGroup2">
                  <div class="card card-body">
                    Conteúdo do botão 2
                  </div>
                  </div>
                  <div class="collapse" id="iconografia" data-parent="#myGroup2">
                  <div class="card card-body">
                    Conteúdo do botão 3
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Quadro Sociêconomico
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
              <div class="container" id="myGroup3">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#demografia" aria-expanded="true" aria-controls="collapseExample">
                      Demografia
                  </button>
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#turismo" aria-expanded="false" aria-controls="collapseExample">
                      Turismo
                  </button>
                  <div class="collapse" id="demografia" data-parent="#myGroup3">
                  <div class="card card-body">
                    Conteúdo do botão 1
                  </div>
                  </div>
                  <div class="collapse" id="turismo" data-parent="#myGroup3">
                  <div class="card card-body">
                    Conteúdo do botão 2
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