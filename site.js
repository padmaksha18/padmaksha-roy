const toolbar=document.querySelector('[data-filters]');
if(toolbar){
 const buttons=[...toolbar.querySelectorAll('button')];
 const papers=[...document.querySelectorAll('[data-paper]')];
 const status=document.querySelector('[data-filter-status]');
 toolbar.hidden=false;
 toolbar.addEventListener('click',event=>{
  const button=event.target.closest('button[data-filter]');
  if(!button)return;
  const selected=button.dataset.filter;
  for(const b of buttons)b.setAttribute('aria-pressed',String(b===button));
  let visible=0;
  for(const paper of papers){
   const show=selected==='all'||paper.dataset.topics.split('|').includes(selected);
   paper.hidden=!show;if(show)visible++;
  }
  status.textContent=selected==='all'?'Showing all publications.':String(visible)+' publications in '+button.textContent.trim().toLowerCase()+'.';
 });
}
