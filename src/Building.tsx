import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, MathUtils } from 'three';

function Box({position,scale,color,metal=0}:{position:[number,number,number];scale:[number,number,number];color:string;metal?:number}) {
 return <mesh position={position}><boxGeometry args={scale}/><meshStandardMaterial color={color} roughness={.7} metalness={metal}/></mesh>;
}
function Architecture({progress}:{progress:React.RefObject<number>}) {
 const group=useRef<Group>(null);
 useFrame(({pointer,camera},delta)=>{
  if(!group.current)return;
  group.current.rotation.y=MathUtils.damp(group.current.rotation.y,-.27+pointer.x*.15+progress.current*.28,4,delta);
  camera.position.z=MathUtils.damp(camera.position.z,17-progress.current*5.5,4,delta);
  camera.lookAt(0,.5+progress.current*1.1,0);
 });
 return <group ref={group} rotation={[0,-.27,0]} position={[0,-.5,0]}>
  <Box position={[0,-4.12,0]} scale={[7,.2,5]} color="#323b36"/>
  <Box position={[0,.1,0]} scale={[4.7,8,2.4]} color="#aeaaa0"/>
  <Box position={[0,.3,1.31]} scale={[.72,8.5,.24]} color="#6c7c7e" metal={.55}/>
  {Array.from({length:8},(_,i)=> <group key={i} position={[0,-3.65+i*1.09,0]}>
   <Box position={[0,0,0]} scale={[4.95,.12,2.85]} color="#e7e3d5"/>
   {[ -1,1 ].map(side=><group key={side}>
    <Box position={[side*2.35,.5,1.3]} scale={[.14,1,.25]} color="#e5dfce"/>
    <Box position={[side*1.2,.51,1.24]} scale={[1.6,.88,.06]} color={i%3===1?'#b77748':'#393e3a'}/>
    <Box position={[side*1.32,.27,1.48]} scale={[1.68,.4,.045]} color="#667b7b" metal={.65}/>
    <Box position={[side*1.32,.49,1.48]} scale={[1.73,.035,.06]} color="#d9d3c4"/>
    <Box position={[side*1.33,.8,1.38]} scale={[.17,.035,.06]} color="#f4d8a6"/>
   </group>)}
   <Box position={[0,.51,1.46]} scale={[.58,.98,.025]} color={i%2?'#879793':'#647776'} metal={.55}/>
  </group>)}
  <Box position={[0,4.56,0]} scale={[5.07,.2,2.99]} color="#e4dfd0"/>
  <Box position={[-1.2,-3.55,1.27]} scale={[1.48,.75,.1]} color="#202827"/>
 </group>;
}
export default function Building({progress,active,onReady}:{progress:React.RefObject<number>;active:boolean;onReady:()=>void}) {
 return <Canvas frameloop={active?'always':'never'} dpr={[1,1.5]} camera={{position:[8,3,17],fov:36}} gl={{antialias:true,alpha:true,powerPreference:'low-power'}} onCreated={onReady} aria-label="Interactive architectural impression based on the Ustay facade">
  <ambientLight intensity={1.5}/><directionalLight position={[3,8,7]} intensity={3} color="#fff0d8"/><directionalLight position={[-6,2,0]} intensity={2} color="#98b7bc"/>
  <Architecture progress={progress}/>
 </Canvas>;
}
