import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import styles from '../styles/backGround.module.sass'

const DynamicBackGround = forwardRef(function DynamicBackGround (props, ref) {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [context, setContext] = useState(null)
  const canvasRef = useRef(null)
  useImperativeHandle(ref, () => ({
    setAccelerationFromOutSide () {
      console.log('Changed')
    }
  }));
  return (
    <canvas ref={canvasRef} className={`${styles.background}`} width={screenSize.width} height={screenSize.height*0.6} />
  )
}, [])

export default DynamicBackGround