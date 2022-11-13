import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../pages/Footer/Footer'



function MyCourses() {
const {id} = useParams()
const [courses, setCourses] = useState([])
const [myCourses, setMyCourses] = useState([])
const [data, setData] = useState({})
let [active, setActive] = useState('active')
let [active2, setActive2] = useState('')



function changeActive(e, num) {
    e.preventDefault()
    if(num === 0){
        setActive('active')
        setActive2('')
    } else {
        setActive2('active')
        setActive('')
    }
}

    function getMaterial(){}



    useEffect(() => {
        axios.get(`https://thoughtful-pullover-worm.cyclic.app/api/materials/get/all/materials`).then((res) => {
          console.log(res.data)
          console.log(id)
          const results = res.data['results']
          setCourses(results)
          const dCourses = results.filter((item) => item['students'].includes(id))
          setMyCourses(dCourses)
          console.log(dCourses)
        }).catch((err) => {
          console.log(err)
        })
      }, [])

      useEffect(() => {
        axios.get(`https://thoughtful-pullover-worm.cyclic.app/api/get/one/${id}`).then((res) => {
            console.log(res.data)
            const results = res.data[0]
            setData(results)
            // setMyCourses(results['myCourses'])
        }).catch((err) => {
            console.error(err)
        })
    },[])


  return (
    <div className="main-wrapper">

        {/* <!-- Header Section Start --> */}
        <div className="header-section">

            {/* <!-- Header Top Start --> */}
            <div className="header-top d-none d-lg-block">
                <div className="container">

                    {/* <!-- Header Top Wrapper Start --> */}
                    <div className="header-top-wrapper">

                        {/* <!-- Header Top Left Start --> */}
                        <div className="header-top-left">
                            <p>{data['name']}</p>
                        </div>
                        {/* <!-- Header Top Left End --> */}

                        {/* <!-- Header Top Medal Start --> */}
                        <div className="header-top-medal">
                            <div className="top-info">
                                <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">{data['phoneNumber']}</a></p>
                                <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">{data['email']}</a></p>
                            </div>
                        </div>
                        {/* <!-- Header Top Medal End --> */}

                        {/* <!-- Header Top Right Start --> */}
                        <div className="header-top-right">
                            <ul className="social">
                                <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                                <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#"><i className="flaticon-skype"></i></a></li>
                                <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                        {/* <!-- Header Top Right End --> */}

                    </div>
                    {/* <!-- Header Top Wrapper End --> */}

                </div>
            </div>
            {/* <!-- Header Top End --> */}

            {/* <!-- Header Main Start --> */}
            <div className="header-main">
                <div className="container">

                    {/* <!-- Header Main Start --> */}
                    <div className="header-main-wrapper">

                        {/* <!-- Header Logo Start --> / */}
                        <div className="header-logo">
                            <Link to='/'><img src="assets/images/logo2.png" alt="Logo" /></Link>
                        </div>
                        {/* <!-- Header Logo End --> */}

                        {/* <!-- Header Menu Start --> */}
                        <div className="header-menu d-none d-lg-block">
                            <ul className="nav-menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index.html">About</a></li>
                                <li><a href="index.html">Contact</a></li>
                            </ul>

                        </div>
                        {/* <!-- Header Menu End --> */}

                        {/* <!-- Header Sing In & Up Start --> */}
                        {/* <div className="header-sign-in-up d-none d-lg-block">
                            <ul>
                                <li><a className="sign-in" href="login.html">Sign In</a></li>
                                <li><a className="sign-up" href="register.html">Sign Up</a></li>
                            </ul>
                        </div> */}
                        {/* <!-- Header Sing In & Up End --> */}

                        {/* <!-- Header Mobile Toggle Start --> */}
                        <div className="header-toggle d-lg-none">
                            <a className="menu-toggle" href="javascript:void(0)">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        {/* <!-- Header Mobile Toggle End --> */}

                    </div>
                    {/* <!-- Header Main End --> */}

                </div>
            </div>
            {/* <!-- Header Main End --> */}

        </div>
        {/* <!-- Header Section End --> */}

        {/* <!-- Mobile Menu Start --> */}
        <div className="mobile-menu">

            {/* <!-- Menu Close Start --> */}
            <a className="menu-close" href="javascript:void(0)">
                <i className="icofont-close-line"></i>
            </a>
            {/* <!-- Menu Close End --> */}

            {/* <!-- Mobile Top Medal Start --> */}
            <div className="mobile-top">
                <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
            </div>
            {/* <!-- Mobile Top Medal End --> */}

            {/* <!-- Mobile Sing In & Up Start --> */}
            {/* <div className="mobile-sign-in-up">
                <ul>
                    <li><a className="sign-in" href="login.html">Sign In</a></li>
                    <li><a className="sign-up" href="register.html">Sign Up</a></li>
                </ul>
            </div> */}
            {/* <!-- Mobile Sing In & Up End --> */}

            {/* <!-- Mobile Menu Start --> */}
            <div className="mobile-menu-items">
                <ul className="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Contact</a></li>
                </ul>

            </div>
            {/* <!-- Mobile Menu End --> */}

            {/* <!-- Mobile Menu End --> */}
            <div className="mobile-social">
                <ul className="social">
                    <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                    <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                    <li><a href="#"><i className="flaticon-skype"></i></a></li>
                    <li><a href="#"><i className="flaticon-instagram"></i></a></li>
                </ul>
            </div>
            {/* <!-- Mobile Menu End --> */}

        </div>
        {/* <!-- Mobile Menu End --> */}

        {/* <!-- Overlay Start --> */}
        <div className="overlay"></div>
        {/* <!-- Overlay End --> */}

        {/* <!-- Page Banner Start --> */}
        <div className="section page-banner">

            <img className="shape-1 animation-round" src="assets/images/shape/shape-8.png" alt="Shape" />

            <img className="shape-2" src="assets/images/shape/shape-23.png" alt="Shape" />

            <div className="container">
                {/* <!-- Page Banner Start --> */}
                <div className="page-banner-content">
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li className="active">Courses</li>
                    </ul>
                    <h2 className="title">Welcome <span>{data['name']}</span></h2>
                </div>
                {/* <!-- Page Banner End --> */}
            </div>

            {/* <!-- Shape Icon Box Start --> */}
            <div className="shape-icon-box">

                <img className="icon-shape-1 animation-left" src="assets/images/shape/shape-5.png" alt="Shape" />

                <div className="box-content">
                    <div className="box-wrapper">
                        <i className="flaticon-badge"></i>
                    </div>
                </div>

                <img className="icon-shape-2" src="assets/images/shape/shape-6.png" alt="Shape" />

            </div>
            {/* <!-- Shape Icon Box End --> */}

            <img className="shape-3" src="assets/images/shape/shape-24.png" alt="Shape" />

            {/* <img className="shape-author" src="assets/images/cap.jpg" height="100px" alt="Shape" /> */}

        </div>
        {/* <!-- Page Banner End --> */}

        {/* <!-- Courses Start --> */}
        <div className="section section-padding">
            <div className="container">

                {/* <!-- Courses Category Wrapper Start  --> */}
                <div className="courses-category-wrapper">
                    <div className="courses-search search-2">
                        <input type="text" placeholder="Search here" />
                        <button><i className="icofont-search"></i></button>
                    </div>

                    <ul className="category-menu">
                        <li onClick={(e) => changeActive(e, 0)}><a className={active} href="#">All Courses</a></li>
                        <li onClick={(e) => changeActive(e, 1)}><a className={active2} href="#">My Courses</a></li>
                    </ul>
                </div>
                {/* <!-- Courses Category Wrapper End  --> */}

                {/* <!-- Courses Wrapper Start  --> */}
                <div className="courses-wrapper-02">
                    <div className="row">
                    <div className={`tab-pane fade show active`} id='tabs1' >
                        <div className='courses-wrapper'>
                            <div className='row'>
                                {
                                    active ? courses.map((course, index) => <SingleCourse key={index} id={id} course={course} /> ) : myCourses.length === 0 ? <h1 style={{textAlign: 'center'}}>You have no available course. Purchase a course to start</h1> : myCourses.map((item, index) => <SingleCourse key={index} id={id} course={item} />)
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- Courses Wrapper End  --> */}

            </div>
        </div>
        {/* <!-- Courses End --> */}

        {/* <!-- Download App Start --> */}
        <div className="section section-padding download-section">

            <div className="app-shape-1"></div>
            <div className="app-shape-2"></div>
            <div className="app-shape-3"></div>
            <div className="app-shape-4"></div>

            <div className="container">

                {/* <!-- Download App Wrapper Start --> */}
                <div className="download-app-wrapper mt-n6">

                    {/* <!-- Section Title Start --> */}
                    <div className="section-title section-title-white">
                        <h5 className="sub-title">Ready to start?</h5>
                        <h2 className="main-title">Download our mobile app. for easy to start your course.</h2>
                    </div>
                    {/* <!-- Section Title End --> */}

                    <img className="shape-1 animation-right" src="assets/images/shape/shape-14.png" alt="Shape" />

                    {/* <!-- Download App Button End --> */}
                    <div className="download-app-btn">
                        <ul className="app-btn">
                            <li><a href="https://mega.nz/file/HpNwHKLK#YryE5dTW6LktnDcTJxYjAzsFIA76apQZ94W6tRMdQvg"><img src="assets/images/google-play.png" alt="Google Play" /></a></li>
                            <li><a href="#"><img src="assets/images/app-store.png" alt="App Store" /></a></li>
                        </ul>
                    </div>
                    {/* <!-- Download App Button End --> */}

                </div>
                {/* <!-- Download App Wrapper End --> */}

            </div>
        </div>
        {/* <!-- Download App End --> */}

        {/* <!-- Footer Start  --> */}
        <Footer />
        {/* <!-- Footer End --> */}

        {/* <!--Back To Start--> */}
        <a href="#" className="back-to-top">
            <i className="icofont-simple-up"></i>
        </a>
        {/* <!--Back To End--> */}

    </div>
  )
}

