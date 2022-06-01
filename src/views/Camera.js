import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GalleryIcon from "../assets/icon-pictures/gallery-icon.png"
import Stream from "../assets/icon-pictures/stream-cam.png"

export default function Camera () {
    let navigation = useNavigate();
    let videoRef = useRef(null)
    const handelClick = ()=>{
        navigation('/gallery')
    }
    const getUserCamera =() => {
        navigator.mediaDevices.getUserMedia({
            video:true
        })
        .then((stream) => {
            let video = videoRef.current
            video.srcObject=stream
            video.play()
        })
        .catch((error) => {
            console.error(error)
        })
    }
    useEffect(() => {
        getUserCamera()
    },[videoRef])
    return (
        <div className="camera-container">
            <div className="icon-holder" onClick={handelClick}>
                <img src={GalleryIcon} alt="" className="icon-gallery"/>
            </div>

            <div className="camera">
                <video ref={videoRef}  autoPlay className="camera-screen"></video>
            </div>
            
            <div className="btn-div">
                <button className="camera-btn">Föreviga ett ögonblick</button>
            </div>
        </div>
    )
}