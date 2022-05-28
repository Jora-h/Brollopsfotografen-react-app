import { useNavigate } from "react-router-dom";
import GalleryIcon from "../assets/icon-pictures/gallery-icon.png"
import Stream from "../assets/icon-pictures/stream-cam.png"

export default function Camera () {
    let navigation = useNavigate();
    const handelClick = ()=>{
        navigation('/gallery')
    }
    return (
        <div className="camera-container">
            <div className="icon-holder" onClick={handelClick}>
                <img src={GalleryIcon} alt="" className="icon-gallery"/>
            </div>

            <div className="camera">
                <img src={Stream} alt="" className="camera-screen"/>
            </div>
            
            <div className="btn-div">
                <button className="camera-btn">Föreviga ett ögonblick</button>
            </div>
        </div>
    )
}