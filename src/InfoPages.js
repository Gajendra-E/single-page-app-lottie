import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { useParams,useNavigate } from 'react-router-dom'

export default function InfoPage() {
    let { id } = useParams();
    const navigate = useNavigate();
    const container = useRef(null)
      useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('./TP.json')
        })
      }, [])
return (
<>
<h1>Hello there user {id}</h1>
<p>This is your awesome User Profile page</p>
<div className="container" ref={container}></div>
 <button style={{width:200,height:50}} onClick={() =>navigate('/user')}>Back</button>
</>
);
}