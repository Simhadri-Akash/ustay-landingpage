import { useState } from 'react';
import { ArrowUpRight, Check, MapPin, Phone, Mail, Laptop, Shirt, Wind, Wifi, Bath, Tv, ChevronsUpDown, ShieldCheck, ConciergeBell, Car, Users, Clock, Utensils, CookingPot, Sparkles, Zap } from 'lucide-react';
import { Enquire, Eyebrow, MAP, whatsapp } from './App';

type FacilityTile={title:string;copy:string;src:string;className:string};
const facilityTiles:FacilityTile[]=[
 {title:'Corridor',copy:'Room doors and everyday circulation space.',src:'/assets/corridor.jpeg',className:'tile-a'},
 {title:'Covered parking',copy:'Covered parking area inside the property.',src:'/assets/parking.jpeg',className:'tile-b'},
 {title:'Terrace & open space',copy:'An open-air terrace, above the everyday.',src:'/assets/terrace-poster.webp',className:'tile-c'},
 {title:'The building',copy:'The Ustay exterior, Madhapur.',src:'/assets/exterior.jpeg',className:'tile-d'},
];
const propertyFacilities=[{Icon:ChevronsUpDown,label:'Elevator'},{Icon:ShieldCheck,label:'CCTV security'},{Icon:ConciergeBell,label:'Room service'},{Icon:Car,label:'Free parking'},{Icon:Wifi,label:'Free Wi-Fi'},{Icon:Users,label:'Family rooms'},{Icon:Clock,label:'24-hour front desk'},{Icon:Utensils,label:'Food available'}];
function Facilities(){
 return <section id="facilities" className="facilities section-pad"><div className="section-top" data-reveal><Eyebrow number="07">BEYOND YOUR ROOM</Eyebrow><span className="subnote">CORRIDORS, COMMON GROUND &amp; OPEN SPACES</span></div>
  <div className="facility-tiles">{facilityTiles.map(item=><figure key={item.title} className={`facility-tile ${item.className}`} data-reveal>
   <img src={item.src} alt={item.title} loading="lazy"/>
   <figcaption><span>{item.title}</span><p>{item.copy}</p></figcaption>
  </figure>)}</div>
  <div className="facility-list" data-reveal>{propertyFacilities.map(({Icon,label})=><div key={label}><Icon size={17} strokeWidth={1.4}/><span>{label}</span></div>)}</div>
 </section>;
}
function Location(){
 const [showMap,setShowMap]=useState(false);
 return <section id="location" className="location section-pad"><div className="location-copy" data-reveal><Eyebrow number="08">FIND YOUR PLACE</Eyebrow><h2>Your Hyderabad.<br/><em>Within reach.</em></h2><p>Settle into Madhapur, with the HITEC City and Mindspace area close to your everyday.</p><div className="address"><MapPin size={21}/><div><strong>Ustay, Madhapur</strong><span>Hyderabad, Telangana</span></div></div><a className="button" href={MAP} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18}/></a></div><div className="map-wrap" data-reveal>{showMap?<iframe title="Ustay location in Madhapur" src="https://maps.google.com/maps?q=17.4488962,78.390307&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>:<div className="map-cover"><div className="map-coordinates">17.4489° N &nbsp; 78.3903° E</div><MapPin size={34} strokeWidth={1}/><h3>Meet us<br/>in Madhapur.</h3><button className="button" onClick={()=>setShowMap(true)}>Explore the map <ArrowUpRight size={18}/></button><a href={MAP} target="_blank" rel="noopener noreferrer">Open directly in Google Maps</a></div>}</div></section>;
}
export default function StayStory(){
 const facilities=[{Icon:Wind,label:'Air conditioning'},{Icon:Wifi,label:'Free Wi-Fi'},{Icon:Bath,label:'Private bathroom'},{Icon:Tv,label:'Flat-screen TV'},{Icon:Shirt,label:'Wardrobe'},{Icon:Laptop,label:'Work desk'}];
 const monthlyAmenities=[{Icon:Wifi,label:'High speed Wi-Fi'},{Icon:Utensils,label:'Healthy Food'},{Icon:CookingPot,label:'Kitchen Access'},{Icon:Shirt,label:'Laundry'},{Icon:Sparkles,label:'Housekeeping'},{Icon:ShieldCheck,label:'24/7 Security'},{Icon:Car,label:'Parking'},{Icon:Zap,label:'Power Backup'}];
 const monthlyMessage='Hi, Thank you for contacting *ULive Co-Living!* 😊 We’re glad to assist you. Please share your requirement (Single Room / Twin Share / Move-in Date), and our team will help you with the details.';
 return <>
  <section id="comfort" className="comfort section-pad"><div className="comfort-copy" data-reveal><Eyebrow number="03">SPACE TO FOCUS</Eyebrow><h2>Work mode.<br/><em>And off mode.</em></h2><p>A dedicated workspace when you need to focus, with the comfort to slow down when the day is done.</p><div className="facility-grid">{facilities.map(({Icon,label})=><div key={label}><Icon size={18} strokeWidth={1.3}/><span>{label}</span></div>)}</div></div><figure className="desk-visual" data-reveal><img src="/assets/desk.webp" alt="Ustay desk, chair, wardrobe, mirror and window" loading="lazy"/><figcaption>Space to focus. Space to simply be.</figcaption></figure></section>
  <section id="night-stay" className="night-stay section-pad" aria-labelledby="night-stay-heading">
   <div className="night-stay-copy" data-reveal>
    <Eyebrow number="04">NIGHT STAY</Eyebrow>
    <h2 id="night-stay-heading">Stay for the night.<br/><em>Settle in with ease.</em></h2>
    <p>A comfortable room for a short stay, with the essentials you need to rest and recharge.</p>
    <div className="nightly-price">
     <div><s>₹2,000</s><span className="offer">10% OFF</span></div>
     <strong>₹1,800 <span>/ night</span></strong>
     <p className="exclusion">Food excluded.</p>
    </div>
    <Enquire message="Hello UStay, I would like to enquire about the ₹1,800 per-night stay." className="text-link">Enquire about a night stay</Enquire>
   </div>
   <figure className="night-stay-visual" data-reveal><img src="/assets/deluxe.webp" alt="Ustay room with fresh white bed linen and orange accent pillows" loading="lazy"/></figure>
  </section>
  <section id="balcony" className="balcony-section section-pad"><div className="balcony-top" data-reveal><Eyebrow number="05">OPEN TO THE OUTSIDE</Eyebrow><h2>A little more openness.<br/><em>A little more light.</em></h2><p>Rooms with balcony access for a little extra breathing space — a place to step out, slow down, and take in the city.</p><Enquire message="Hi Ustay, I would like to enquire about a deluxe room with balcony. Please share availability and pricing." className="text-link">Explore balcony rooms</Enquire></div><div className="balcony-visual" data-reveal><figure className="balcony-photo-main"><img src="/assets/exterior.jpeg" alt="The Ustay building exterior" loading="lazy"/></figure><figure className="balcony-photo-detail"><img src="/assets/balcony.jpeg" alt="A Ustay balcony with a glass railing and city view" loading="lazy"/></figure></div><div className="balcony-note" data-reveal><span>YOUR ROOM.<br/>YOUR PACE.</span><p>Deluxe rooms available<br/>with or without a balcony.</p></div></section>
  <section id="monthly" className="monthly section-pad"><div className="monthly-heading" data-reveal><Eyebrow number="06">STAY A LITTLE LONGER</Eyebrow><h2>New city.<br/><em>Familiar feeling.</em></h2><p>A place for working professionals and students to settle into their own rhythm. Choose a shared space or make it entirely yours.</p></div><div className="monthly-grid"><article className="stay-card" data-reveal><div className="stay-photo"><img src="/assets/twin.webp" alt="Two single beds in a Ustay twin-sharing room" loading="lazy"/><span>01 / SHARE YOUR SPACE</span></div><div className="stay-info"><h3>Twin Sharing</h3><p>A place of your own, with room for two.</p><div className="monthly-price">₹15,000<span>/ person / month</span></div><p className="exclusion">Food and electricity excluded.</p><Enquire phone="919247539882" message={monthlyMessage} className="text-link">Enquire about twin sharing</Enquire></div></article><article className="stay-card private-card" data-reveal><div className="stay-photo"><img src="/assets/single-sharing.jpg" alt="Ustay single-sharing room with a double bed, wardrobe and mirror" loading="lazy"/><span>02 / MAKE IT YOURS</span></div><div className="stay-info"><h3>Single Sharing</h3><p>Close the door. Settle into your own space.</p><div className="monthly-price">₹30,000<span>/ month</span></div><p className="exclusion">Food and electricity excluded.</p><Enquire phone="919247539882" message={monthlyMessage} className="text-link">Enquire about single sharing</Enquire></div></article></div><div className="monthly-amenities" data-reveal><span className="amenities-label">ROOM AMENITIES</span><div className="amenities-grid">{monthlyAmenities.map(({Icon,label})=><div key={label}><Icon size={16} strokeWidth={1.3}/><span>{label}</span></div>)}</div></div><p className="monthly-footnote" data-reveal><Check size={16}/> Furnished rooms. Everyday essentials.</p></section>
  <Facilities/>
  <Location/>
  <section id="contact" className="contact section-pad"><div className="contact-top" data-reveal><Eyebrow number="09">MAKE YOURSELF AT HOME</Eyebrow><span>MADHAPUR · HYDERABAD</span></div><div className="contact-grid"><div data-reveal><h2>Your next chapter<br/><em>starts with a hello.</em></h2><p>Tell us a little about your stay.<br/>We’ll help you find your space.</p><div className="enquiry-choice"><Enquire className="button gold" message="Hi Ustay, I’m interested in a nightly deluxe room. Please share availability and details.">Let’s talk on WhatsApp</Enquire></div></div><div className="contact-details" data-reveal><a href="tel:+919247539880"><Phone size={19}/><div><span>GIVE US A CALL</span><strong>+91 92475 39880</strong></div><ArrowUpRight size={20}/></a><a href="mailto:ustay.eefind@gmail.com"><Mail size={19}/><div><span>DROP US A NOTE</span><strong>ustay.eefind@gmail.com</strong></div><ArrowUpRight size={20}/></a><a href={MAP} target="_blank" rel="noopener noreferrer"><MapPin size={19}/><div><span>COME SAY HELLO</span><strong>Madhapur, Hyderabad</strong></div><ArrowUpRight size={20}/></a></div></div><footer><a href="#home" className="footer-brand"><img className="brand-logo" src="/assets/ustay-logo-dark.svg" alt="Ustay"/></a><p>Stay a night. Stay a while. Stay your way.</p><span>© {new Date().getFullYear()} Ustay</span></footer></section>
 </>;
}
