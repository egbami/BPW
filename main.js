/* === EMAIL : construit en JS pour éviter l'obfuscation Cloudflare === */
(function(){
  const u='bankolewilli',d='gmail.com';
  const a=document.getElementById('em-a');
  const t=document.getElementById('em-t');
  if(a) a.href='mailto:'+u+'@'+d;
  if(t) t.textContent=u+'@'+d;
})();

(function waitLibs(){
  if(typeof gsap==='undefined'||typeof THREE==='undefined'||typeof ScrollTrigger==='undefined')
    return setTimeout(waitLibs,30);
  init();
})();

function init(){

const LANG={
  en:{
    nh:'Home',na:'About',nc:'Contact',
    htag:'Backend Python Developer · Bénin',
    hsub:'Building fast, purposeful APIs and backend systems that actually work.',
    hcta:'See work',
    plbl:'Selected Work',ptit:'Projects',
    p1:'Automated intelligence aggregator — weather, crypto & breaking news piped to your inbox every 4 hours. Zero manual effort.',
    p2:'Full-stack Flask weather app. Any city worldwide, weekly forecasts, ETL pipeline and SQLite persistence.',
    p3:'High-performance async REST API. Pydantic V2, SQLAlchemy, Alembic migrations, full Pytest coverage.',
    p4:'NLP book analysis engine — sentiment scoring, statistical reports and insight extraction from entire libraries.',
    p5:'Enterprise attendance system replacing manual check-ins. Deployed and actively running in production.',
    plive:'● Live',
    qtext:'"Believing is a choice you make yourself — writing good code is too."',
    sklbl:'Expertise',sktit:'Stack',
    li:'Intermediate',la:'Advanced',ll:'Learning',ln:'Notions',
    abint:'Junior Python backend developer with a sharp sense of performance and architecture. I build APIs that are fast, readable and production-ready — with the conviction that good code, like any decision that matters, is always deliberate.',
    abav:'Open to opportunities',abtg:'Targeting startups worldwide',
    stlbl:'Journey',sttit:'Timeline',
    edu1:'Adjarra, Bénin — A language degree that taught me to structure thought and explain complexity simply. That instinct travels well into code reviews.',
    edu2:'Cotonou, Bénin — Networks, system architecture, software engineering fundamentals. The place where theory finally met the terminal.',
    st1t:'Self-taught Pythonist',
    st1d:'Real projects, real constraints. Qautomate, WeatherApp, enterprise attendance systems. Learning by shipping, every single time.',
    st2t:"What's Next",
    st2d:"Laravel deepening, open-source contributions, and proving what's buildable from West Africa.",
    inlbl:'Beyond Code',intit:'The Human',
    i1t:'Manga',i1d:'Stories that refuse limits. Attack on Titan reminded me that belief — in your craft, in your code, in yourself — is always a conscious choice.',
    i2t:'Gaming',i2d:'Games are feedback systems in disguise. The best ones understand progressive challenge and loop design better than most enterprise software does.',
    i3t:'Astronomy',i3d:'The cosmos as the ultimate distributed system — billions of parallel processes, governed by elegant and immutable universal laws.',
    i4t:'Mythology',i4d:"Every mythology is a civilization's attempt to write a README for existence. Ancient documentation of the unknown.",
    ph1:'Believing is a choice you make yourself.',ph2:'Writing good code is too.',phinsp:'inspired by Levi Ackerman',
    nblbl:'By the Numbers',nbtit:'Impact',nb1:'Projects Shipped',nb2:'In Production',nb3:'Lines of Curiosity',
    ctlbl:'Get in touch',ct1:"Let's",ct2:'work',ct3:'together.',
    ctd:"Looking for a backend developer who ships fast, tests thoroughly and communicates clearly. If that's your startup — let's talk.",
    emlbl:'Email',soclbl:'Networks',
    loclbl:'Based in',locsub:'Bénin, West Africa · GMT+1'
  },
  fr:{
    nh:'Accueil',na:'À propos',nc:'Contact',
    htag:'Développeur Python Backend · Bénin',
    hsub:"Des APIs rapides et des systèmes backend qui font exactement ce qu'ils promettent.",
    hcta:'Voir les projets',
    plbl:'Projets récents',ptit:'Réalisations',
    p1:'Un script qui collecte météo, cryptos et actualités via des APIs, puis envoie tout par e-mail toutes les 4 heures. Entièrement automatisé.',
    p2:'Application météo complète en Flask. Entrez une ville, obtenez les prévisions de la semaine. Un pipeline ETL stocke tout en SQLite.',
    p3:'API REST asynchrone haute performance construite avec Pydantic V2, SQLAlchemy, Alembic et une suite de tests Pytest complète.',
    p4:'Speakta analyse une bibliothèque de livres, en extrait le sentiment, les tendances et génère des visualisations claires.',
    p5:'Système de pointage déployé en entreprise pour remplacer le suivi manuel des présences. En production depuis son lancement.',
    plive:'● En production',
    qtext:'"Croire, c\'est un choix que l\'on fait soi-même — écrire du bon code aussi."',
    sklbl:'Technologies',sktit:'Stack',
    li:'Intermédiaire',la:'Maîtrisé',ll:"En cours d'apprentissage",ln:'Notions de base',
    abint:"Développeur Python backend junior, mais junior ne rime pas avec approximatif. Je construis des APIs rapides, bien testées et faciles à maintenir — parce que le bon code, comme toute décision importante, est toujours un acte délibéré.",
    abav:'Disponible pour de nouvelles opportunités',abtg:"À la recherche d'un poste en startup",
    stlbl:'Parcours',sttit:'Formation',
    edu1:"Adjarra, Bénin — Une licence en anglais qui m'a appris à structurer ma pensée et à expliquer les choses complexes avec clarté. Un réflexe précieux dans n'importe quelle revue de code.",
    edu2:"Cotonou, Bénin — Réseaux, architecture des systèmes, génie logiciel. L'endroit où la théorie a enfin rencontré le terminal.",
    st1t:'Autodidacte Python',
    st1d:"De vrais projets, de vraies contraintes. Qautomate, WeatherApp, gestion de présences en entreprise. J'apprends en livrant, à chaque fois.",
    st2t:'La suite',
    st2d:"Approfondissement de Laravel, contributions open-source, et la conviction que l'on peut construire des choses solides depuis l'Afrique de l'Ouest.",
    inlbl:'Hors du code',intit:"L'humain",
    i1t:'Manga',i1d:"Des récits qui refusent les limites. L'Attaque des Titans m'a rappelé que croire — en son travail, en son code, en soi-même — est toujours un choix conscient.",
    i2t:'Jeux vidéo',i2d:"Les jeux sont des systèmes de feedback déguisés. Les meilleurs comprennent la progression et la boucle de jeu mieux que la plupart des logiciels d'entreprise.",
    i3t:'Astronomie',i3d:'Le cosmos comme système distribué ultime — des milliards de processus parallèles, régis par des lois universelles élégantes et immuables.',
    i4t:'Mythologies',i4d:"Chaque mythologie est la tentative d'une civilisation d'écrire un README pour l'existence. La documentation ancienne de l'inconnu.",
    ph1:"Croire, c'est un choix que l'on fait soi-même.",ph2:'Écrire du bon code aussi.',phinsp:"d'après Levi Ackerman",
    nblbl:'En chiffres',nbtit:'Impact',nb1:'Projets livrés',nb2:'En production',nb3:'Lignes de curiosité',
    ctlbl:'Travaillons ensemble',ct1:'Construisons',ct2:'quelque chose',ct3:'ensemble.',
    ctd:"Vous cherchez un développeur backend qui livre rapidement, teste sérieusement et s'exprime avec clarté ? Si c'est votre startup — parlons.",
    emlbl:'E-mail',soclbl:'Réseaux',
    loclbl:'Basé à',locsub:"Bénin, Afrique de l'Ouest · GMT+1"
  },
  ja:{
    nh:'ホーム',na:'自己紹介',nc:'お問い合わせ',
    htag:'Pythonバックエンドエンジニア · ベナン',
    hsub:'速くて信頼性の高いAPIとバックエンドシステムを丁寧に構築します。',
    hcta:'実績を見る',
    plbl:'主なプロジェクト',ptit:'実績',
    p1:'天気・仮想通貨・ニュースをAPIから自動収集し、4時間ごとにメール送信するシステム。手動作業は一切不要。',
    p2:'Flaskで構築した気象アプリ。世界中の都市の週間予報を取得し、ETLパイプラインでSQLiteに蓄積。',
    p3:'Pydantic V2・SQLAlchemy・Alembicを使った高性能非同期REST API。Pytestで全エンドポイントをカバー。',
    p4:'書籍ライブラリ全体を解析するNLPエンジン。感情分析・統計レポート・わかりやすい可視化を提供。',
    p5:'手動の打刻を置き換える企業向け出退勤システム。リリース後から本番稼働中。',
    plive:'● 稼働中',
    qtext:'「信じることは、自ら行う選択だ — 良いコードを書くことも、同じだ。」',
    sklbl:'スキルセット',sktit:'技術スタック',
    li:'中級',la:'上級',ll:'習得中',ln:'基礎知識あり',
    abint:'パフォーマンスとアーキテクチャに強いこだわりを持つジュニアPythonバックエンドエンジニアです。高速で読みやすく、本番環境に耐えるAPIを構築します。良いコードは、すべての重要な決断と同様に、意図的な選択から生まれると信じています。',
    abav:'新しい機会を歓迎します',abtg:'スタートアップ企業を中心に活動の場を求めています',
    stlbl:'これまでの歩み',sttit:'学歴・経歴',
    edu1:'ベナン州アジャラ — 英語学の学位取得。複雑な概念をシンプルに伝える力を磨いた。その姿勢はコードレビューでも活きている。',
    edu2:'ベナン州コトヌー — ネットワーク・システムアーキテクチャ・ソフトウェアエンジニアリングの基礎を修得。理論がターミナルと出会った場所。',
    st1t:'独学でPythonを習得',
    st1d:'実際のプロジェクト、実際の制約の中で学んだ。Qautomate・WeatherApp・勤怠管理システム。つくることで覚え、届けることで成長する。',
    st2t:'今後の展望',
    st2d:'Laravelを深く学び、オープンソースに貢献しながら、西アフリカから世界に通用するものを作り続ける。',
    inlbl:'コードの外側',intit:'人物像',
    i1t:'マンガ',i1d:'限界を拒否する物語。進撃の巨人は、自分の仕事・コード・そして自分自身を信じることが、常に意識的な選択であることを教えてくれた。',
    i2t:'ゲーム',i2d:'ゲームは偽装されたフィードバックシステムだ。優れたゲームは、多くの業務ソフトよりも進行設計とループ構造を深く理解している。',
    i3t:'天文学',i3d:'宇宙は究極の分散システム。エレガントで不変の普遍法則に支配された、数十億の並列プロセス。',
    i4t:'神話学',i4d:'あらゆる神話は、存在のREADMEを書こうとした文明の試みだ。未知への、古代の記録。',
    ph1:'信じることは、自ら行う選択だ。',ph2:'良いコードを書くことも、同じだ。',phinsp:'リヴァイ・アッカーマンの言葉より',
    nblbl:'数字で見る',nbtit:'実績',nb1:'リリースしたプロジェクト',nb2:'本番稼働中',nb3:'探求のコード行数',
    ctlbl:'お問い合わせ',ct1:'一緒に',ct2:'つくろう',ct3:'何かを。',
    ctd:'素早く納品し、しっかりテストし、明確なコミュニケーションを取るバックエンドエンジニアをお探しなら、ぜひご連絡ください。',
    emlbl:'メールを送る',soclbl:'SNS・連絡先',
    loclbl:'活動拠点',locsub:'ベナン共和国・西アフリカ · GMT+1'
  }
};

let CL='en';
function setLang(l){
  CL=l;
  const T=LANG[l];
  document.querySelectorAll('[data-k]').forEach(el=>{
    const k=el.dataset.k;
    if(T[k]!==undefined) el.textContent=T[k];
  });
  document.documentElement.lang=l==='ja'?'ja':l==='fr'?'fr':'en';
  document.querySelectorAll('.lb').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
}
document.querySelectorAll('.lb').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.l)));

