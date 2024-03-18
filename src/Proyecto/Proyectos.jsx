import styles from '../Proyecto/Proyectos.module.css'
import rick2 from '../assets/rick2.jpg'
import homeofi  from '../assets/homeofi.jpg'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import psql from '../assets/psql.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import redux from '../assets/redux.svg'


const Proyectos= () => {
    
    const tarjetas = [
        {
          image:[homeofi],
          name:'Drivers pi',
          descrip:' El proyecto consistio en el desarrollo de una single page application,para facilitar el acceso y la gestion de conductores. Para el front use React js,CSS,Redux. Para el backend se utilizo nodejs con express y postgresSQL para el manejo y la creacion de la base de datos.',
          tecno:[html,css,js,react,node,psql,redux],
          url:'https://github.com/facuballone/pi-henry-drivers',
        },
  
        {
          image:[rick2],
          name:'Rick and Morty',
          descrip:'El proyecto se centra en el universo de "Rick and Morty",La aplicación cuenta con una página principal donde se inicia sesión con las credenciales, y posteriormente se accede a la página de inicio que diseñé para mostrar personajes del universo de rick and morty.',
          tecno:[html,css,js,react,node,redux],
          url:'https://github.com/facuballone/Rick-And-Morty-proyecto',
        },
  

        ]
       return (
        <section className={styles.Proyectos}>
        <h2>Proyectos</h2>
        <div className={styles.cards}>

            {
              tarjetas.map((card,index) => {
                return(
                  <div key={index} className={styles.card}>
                    <div className={styles.img}>
                      <img width='100%' height='250px' src={card.image} alt="" />
                    </div>

                    <h3>{card.name}</h3>

                    <p>{card.descrip}</p>

                    <div className={styles.tecno}>
                      <img width='30px' src={card.tecno[0]} alt="" />
                      <img width='30px' src={card.tecno[1]} alt="" />
                      <img width='30px' src={card.tecno[2]} alt="" />
                      <img width='30px' src={card.tecno[4]} alt="" />
                      <img width='30px' src={card.tecno[3]} alt="" />
                      <img width='30px' src={card.tecno[5]} alt="" />
                      <img width='30px' src={card.tecno[6]} alt="" />
                
                    </div>

                    <div className={styles.github}>
                      <a href={card.url}>
                        <img width='30px' src={github} alt="" />
                      </a>
                    </div>
                  </div>
                )
              })
            }

        </div>
        
    </section>
)
}

export default Proyectos;