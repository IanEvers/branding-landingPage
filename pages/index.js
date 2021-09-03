import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Merch</title>
        <meta name="description" content="Tu merch!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lusitana&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <Image src="/fullMerch.svg" alt="FullMerch Logo" width={72} height={70} />
        </div>

        <div className={styles.presentacion}>
          <h1 className={styles.titulo}>Tu merch, tus reglas.</h1>
          <p className={styles.presentacionTexto}>basicamente acá iría la proposicin de valor de la empresa fullMerch o como se llame en el futuro. Explica en quépuede ayudar a los artistas e influencers.</p>
        </div>

        <div className={styles.quienesSomos}>

          <h1>¿Quiénes Somos?</h1>
          <div className={styles.flexrow}>

            <p className={styles.quienesSomosTexto}>en fullmerch somos ian y julian, comunmente abreviado jul-ian ah jaja combinados con Sofía, nuestra diseñadora. nada nos gusta más q ofrecer productos y esas cosas.</p>
            <div className={styles.flex}>

              <div>
                <div className={styles.imagenContainer}>
                  <Image className={styles.imagen} src="/ian.png" alt="ian" width={200} height={200}  />
                </div>
                <p className={styles.nombres}> Ian &quot;capo&quot; Evers</p>
              </div>

              <div>
                <div className={styles.imagenContainer}>
                  <Image className={styles.imagen} src="/julian.png" alt="julian" width={200} height={200} />
                </div>
                <p className={styles.nombres}> Julián Ahre Dondo</p>
              </div>

              <div>
                <div className={styles.imagenContainer}>
                  <Image className={styles.imagen} src="/lucero.png" alt="sofia" width={200} height={200} />
                </div>
                <p className={styles.nombres}> Lucero Olveira</p>
              </div>

              <div>
                <div className={styles.imagenContainer}>
                  <Image className={styles.imagen} src="/merlino.jfif" alt="sofia" width={200} height={200} />
                </div>
                <p className={styles.nombres}> Sofía Merlino.</p>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className={styles.productos}>
          <h1>Productos</h1>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3> Tazas</h3>
              <Image className={styles.logo} src="/taza.jpg" alt="taza" width={300} height={300} />
            </div>

            <div className={styles.card}>
              <h3> Buzos</h3>
              <Image className={styles.logo} src="/buzos.jpg" alt="Buzos" width={300} height={300}/>
            </div>

            <div className={styles.card}>
              <h3> Impresiones 3d</h3>
              <Image className={styles.logo} src="/3d.jpg" alt="3d" width={300} height={300}/>
            </div>
          </div>
        </div>

        <div className={styles.contacto}>
          <h1>Contacto</h1>
          <h3>
            contactofullmerch@gmail.com
          </h3>
          <div className={styles.contactContainer}>
            <a target="_blank" href="mailto:contactofullmerch@gmail.com" rel="noreferrer">
              <div className={styles.contactCard}>
                <h3>
                  Mandanos mail 
                </h3>
                <Image className={styles.logo} src="/mail.png" alt="Mail" width={72} height={70} />
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/Full_Merch/" rel="noreferrer">
              <div className={styles.contactCard}>
                <h3>
                  Seguinos en IG
                </h3>
                <Image className={styles.logo} src="/instagram.png" alt="Instagram" width={72} height={70} />
              </div>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>      
        <Image className={styles.logo} src="/fullMerch.svg" alt="FullMerch Logo" width={72} height={70} />
        <p> Confianza. </p>
      </footer>
    </div>
  )
}