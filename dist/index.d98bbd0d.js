class e{constructor(e){this.name=e.id,this.title=e.title,this.blurb=e.blurb,this.image=e.image.full,this.tags=e.tags}}const t=[];document.querySelector("#button").addEventListener("click",()=>{console.log("Botón pulsado"),document.querySelector("#button").style.visibility="hidden",document.querySelector("#lista").style.visibility="visible",a()});const a=async()=>{console.log("Llamada a startcampeones hecha");try{let i=await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"),l=(await i.json()).data;for(let s in l)if(l.hasOwnProperty(s)){var a;a=new e(l[s]),t.push(a)}await s()}catch(e){console.error("Error al obtener campeones:",e)}},s=()=>{let e=document.getElementById("lista");e.innerHTML="",t.forEach(t=>{let a=t.tags.join(", "),s=`
        <div class="card" onclick="toggleBlurb(this)">
            <img src="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${t.image}" alt="${t.name}">
            <br>
            ${t.name}.<br>
            ${t.title}<br>
            <div class="roles">
                ${a}
            </div>
            <div class="blurb" style="display: none;">
                ${t.blurb}
            </div>
        </div>
    `;e.innerHTML+=s})};
//# sourceMappingURL=index.d98bbd0d.js.map
