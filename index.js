import{a as A,S as R,i as s}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const q="53364959-970251902b7523d6caf21016a",B="https://pixabay.com/api/",m=15;async function h(e,o){return(await A.get(B,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:o}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader-container"),f=document.querySelector(".load-more-btn"),M=new R(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:["←","→"],animationSpeed:500,loop:!1});function L(e){let o="";for(const i of e){const{webformatURL:c,largeImageURL:t,tags:r,likes:u,views:v,comments:F,downloads:P}=i;o+=`<li class="gallery-item">
        <a class="gallery-link" href=" ${t}">
          <img
            class="gallery-image"
            src="${c}"
            alt="${r}"
            loading="lazy"
          />
        </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span>Likes</span>
          ${u}
        </li>
        <li class="gallery-info-item">
          <span>Views</span>
          ${v}
        </li>
        <li class="gallery-info-item">
          <span>Comments</span>
          ${F}
        </li>
        <li class="gallery-info-item">
          <span>Downloads</span>
          ${P}
        </li>
      </ul>
    </li>`}p.insertAdjacentHTML("beforeEnd",o),M.refresh()}function C(){p.innerHTML=""}function w(){y.classList.remove("is-hidden")}function a(){y.classList.add("is-hidden")}function S(){f.classList.remove("is-hidden")}function n(){f.classList.add("is-hidden")}const b=document.querySelector(".form"),E=document.querySelector('[name = "search-text"]');let d="",l=1,g=0;b.addEventListener("submit",x);f.addEventListener("click",$);async function x(e){e.preventDefault();const o=E.value.trim();if(!o){s.warning({title:"Warning!",message:"Please enter a search request!",position:"topRight"});return}d=o,l=1,g=0,C(),n(),w();try{const i=await h(d,l);if(!i.hits||i.hits.length===0){a(),n(),s.info({title:"Attention!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g=i.totalHits,L(i.hits),l*m<g?S():(n(),s.info({title:"Attention!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),a()}catch{a(),n(),s.error({message:"Something went wrong! Please try again later!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconText:"",iconUrl:"./img/error-icon.svg",iconColor:"#FAFAFB"})}b.reset()}async function $(){l+=1,n(),w();try{const e=await h(d,l);if(!e.hits||e.hits.length===0){a(),s.info({title:"Attention!",message:"No more images!",position:"topRight"});return}L(e.hits),O(),l*m<g?S():(n(),s.info({title:"Attention!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),a()}catch(e){a(),n(),console.log("errorSubmit",e),console.log("response",e==null?void 0:e.response),s.error({message:"Something went wrong! Please try again later!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconText:"",iconUrl:"./img/error-icon.svg",iconColor:"#FAFAFB"})}}function O(){const e=document.querySelector(".gallery-item");if(!e)return;const o=e.getBoundingClientRect().height;window.scrollBy({top:o*5,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
