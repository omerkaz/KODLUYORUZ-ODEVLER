// Ürün bilgilerini içeren array içindeki nesneler
let menu = [
    {
        id: 1,
        name : "Kedi Döner",
        price : "2 TL",
        description : "Endüstriyel hayvancılığa maruz kalmadan hiçbir katkı maddesi bulunmayan organik döner keyfi.",
        img : "http://inanmasiguc.com/wp-content/uploads/2017/02/kedi-634x300.jpg",
        category : "Fakir Dostu" 

    },
    {
        id: 2,
        name : "Ekmek Döner",
        price : "1.5 TL",
        description : "Proteini boş verin, yalnızca karbonhidrat ihtiyacınız mı var? Bu tam size göre.",
        img : "https://www.habercim19.com/images/haberler/2021/08/ekmek_fiyati_zamlandi_h68303_c7cfb.jpg",
        category : "Fakir Dostu"
    },
    {
        id: 3,
        name : "Dönerse Senindir Dönmezse Zaten Hiç Senin Olmamıştır",
        price : "1 TL",
        description : "Sevgilinizden ayrıldınız ve moraliniz mi bozuk? Çalışanlarımızdan en arabesk olanları hizmetinizde.",
        img : "https://www.magazinkolik.com/d/other/kibariye-doner-1.jpg",
        category : "Fakir Dostu"
    },
    {
        id: 4,
        name : "Mevlana Döner",
        price : "5 TL",
        description : "Biraz da maneviyat.(İnançlar üzerinden insanları sömürmek kolay olduğu için fiyatı yüksek tuttuk.",
        img : "https://www.sultancavesuites.com/uploads/2020/01/whirling_op.jpg",
        category : "Fakir Dostu"
    },

    {
        id: 5,
        name : "Ejder Meyveli Smoothie",
        price : "Alabildiğine Vergi",
        description : "Immhh, ekmek yoksa Ejder Meyveli Smoothie içebilirsiniz.",
        img : "https://i.lezzet.com.tr/images-xxlarge-recipe/ejder-meyveli-smoothie-03fd84a7-051f-4f43-a2e6-1288ac35cb7c.jpg",
        category : "Fakir Düşmanı"
    },
    {
        id: 6,
        name : "Yolsuzluk",
        price : "Karakteriniz",
        description : "Eş, dost, akrabalarla birlikte güzel zaman geçirmek ister misiniz?",
        img : "https://www.independentturkish.com/sites/default/files/styles/1368x911/public/article/main_image/2022/02/14/813316-1050912604.jpg?itok=xL5xB2LO",
        category : "Fakir Düşmanı"
    },
    {
        id: 7,
        name : "Adam Kayırma",
        price : "Sudan Ucuz",
        description : "THY Yönetim Kurulunda teyzenizin oğluna pozisyon açarak güvendiğiniz insanlarla çalışabilirsiniz.",
        img : "http://c12.incisozluk.com.tr/res/incisozluk//11508/0/3343920_oe0ad.jpg",
        category : "Fakir Düşmanı"
    },
    {
        id: 8,
        name : "Üstünden Geçmediğin Köprü",
        price : "Ücreti Her Zaman Tahsil Edilir.",
        description : "Orda bir köprü vardır uzakta, gitmesek de geçmesek de o köprü bizim köprümüzdür.",
        img : "https://pbs.twimg.com/media/Ep2cZ-7XUAcPjeR?format=jpg&name=medium",
        category : "Fakir Düşmanı"
    },
]

// Domları oluşturalım
let mainArticle = document.querySelector(`.row`)
let fdostuBtn = document.querySelector(`#fDostuBtn`)
let fdusmaniBtn = document.querySelector(`#fDusmaniBtn`)
let homeBtn = document.querySelector(`#homeBtn`)

// Sayfa açıldığın çalışmasını istediğimiz fonksiyon
home()

// Menüdeki ürünlerin kartları
function card(item) {
    let cardContext = `
    <div class="col-md-4 col-12 ${offSet(item)} my-5">
        <div class="card" style="width: 18rem;">
            <img src=${item.img} class="card-img-top" alt="...">
            <div class="card-body row justify-content-center">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-dark">${item.price}</a>
        </div>
        </div>
    </div>
  `;

  return cardContext;
}

// Sayfa düzeni için gerekli offset'i sağlayan fonksiyon
function offSet(item) {
    if ( item.id % 2 == 0){
        return `offset-md-1`
    } else if ( item.id % 2 == 1) {
        return `offset-md-2`
    }
}

// Tüm kartları menü arrayinden bilgi alınarak oluşturan fonksiyon
function home() {
    homeBtn.classList.add(`active`)

    let allCards = "";
    menu.map((x) => {
        allCards += card(x);
    });
    mainArticle.innerHTML = allCards
}

// Fakir Dostu kategorisine göre bilgi alan ve oluşturan fonksiyon
function fdostu() {
    fdostuBtn.classList.add(`active`)
    homeBtn.classList.remove(`active`)
    fdusmaniBtn.classList.remove(`active`)

    let allCards = "";
    menu.map((x) => {
        if (x.category === "Fakir Dostu") {
        allCards += card(x);
        }
    });
    mainArticle.innerHTML = allCards
}

// Fakir Düşmanı kategorisine göre bilgi alan ve oluşturan fonksiyon
function fdusmani() {
    fdusmaniBtn.classList.add(`active`)
    homeBtn.classList.remove(`active`)
    fdostuBtn.classList.remove(`active`)

    let allCards = "";
    menu.map((x) => {
        if (x.category === "Fakir Düşmanı") {
        allCards += card(x);
        }
    });
    mainArticle.innerHTML = allCards
}
