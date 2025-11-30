import{a as A,S as q,i}from"./assets/vendor-DvfmeZXB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const B="53364959-970251902b7523d6caf21016a",M="https://pixabay.com/api/",p=15;async function h(t,o){return(await A.get(M,{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:o}})).data}const y=document.querySelector(".gallery"),L=document.querySelector(".loader-container"),u=document.querySelector(".load-more-btn"),R=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:["←","→"],animationSpeed:500,loop:!1});function w(t){let o="";for(const s of t){const{webformatURL:a,largeImageURL:e,tags:r,likes:l,views:v,comments:F,downloads:P}=s;o+=`<li class="gallery-item">
        <a class="gallery-link" href=" ${e}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${r}"
            loading="lazy"
          />
        </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span>Likes</span>
          ${l}
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
    </li>`}y.insertAdjacentHTML("beforeEnd",o),R.refresh()}function C(){y.innerHTML=""}function S(){L.classList.remove("is-hidden")}function g(){L.classList.add("is-hidden")}function d(){u.classList.remove("is-hidden")}function m(){u.classList.add("is-hidden")}const b=document.querySelector(".form"),E=document.querySelector('[name = "search-text"]');let f="",n=1,c=0;b.addEventListener("submit",x);u&&u.addEventListener("click",$);async function x(t){t.preventDefault();const o=E.value.trim();if(!o){i.warning({title:"Warning!",message:"Please enter a search request!",position:"topRight"});return}f=o,n=1,c=0,C(),d(),S();try{const s=await h(f,n);if(g(),!s.hits||s.hits.length===0){i.info({title:"Attention!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c=s.totalHits,w(s.hits),n*p<c?d():(m(),i.info({title:"Attention!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{g(),i.error({message:"Something went wrong! Please try again later!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconText:"",iconUrl:"./img/error-icon.svg",iconColor:"#FAFAFB"})}b.reset()}async function $(){n+=1,m(),S();try{const t=await h(f,n);g(),w(t.hits),O(),n*p<c?d():(m(),i.info({title:"Attention!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){g(),console.log("errorSubmit",t),console.log("response",t==null?void 0:t.response),i.error({message:"Something went wrong! Please try again later!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconText:"",iconUrl:"./img/error-icon.svg",iconColor:"#FAFAFB"})}}function O(){const t=document.querySelector(".gallery-item");if(!t)return;const o=t.getBoundingClientRect().height;window.scrollBy({top:o*5,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
