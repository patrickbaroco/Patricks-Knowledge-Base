// Run from Clinical Governance/Packet/ (the HTML sources moved there 2026-11-16).
// Exports seat-map.html (scale 0.82) and clinician-path.html (How a Review Unfolds, scale 0.80) to PDF with fonts embedded.
// Run where Playwright and @fontsource/{spectral,public-sans,ibm-plex-mono} are installed; paths below are the cloud workspace's.
// Built 2026-09-29; 2026-10-05: optional argv[2] exports one file only, railnote kept with its stage. Check page fill after any content change: a near-empty last page means adjust the scale.
const fs=require('fs'), path=require('path');
const {chromium}=require('/home/claude/.npm-global/lib/node_modules/playwright');
const F='/tmp/fonttest/node_modules/@fontsource/';
const face=(fam,file,w)=>`@font-face{font-family:"${fam}";font-style:normal;font-weight:${w};font-display:block;src:url(data:font/woff2;base64,${fs.readFileSync(F+file).toString('base64')}) format("woff2");}`;
const fonts=[face('Spectral','spectral/files/spectral-latin-400-normal.woff2',400),face('Spectral','spectral/files/spectral-latin-600-normal.woff2',600),
 face('Public Sans','public-sans/files/public-sans-latin-400-normal.woff2',400),face('Public Sans','public-sans/files/public-sans-latin-500-normal.woff2',500),face('Public Sans','public-sans/files/public-sans-latin-600-normal.woff2',600),
 face('IBM Plex Mono','ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2',400),face('IBM Plex Mono','ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2',500)].join('\n');
const trims=`@media print{
h1{font-size:40px!important;margin-bottom:10px!important}
.stamp{margin-top:14px!important}
hr.rule{margin-top:26px!important}
h2{margin-top:26px!important}
h2 + .sub{margin-bottom:16px!important}
.fig{padding:14px 16px!important}
.move,.phase{margin-top:30px!important}
.stage .body,.exits{padding-top:12px!important;padding-bottom:15px!important}
section,figure,.phase,.exits,.facts,.guards,.grid3,.floors,.cols{break-inside:auto!important}
svg,.stage,.fact,.guard,.move,.seatgroup,.seatbox,.cell,.keep,.keeps,.floor,.exit,.boundary,.callout,.cannot,.railnote,.seatrow,.fig,.stamp,.sub,.lede,.head,.job,ol.tasks li,table.open tr{break-inside:avoid!important}
h1,h2,h3,h4,.phase-head,.railnote{break-after:avoid!important}
.blocklabel:has(+ .fig){break-after:avoid!important}
.wrap{padding-top:8px!important;padding-bottom:0!important}
footer{margin-top:22px!important;padding-top:12px!important;break-inside:avoid!important}
}`;
const only=process.argv[2];const docs=[['seat-map.html','Clinical Governance Seat Map',0.82,'seat.pdf'],['clinician-path.html','How a Review Unfolds',0.80,'path.pdf']].filter(d=>!only||d[0]===only);
(async()=>{
 const b=await chromium.launch(); const pg=await b.newPage();
 await pg.emulateMedia({colorScheme:'light'});
 for(const [src,title,scale,out] of docs){
  let h=fs.readFileSync(src,'utf8');
  h=h.replace(/<link rel="preconnect"[^>]*>\n?/g,'').replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>\n?/g,'');
  if(/googleapis/.test(h)) throw new Error('google link left in '+src);
  h=h.replace('</head>',`<style>${fonts}\n${trims}</style>\n</head>`);
  await pg.setContent(h,{waitUntil:'load'}); await pg.evaluate(()=>document.fonts.ready);
  const ok=await pg.evaluate(()=>['Spectral','Public Sans','IBM Plex Mono'].map(f=>document.fonts.check(`16px "${f}"`)));
  console.log(src,'fonts',ok);
  await pg.pdf({path:out,format:'Letter',scale,printBackground:true,margin:{top:'0.4in',bottom:'0.5in',left:'0.35in',right:'0.35in'},displayHeaderFooter:true,headerTemplate:'<div></div>',
   footerTemplate:`<div style="font-size:7.5px;width:100%;margin:0 0.35in;display:flex;justify-content:space-between;color:#5B6E6C;font-family:Helvetica,Arial,sans-serif"><span>${title}</span><span><span class="pageNumber"></span>/<span class="totalPages"></span></span></div>`});
 }
 await b.close();
})();
