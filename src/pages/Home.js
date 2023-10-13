import React from 'react'
import TopBar from '../Component/TopBar'
import FeaturedProducts from '../Component/FeaturedProducts'
import HomeElement from '../Component/HomeElement'
import CrouselEle from '../Component/CrouselEle'
import Footer from '../Component/Footer'
import img1 from "../img/vendor-1.jpg"
import img2 from "../img/vendor-2.jpg"
import img3 from "../img/vendor-3.jpg"

function Home() {
  return (
    <>
      <TopBar/>
      <CrouselEle/>
      <HomeElement/>
      <FeaturedProducts/>

   
  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel vendor-carousel">
          <div className="bg-light p-4">
            <img src={img1} alt="" />
          </div>
          <div className="bg-light p-4">
            <img src={img2} alt="" />
          </div>
          <div className="bg-light p-4">
            <img src={img3} alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-4.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-5.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-6.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-7.jpg" alt="" />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-8.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}

  <Footer/>


    </>
  )
}

export default Home
