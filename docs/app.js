'use strict';
(async function(){
 const endpoint='https://api.github.com/repos/paxsarmata/RTS-SM/releases/latest';
 try{
  const response=await fetch(endpoint,{headers:{Accept:'application/vnd.github+json'}});
  if(!response.ok)throw new Error('no-release');
  const release=await response.json();
  const asset=(release.assets||[]).find(a=>/^SMTech_RTS-SM_v[\d.]+_Windows\.zip$/i.test(a.name));
  const version=String(release.tag_name||'').replace(/^v/,'');
  if(!/^\d+(\.\d+){1,3}$/.test(version))throw new Error('invalid-version');
  document.querySelector('#version').textContent=version;
  document.querySelector('#release-badge').textContent='ВЕРСИЯ '+version;
  if(asset&&String(asset.browser_download_url).startsWith('https://github.com/paxsarmata/RTS-SM/releases/download/'))document.querySelector('#download').href=asset.browser_download_url;
  document.querySelector('#release-status').textContent='Последняя опубликованная версия: '+version+(asset?' · '+Math.round(asset.size/1024/1024)+' МБ':'');
 }catch(error){document.querySelector('#release-status').textContent='Новые версии появятся в GitHub Releases. Если список недоступен, открой репозиторий по ссылке ниже.';}
})();