export default MyCourses


function SingleCourse(props) {
    const {course, id} = props
  return (
    <div className="col-lg-4 col-md-6">
        {/* <!-- Single Courses Start --> */}
        <div className="single-courses">
            <div className="courses-images">
                <Link to={`/details:${course['_id']}-${id}`}><img src={course['courseImg']} alt="Courses" /></Link>
            </div>
            <div className="courses-content">
                <div className="courses-author">
                    <div className="author">
                        <div className="author-thumb">
                            {/* <a href="#"><img src="https://www.simpleimageresizer.com/_uploads/photos/72f6adc0/WhatsApp_Image_2022-07-30_at_8.26.55_AM_1_131x131.jpeg" alt="Author" /></a> */}
                        </div>
                        <div className="author-name">
                            <a className="name" href="#"> {course['author']} </a>
                        </div>
                    </div>
                    <div className="tag">
                        <a href="#"> {course['category']} </a>
                    </div>
                </div>

                <h4 className="title"><a href="courses-details.html"> {course['title']} </a></h4>
                <div className="courses-meta">
                    <span> <i className="icofont-clock-time"></i> {course['courseCode']} </span>
                    <span> <i className="icofont-read-book"></i> + Past Questions </span>
                </div>
                <div className="courses-price-review">
                    <div className="courses-price">
                        <span className="sale-parice"> ₦ {course['courseAmount']} </span>
                        <span className="old-parice"> {course['oldPrice']} </span>
                    </div>
                    <div className="courses-review">
                        {/* <span className="rating-count"> {course['rating']} </span> */}
                        <span className="rating-star">
                                <span className="rating-bar" style={{width: "80%"}}></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Single Courses End --> */}
    </div>
  )
}