/* === LENIS + GSAP : le smooth scroll et les animations === */
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

class Lenis{
  constructor(){
    this.target=window.scrollY;this.current=window.scrollY;
    this.listeners=[];this._touch=null;
    window.addEventListener('wheel',e=>{
      e.preventDefault();
      this.target=Math.max(0,Math.min(document.body.scrollHeight-window.innerHeight,this.target+e.deltaY));
    },{passive:false});
  }
  raf(){
    this.current+=(this.target-this.current)*0.095;
    if(Math.abs(this.target-this.current)<0.5) this.current=this.target;
    window.scrollTo(0,this.current);
    this.listeners.forEach(fn=>fn({scroll:this.current}));
  }
  on(ev,fn){if(ev==='scroll') this.listeners.push(fn);}
  scrollTo(el,{offset=0}={}){
    if(typeof el==='string') el=document.querySelector(el);
    if(!el) return;
    this.target=Math.max(0,el.getBoundingClientRect().top+window.scrollY+offset);
  }
}

let lenis;
if(isTouch){
  /* Touch : scroll natif, pas de Lenis — zéro résistance */
  lenis={
    on:(ev,fn)=>{
      if(ev==='scroll') window.addEventListener('scroll',()=>fn({scroll:window.scrollY}),{passive:true});
    },
    scrollTo:(el,{offset=0}={})=>{
      if(typeof el==='string') el=document.querySelector(el);
      if(!el) return;
      const y=el.getBoundingClientRect().top+window.scrollY+offset;
      window.scrollTo({top:y,behavior:'smooth'});
    }
  };
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(false);
  window.addEventListener('scroll',ScrollTrigger.update,{passive:true});
} else {
  lenis=new Lenis();
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.add(()=>lenis.raf());
  gsap.ticker.lagSmoothing(0);
  lenis.on('scroll',ScrollTrigger.update);
}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t) lenis.scrollTo(t,{offset:-80});
    document.getElementById('mn').classList.remove('open');
  });
});

