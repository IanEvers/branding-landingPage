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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lusitana&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <Image src="/logo.png" alt="FullMerch Logo" width={150} height={75} />
        </div>

        <div className={styles.presentacion}>
          <h1 className={styles.titulo}>Tu merch, tus reglas.</h1>
          <p className={styles.presentacionTexto}>Nos proponemos acercar soluciones creativas para personas que están haciendo sus primeros pasos en las redes sociales y quieren ofrecer a su fandom indumentaria, tazas o cualquier otro tipo de productos con su imagen.</p>
        </div>

        <div className={styles.quienesSomos}>

          <h1>¿Quiénes Somos?</h1>
          <div className={styles.flexrow}>

            <p className={styles.quienesSomosTexto}>Somos tres estudiantes con intereses y habilidades muy distintos. Eso nos permite tener una visión multidisciplinaria y creativa. Nos nutrimos del intercambio de ideas entre nosotros y con eso, ofrecemos propuestas superadoras a nuestros clientes. Nuestro principal valor es la flexibilidad y somos conscientes de eso.</p>
            <div className={styles.flex}>

              <div>
                <div className={styles.imagenContainer}>
                  <Image className={styles.imagen} src="/ian.jpeg" alt="ian" width={200} height={200}  />
                </div>
                <p className={styles.nombres}> Ian &quot;capo&quot; Evers</p>
              </div>

              <div>
                <div className={styles.imagenContainer}>
                  <Image className={styles.imagen} src="/julian.png" alt="julian" width={200} height={200} />
                </div>
                <p className={styles.nombres}> Julián Arredondo</p>
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
              <Image className={styles.logo} src="/render3d.gif" alt="3d" width={300} height={300}/>
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
        <Image src="/logo.png" alt="FullMerch Logo" width={150} height={75} />
      </footer>
    </div>
  )
}