import styles from '../Inicio/Inicio.module.css'
import Animacion from '../Animacion/Animacion';
import Abajo from '../barrainf/barrainf';
const Inicio = () => {
    return (
        <section className={styles.Inicio}>
            <article className={styles.full}>
                <h1>Full Stack Web Developer</h1>
                <p>Full Stack Developer con formación en desarrollo web y una sólida base en JavaScript, lo cual me ha permitido especializarme tanto en Front-end como en Back-end. Mi experiencia incluye el manejo de React, Node.js, Redux, SQL y Express, herramientas que han sido fundamentales para construir diversos proyectos.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div> 
            </article>
        

            <div className={styles.botones}>

                <h2>Facundo Ballone</h2>
                <div>
                   <a href='https://drive.google.com/file/d/1riANPYRjQm2-HecT_FDQg3K2SccEemMA/view?usp=sharing'>CV</a> 
                </div>

            </div>


            <Animacion/>
           

        </section>
    )
}

export default Inicio;