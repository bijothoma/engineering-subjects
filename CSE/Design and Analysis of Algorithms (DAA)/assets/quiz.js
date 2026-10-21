// Usage: set window.QUIZ={title,topic,items:[{q,opts:[...],ans:index,why:"html"}]} then include this file.
(function(){const Q=window.QUIZ,root=document.getElementById('app');let done=0,ok=0;
const sc=document.createElement('div');sc.className='score';root.appendChild(sc);
const card=document.createElement('div');card.className='scorecard';document.body.appendChild(card);
function upd(){sc.textContent='Answered '+done+'/'+Q.items.length+(done==Q.items.length?' · '+Math.round(100*ok/done)+'%':'');card.innerHTML='<small>Score</small><b>'+ok+'/'+Q.items.length+'</b>'}
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
sh(Q.items).map(it=>{const o=sh(it.opts.map((t,k)=>[t,k]));return {...it,opts:o.map(x=>x[0]),ans:o.findIndex(x=>x[1]==it.ans)}}).forEach((it,i)=>{const d=document.createElement('div');d.className='q';
d.innerHTML=`<div class="num">Question ${i+1}</div><div>${it.q}</div>`;
const btns=it.opts.map((o,j)=>{const b=document.createElement('button');b.className='opt';b.innerHTML=`<b>${'ABCD'[j]}.</b> ${o}`;d.appendChild(b);return b});
btns.forEach((b,j)=>b.onclick=()=>{btns.forEach(x=>x.disabled=true);btns[it.ans].classList.add('right');
if(j!=it.ans)b.classList.add('wrong');else ok++;done++;
const w=document.createElement('div');w.className='why';w.innerHTML=`<b>${j==it.ans?'Correct.':'Incorrect — answer is '+'ABCD'[it.ans]+'.'}</b> ${it.why}`;d.appendChild(w);upd()});
root.appendChild(d)});upd()})();
