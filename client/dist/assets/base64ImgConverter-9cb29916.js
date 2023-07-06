const t=o=>new Promise((a,r)=>{if(o){const e=new FileReader;e.readAsDataURL(o),e.onload=()=>{const s=e.result;a(s)}}else r("File Not Provided")});export{t as i};
