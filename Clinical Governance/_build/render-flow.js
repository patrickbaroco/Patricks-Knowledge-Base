// Run from Clinical Governance/Packet/ (the HTML sources moved there 2026-11-16).
// Renders review-flow.html (one slide, 1600x900) to review-flow.png (2x) and review-flow.pdf with fonts embedded. Built 2026-10-05; run where Playwright and @fontsource are installed, as export-pdfs.js.
const fs=require('fs');
const {chromium}=require('/home/claude/.npm-global/lib/node_modules/playwright');
const F='/tmp/fonttest/node_modules/@fontsource/';
const face=(fam,file,w)=>`@font-face{font-family:"${fam}";font-style:normal;font-weight:${w};font-display:block;src:url(data:font/woff2;base64,${fs.readFileSync(F+file).toString('base64')}) format("woff2");}`;
const fonts=[face('Spectral','spectral/files/spectral-latin-600-normal.woff2',600),face('Spectral','spectral/files/spectral-latin-400-normal.woff2',400),
 face('Public Sans','public-sans/files/public-sans-latin-400-normal.woff2',400),face('Public Sans','public-sans/files/public-sans-latin-500-normal.woff2',500),face('Public Sans','public-sans/files/public-sans-latin-600-normal.woff2',600),
 face('IBM Plex Mono','ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2',400),face('IBM Plex Mono','ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2',500)].join('\n');
(async()=>{
 let h=fs.readFileSync('review-flow.html','utf8');
 h=h.replace(/<link rel="preconnect"[^>]*>\n?/g,'').replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>\n?/g,'');
 h=h.replace('</head>',`<style>${fonts}</style>\n</head>`);
 const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1600,height:900},deviceScaleFactor:2});
 await pg.setContent(h,{waitUntil:'load'}); await pg.evaluate(()=>document.fonts.ready);
 console.log(await pg.evaluate(()=>['600 16px Spectral','16px "Public Sans"','16px "IBM Plex Mono"'].map(f=>document.fonts.check(f))));
 // overflow check: any text extending past its box? report text bboxes beyond 1590
 const wide=await pg.evaluate(()=>[...document.querySelectorAll('text')].map(t=>{const r=t.getBBox();return [t.textContent,Math.round(r.x+r.width)]}).filter(a=>a[1]>1585));
 console.log('wide',wide);
 await pg.screenshot({path:'review-flow.png'});
 await pg.pdf({path:'review-flow.pdf',width:'1600px',height:'900px',printBackground:true,margin:{top:0,bottom:0,left:0,right:0},pageRanges:'1'});
 await b.close();
})();
