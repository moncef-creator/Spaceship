import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three' 
import {EffectComposer , Bloom, ToneMapping, Noise , Vignette} from '@react-three/postprocessing'
import {BlendFunction} from 'postprocessing'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Canvas 
        legacy={false} 
        camera={{fov:45 , near:0.1 , far:200 , position:[ 6, 0.13, 0.04 ]}}
        gl={{
          // toneMapping:THREE.ACESFilmicToneMapping,
          outputColorSpace:THREE.SRGBColorSpace
        }}
        >
        <App />

      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={1.2}
          luminanceThreshold={1}
          radius={0.4}
        />
        
        <Noise 
          opacity={0.05}
          blendFunction={BlendFunction.OVERLAY}
        />

        <Vignette 
          offset={0.3}
          darkness={0.8}
          eskil={false}
        />

        <ToneMapping />
      </EffectComposer>

      </Canvas>
  </StrictMode>,
)
