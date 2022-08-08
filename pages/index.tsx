import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import SmallCardContainer from './components/CardContainer/SmallCardContainer'
import CategoryBarContainer from './components/CategoryBar/CategoryBarContainer'
import Header from './components/Header'

const Home: NextPage = () => {

  const [selectedCategory, setSelectedCategory] = useState("donut")

  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Deli Donu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className='h-[10rem]'>s</div>
      <CategoryBarContainer selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <SmallCardContainer selectedCategory={selectedCategory} />
      {/* <Header/> */}

    </div>
  )
}

export default Home
