import axios from 'axios'
import React, {useEffect, useState, useRef} from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer/Footer'


function LearnTab() {
    const {id} = useParams()
    const [data, setData] = useState({})
    const [content, setContent] = useState([])
    const [pdf, setPdf] = useState('')
    const topContainer = useRef();

    useEffect(() => {
        topContainer.current.scrollIntoView({block: "start", behavior: 'smooth'})
    }, [])

    useEffect(() => {
        axios.get(`https://delzyscholarsapi.herokuapp.com/api/materials/get/one/material/${id.slice(1, 25)}`).then((res) => {
            console.log(id)
            console.log(res.data[0])
            setData(res.data[0])
            setContent(res.data[0]['content'])
            setPdf(res.data[0]['content'][0]['material'])
            // setContent(res.data[0]['content'])
            // console.log(data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    function selectPdf(e, index){
        e.preventDefault()
        setPdf(content[index]['material'])
    }

    
  return (
    <div className="main-wrapper" ref={topContainer}>

        {/* <!-- Login Header Start --> */}
        <div className="section login-header">
            {/* <!-- Login Header Wrapper Start --> */}
            <div className="login-header-wrapper navbar navbar-expand">

                {/* <!-- Header Logo Start --> */}
                <div className="login-header-logo logo-2">
                    <li><a href="index.html"><img src="assets/images/logo2.png" alt="Logo" /></a></li>
                    {/* <li><a href="index.html"><img src="assets/images/text-logo.png" alt="Logo" /></a></li> */}
                </div>
                {/* <!-- Header Logo End --> */}

                {/* <!-- Header Search Start --> */}
                <div className="login-header-search search-2 dropdown">
                    <button className="search-toggle" data-bs-toggle="dropdown"><i className="flaticon-loupe"></i></button>

                    <div className="search-input dropdown-menu">
                        <form action="#">
                            <input type="text" placeholder="Search here" />
                        </form>
                    </div>

                </div>
                {/* <!-- Header Search End --> */}

                

            </div>
            {/* <!-- Login Header Wrapper End --> */}
        </div>
        {/* <!-- Login Header End --> */}

        {/* <!-- Courses Enroll Start --> */}
        <div className="section">

            {/* <!-- Courses Enroll Wrapper Start --> */}
            <div className="courses-enroll-wrapper">

                {/* <!-- Courses Video Player Start --> */}
                <div className="courses-video-player">

                    {/* <!-- Courses Video Container Start --> */}
                    {/* <div className="vidcontainer"> */}
                        {/* <video id="myvid"></video> */}
                        {console.log(pdf)}
                        {/* <embed 
                            src={pdf + "#toolbar=0"}
                            type='application/pdf'
                            // height={600}
                            width='100%'
                            className='vidcontainer'
                        /> */}
                        <object 
                            width="100%"
                            height="1000"
                            data={`https://docs.google.com/gview?embedded=true&url=https://res.cloudinary.com/dziy1glm5/image/upload/v1666296668/otbf6c8vwkxigswl7f6k.pdf`}
                        />
                        {/* <div className="video-play-bar">
                            <div className="topControl">
                                <div className="progress">
                                    <span className="bufferBar"></span>
                                    <span className="timeBar"></span>
                                </div>
                                <div className="time">
                                    <span className="current"></span> /
                                    <span className="duration"></span>
                                </div>
                            </div>

                            <div className="controllers">
                                <div className="controllers-left">
                                    <button className="prevvid disabled" title="Previous video"><i className="icofont-ui-previous"></i></button>
                                    <button className="btnPlay" title="Play/Pause video"></button>
                                    <button className="nextvid" title="Next video"><i className="icofont-ui-next"></i></button>
                                    <button className="sound sound2" title="Mute/Unmute sound"></button>
                                    <div className="volume" title="Set volume">
                                        <span className="volumeBar"></span>
                                    </div>
                                </div>

                                <div className="controllers-right">
                                    <button className="btnspeed" title="Video speed"><i className="fa fa-gear"></i></button>
                                    <ul className="speedcnt">
                                        <li className="spdx50">1.5</li>
                                        <li className="spdx25">1.25</li>
                                        <li className="spdx1 selected">Normal</li>
                                        <li className="spdx050">0.5</li>
                                    </ul>
                                    <button className="btnFS" title="full screen"></button>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="bigplay" title="play the video">
                            <i className="fa fa-play"></i>
                        </div> */}

                        {/* <div className="loading">
                            <div className="spinner-border spinner">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> */}

                    {/* </div> */}
                    {/* <!-- Courses Video Container End --> */}

                    {/* <!-- Courses Enroll Content Start --> */}
                    <div className="courses-enroll-content">

                        {/* <!-- Courses Enroll Title Start --> */}
                        <div className="courses-enroll-title">
                            <h2 className="title">{data['title']}</h2>
                            {/* <p><i className="icofont-eye-alt"></i> <span>8,350</span> Students are watching</p> */}
                        </div>
                        {/* <!-- Courses Enroll Title End --> */}

                    </div>
                    {/* <!-- Courses Enroll Content End --> */}
                </div>
                {/* <!-- Courses Video Player End --> */}

                {/* <!-- Courses Video Playlist Start --> */}
                <div className="courses-video-playlist">
                    <div className="playlist-title">
                        <h3 className="title">Course Content</h3>
                        {/* <span>80 Lessons (8h 15m)</span> */}
                    </div>

                    {/* <!-- Video Playlist Start  --> */}
                    <div className="video-playlist">
                        <div className="accordion" id="videoPlaylist">

                            {/* <!-- Accordion Items Start  --> */}
                            <div className="accordion-item">
                                <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    <p>{data['courseCode']}: {data['title']}</p>
                                    {/* <span className="total-duration">01 hour 48 minutes</span> */}
                                </button>

                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#videoPlaylist">
                                    <nav className="vids">
                                        <a onClick={(e) => selectPdf(e, 0)}className="link" href="#">
                                            <p>{`Chapter ${1}`}. {content['topic']}</p>
                                            {/* <span className="total-duration">08 minutes</span> */}
                                        </a>
                                        
                                    </nav>
                                </div>
                            </div>
                            {/* <!-- Accordion Items End  --> */}
                        </div>
                    </div>
                    {/* <!-- Video Playlist End  --> */}

                </div>
                {/* <!-- Courses Video Playlist End --> */}

            </div>
            {/* <!-- Courses Enroll Wrapper End --> */}

        </div>
        {/* <!-- Courses Enroll End --> */}

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

        <Footer />
       

        {/* <!--Back To Start--> */}
        <a href="#" className="back-to-top">
            <i className="icofont-simple-up"></i>
        </a>
        {/* <!--Back To End--> */}

    </div>
  )
}

export default LearnTab