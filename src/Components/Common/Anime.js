import React from 'react'
import { useSpring, animated } from 'react-spring'

function Anime() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 7, color: '#ffaaee' },
        { opacity: 2, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0, color: 'red' },
    })
    // ...
    return <animated.div style={styles}><h1>S.O.D-Youtube-Clone</h1></animated.div>
  }

export default Anime;