/* === THREE.JS : les formes 3D dans le hero === */
(function(){
  if(typeof THREE==='undefined') return;
  const cv=document.getElementById('hcv');
  if(!cv) return;
  const W=window.innerWidth,H=window.innerHeight;
  const scene=new THREE.Scene();
  const cam=new THREE.PerspectiveCamera(55,W/H,.1,100);
  cam.position.set(0,0,5.5);
  const ren=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
  ren.setSize(W,H);
  ren.setPixelRatio(Math.min(devicePixelRatio,2));
  ren.setClearColor(0,0);
  const m1=new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.5,1),
    new THREE.MeshBasicMaterial({color:0x7D39EB,wireframe:true,transparent:true,opacity:.1})
  );
  m1.position.set(2.2,0,0);
  scene.add(m1);
  const m2=new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.3,0),
    new THREE.MeshBasicMaterial({color:0xC6FF33,wireframe:true,transparent:true,opacity:.07})
  );
  m2.position.set(1.6,.4,0);
  scene.add(m2);
  const m3=new THREE.Mesh(
    new THREE.TorusGeometry(3.3,.7,6,44),
    new THREE.MeshBasicMaterial({color:0,wireframe:true,transparent:true,opacity:.035})
  );
  m3.rotation.x=Math.PI/4;
  m3.position.set(2,0,0);
  scene.add(m3);
  let mx=0,my=0,tx=0,ty=0,sy=0;
  document.addEventListener('mousemove',e=>{
    mx=(e.clientX/window.innerWidth-.5);
    my=-(e.clientY/window.innerHeight-.5);
  });
  lenis.on('scroll',({scroll})=>{sy=scroll;});
  (function tick(){
    requestAnimationFrame(tick);
    tx+=(mx*.22-tx)*.05;
    ty+=(my*.18-ty)*.05;
    m1.rotation.x+=.0024;m1.rotation.y+=.004+tx*.007;
    m2.rotation.x-=.003;m2.rotation.y-=.002;
    m3.rotation.z+=.001;m3.rotation.y+=.0018;
    const p=sy*.0014;
    m1.position.y=-p;
    m2.position.y=.4-p*.5;
    ren.render(scene,cam);
  })();
  window.addEventListener('resize',()=>{
    const W2=window.innerWidth,H2=window.innerHeight;
    cam.aspect=W2/H2;
    cam.updateProjectionMatrix();
    ren.setSize(W2,H2);
  });
})();

