import styles from '../Sobremi/SobreMi.module.css'
import perfil from '../assets/perfil.jpg'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
           <article className={styles.intro}>
                <div className={styles.img}>
                    <img src={perfil} alt="" />
                </div>
                <p>Hola, mi nombre es Facundo Ballone y poseo una pasión por todo lo relacionado con la tecnología. Esta pasión me impulsó a desarrollar una constancia y dedicación hacia la programación enfocada en el desarrollo web. Gracias a este interés, adquirí habilidades técnicas que me permiten abordar proyectos, y donde busco constantemente expandir mis conocimientos y habilidades.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>

            <div className={styles.edu}>

                <h2>Educación</h2>

                <div>
                    <h3>Henry </h3>
                    <h4>Full stack developer, desarrollo de paginas web </h4>
                    <h4>-Cursos intensivo full time (9 horas diarias) de tecnologías front end y back end para desarrollo web.
Tecnologías aprendidas: HTML / CSS / JavaScript / React / Redux / Express / Jest / Sequelize / plat Github
Clases téoricas, homeworks diarias, pair programming (PP), proyecto individual (PI) y proyecto final (PF) utilizando metodologías ágiles.</h4>
                </div>

              

            </div>
        </section>
    )
}

export default SobreMi;