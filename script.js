
--- FILE: script.js ---
// 共通スクリプト (save as script.js)
// フェードイン
const sections = document.querySelectorAll('.section');
const io = new IntersectionObserver(entries => { entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.18 });
sections.forEach(s => io.observe(s));


// カルーセル処理
const track = document.querySelector('.carousel-track');
if(track){
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let idx = 0;
function go(i){ idx = (i + items.length) % items.length; track.style.transform = `translateX(-${idx*100}%)`; }
if(prev && next){ prev.addEventListener('click', () => go(idx-1)); next.addEventListener('click', () => go(idx+1)); }
// 自動スライド
setInterval(() => go(idx+1), 5000);
}


// モーダル
document.querySelectorAll('.modal-open').forEach(btn => btn.addEventListener('click', e => {
const id = btn.dataset.modal; const m = document.getElementById(id); if(m) m.style.display = 'flex';
}));
document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', e => btn.closest('.modal').style.display='none'));
window.addEventListener('click', e => { if(e.target.classList && e.target.classList.contains('modal')) e.target.style.display='none'; });


// フォーム送信（簡易）
const f = document.getElementById('contactForm'); if(f){ f.addEventListener('submit', e => { e.preventDefault(); alert('送信されました（デモ）'); e.target.reset(); }); }




--- END ---