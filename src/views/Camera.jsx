import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryIcon from '../assets/icon-pictures/gallery-icon.png';

export default function Camera() {
  const [isCameraDisabled, setIsCameraDisabled] = useState(false);
  const [isPhoto, setIsPhoto] = useState(false);
  const navigation = useNavigate();
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const handelClick = () => {
    navigation('/gallery');
  };

  useEffect(() => {
    const getUserCamera = () => {
      navigator.mediaDevices.getUserMedia({
        video: true,
      })
        .then((stream) => {
          const video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getUserCamera();
  }, [videoRef]);

  useEffect(()=>{
    navigator.permissions.query({ name: "camera" }).then(res => {
      if(res.state == "granted"){
        setIsCameraDisabled(false);
      } else {
        setIsCameraDisabled(true);
      }
    });
  }, []);
  

  const captureHandler = () => {
    let width = 500;
    let height = width / (16/9);
    let video = videoRef.current;
    let photo = photoRef.current;
    photo.width = width;
    photo.height= height;
    let context =  photo.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    // imageRef.current 
    setIsPhoto(true);
  };

  return (
    <div className="camera-container">
      <div className="icon-holder" onClick={handelClick}>
        <img src={GalleryIcon} alt="" className="icon-gallery" />
      </div>

      <div className="camera">
        {isPhoto ? null : <video ref={videoRef} autoPlay className="camera-screen" />}
        <canvas ref={photoRef}></canvas>
      </div>

      {isCameraDisabled && 
        <div>
          enable camera 
        </div>
      }

      <div className="btn-div">
        {!isPhoto ? <button className="camera-btn" onClick={captureHandler}>Föreviga ett ögonblick</button>: <button className="camera-btn">Fånga ett nytt ögonblick</button>}
      </div>
    </div>
  );
}
