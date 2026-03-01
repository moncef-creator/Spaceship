import { Suspense , useEffect, useRef , useState } from 'react'
import {  OrbitControls , Environment , Float, useTexture   } from '@react-three/drei'
import {Model as Spaceship} from '/Components/Spaceship4.jsx'
import {useControls} from 'leva'
import * as THREE from 'three' 
import{useThree} from '@react-three/fiber'
import {Perf} from 'r3f-perf'

export default function App() {

  const [audio] = useState(new Audio('/Audio/Dark was the night, cold was the ground (2022 Remastered Version).mp3'))

  useEffect(()=>{

    audio.loop=true 
    audio.volume=0.1

    const startaudio = ()=> audio.play()
    window.addEventListener('click', startaudio)

    return () =>{
      window.removeEventListener('click' , startaudio)
      audio.pause()
    }

  },[audio])

  const lightRef = useRef()

  const envRotationY=4.62
  const envRotationX=0.2
  // useHelper(lightRef , THREE.DirectionalLightHelper,1 ,'hotpink')

  // const {lightIntensity , lightPos,envRotationY , envRotationX} = useControls({
  //   // lightIntensity:{value:2 , min:0 , max:4},
  //   // lightPos:[-4.3,0.5,3.5],
  //   envRotationY:{value:4.62 , min:0 , max:Math.PI * 2 , step:0.01 },
  //   envRotationX:{value:0.2 , min:0 , max:Math.PI * 2 , step:0.01 },
  // })

  const planetTexture=useTexture('/Baked Textures/Earth/planet-earth-orbit-outer-space-cosmos-1920x1200-8769.jpg')

  return (
    <>

    <Perf position='top-left'/>

    <OrbitControls 
      makeDefault 
      enablePan={false}
      minDistance={5.8}
      maxDistance={6.1}
      minAzimuthAngle={-4.8}
      maxAzimuthAngle={-4.6}
      minPolarAngle={1.5}
      maxPolarAngle={1.576}
      enableDamping
      dampingFactor={0.05}

    />

      <Environment 
        files={'/HDRI/ferndale_studio_01_1k.hdr'} 
        background 
        blur={0.5} 
        backgroundRotation={[envRotationX , envRotationY ,0]} 
        environmentRotation={[envRotationX , envRotationY ,0]}
        environmentIntensity={0.3}
        backgroundIntensity={0}
       
      />

      <ambientLight intensity={0.1}/>
      {/* <directionalLight intensity={lightIntensity} position={lightPos} ref={lightRef} castShadow /> */}

      <Suspense fallback={null}>
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh position={[-20 , -7 , 3] } scale={[55,25,55]} rotation={[Math.PI,Math.PI / 2,0]} >
        <planeGeometry  />
        <meshStandardMaterial 
          map={planetTexture} 
          emissiveMap={planetTexture} 
          emissive={new THREE.Color('#c4dcff')} 
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      </Float>
      </Suspense>

      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5} >
      <Spaceship />

        
      </Float>
    </>
  )
}

