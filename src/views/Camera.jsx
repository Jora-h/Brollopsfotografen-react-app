import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryIcon from '../assets/icon-pictures/gallery-icon.png';

export default function Camera() {
  const [isCameraDisabled, setIsCameraDisabled] = useState(false);
  const [photo, setPhoto] = useState(null);
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
  
  useEffect(() => {
    if (photo) {
      let gallery = [];
      if (localStorage.getItem('gallery')) {
        gallery = JSON.parse(localStorage.getItem('gallery'));
      }
      gallery.push(photo)
      localStorage.setItem('gallery', JSON.stringify(gallery));
    }
  }, [photo]);

  const captureHandler = () => {
    let video = videoRef.current;
    let width = video.clientWidth;
    let height = video.clientHeight;
    let photoCanvas = photoRef.current;
    photoCanvas.width = width;
    photoCanvas.height= height;
    let context = photoCanvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    const imageURL = photoCanvas.toDataURL("image/png");
    setPhoto(imageURL);
  };

  return (
    <div className="camera-container">
      <div className="icon-holder" onClick={handelClick}>
        <img src={GalleryIcon} alt="" className="icon-gallery" />
      </div>

      <div className="camera">
        {photo ? null : <video ref={videoRef} autoPlay className="camera-screen" />}
        <canvas ref={photoRef}></canvas>
      </div>

      {isCameraDisabled && 
        <div>
          enable camera 
        </div>
      }

      <div className="btn-div">
        {!photo ? <button className="camera-btn" onClick={captureHandler}>Föreviga ett ögonblick</button>: <button className="camera-btn">Fånga ett nytt ögonblick</button>}
      </div>
    </div>
  );
}
