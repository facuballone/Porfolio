import styles from '../Menu/Redes.module.css'
import Linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const Redes = () => {
    return(
        <div className={styles.Redes}>
           <a href="https://www.linkedin.com/in/facundo-ballone-91bb58121/">
            <img width='25px' src={Linkedin} alt=""/>
           </a>
           <a href="https://github.com/facuballone">
           <img width='25px' src={github} alt=""/>
           </a>
        </div>
    )
}

export default Redes;