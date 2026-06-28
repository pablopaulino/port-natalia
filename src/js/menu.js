const menuButton=document.querySelector("#btn-menu");
const menu=document.querySelector("#menu-mobile");
const menuClose=document.querySelector(".menu-close");
const overlay=document.querySelector("#overlay-menu");
const mobileLinks=document.querySelectorAll("#menu-mobile a");
const contactForm=document.querySelector("#contact-form");

function setMenu(open){
  menu.classList.toggle("open",open);
  overlay.classList.toggle("open",open);
  document.body.classList.toggle("menu-open",open);
  menu.setAttribute("aria-hidden",String(!open));
  menuButton.setAttribute("aria-expanded",String(open));
  menuButton.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");
}

menuButton.addEventListener("click",()=>setMenu(true));
menuClose.addEventListener("click",()=>setMenu(false));
overlay.addEventListener("click",()=>setMenu(false));
mobileLinks.forEach(link=>link.addEventListener("click",()=>setMenu(false)));
document.addEventListener("keydown",event=>{if(event.key==="Escape")setMenu(false)});

contactForm.addEventListener("submit",event=>{
  event.preventDefault();
  const data=new FormData(contactForm);
  const text=[
    "Oi, Natália! Vim pelo site e gostaria de conversar sobre uma cobertura.",
    "",
    `Meu nome: ${data.get("nome")}`,
    `Evento: ${data.get("evento")}`,
    `Cidade e data: ${data.get("data")||"A definir"}`,
    `Detalhes: ${data.get("mensagem")}`
  ].join("\n");
  window.open(`https://wa.me/5517997639292?text=${encodeURIComponent(text)}`,"_blank","noopener");
});

document.querySelector("#year").textContent=new Date().getFullYear();