import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Merch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <Image src="/fullMerch.svg" alt="FullMerch Logo" width={72} height={70} />
        </div>

        <div className={styles.presentacion}>

          <h1>Tu merch, tus reglas.</h1>

          
          <p className={styles.presentacionTexto}>basicamente acá iría la proposicin de valor de la empresa fullMerch o como se llame en el futuro. Explica en quépuede ayudar a los artistas e influencers.</p>

        </div>

        <div className={styles.quienesSomos}>

          <h1>¿Quiénes Somos?</h1>
          <div className={styles.flexrow}>

            <p className={styles.quienesSomosTexto}>texto que hace mitad de pantalla. somos ian y julian, comunmente abreviado jul-ian ah jaja. nada nos gusta más q ofrecer productos y esas cosas.</p>
            <div>

              <Image className={styles.imagen} src="/ian.png" alt="ian" width={200} height={200}  />

              <Image className={styles.imagen} src="/julian.png" alt="julian" width={200} height={200} />
            </div>
          </div>
        </div>
        
        <div className={styles.productos}>
          <h1>Productos</h1>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3> Tazas</h3>
            </div>

            <div className={styles.card}>
              <h3> Buzos</h3>

            </div>

            <div className={styles.card}>
              <h3> Impresiones 3d</h3>

            </div>
          </div>
        </div>

        <div className={styles.contacto}>
          <h1>Contacto</h1>
            mail? ig?
        </div>

      </main>

      <footer className={styles.footer}>      
        <Image className={styles.logo} src="/fullMerch.svg" alt="FullMerch Logo" width={72} height={70} />
        <p> Confianza. </p>
      </footer>
    </div>
  )
}