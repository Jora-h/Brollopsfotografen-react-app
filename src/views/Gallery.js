import BrollopFotoLogo from "../assets/icon-pictures/brollop-foto-logo.png"
import Foto from "../assets/icon-pictures/foto.png"
import CloseIcon from "../assets/icon-pictures/close-icon.png"
import { useNavigate } from "react-router-dom";
export default function Gallery() {
    let navigation = useNavigate();
    const handelClick = ()=>{
        navigation('/camera')
    }

    const handelDelete = () => {
        console.log('handelDelete not implemented');
    }

    return (
        <div className="gallery-page-container" >
            <div className="icon-holder"><img src={BrollopFotoLogo} alt="" onClick={handelClick} className="icon-camera"/></div>
            <div className="gallery-container" >
                <div className="gallery-item">
                    <img src={Foto} alt="" className="foto"/> 
                    <div onClick={handelDelete}><img src={CloseIcon} alt="" className="close"/></div>
                </div>
                <div className="gallery-item">
                    <img src={Foto} alt="" className="foto"/> 
                    <div onClick={handelDelete}><img src={CloseIcon} alt="" className="close"/></div>
                </div>

            </div>

        </div>
    )
}