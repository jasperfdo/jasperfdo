function t(){console.clear();let t={x:0,y:0},e=t,s={x:e.x-t.x,y:e.y-t.y},i=[];class a{constructor(t){this.el=t,this.menuItems=this.el.querySelectorAll(".menu__item"),this.animatableProperties={tx:{previous:0,current:0,amt:.1},ty:{previous:0,current:0,amt:.1},rotation:{previous:0,current:0,amt:.08},skewx:{previous:0,current:0,amt:.08},brightness:{previous:1,current:1,amt:.08},saturation:{previous:0,current:0,amt:.1}},this.menuItemInstances=[],[...this.menuItems].forEach(((t,e)=>this.menuItemInstances.push(new n(t,e,this.animatableProperties)))),gsap.to(this.el,.1,{opacity:1}),this.showMenuItems()}showMenuItems(){gsap.fromTo(this.menuItemInstances.map((t=>t.DOM.innerText)),{rotation:t=>t%2==0?15:-15},{duration:1.2,ease:"Expo.easeOut",transformOrigin:t=>t%2==0?"left bottom":"right bottom",y:0,rotation:0,delay:t=>.15+.06*t})}}class n{constructor(t,e,s){this.DOM={el:t},this.DOM.innerText=this.DOM.el.querySelector(".menu__item-innertext"),this.menuItemIndex=e,this.animatableProps=s,this.imageURL=this.DOM.el.getAttribute("data-img"),this.layout(),this.initEvents()}layout(){this.DOM.card=document.createElement("div"),this.DOM.card.className="image-card",this.DOM.cardInner=document.createElement("div"),this.DOM.cardInner.className="image-card__inner",this.DOM.cardImage=document.createElement("div"),this.DOM.cardImage.className="image-card__img",this.DOM.cardImage.style.backgroundImage=`url(${this.imageURL})`,this.DOM.cardInner.appendChild(this.DOM.cardImage),this.DOM.card.appendChild(this.DOM.cardInner),this.DOM.el.appendChild(this.DOM.card)}initEvents(){this.DOM.el.addEventListener("mouseenter",(()=>{this.showImage(),this.firstRAFCycle=!0,this.renderLoop()})),this.DOM.el.addEventListener("mouseleave",(()=>{this.stopRender(),this.hideImage()}))}calcBounds(){this.bounds={el:this.DOM.el.getBoundingClientRect(),card:this.DOM.card.getBoundingClientRect(),cardImage:this.DOM.cardImage.getBoundingClientRect()}}showImage(){gsap.killTweensOf(this.DOM.cardInner),gsap.killTweensOf(this.DOM.cardImage),gsap.timeline({onStart:()=>{this.DOM.el.style.zIndex=this.DOM.el.children.length}}).to(this.DOM.cardInner,{duration:.8,ease:"elastic.out(1, 0.75)",transformOrigin:"50% "+(s.y<0?"-20%":"120%"),startAt:{rotation:(s.x<0?"+":"-")+"25deg"},rotation:0}).to(this.DOM.cardImage,{duration:.2,ease:"Sine.easeOut",startAt:{opacity:0,scale:.6},opacity:1,scale:1},0)}hideImage(){gsap.killTweensOf(this.DOM.cardInner),gsap.killTweensOf(this.DOM.cardImage),gsap.timeline({onStart:()=>{this.DOM.el.style.zIndex=1}}).to(this.DOM.cardInner,{duration:.8,ease:"elastic.out(1, 0.75)",transformOrigin:"50% "+(s.y<0?"-20%":"120%"),rotation:(s.x<0?"+":"-")+"25deg"}).to(this.DOM.cardImage,{duration:.2,ease:"Sine.easeOut",opacity:0,scale:.6},0)}renderLoop(){this.requestId||(this.requestId=requestAnimationFrame((()=>this.render())))}stopRender(){this.requestId&&(window.cancelAnimationFrame(this.requestId),this.requestId=void 0)}render(){this.requestId=void 0,this.firstRAFCycle&&this.calcBounds(),this.updateAnimatableProps(),s={x:e.x-t.x,y:e.y-t.y},e=t,gsap.set(this.DOM.card,{x:this.animatableProps.tx.previous,y:this.animatableProps.ty.previous,rotation:this.animatableProps.rotation.previous,skewX:this.animatableProps.skewx.previous,filter:`brightness(${this.animatableProps.brightness.previous}) saturate(${this.animatableProps.saturation.previous})`}),this.firstRAFCycle=!1,this.renderLoop()}updateAnimatableProps(){const i=(a=Math.abs(e.x-t.x),r=100,a<=(n=0)?n:a>=r?r:a);var a,n,r,l,c,d;this.animatableProps.tx.current=Math.abs(t.x-this.bounds.el.left)-this.bounds.card.width/2,this.animatableProps.ty.current=Math.abs(t.y-this.bounds.el.top)-this.bounds.card.height/2,this.animatableProps.rotation.current=this.firstRAFCycle?0:o(i,0,100,0,s.x<0?30:-30),this.animatableProps.skewx.current=this.firstRAFCycle?0:o(i,0,100,1,s.x<0?-60:60),this.animatableProps.brightness.current=this.firstRAFCycle?1:o(i,0,100,1,10),this.animatableProps.saturation.current=this.firstRAFCycle?1:o(i,0,100,1,8);for(const t in this.animatableProps)this.animatableProps[t].previous=this.firstRAFCycle?this.animatableProps[t].current:(l=this.animatableProps[t].previous,c=this.animatableProps[t].current,(1-(d=this.animatableProps[t].amt))*l+d*c)}}class r{constructor(t,e){this.el=t,this.duration=e,this.el.style.opacity=0,this.bounds=this.el.getBoundingClientRect()}update(){gsap.to(this.el,{duration:this.duration,opacity:1,x:t.x-this.bounds.width/2,y:t.y-this.bounds.height/2})}}function o(t,e,s,i,a){return(t-e)*(a-i)/(s-e)+i}new class{constructor(){var e;(e=".menu__item",new Promise((t=>{const s=document.createElement("div");s.style.visibility="hidden",document.body.appendChild(s),[...document.querySelectorAll(e)].forEach((t=>{const e=document.createElement("img");e.style.width=0,e.src=t.dataset.img,e.className="preload",s.appendChild(e)})),imagesLoaded(document.querySelectorAll(".preload"),(()=>{gsap.to(".loading__wrapper",{duration:.8,opacity:0,pointerEvents:"none",onComplete:()=>{s.parentNode.removeChild(s),document.body.classList.remove("loading"),t()}})}))}))).then((()=>{Splitting();const e=document.querySelector(".menu");new LocomotiveScroll({el:e,smooth:!0}),new a(e),i.push(new r(document.querySelector(".cursor__small"),0),new r(document.querySelector(".cursor__large"),.4)),window.addEventListener("mousemove",(e=>{t=function(t){let e=0,s=0;t||(t=window.event);t.pageX||t.pageY?(e=t.pageX,s=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+body.scrollLeft+document.documentElement.scrollLeft,s=t.clientY+body.scrollTop+document.documentElement.scrollTop);return{x:e,y:s}}(e),i.forEach((t=>{t.update()}))}))}))}}}barba.init({sync:!0,transitions:[{async leave(t){const e=this.async();var s,i;(s=gsap.timeline()).to("ul.transition li",{duration:.5,scaleY:1,transformOrigin:"bottom left",stagger:.2}),s.to("ul.transition li",{duration:.5,scaleY:0,transformOrigin:"bottom left",stagger:.1,delay:.1}),await(i=1500,i=i||2e3,new Promise((t=>{setTimeout((()=>{t()}),i)}))),e()},async enter(e){t()},async once(e){t()}}]});
//# sourceMappingURL=project.d8623205.js.map
