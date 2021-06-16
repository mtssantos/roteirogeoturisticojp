import NavBar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop"

function Historia(){
    return(
        <>
        <ScrollToTop />
        <NavBar />
        <div className="container">
            <h2 className="font-weight-bold">About The Historic Center</h2>
            <p className="paragraphy">The first proposal for the delimitation of the Historic Center of João Pessoa, then called “Area of ​​Historical and Artistic Interest of João Pessoa”, dates back to 1975, and is part of the city's Master Plan, was subdivided into 'area of ​​environmental importance' and, in the its interior, the 'strict preservation area'. However, this delimitation suffered from several problems, where many buildings from the colonial period, such as Largo Frei São Pedro Gonçalves or Parque Solon de Lucena, among others, were not included in the strict preservation area, while other historically important areas , like the current Praça João Pessoa, were excluded from the area of ​​environmental importance (COSTA, 2009).</p>

            <p className="paragraphy">In 1987, an extremely important Brazil-Spain agreement was made for the applicability of a general plan, based on the adoption of a methodology for analyzing the various monuments, resulting in a specific revitalization plan. Initially, a new perimeter for the Historic Center was delimited, much smaller than the previous one, restricted to the upper city and Varadouro (117 ha), initial nucleus of formation of the city (SCOCUGLIA, 2004; NOGUEIRA, 2005 apud COSTA, 2009). Subsequently, a local team developed the activities, under the supervision of IPHAN and Spanish technicians, through the creation of the Oficina-School and the <strong>Permanent Commission for the Development of the Historic Center of João Pessoa.</strong> The first fruits of this agreement began to appear in the following decade, with the revitalization of four spaces, namely the Conjunto Carmelita, the Monastery of São Bento, the Franciscan Complex and the São Frei Pedro Gonçalves Church, religious icons from the colonial period, in addition to the Praça Venâncio Neiva and the houses in Praça Anthenor Navarro and surrounding areas, the latter having a fundamental role as an “attractive pole to achieve economic sustainability in the Varadouro area and the former Porto do Capim” (COSTA, 2009, p. 123).</p>

            <p className="paragraphy">In 2004, the Commission redefined the perimeter of the Historic Center, increasing it approximately four times (State Decree No. 25,138), dividing it into 'surrounding preservation area' and, inside, the 'strict preservation area' ', made up of streets and squares where the buildings are located, including elements of geopatrimony, such as the Dolina dos Irerês (now Parque Solon de Lucena) and some fountains. Thus, both IPHAEP and the Permanent Commission would now act together using the same perimeter proposal, despite some properties listed by IPHAN, such as Fonte de Tambiá, in Arruda Câmara Park and the Chapel of Engenho da Graça, bordering the perimeter , are not included in this.</p>
        </div>
        </>
    )
}


export default Historia;