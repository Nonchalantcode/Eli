"use strict";(self.webpackChunkcaligrafia=self.webpackChunkcaligrafia||[]).push([[469],{152:()=>{$.when($.ready).then((function(){try{$("main").append('<h1 class="page-name is-size-3-mobile is-size-1 has-text-centered mb-6">Caligrafía</h1>'),document.querySelector(".page-name").contentEditable="false",document.querySelector("main").contentEditable="plaintext-only";let e=$(".radios.font input"),l=$(".radios.color input"),t=[...document.querySelectorAll(".radios.font input")].filter((e=>e.hasAttribute("checked"))).pop().value,o=[...document.querySelectorAll(".radios.color input")].filter((e=>e.hasAttribute("checked"))).pop().value,a=40;document.querySelectorAll(".radios.color input").forEach((e=>{try{let l=e,t=l.nextElementSibling;t.classList.add("color-choice","ml-2"),t.style.display="inline-block",t.style.backgroundColor="#"+l.value,t.style.width="30px",t.style.height="30px",t.style.border="1px solid #000"}catch(e){console.log(e)}})),e.on("change",(function(e){let l=e.target;$(".calligraphy-row .wording").removeClass(`f-${t}`).addClass(`f-${l.value}`),t=l.value})),l.on("change",(function(e){document.querySelectorAll(".calligraphy-row .wording").forEach((l=>{l.style.color="#"+e.target.value}))}));for(let e=0;e<=5;e++)$("main").append(`\n                    <div class="calligraphy-row">\n                        <p style="color: #${o}; font-size: ${a}px;" class="cursive fs-40 faded wording f-${t}">Elizabeth Victoria</p>\n                    </div>\n                `);let n=$("#controls");n.on("click",(function(){n.toggleClass("is-active","has-background-primary")})),$("#font-size").on("change",(function(e){let l=e.target.value;document.querySelectorAll(".calligraphy-row .wording").forEach((e=>{e.style.fontSize=l+"px",a=l}))})),$("#valignment").on("change",(function(e){let l=e.target.value;document.querySelectorAll(".calligraphy-row .wording").forEach((e=>{e.style.top=l+"px"}))})),$("#print").on("click",(function(){window.print()}))}catch(e){console.log({err:e})}}))}},e=>{e(e.s=152)}]);