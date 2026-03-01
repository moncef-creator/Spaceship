
import React, { useLayoutEffect } from 'react'
import { useGLTF , useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Model/Spaceship4.glb')

const [cockpitColor , cockpitMetalness , cockpitNormal , cockpitRoughness] = useTexture([
    '/Baked Textures/Cockpit/Cockpit_Color.jpg',
    '/Baked Textures/Cockpit/Cockpit_Metalness.jpg',
    '/Baked Textures/Cockpit/Cockpit_Normal.jpg',
    '/Baked Textures/Cockpit/Cockpit_Roughness.jpg'
  ])

  const [Dashboard_2_Alpha , Dashboard_2_Color , Dashboard_2_Metalness , Dashboard_2_Normal , Dashboard_2_Roughness] = useTexture([
    '/Baked Textures/Dashboard 2/Dashboard_2_Alpha2.png', 
    '/Baked Textures/Dashboard 2/Dashboard_2_Color.jpg', 
    '/Baked Textures/Dashboard 2/Dashboard_2_Metallic.jpg', 
    '/Baked Textures/Dashboard 2/Dashboard_2_Normal.jpg',
    '/Baked Textures/Dashboard 2/Dashboard_2_Roughmess.jpg'
  ])

  const [Dashboard_Alpha , Dashboard_Color , Dashboard_Metalness , Dashboard_Normal , Dashboard_Roughness] = useTexture([
    '/Baked Textures/Dashboard/Dashboard alpha2.png', 
    '/Baked Textures/Dashboard/Dashboard Color.001.jpg', 
    '/Baked Textures/Dashboard/Dashboard Metalic.jpg', 
    '/Baked Textures/Dashboard/Dashboard Normal.jpg',
    '/Baked Textures/Dashboard/Dashboard Roughness.jpg'
  ])

  const [Dashboard_3_Alpha , Dashboard_3_Color , Dashboard_3_Metalness , Dashboard_3_Normal , Dashboard_3_Roughness] = useTexture([
    '/Baked Textures/Dashboard 3/dashboard_3_Alpha2.png', 
    '/Baked Textures/Dashboard 3/dashboard_3_Color.jpg', 
    '/Baked Textures/Dashboard 3/dashboard_3_Metallic.jpg', 
    '/Baked Textures/Dashboard 3/dashboard_3_Normal.jpg',
    '/Baked Textures/Dashboard 3/dashboard_3_Roughness.jpg'
  ])

  const [window_AO , window_Roughness] = useTexture([
    '/Baked Textures/window/window_AmbientOcclusion.png', 
    '/Baked Textures/window/window_Roughness.png', 
  ])

  const [Visiere_AO , Visiere_Roughness] = useTexture([
    '/Baked Textures/Visiere/Visiere_AmbienOcclusion.png', 
    '/Baked Textures/Visiere/Visiere_Roughness.png', 
  ])

  const [Dashboard_4_Color , Dashboard_4_Normal , Dashboard_4_Roughness] = useTexture([ 
    '/Baked Textures/Dashboard 4/Dashboard4_Color.jpg', 
    '/Baked Textures/Dashboard 4/Dashboard4_Normal.jpg',
    '/Baked Textures/Dashboard 4/Dashboard4_Roughness.jpg'
  ])

  const [Radio_Color , Radio_Normal , Radio_Roughness] = useTexture([ 
    '/Baked Textures/Radio/Radio_Color.jpg', 
    '/Baked Textures/Radio/Radio_Normal.jpg',
    '/Baked Textures/Radio/Radio_Roughness.jpg'
  ])  

  const [Ceiling_2_Color , Ceiling_2_Normal , Ceiling_2_Roughness] = useTexture([ 
    '/Baked Textures/Ceiling 2/Ceiling_2_Color.jpg', 
    '/Baked Textures/Ceiling 2/Ceiling_2_Normal.jpg',
    '/Baked Textures/Ceiling 2/Ceiling_2_Roughness.jpg'
  ])  

  const [Controls_Color , Controls_Normal , Controls_Roughness] = useTexture([ 
    '/Baked Textures/Controls/Controls_Color.jpg', 
    '/Baked Textures/Controls/Controls_Normal.jpg',
    '/Baked Textures/Controls/Controls_Roughness.jpg'
  ])  

  const [Ceiling_1_Color , Ceiling_1_Normal , Ceiling_1_Roughness , Ceiling_1_Metalness] = useTexture([ 
    '/Baked Textures/Ceiling 1/ceiling_Color.jpg', 
    '/Baked Textures/Ceiling 1/ceiling_Normal.jpg',
    '/Baked Textures/Ceiling 1/ceiling_Roughness.jpg',
    '/Baked Textures/Ceiling 1/ceiling_Metalness.jpg'
  ])  

  const MaterialCockpit = {map:cockpitColor,
  normalMap:cockpitNormal,
  roughnessMap:cockpitRoughness,
  metalnessMap:cockpitMetalness,
  roughness:1,
  metalness:1}

  // if(cockpitColor) cockpitColor.flipY = false
  // if(cockpitMetalness) cockpitMetalness.flipY = false
  // if(cockpitNormal) cockpitNormal.flipY = false
  // if(cockpitRoughness) cockpitRoughness.flipY = false

  const MaterialDashboard_2_ = {map:Dashboard_2_Color,
    normalMap:Dashboard_2_Normal,
    roughnessMap:Dashboard_2_Roughness,
    metalnessMap:Dashboard_2_Metalness,
    roughness:1,
    metalness:1,
    alphaMap:Dashboard_2_Alpha,
    // transparent:true,
    opacity:1,
    alphaTest:0.5
    }

  // if(Dashboard_2_Color) Dashboard_2_Color.flipY = false
  // if(Dashboard_2_Metalness) Dashboard_2_Metalness.flipY = false
  // if(Dashboard_2_Normal) Dashboard_2_Normal.flipY = false
  // if(Dashboard_2_Roughness) Dashboard_2_Roughness.flipY = false
  // if(Dashboard_2_Alpha) Dashboard_2_Alpha.flipY = false

  const MaterialDashboard_ = {map:Dashboard_Color,
    normalMap:Dashboard_Normal,
    roughnessMap:Dashboard_Roughness,
    metalnessMap:Dashboard_Metalness,
    roughness:1,
    metalness:1,
    alphaMap:Dashboard_Alpha,
    // transparent:true,
    opacity:1,
    alphaTest:0.5
    }

  // if(Dashboard_Color) Dashboard_Color.flipY = false
  // if(Dashboard_Metalness) Dashboard_Metalness.flipY = false
  // if(Dashboard_Normal) Dashboard_Normal.flipY = false
  // if(Dashboard_Roughness) Dashboard_Roughness.flipY = false
  // if(Dashboard_Alpha) Dashboard_Alpha.flipY = false

  const MaterialDashboard_3_ = {map:Dashboard_3_Color,
    normalMap:Dashboard_3_Normal,
    roughnessMap:Dashboard_3_Roughness,
    metalnessMap:Dashboard_3_Metalness,
    roughness:1,
    metalness:1,
    alphaMap:Dashboard_3_Alpha,
    // transparent:true,
    opacity:1,
    alphaTest:0.5
    }

  // if(Dashboard_3_Color) Dashboard_3_Color.flipY = false
  // if(Dashboard_3_Metalness) Dashboard_3_Metalness.flipY = false
  // if(Dashboard_3_Normal) Dashboard_3_Normal.flipY = false
  // if(Dashboard_3_Roughness) Dashboard_3_Roughness.flipY = false
  // if(Dashboard_3_Alpha) Dashboard_3_Alpha.flipY = false

  const MaterialDashboard_4_ = {map:Dashboard_4_Color,
    normalMap:Dashboard_4_Normal,
    roughnessMap:Dashboard_4_Roughness,
    roughness:1,
    }

  // if(Dashboard_4_Color) Dashboard_4_Color.flipY = false
  // if(Dashboard_4_Normal) Dashboard_4_Normal.flipY = false
  // if(Dashboard_4_Roughness) Dashboard_4_Roughness.flipY = false

  const MaterialRadio_ = {map:Radio_Color,
    normalMap:Radio_Normal,
    roughnessMap:Radio_Roughness,
    roughness:1,
    }

  // if(Radio_Color) Radio_Color.flipY = false
  // if(Radio_Normal) Radio_Normal.flipY = false
  // if(Radio_Roughness) Radio_Roughness.flipY = false

  const MaterialCeiling_2_ = {map:Ceiling_2_Color,
    normalMap:Ceiling_2_Normal,
    roughnessMap:Ceiling_2_Roughness,
    roughness:1,
    }

  // if(Ceiling_2_Color) Ceiling_2_Color.flipY = false
  // if(Ceiling_2_Normal) Ceiling_2_Normal.flipY = false
  // if(Ceiling_2_Roughness) Ceiling_2_Roughness.flipY = false

  const MaterialControls_ = {map:Controls_Color,
    normalMap:Controls_Normal,
    roughnessMap:Controls_Roughness,
    roughness:1,
    }

  // if(Controls_Color) Controls_Color.flipY = false
  // if(Controls_Normal) Controls_Normal.flipY = false
  // if(Controls_Roughness) Controls_Roughness.flipY = false

 const MaterialCeiling_1_ = {map:Ceiling_1_Color,
    normalMap:Ceiling_1_Normal,
    roughnessMap:Ceiling_1_Roughness,
    roughness:1,
    metalnessMap:Ceiling_1_Metalness,
    metalness:1
    }

  // if(Ceiling_1_Color) Ceiling_1_Color.flipY = false
  // if(Ceiling_1_Normal) Ceiling_1_Normal.flipY = false
  // if(Ceiling_1_Roughness) Ceiling_1_Roughness.flipY = false
  // if(Ceiling_1_Metalness) Ceiling_1_Metalness.flipY = false

  // if(window_AO) window_AO.flipY = false
  // if(window_Roughness) window_Roughness.flipY = false

  // if(Visiere_AO) Visiere_AO.flipY = false
  // if(Visiere_Roughness) Visiere_Roughness.flipY = false
  
  useLayoutEffect(()=>{{
    const allTextures=[cockpitColor , cockpitMetalness , cockpitNormal , cockpitRoughness,
      Dashboard_2_Alpha , Dashboard_2_Color , Dashboard_2_Metalness , Dashboard_2_Normal , Dashboard_2_Roughness,
      Dashboard_Alpha , Dashboard_Color , Dashboard_Metalness , Dashboard_Normal , Dashboard_Roughness,
      Dashboard_3_Alpha , Dashboard_3_Color , Dashboard_3_Metalness , Dashboard_3_Normal , Dashboard_3_Roughness,
      window_AO , window_Roughness,Visiere_AO , Visiere_Roughness,Dashboard_4_Color , Dashboard_4_Normal , Dashboard_4_Roughness,
      Radio_Color , Radio_Normal , Radio_Roughness,Ceiling_2_Color , Ceiling_2_Normal , Ceiling_2_Roughness,
      Controls_Color , Controls_Normal , Controls_Roughness,Controls_Color , Controls_Normal , Controls_Roughness,
      Ceiling_1_Color , Ceiling_1_Normal , Ceiling_1_Roughness , Ceiling_1_Metalness
    ]

    allTextures.forEach(tex =>{
      if(tex){
        tex.flipY=false
        // tex.colorSpace = THREE.SRGBColorSpace
      }

    })

  }},[])

  return (
    <group {...props} dispose={null}>

      <group position={[-0.306, -0.061, 0]}>
        <mesh geometry={nodes.Plane.geometry}>
          <meshStandardMaterial {...MaterialCockpit}/>
        </mesh>
        <mesh geometry={nodes.Plane_1.geometry}>
          <meshStandardMaterial {...MaterialCockpit}/>
        </mesh>
        <mesh geometry={nodes.Plane_2.geometry}>
          <meshStandardMaterial {...MaterialCockpit}/>
        </mesh>
        <mesh geometry={nodes.Plane_3.geometry}>
          <meshStandardMaterial {...MaterialCockpit}/>
        </mesh>
        <mesh geometry={nodes.Plane_4.geometry}>
          <meshStandardMaterial {...MaterialCockpit}/>
        </mesh>
      </group>

      <mesh geometry={nodes.Screw.geometry} material={materials.Bolts} position={[-0.306, -0.061, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Visiere.geometry} position={[-0.306, -0.061, 0]} >
        <meshPhysicalMaterial 
          color={'#FFC48D'} 
          metalness={0.2} 
          roughnessMap={Visiere_Roughness} 
          aoMap={Visiere_AO} 
          roughness={1} transmission={0.3} thickness={0.5} ior={1.5} opacity={1} />
      </mesh>
      <mesh geometry={nodes.window.geometry} position={[-0.306, -0.061, 0]} >
        <meshPhysicalMaterial 
          color={'#ddeeff'} 
          metalness={0.2} 
          roughnessMap={window_Roughness} 
          aoMap={window_AO} 
          roughness={1} transmission={0.8} thickness={0.5} ior={1.5} opacity={1} />
      </mesh>

      <group position={[2.055, -1.616, 0.25]} rotation={[-1.478, 0.802, 3.075]}>
        <mesh geometry={nodes.poly015.geometry}  >
          <meshStandardMaterial {...MaterialDashboard_2_} />
        </mesh>
        <mesh geometry={nodes.poly015_1.geometry}>
          <meshStandardMaterial {...MaterialDashboard_2_} />
        </mesh>
        <mesh geometry={nodes.poly015_2.geometry}>
          <meshStandardMaterial {...MaterialDashboard_2_} />
        </mesh>
      </group>

      <group position={[2.278, -1.616, -0.536]} rotation={[-1.7, 1.048, 0.112]}>
        <mesh geometry={nodes.poly015.geometry}   >
          <meshStandardMaterial {...MaterialDashboard_2_}/>
        </mesh>
        <mesh geometry={nodes.poly015_1.geometry} >
          <meshStandardMaterial {...MaterialDashboard_2_}/>
        </mesh>
        <mesh geometry={nodes.poly015_2.geometry} >
          <meshStandardMaterial {...MaterialDashboard_2_}/>
        </mesh>
      </group>

      <group position={[0.59, -1.315, 0.152]} rotation={[-1.61, 0.904, 1.615]}>
        <mesh geometry={nodes.Cylinder003.geometry}  >
          <meshStandardMaterial {...MaterialDashboard_} />
        </mesh>
        <mesh geometry={nodes.Cylinder003_1.geometry}>
          <meshStandardMaterial {...MaterialDashboard_} />
        </mesh>
        <mesh geometry={nodes.Cylinder003_2.geometry}>
          <meshStandardMaterial {...MaterialDashboard_} />
        </mesh>
        <mesh geometry={nodes.Cylinder003_3.geometry}>
          <meshStandardMaterial {...MaterialDashboard_} />
        </mesh>
      </group>

      <group position={[-0.024, -0.787, 0.253]} rotation={[0.393, 1.298, -0.421]}>
        <mesh geometry={nodes['737_Console002'].geometry} >
          <meshStandardMaterial {...MaterialDashboard_4_} />
        </mesh>
        <mesh geometry={nodes['737_Console002_1'].geometry}>
          <meshStandardMaterial {...MaterialDashboard_4_} />
        </mesh>
      </group>

      <group position={[-0.024, -0.787, -0.403]} rotation={[-0.447, -1.33, 2.665]} scale={-1}>
        <mesh geometry={nodes['737_Console002'].geometry} >
          <meshStandardMaterial {...MaterialDashboard_4_} />
        </mesh>
        <mesh geometry={nodes['737_Console002_1'].geometry}>
          <meshStandardMaterial {...MaterialDashboard_4_} />
        </mesh>
      </group>

      <group position={[1.221, -1.447, 2.099]} rotation={[-Math.PI / 2, 0.925, Math.PI / 2]}>
        <mesh geometry={nodes.textured006.geometry}   >
          <meshStandardMaterial {...MaterialDashboard_3_} />
        </mesh>
        <mesh geometry={nodes.textured006_1.geometry} >
          <meshStandardMaterial {...MaterialDashboard_3_} />
        </mesh>
        <mesh geometry={nodes.textured006_2.geometry} >
          <meshStandardMaterial {...MaterialDashboard_3_} />
        </mesh>
        <mesh geometry={nodes.textured006_3.geometry} >
          <meshStandardMaterial {...MaterialDashboard_3_} />
        </mesh>
      </group>

      <mesh geometry={nodes.Radio.geometry}  position={[2.028, -1.418, 2.439]} rotation={[-2.884, 0.354, -Math.PI]} >
        <meshStandardMaterial {...MaterialRadio_} />
      </mesh>
      <mesh geometry={nodes.Radio001.geometry}  position={[2.334, -1.544, -2.296]} rotation={[-1.029, 1.087, 0.794]}>
        <meshStandardMaterial {...MaterialRadio_} />
      </mesh>
      <mesh geometry={nodes.Radio002.geometry}  position={[1.765, -1.386, -1.809]} rotation={[-1.306, 0.661, -2.211]} scale={1.655}>
        <meshStandardMaterial {...MaterialRadio_} />
      </mesh>
      <mesh geometry={nodes.Ceiling_2.geometry} position={[3.267, 1.105, 1.761]} rotation={[-Math.PI, 0.887, -Math.PI]}>
        <meshStandardMaterial {...MaterialCeiling_2_} />
      </mesh>
      <mesh geometry={nodes.Ceiling_2001.geometry} position={[3.267, 0.968, -2.001]} rotation={[0, 1.444, 0]} scale={1.168}>
        <meshStandardMaterial {...MaterialCeiling_2_} />
      </mesh>
      <mesh geometry={nodes.Controls.geometry} position={[2.512, -1.493, 0.882]} rotation={[0, 1.5, 0]} >
        <meshStandardMaterial {...MaterialControls_} />
      </mesh>
      <mesh geometry={nodes.Controls001.geometry} position={[2.512, -1.493, -1.119]} rotation={[0, 1.5, 0]} >
        <meshStandardMaterial {...MaterialControls_} />
      </mesh>

      <group position={[2.725, 1.334, 1.621]} rotation={[1.326, 1.009, -1.137]}>
        <mesh geometry={nodes.poly011.geometry}  >
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
        <mesh geometry={nodes.poly011_1.geometry}>
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
      </group>

      <group position={[3.366, 1.423, 0.731]} rotation={[2.521, 0.475, -2.679]}>
        <mesh geometry={nodes.poly011.geometry} >
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
        <mesh geometry={nodes.poly011_1.geometry} >
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
      </group>

      <group position={[3.044, 1.448, -0.489]} rotation={[1.326, 1.009, -1.137]}>
        <mesh geometry={nodes.poly011.geometry} >
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
        <mesh geometry={nodes.poly011_1.geometry} >
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
      </group>

      <group position={[2.404, 1.536, -0.04]} rotation={[2.521, 0.475, -2.679]}>
        <mesh geometry={nodes.poly011.geometry} >
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
        <mesh geometry={nodes.poly011_1.geometry} >
          <meshStandardMaterial {...MaterialCeiling_1_} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/Model/Spaceship4.glb')
