"use strict";(self.webpackChunkcaligrafia=self.webpackChunkcaligrafia||[]).push([[655],{164:(e,a,i)=>{var l=i(669),r=i.n(l);r().when(r().ready).then((function(){r()("main").append('<h1 class="page-name is-size-3-mobile is-size-1 has-text-centered mb-6">Sílabas</h1>');r()("main").append('<div class="syllables-container"></div>'),function(e,a,i=[]){if(e<=0)throw new Error("Partition size must be greater than 0");let l=[];for(let r=0;r<a.length;r+=e){let o=a.slice(r,r+e);o.length<e&&(o=o.concat(i.slice(0,e-o.length))),l.push(o)}return l}(15,"ba be bi bla ble bli blo blu bo bra bre bri bro bru bu ca ce cha che chi cho chu ci cla cle cli clo clu co cu da de di do du fa fe fi fo fu ga ge gi go gu ha he hi ho hu ja je ji jo ju ka ke ki ko ku la le li lo lu ma me mi mo mu na ña ne ñe ni ñi no ño nu ñu pa pe pi po pu que qui ra re ri ro rra rre rri rro rru ru sa se si so su ta te ti to tu va ve vi vo vu wa we wi wo wu xa xe xi xo xu ya ye yi yo yu za ze zi zo zu\n".trim().split(" "),["a","e","i","o","u"]).forEach(((e,a)=>{r()(".syllables-container").append(`<div class="row-${a+1}"></div>`);let i=r()(`.syllables-container .row-${a+1}`);e.forEach((e=>{i.append(`<div class="syllable">\n                        <span>${e}</span>\n                    </div>`)}))}))}))},669:e=>{e.exports=jQuery}},e=>{e(e.s=164)}]);