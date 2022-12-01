import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Easy Listening</title>
      </Head>
      <main>
        <div className='topbar'>
          <a href="profile"><li>Profile</li></a>
          <a href="discover"><li>Discover</li></a>
          <a href="putuson"><li>Put Us On</li></a>
        </div>

        <div className='maincontent'>
          <div id="leftcontent">
            <h1>Welcome back
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="musicicon" viewBox="0 0 16 16">
              <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
              <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
              <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
              <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM1 3v3h14V3H1Zm14 4H1v7h14V7Z"/>
              </svg>
            </h1>
            <h2><span></span>Playlists</h2>
            <h2><span></span>Liked</h2>
            <h2><span></span>Daily Top 5</h2>
            
            <div id="musiccontent">
              <p>music playing will show here!</p>
            </div>
          </div>
          
          <div id="centercontent">
            <h3>New Albums</h3>
            <h3>New Songs</h3>
          </div>
        </div>

      </main>
    </div>
  )
}