document.querySelectorAll('.rs').forEach((s,i)=>{
  gsap.from(s,{y:'112%',duration:1.3,ease:'power4.out',delay:.5+i*.16});
});
gsap.from('.ht',{opacity:0,y:14,duration:.8,ease:'power3.out',delay:.25});
gsap.from('.hb',{opacity:0,y:22,duration:.9,ease:'power3.out',delay:1.1});
gsap.from('.sc',{opacity:0,duration:1,delay:2});

gsap.utils.toArray('.sl').forEach(el=>gsap.from(el,{opacity:0,x:-16,duration:.7,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}}));
gsap.utils.toArray('.st').forEach(el=>gsap.from(el,{opacity:0,y:32,duration:1,ease:'power4.out',scrollTrigger:{trigger:el,start:'top 84%'}}));
gsap.from('.bc',{opacity:0,y:55,duration:.85,ease:'power3.out',stagger:.08,scrollTrigger:{trigger:'.bento',start:'top 82%'}});
gsap.to('.qt',{y:-55,ease:'none',scrollTrigger:{trigger:'#quote',start:'top bottom',end:'bottom top',scrub:true}});

gsap.to('.abh',{y:-50,ease:'none',scrollTrigger:{trigger:'#about',start:'top bottom',end:'bottom top',scrub:true}});
gsap.from('.tli',{opacity:0,x:-32,duration:.75,ease:'power3.out',stagger:.1,scrollTrigger:{trigger:'.tl',start:'top 83%'}});
gsap.from('.inc',{opacity:0,y:32,duration:.7,ease:'power3.out',stagger:.1,scrollTrigger:{trigger:'.ing',start:'top 83%'}});
gsap.to('.phq',{y:-50,ease:'none',scrollTrigger:{trigger:'#philosophy',start:'top bottom',end:'bottom top',scrub:true}});
gsap.from('.phj',{opacity:0,y:16,duration:1,ease:'power3.out',scrollTrigger:{trigger:'#philosophy',start:'top 82%'}});
gsap.from('.nbi',{opacity:0,y:28,duration:.8,ease:'power3.out',stagger:.18,scrollTrigger:{trigger:'.nbg',start:'top 82%'}});
gsap.from('.cth',{opacity:0,y:55,duration:1.2,ease:'power4.out',scrollTrigger:{trigger:'.cth',start:'top 84%'}});
gsap.from('.cts',{opacity:0,y:18,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.cts',start:'top 86%'}});
gsap.from('.el',{opacity:0,x:-28,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.el',start:'top 86%'}});
gsap.from('.soca',{opacity:0,x:-18,duration:.6,ease:'power3.out',stagger:.09,scrollTrigger:{trigger:'.socl',start:'top 83%'}});
gsap.from('.locn',{opacity:0,y:35,duration:1,ease:'power4.out',scrollTrigger:{trigger:'.locn',start:'top 83%'}});
gsap.to('.locn',{y:-40,ease:'none',scrollTrigger:{trigger:'#location',start:'top bottom',end:'bottom top',scrub:true}});

document.querySelectorAll('.bc').forEach(c=>{
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect();
    gsap.to(c,{rotateX:-(e.clientY-r.top)/r.height*.5*7+7*.25,rotateY:(e.clientX-r.left)/r.width*7-3.5,transformPerspective:900,duration:.4,ease:'power2.out'});
  });
  c.addEventListener('mouseleave',()=>gsap.to(c,{rotateX:0,rotateY:0,duration:.7,ease:'power3.out'}));
});

(function(){
  if(isTouch) return;
  const dot=document.getElementById('cd'),ring=document.getElementById('cr');
  if(!dot||!ring) return;

  let mx=window.innerWidth/2, my=window.innerHeight/2;
  let rx=mx, ry=my;

  // Dot suit la souris instantanément — pas de RAF, pas de lag
  document.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    dot.style.transform=`translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
  }, {passive:true});

  // Ring suit avec un léger retard via RAF
  (function loop(){
    rx+=(mx-rx)*.12;
    ry+=(my-ry)*.12;
    ring.style.transform=`translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a,button,.bc,.inc,.soca').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('h'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('h'));
  });
})();

