import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack';
import Footer from './Footer/Footer';


function CourseDetails() {
    const idData = useParams();
    const [data, setData] = useState({})
    const [student, setStudent] = useState({})
    const [content, setContent] = useState([])
    const [myCourses, setMyCourses] = useState([])
    const materialId = idData.id.slice(1, 25)
    const studentId = idData.id.slice(26)

    const pin = window.localStorage.getItem(materialId)

    useEffect(() => {
        axios.get(`https://delzyscholarsapi.herokuapp.com/api/materials/get/one/material/${idData.id.slice(1, 25)}`).then((res) => {
            console.log(idData)
            console.log(res.data[0])
            setData(res.data[0])
            setContent(res.data[0]['content'])
            // console.log(data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])


    useEffect(() => {
        axios.get(`https://delzyscholarsapi.herokuapp.com/api/get/one/${idData.id.slice(26)}`).then((res) => {
            console.log(res.data)
            const results = res.data[0]
            setStudent(results)
            setMyCourses(results['myCourses'])
        }).catch((err) => {
            console.error(err)
        })
    }, [])


const livePublicKey = 'pk_live_6f16d735236a5774d9444768ec143fd99c87aea7'
const testPublicKey = 'pk_test_81b44119342883ffd970a7900732d9d6e00cd157'

const config = {
    reference: (new Date()).getTime().toString(),
    email: student['email'],
    number: student['phoneNumber'],
    amount: parseFloat(data['courseAmount']) * 100,
    publicKey: livePublicKey
}


const onSuccess = (reference) => {
    console.log(reference)
    const x = {courseId: materialId}
    axios.patch(`https://delzyscholarsapi.herokuapp.com/api/update/courses/${studentId}`, x).then((res) => {
        console.log(res)
        const pin = res.data['pin']
        window.localStorage.setItem(materialId, pin)
        window.alert('Payment Successful')
        window.location.reload()
    }).catch((err) => {
        console.log(err)
    })
    // window.location.href = '/'
    // setShow('block')
    // setBtn('none')
}

const onClose = () => {
    console.log('closed')
    window.alert('Payment could not be processed')
    window.location.href = `/${studentId}`
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button className="btn btn-primary btn-hover-dark w-100" onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Enroll Now</button>
        </div>
    );
}


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
                        <p>All course 28% off for <a href="#">Liberian people’s.</a></p>
                    </div>
                    {/* <!-- Header Top Left End --> */}

                    {/* <!-- Header Top Medal Start --> */}
                    <div className="header-top-medal">
                        <div className="top-info">
                            <p><i className="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                            <p><i className="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
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
        <div className="mobile-sign-in-up">
            <ul>
                <li><a className="sign-in" href="login.html">Sign In</a></li>
                <li><a className="sign-up" href="register.html">Sign Up</a></li>
            </ul>
        </div>
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
                    <li className="active">Courses Details</li>
                </ul>
                <h2 className="title">Courses <span> Details</span></h2>
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

        <img className="shape-3" src="assets/images/shape/shape-24.png" alt="Shape"/>

        {/* <img className="shape-author" src="assets/images/author/author-11.jpg" alt="Shape" /> */}

    </div>
    {/* <!-- Page Banner End --> */}

    {/* <!-- Courses Start --> */}
    <div className="section section-padding mt-n10">
        <div className="container">
            <div className="row gx-10">
                <div className="col-lg-8">

                    {/* <!-- Courses Details Start --> */}
                    <div className="courses-details">

                        <div className="courses-details-images" style={{border: '1px solid'}}>
                            <img src={data['courseImg']} height='400px' alt="Courses Details" />
                            <span className="tags">{data['courseCode']}</span>

                            {/* <div className="courses-play">
                                <img src="assets/images/courses/circle-shape.png" alt="Play" />
                                <a className="play video-popup" href="../../../external.html?link=https://www.youtube.com/watch?v=Wif4ZkwC0AM"><i className="flaticon-play"></i></a>
                            </div> */}
                        </div>

                        <h2 className="title">{data['title']}</h2>

                        <div className="courses-details-admin">
                            <div className="admin-author">
                                <div className="author-thumb">
                                    {/* <img src="assets/images/author/author-01.jpg" alt="Author" /> */}
                                </div>
                                <div className="author-content">
                                    <a className="name" href="#">{data['author']}</a>
                                    <span className="Enroll">286 Enrolled Students</span>
                                </div>
                            </div>
                            <div className="admin-rating">
                                <span className="rating-count">4.9</span>
                                <span className="rating-star">
                                        <span className="rating-bar" style={{width: "80%"}}></span>
                                </span>
                                <span className="rating-text">(5,764 Rating)</span>
                            </div>
                        </div>

                        

                    </div>
                    {/* <!-- Courses Details End --> */}

                </div>
                <div className="col-lg-4">
                    {/* <!-- Courses Details Sidebar Start --> */}
                    <div className="sidebar">

                        {/* <!-- Sidebar Widget Information Start --> */}
                        <div className="sidebar-widget widget-information">
                            <div className="info-price">
                                <span className="price"> {myCourses.includes(materialId) ? 'Download DelzyScholar App and Activate your Course' : `₦ ${data['courseAmount']}`} </span>
                            </div>
                            <div className="info-list">
                                <ul>
                                    <li><i className="icofont-man-in-glasses"></i> <strong>Instructor</strong> <span> {data['author']} </span></li>
                                    <li><i className="icofont-clock-time"></i> <strong>Course Code</strong> <span>{data['courseCode']}</span></li>
                                    <li><i className="icofont-ui-video-play"></i> <strong>Lectures</strong> <span> {content.length} </span></li>
                                    <li><i className="icofont-bars"></i> <strong>Category</strong> <span>{data['category']}</span></li>
                                    <li><i className="icofont-book-alt"></i> <strong>Language</strong> <span>English</span></li>
                                    {/* <li><i className="icofont-certificate-alt-1"></i> <strong>Certificate</strong> <span>Yes</span></li> */}
                                </ul>
                            </div>
                            <div className="info-btn">
                                {
                                    myCourses.includes(materialId) ? <a href='#' className="btn btn-primary btn-hover-dark">Pin: {pin}</a> :
                                    <PaystackHookExample />
                                }
                            </div>
                            <div className='info-btn'>
                                <Link to={`/learning:${materialId}`} className="btn btn-primary btn-hover-dark">Preview Course</Link>
                            </div>
                        </div>
                        {/* <!-- Sidebar Widget Information End --> */}

                    </div>
                    {/* <!-- Courses Details Sidebar End --> */}
                </div>
            </div>
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
                        <li><a href="#"><img src="assets/images/google-play.png" alt="Google Play" /></a></li>
                        <li><a href="#"><img src="assets/images/app-store.png" alt="App Store" /></a></li>
                    </ul>
                </div>
                {/* <!-- Download App Button End --> */}

            </div>
            {/* <!-- Download App Wrapper End --> */}

        </div>
    </div>
    {/* <!-- Download App End --> */}

    <Footer/>

    {/* <!--Back To Start--> */}
    <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
    </a>
    {/* <!--Back To End--> */}

</div>
  )
}

export default CourseDetails