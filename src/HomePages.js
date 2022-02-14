
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';

export default function HomePage() {
     const container = useRef(null)
  

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./office.json')
    })
  }, [])

return (

<div className="container">

<h1>Home </h1>

<h1>React Lottie Home</h1>
      <div className="container" ref={container}></div>

<p>



<Link to="/about">
     <button type="button" style={{width:200,height:50}}>
          Next
     </button>
 </Link>
  {/* <Link to="/user">Your desired link.</Link> */}

</p>

</div>

);

}