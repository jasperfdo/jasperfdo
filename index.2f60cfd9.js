document.querySelector(".scrollContainer");const e=new LocomotiveScroll({el:document.querySelector(".scrollContainer"),smooth:!0,inertia:.8,getDirection:!0,mobile:{breakpoint:0,smooth:!0,getDirection:!0},tablet:{breakpoint:0,smooth:!0,getDirection:!0}});e.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(".scrollContainer",{scrollTop(o){return arguments.length?e.scrollTo(o,0,0):e.scroll.instance.scroll.y},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight}),pinType:document.querySelector(".scrollContainer").style.transform?"transform":"fixed"}),gsap.timeline({defaults:{duration:1}}).to(".htanim",{opacity:1,y:-50,ease:"Power2.easeInOut",stagger:.2}).to(".herowrk",{opacity:1,y:-20,ease:"Power2.easeInOut"},"-=.5").fromTo(".imgg",{opacity:0,x:150,ease:"Power2.easeInOut"},{opacity:1,x:-74,ease:"Expo.easeOut"},"-=.5").fromTo(".imggg",{opacity:0,x:150,ease:"Power2.easeInOut"},{opacity:1,x:-14,ease:"Expo.easeOut"},"-=.5").fromTo(".header",{opacity:0,y:-20,ease:"Power5"},{opacity:1,y:0,ease:"Power5"},"-=1.4");let o=gsap.timeline({defaults:{}}).fromTo(".worktitle, .char",{y:-50,opacity:0,duration:1},{y:0,opacity:1,ease:"Power1.easeInOut"}).fromTo(".word",{y:-50,opacity:0,duration:1},{y:0,opacity:1,ease:"slow.easeOut",stagger:.05},"-=1").fromTo(".tools",{y:-50,opacity:0,duration:1},{y:0,opacity:1,ease:"slow.easeOut",stagger:.05},"-=1").fromTo(".icons",{y:150,opacity:0,duration:1},{y:0,opacity:1,ease:"slow.easeOut",stagger:.05},"-=.5");ScrollTrigger.create({trigger:".worktitle, .word, .tools, .icons, .madetools",start:"top bottom",end:"+=300",scroller:".scrollContainer",animation:o});let t=gsap.timeline({defaults:{}}).fromTo(".madetools",{y:150,opacity:0,duration:1},{y:0,opacity:1,ease:"slow.easeOut"},"1").to(".proimg",{opacity:1,duration:1});ScrollTrigger.create({trigger:".madetools, .proimg",start:"top bottom",end:"+=300",scroller:".scrollContainer",animation:t});let r=gsap.timeline({defaults:{}}).fromTo("body, header",{backgroundColor:"#861F3E"},{backgroundColor:"#17171F",ease:"Power2.easeInOut"});ScrollTrigger.create({trigger:".workflow",start:"center top",end:"+=300",toggleActions:"restart play reverse",scroller:".scrollContainer",animation:r});let a=gsap.timeline({defaults:{}}).fromTo(".pin-wrap",{y:-180,opacity:0},{y:0,opacity:1,duration:5,ease:"slow.easeInOut"}).to("body, header",{backgroundColor:"#17171F",ease:"Expo.easeInOut"});ScrollTrigger.create({trigger:".pin-wrap",start:"center top",toggleActions:"restart play reverse",end:"+=300",scroller:".scrollContainer",animation:a}),window.addEventListener("load",(function(){document.querySelectorAll(".pin-wrap > *");let o=document.querySelector(".pin-wrap").offsetWidth,t=o-window.innerWidth;gsap.to(".pin-wrap",{scrollTrigger:{scroller:".scrollContainer",scrub:!0,trigger:"#sectionPin",pin:!0,start:"top top",end:o},duration:1,x:-t,ease:"none"}),ScrollTrigger.addEventListener("refresh",(()=>e.update())),ScrollTrigger.refresh()}));
//# sourceMappingURL=index.2f60cfd9.js.map