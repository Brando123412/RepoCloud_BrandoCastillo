import banner1 from '../assets/Image/Banner1.jpg';
import banner2 from '../assets/Image/Banner2.jpg';
import banner3 from '../assets/Image/Banner3.png';
import "./MainBanner.css";
function MainBanner(){
    return(
        <div id="carouselExampleCaptions" className="carousel slide main-banner" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                            <h1>Mensaje a un Exoplaneta:</h1>
                            <p>Estudiantes españoles participan en un concurso para enviar un mensaje gráfico a un exoplaneta potencialmente habitable a 12,5 años luz de distancia.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Geoffrey Hinton y la IA en Google:</h1>
                        <p>Geoffrey Hinton, una figura clave en la Inteligencia Artificial, renuncia a Google para hablar sobre los riesgos de esta tecnología y la dificultad de discernir la verdad en el contexto de la IA.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Neuralink recluta pacientes</h1>
                        <p>La empresa de Elon Musk, Neuralink, busca reclutar pacientes, especialmente aquellos con parálisis, para probar un implante cerebral que permite controlar dispositivos externos con el pensamiento.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default  MainBanner