
import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const router = useNavigate();

  
  return (
    <div id='Hmain'>
      <div className='Hnav'>
        <div className='Hnav-fi'>
            <h5 onClick={ () => router('/multi-product')}>CATEGORIES</h5>
            <h4>LUXE</h4>
            <h5>BARGAINS</h5>
            <h5>STYLE HUB</h5>
        </div>
        <div className='Hnav-se'>
            <p>MEN</p>
            <p>WOMEN</p>
            <p>BEAUTY</p>
            <p>WATCHES</p>
            <p>KIDS</p>
            <p>HOMESTOP</p>
            <p>GIFTS</p>
            <p>BRANDS</p>
        </div>
      </div>
      <div className='Himg1'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h47/hda/30416999219230/Strip-Banner-Web--2023-07--17-new-hp-page-flat50.jpg'/>
      </div>
      <div className='Himg2'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/hf2/h13/30477648166942/private-brand_top-banner-web_eoss-2023.jpg' />
      </div>
      <div className='Himg3'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h59/hf6/29782554705950/Icons-2-Web---000-new-home-page--2023-april-11.jpg' />
      </div>
      <div className='Himg4'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h06/h28/30434628763678/bargains-of-the-day-gif-web--hp--page-strip--2023-07--21.gif' />
      </div>
      <div className='Himg5'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h5f/h90/30473216294942/BOD-web_240723m.jpg'/>
      </div>
      <div className='Himg4'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/h04/h2b/30434628829214/Rush-hour-madness-web---2023-07-21-new-strip--msite.gif' />
      </div>
      <div className='Himg5'>
        <img src='https://sslimages.shoppersstop.com/sys-master/root/hbc/h80/30385077682206/Clarks-web_120723W.jpg' />
      </div>
    </div>
  )
}

export default Home
