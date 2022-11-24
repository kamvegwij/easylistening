import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Easy Listening</title>
      </Head>
      <div className='topbar'>
        <a href="profile"><li>Profile</li></a>
        <a href="menu"><li>Menu</li></a>
        <a href="help"><li>Help</li></a>
        <a href="discover"><li>Discover</li></a>
      </div>

      <div className='maincontent'>
        <div id="mainhead">
          <h1>Easy Listening</h1>
          </div>
        
        <div id="musiclist">
          <h1>Songs for the day!</h1>
        </div>

        <div id="playmusic">
          <h1>Start Listening</h1>
        </div>
      </div>
    </div>
  )
}
