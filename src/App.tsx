import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StayStory from './StayStory';
gsap.registerPlugin(ScrollTrigger);
export const MAP='https://www.google.co.in/maps/place/Ustay/@17.4488962,78.390307,15z/data=!4m21!1m11!3m10!1s0x3bcb91ee106c941b:0x8eee20b9076f7783!2sUstay!5m2!4m1!1i2!8m2!3d17.4488962!4d78.390307!10e1!16s%2Fg%2F11ms95wpxl!3m8!1s0x3bcb91ee106c941b:0x8eee20b9076f7783!5m2!4m1!1i2!8m2!3d17.4488962!4d78.390307!16s%2Fg%2F11ms95wpxl';
export const whatsapp=(message='Hello UStay, I would like to enquire about availability.',phone='919247539880')=>`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
export const whatsappDirect=(message:string,phone:string)=>`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
export function Enquire({children='Enquire about your stay',message,className='button',phone,direct=false}:{children?:ReactNode;message?:string;className?:string;phone?:string;direct?:boolean}) {const resolvedMessage=message??'Hello UStay, I would like to enquire about availability.';const resolvedPhone=phone??'919247539880';return <a className={className} href={direct?whatsappDirect(resolvedMessage,resolvedPhone):whatsapp(resolvedMessage,resolvedPhone)} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={18}/></a>}
export function Eyebrow({number,children}:{number:string;children:ReactNode}) {return <p className="eyebrow"><span>{number}</span>{children}</p>}
export default function App(){
 const root=useRef<HTMLDivElement>(null);
 const [menu,setMenu]=useState(false),[scrolled,setScrolled]=useState(false);
 useEffect(()=>{
  const onScroll=()=>setScrolled(scrollY>40);onScroll();
  addEventListener('scroll',onScroll,{passive:true});
  return()=>removeEventListener('scroll',onScroll);
 },[]);
 useEffect(()=>{
  const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{
   gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:32,opacity:0,duration:.9,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
  },root);
  return()=>mm.revert();
 },[]);
 useEffect(()=>{document.body.style.overflow=menu?'hidden':'';const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false)};addEventListener('keydown',esc);return()=>{document.body.style.overflow='';removeEventListener('keydown',esc)}},[menu]);
 return <div ref={root}>
  <a className="skip" href="#rooms">Skip to rooms</a>
  <header className={`header ${scrolled?'is-scrolled':''}`}><a className="nav-brand" href="#home" aria-label="Ustay home"><img className="brand-logo" src="/assets/ustay-logo-dark.svg" alt="Ustay"/></a><nav aria-label="Main navigation"><a href="#rooms">Explore</a><a href="#monthly">Monthly living</a><a href="#location">Find us</a></nav><Enquire className="nav-enquire">Enquire now</Enquire><button className="menu-button" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} aria-controls="mobile-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  {menu&&<nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">{[['Explore','rooms'],['Monthly living','monthly'],['Find us','location'],['Get in touch','contact']].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label}<ArrowUpRight/></a>)}</nav>}
  <main>
   <section id="home" className="hero" aria-label="Welcome to Ustay">
    <div className="hero-media"><img className="hero-image" src="/assets/exterior.jpeg" alt="" aria-hidden="true"/><div className="hero-shade"/></div>
    <div className="hero-copy"><p className="eyebrow light"><span className="tiny-line"/>MADHAPUR, HYDERABAD</p><h1>Stay easy.<br/><em>Feel at home.</em></h1><p className="hero-intro">Comfortable rooms.<br/>Thoughtful spaces.<br/>Everything you need, right here.</p><a className="button gold" href="#rooms">Step inside <ArrowDown size={18}/></a></div>
    <a className="scroll-hint" href="#rooms"><span><ArrowDown size={19}/></span>SCROLL TO DISCOVER</a>
   </section>
   <section id="welcome" className="intro section-pad"><div className="intro-copy" data-reveal><Eyebrow number="01">WELCOME IN</Eyebrow><h2>Come in.<br/><em>Make yourself comfortable.</em></h2><p>Thoughtfully designed rooms and everyday spaces for the way you stay, work, and unwind in Hyderabad.</p></div><div className="intro-visual" data-reveal><div className="intro-photo intro-photo-main"><img src="/assets/room-main.jpeg" alt="A wide view of a Ustay room with bed and workspace" loading="lazy"/></div><div className="intro-photo intro-photo-detail"><img src="/assets/workspace.jpeg" alt="Ustay desk and wardrobe corner" loading="lazy"/></div></div></section>
   <section id="rooms" className="room-section section-pad"><div className="section-top" data-reveal><Eyebrow number="02">THE ROOM</Eyebrow><span className="subnote">YOUR SPACE AT USTAY</span></div><div className="room-grid"><div className="room-visual" data-reveal><img src="/assets/deluxe.webp" alt="Ustay deluxe bed with fresh white linen and ochre cushions" loading="lazy"/><span className="image-caption">Your everyday, a little softer.</span></div><div className="room-copy" data-reveal><h2>Leave the day<br/><em>at the door.</em></h2><p>A comfortable space to rest, recharge, and feel at ease during your stay.</p><Enquire message="Hi Ustay, I’d like to enquire about the deluxe room." className="button room-enquire">Enquire about a room</Enquire></div></div></section>
   <StayStory/>
  </main>
  <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Enquire with Ustay on WhatsApp"><MessageCircle size={23}/><span>Enquire on WhatsApp</span><ArrowUpRight size={17}/></a>
 </div>;
}
