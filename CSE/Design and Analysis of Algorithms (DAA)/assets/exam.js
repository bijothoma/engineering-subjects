// window.EXAM={title,meta:[..],instructions:[..],sections:[{name,note,qs:[{q,marks,ans}]}]}
(function(){const E=window.EXAM,root=document.getElementById('app');let n=0;
if(E.instructions){const b=document.createElement('div');b.className='box';b.innerHTML='<b>Instructions</b><ul>'+E.instructions.map(x=>`<li>${x}</li>`).join('')+'</ul>';root.appendChild(b)}
const all=document.createElement('button');all.className='show';all.textContent='Show / hide all answers';all.onclick=()=>{const a=[...document.querySelectorAll('.ans')],o=a.some(x=>x.style.display!='block');a.forEach(x=>x.style.display=o?'block':'none')};root.appendChild(all);
E.sections.forEach(s=>{const h=document.createElement('div');h.className='sec';h.textContent=s.name;root.appendChild(h);
if(s.note){const p=document.createElement('div');p.className='sub';p.textContent=s.note;root.appendChild(p)}
s.qs.forEach(q=>{n++;const d=document.createElement('div');d.className='q';
d.innerHTML=`<span class="marks">[${q.marks} marks]</span><div class="num">Q${n}${q.co?' · '+q.co:''}</div><div>${q.q}</div>`;
const a=document.createElement('div');a.className='why ans';a.style.display='none';a.innerHTML='<b>Answer</b><br>'+q.ans;
const b=document.createElement('button');b.className='show';b.textContent='Show answer';b.onclick=()=>{const v=a.style.display=='block';a.style.display=v?'none':'block';b.textContent=v?'Show answer':'Hide answer'};
d.append(b,a);root.appendChild(d)})})})();
