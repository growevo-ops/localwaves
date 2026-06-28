// ---- i18n (EN + VI) ----
const I18N = {"en": {"tagline": "Surf • Sun • Sand · Da Nang", "hero_title": "Explore Da Nang your way", "hero_sub": "Eco e-motorbike rentals & surf lessons. Green rides, happy tides 🌊", "hero_bikes": "🛵 Rent an e-bike", "hero_surf": "🏄 Surf lessons", "tab_bikes": "E-bike rental", "tab_surf": "Surf & tours", "bikes_h": "VinFast electric motorbike", "bikes_p": "Quiet, eco-friendly and easy to ride. No gas, no noise — just go.", "f_speed": "50 km/h top speed", "f_lic": "No driver license needed", "f_range": "Up to 150 km per charge", "f_helmet": "Helmet & charger included", "price_h": "Pricing", "price_h2": "Pricing", "b1d": "1–3 days", "b2d": "4–10 days", "b3d": "10+ days", "b4d": "1 month", "best": "Best value", "book_bike": "Book an e-bike on WhatsApp", "surf_h": "Surf lessons & private tours", "surf_p": "Learn to ride real waves with a local coach. Beginners welcome.", "inc_h": "Every lesson includes:", "inc1": "🏄 Professional surfing coach", "inc2": "🛹 Surfboard", "inc3": "💧 Water bottle", "inc4": "👙 Swimsuit (if needed)", "inc5": "📸 Free photos & video", "s_adult": "Adult · 1–1.5h", "s_kid": "Kid · under 1.2m", "s_course": "Special price", "course_tag": "8-lesson course", "s_group": "Groups 3–6", "s_group_n": "Group discount", "ttk": "Things to know", "ttk1": "📍 Meet in front of Holiday Beach Hotel, 300 Vo Nguyen Giap St.", "ttk2": "🌊 Exact spot depends on waves & weather.", "ttk3": "🕒 Flexible hours — we fit your schedule.", "ttk4": "🧴 Bring a towel and sunscreen.", "book_surf": "Book a surf lesson on WhatsApp", "contact_h": "Get in touch", "c_call": "Call", "c_map": "Directions", "install": "⬇️ Install app", "usd_note": "USD prices are approximate"}, "vi": {"tagline": "Surf • Sun • Sand · Đà Nẵng", "hero_title": "Khám phá Đà Nẵng theo cách của bạn", "hero_sub": "Cho thuê xe máy điện & học lướt sóng. Xanh sạch, vui hết mình 🌊", "hero_bikes": "🛵 Thuê xe điện", "hero_surf": "🏄 Học lướt sóng", "tab_bikes": "Thuê xe điện", "tab_surf": "Lướt sóng & tour", "bikes_h": "Xe máy điện VinFast", "bikes_p": "Êm ái, thân thiện môi trường và dễ lái. Không xăng, không ồn — cứ thế đi thôi.", "f_speed": "Tốc độ tối đa 50 km/h", "f_lic": "Không cần bằng lái", "f_range": "Đi tới 150 km mỗi lần sạc", "f_helmet": "Kèm mũ bảo hiểm & sạc", "price_h": "Bảng giá", "price_h2": "Bảng giá", "b1d": "1–3 ngày", "b2d": "4–10 ngày", "b3d": "10+ ngày", "b4d": "1 tháng", "best": "Giá tốt nhất", "book_bike": "Đặt xe điện qua WhatsApp", "surf_h": "Học lướt sóng & tour riêng", "surf_p": "Học lướt sóng thật cùng HLV địa phương. Người mới rất được chào đón.", "inc_h": "Mỗi buổi học bao gồm:", "inc1": "🏄 HLV lướt sóng chuyên nghiệp", "inc2": "🛹 Ván lướt sóng", "inc3": "💧 Nước uống", "inc4": "👙 Đồ bơi (nếu cần)", "inc5": "📸 Chụp ảnh & quay phim miễn phí", "s_adult": "Người lớn · 1–1.5h", "s_kid": "Trẻ em · dưới 1.2m", "s_course": "Giá đặc biệt", "course_tag": "Khóa 8 buổi", "s_group": "Nhóm 3–6", "s_group_n": "Giảm giá nhóm", "ttk": "Cần biết", "ttk1": "📍 Gặp trước khách sạn Holiday Beach, 300 Võ Nguyên Giáp.", "ttk2": "🌊 Địa điểm tùy thuộc sóng & thời tiết.", "ttk3": "🕒 Giờ linh hoạt — theo lịch của bạn.", "ttk4": "🧴 Mang theo khăn và kem chống nắng.", "book_surf": "Đặt buổi học lướt sóng qua WhatsApp", "contact_h": "Liên hệ", "c_call": "Gọi", "c_map": "Chỉ đường", "install": "⬇️ Cài đặt ứng dụng", "usd_note": "Giá USD chỉ mang tính tham khảo"}};