document.getElementById('nhb').addEventListener('click',()=>document.getElementById('mn').classList.add('open'));
document.getElementById('mc').addEventListener('click',()=>document.getElementById('mn').classList.remove('open'));

['hero','about','contact'].forEach(id=>{
  const el=document.getElementById(id);
  if(!el) return;
  ScrollTrigger.create({trigger:el,start:'top 60%',end:'bottom 60%',onEnter:()=>setActive(id),onEnterBack:()=>setActive(id)});
});
function setActive(id){
  document.querySelectorAll('.na').forEach(l=>l.classList.toggle('act',l.getAttribute('href')==='#'+id));
}

/* === HORLOGE BÉNIN : UTC+1 sans heure d'été, se met à jour chaque seconde === */
(function(){
  const tEl=document.getElementById('ftt'),dEl=document.getElementById('ftd');
  const DAY={
    en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    fr:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    ja:['日','月','火','水','木','金','土']
  };
  const MON={
    en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    fr:['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'],
    ja:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  };
  function tick(){
    const now=new Date();
    const bj=new Date(now.getTime()+now.getTimezoneOffset()*60000+3600000);
    tEl.textContent=
      String(bj.getHours()).padStart(2,'0')+':'+
      String(bj.getMinutes()).padStart(2,'0')+':'+
      String(bj.getSeconds()).padStart(2,'0');
    const l=CL in DAY?CL:'en';
    dEl.textContent=DAY[l][bj.getDay()]+' '+bj.getDate()+' '+MON[l][bj.getMonth()]+' '+bj.getFullYear();
  }
  tick();
  setInterval(tick,1000);
})();

}