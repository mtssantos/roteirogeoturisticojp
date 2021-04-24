import domadauto from '../media/domadauto.jpg';

export function Geral(){
    return(
        <>
            <p>Inaugurada em 1919, na confluência das Ruas Visconde de Pelotas e D. Pedro I, já recebeu os nomes de Campo do Conselheiro Henriques e de Praça do Carmo e hoje homenageia o primeiro Bispo da Paraíba, D. Adaucto Henriques. Foi selecionada por fazer parte de um local de intensa visitação turística, o Complexo do Carmo, formado pelo antigo Palácio Episcopal (anexo norte), Igreja Nossa Senhora do Carmo (ao centro) e Igreja Santa Tereza (anexo sul, foto 1), assim como o sobrado do Comendador Santos Coelho, conhecido como ‘Casarão dos Azulejos’.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={domadauto}><img src={domadauto} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Foto 1</figcaption> 
                    </figure>
            </div>
            <p>O Complexo do Carmo é um dos principais representantes do estilo barroco no Brasil, cujas rochas utilizadas divulgam a geodiversidade local e apresentam belíssimas obras de cantaria. Ademais, a presença do busto em homenagem a Álvaro Lopes Machado, no centro da praça, com seus dois sienogranitos, serve como um elemento da geodiversidade importante pela raridade e pelo seu valor cultural, científico e pedagógico.</p>        
        </>
    )
}