const WA = {"bike": {"en": "Hello Local Waves! 🛵 I'd like to RENT AN E-BIKE. Please share availability and how to pick it up. ", "vi": "Xin chào Local Waves! 🛵 Mình muốn THUÊ XE MÁY ĐIỆN. Cho mình hỏi xe còn trống và cách nhận xe nhé. "}, "surf": {"en": "Hello Local Waves! 🏄 I'd like to BOOK A SURF LESSON. Please share available times and how to join. ", "vi": "Xin chào Local Waves! 🏄 Mình muốn ĐẶT BUỔI HỌC LƯỚT SÓNG. Cho mình hỏi lịch trống và cách tham gia nhé. "}};

// Browser auto-detect (vi -> Vietnamese, else English). Manual choice wins and persists.
const SAVED = localStorage.getItem('lw_lang');
let lang = SAVED || (navigator.language && navigator.language.toLowerCase().indexOf('vi')===0 ? 'vi' : 'en');

function applyLang(l){
  lang=l; localStorage.setItem('lw_lang',l);
  document.documentElement.lang=l;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n'); if(I18N[l][k]) el.textContent=I18N[l][k];
  });
  document.querySelectorAll('.lang-btn').forEach(function(b){ b.classList.toggle('active', b.dataset.lang===l); });
}

document.querySelectorAll('.lang-btn').forEach(function(b){ b.addEventListener('click', function(){ applyLang(b.dataset.lang); }); });

var bikes=document.getElementById('bikes'), surf=document.getElementById('surf');
function show(target){
  bikes.classList.toggle('hidden', target!=='bikes');
  surf.classList.toggle('hidden', target!=='surf');
  document.querySelectorAll('.tab').forEach(function(t){ t.classList.toggle('active', t.dataset.target===target); });
}
document.querySelectorAll('.tab').forEach(function(t){ t.addEventListener('click', function(){ show(t.dataset.target); }); });
document.querySelectorAll('[data-go]').forEach(function(btn){
  btn.addEventListener('click', function(){ show(btn.dataset.go); window.scrollTo({top:0,behavior:'smooth'}); });
});

document.querySelectorAll('[data-wa]').forEach(function(btn){
  btn.addEventListener('click', function(){
    var t=btn.dataset.wa;
    var url="https://wa.me/84947746585?text="+encodeURIComponent(WA[t][lang]);
    window.open(url,'_blank');
  });
});

var deferred;
var installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', function(e){ e.preventDefault(); deferred=e; installBtn.classList.remove('hidden'); });
installBtn.addEventListener('click', function(){ if(!deferred)return; deferred.prompt(); deferred=null; installBtn.classList.add('hidden'); });

try {
  if('serviceWorker' in navigator && location.protocol.indexOf('http')===0){
    navigator.serviceWorker.register('sw.js').catch(function(){});
  }
} catch(e){}

applyLang(lang);
