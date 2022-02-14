import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export default function HomePage() {
let { id } = useParams();
const navigate = useNavigate();
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
<h1>React Lottie About</h1>
      <div className="container" ref={container}></div>
<p>





 <button style={{width:200,height:50,marginRight:100}} onClick={() =>navigate('/')}>Back</button>
 <Link to="/user">
     <button type="button" style={{width:200,height:50}}>
          Next
     </button>
 </Link>
  {/* <Link to="/user">Your desired link.</Link> */}
</p>
</div>
);
}