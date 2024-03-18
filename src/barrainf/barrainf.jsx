import styles from '../barrainf/barrainf.module.css'; 
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import psql from '../assets/psql.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import redux from '../assets/redux.svg'

const Abajo = () => {
  return (
    <div className={styles.contenedor}>
      <footer className={styles.footer}>
        <p>Tecnologias</p>
        <div className={styles.logos}>
          <img src={github} alt="GitHub" style={{ width: '30px' }} />
          <img src={html} alt="HTML" style={{ width: '30px' }} />
          <img src={css} alt="CSS" style={{ width: '30px' }} />
          <img src={js} alt="JavaScript" style={{ width: '30px' }} />
          <img src={psql} alt="PostgreSQL" style={{ width: '30px' }} />
          <img src={react} alt="React" style={{ width: '30px' }} />
          <img src={node} alt="Node.js" style={{ width: '30px' }} />
          <img src={redux} alt="Redux" style={{ width: '30px' }} />
        </div>
      </footer>
    </div>
  );
}
export default Abajo; 