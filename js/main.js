const slider = document.querySelector(".slider");
const list = document.querySelector(".slider__list");
const item = document.querySelector(".slider__item");
const next = document.querySelector(".slider__btn-next");
const old = document.querySelector("slider__btn-old");
const form = document.querySelector("#form")
const tel = document.querySelector("#tel")
const name = document.querySelector("#name")
const ru = document.querySelector("#ru")



form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        body: JSON.stringify({
            phone: tel.value,
            userid:1,
            id:10

        }),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => {
        localStorage.setItem("phone", tel.value);
        localStorage.setItem("tel",tel.value)
    });
});





const button = document.getElementById("nav__btn");
const subbutton = document.getElementById("nav__subbtn");
const modal = document.querySelector(".modal");
button.addEventListener("click" , function(){
    modal.style.display = "block"
    subbutton.style.display = "block"
})
subbutton.addEventListener("click",function(){
    modal.style.display = "none"
    subbutton.style.display = "none"
    
})

window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });










//   ------------------------------------------------------------language------------------------------------

const bizh = document.querySelector("#bizh");
const xizmat = document.querySelector("#xizmat");
const mijoz = document.querySelector("#mijoz");
const vak = document.querySelector("#vak");
const kontakt = document.querySelector("#kontakt");
const yangilik = document.querySelector("#yangilik");
const header__name = document.querySelector("#header__name");
const header__text = document.querySelector("#header__text");
const header__btn = document.querySelector("#header__btn");
const hero1 = document.querySelector("#hero1");
const hero2 = document.querySelector("#hero2");
const hero3 = document.querySelector("#hero3");
const hero4 = document.querySelector("#hero4");
const maint = document.querySelector("#maint");
const maintext = document.querySelector("#maintext");
const pagetittle = document.querySelector("#pagetittle");
const page__text = document.querySelector("#page__text");
const page__sub = document.querySelector("#page__sub");
const pageitem1 = document.querySelector("#pageitem1");
const pageitem2 = document.querySelector("#pageitem2");
const pageitem3 = document.querySelector("#pageitem3");
const pageitem4 = document.querySelector("#pageitem4");
const pagebtn1 = document.querySelector("#pagebtn1");
const pagebtn2 = document.querySelector("#pagebtn2");
const pagebtn3 = document.querySelector("#pagebtn3");
const pagebtn4 = document.querySelector("#pagebtn4");
const sectionname = document.querySelector("#sectionname");
const sectionsub = document.querySelector("#sectionsub");
const sec1 = document.querySelector("#sec1");
const sec2 = document.querySelector("#sec2");
const sectext = document.querySelector("#sectext");
const contentsub1 = document.querySelector("#contentsub1");
const contentt = document.querySelector("#contentt");
const contenttext1 = document.querySelector("#contenttext1");
const contentsub2 = document.querySelector("#contentsub2");
const contenttext2 = document.querySelector("#contenttext2");
const contenttext3 = document.querySelector("#contenttext3");
const contentsub3 = document.querySelector("#contentsub3");
const slidert = document.querySelector("#slidert");
const endt = document.querySelector("#endt");
const endtext = document.querySelector("#endtext");
const end__btn = document.querySelector("#end__btn");
const endsub = document.querySelector("#endsub");
const kontakt1 = document.querySelector("#kontakt1");
const kontakt2 = document.querySelector("#kontakt2");
const kontakt3 = document.querySelector("#kontakt3");
const kontakt4 = document.querySelector("#kontakt4");
const pageback = document.querySelector(".pageback");
const container = document.querySelector(".container")
const body = document.querySelector("body");


function changelanguage(lang){
    location.hash = lang;
    location.reload();
}
let language = {
    RU:{
        
        bizh:"О нас",
        xizmat:"Услуги",
        mijoz:"Клиенты",
        vak:"Вакансии",
        kontakt:"Контакты",
        yangilik:"Новости",
        header__name:"Создайте надежный Call-центр с помощью UniCall",
        header__text:"Один из первых профессиональных аутсорсинговых Call-центров в Узбекистане",
        header__btn:"подробный",
        header__item:"UniCall-Всегда к вашим услугам",
        hero1:"CОТРУДНИКОВ",
        hero2:"ЛЕТ РАБОТЫ",
        hero3:"ТЫСЯЧ ПРОДАЖ В МЕСЯЦ",
        hero4:"ТЫСЯЧ ОБСЛУЖЕННЫХ КЛИЕНТОВ В ДЕНЬ",
        maint:"О НАС",
        maintext:"Основатели компании UniCall имеют огромный опыт в данной сфере с 2010 года. Мы оказываем свои услуги как удаленно, так и под ключ, поможем реализовать колл-центр всем желающим компаниям.Широкие возможности нашего call-центра обеспечиваются уникальным подходом к техническому оснащению и качественной подготовкой сотрудников. Многолетний опыт в обслуживании иностранных компаний дает нам возможность всегда держать самую высокую и качественную работу!",
        pagetittle:"ЧТО ТАКОЕ АУТСОРСИНГ?",
        page__text:"Аутсорсинг - это отказ компании от самостоятельного выполнения ряда некритичных для бизнеса функций или частей бизнес-процессов и передача их стороннему подрядчику, профессионально специализирующемуся на оказании таких услуг.",
        page__sub:"УСЛУГИ АУТСОРСИНГА",
        page__item1:"Организация и поддержка единой входящей линии",
        pageitem2:"Исходящие активности",
        pageitem3:"Функционал back-office на аутсорсе",
        pageitem4:"Технологии",
        pagebtn1:"подробный",
        pagebtn2:"подробный",
        pagebtn3:"подробный",
        pagebtn4:"подробный",
        sectionname:"УСЛУГИ ОРГАНИЗАЦИИ КОЛЛ ЦЕНТРА ПОД КЛЮЧ В ВАШЕМ ОФИСЕ",
        sectionsub:"Поделимся с программным обеспечением",
        sec1:"На постоянной основе будем сопровождать и обеспечим качественную работу, ваших сотрудников в колл центре.",
        sec2:"Поможем правильно оборудовать колл центр",
        sectext:"Мы обеспечиваем Вашу компанию опытными специалистами, задачами которых являются: - Управление проектом, - Организация подбора персонала - Обучение сотрудников. - Создание скриптов продаж и брифингов.",
         contentt:"ПОЧЕМУ ИМЕННО МЫ?",
         contentsub1:"Реальный опыт ведение проектов в странах СНГ",
         contenttext1:"обеспечим вас профессиональными операторами",
         contentsub2:"Прозрачная отчетность, ответственность за проект",
         contenttext2:"в срок выполняем все поставленные задачи",
         contentsub3:"Весь спектр услуг 24/7",
         contenttext3:"всегда ответственно относимся к работе",
         slidert:"НАША КОМАНДА",
         endt:"ОСТАЛИСЬ ВОПРОСЫ?",
         endtext:"Оставьте заявку, наши специалисты свяжутся с вами и проконсультируют вас бесплатно",
         end__btn:"отправлять",
         endsub:"Ташкент",
         kontakt1:"Телефоны",
         kontakt2:"Адрес",
         kontakt3:"г. Ташкент, Mирзо Улугбекский район, ул.Сайрам, 7 проезд, дом 11",
         kontakt4:"Режим работы",
        

    }
}
if(window.location.hash){
    if(window.location.hash == "#RU"){
        kontakt1.textContent =
        language.RU.kontakt1
        kontakt2.textContent =
        language.RU.kontakt2
        kontakt3.textContent =
        language.RU.kontakt3
        kontakt4.textContent =
        language.RU.kontakt4
        kontakt1.textContent =
        language.RU.kontakt1
        end__btn.textContent =
        language.RU.end__btn
        endsub.textContent =
        language.RU.endsub
        endtext.textContent =
        language.RU.endtext
        endt.textContent =
        language.RU.endt
        slidert.textContent =
        language.RU.slidert
        contenttext3.textContent =
        language.RU.contenttext3
        contentsub3.textContent =
        language.RU.contentsub3
        contenttext2.textContent =
        language.RU.contenttext2
        contentsub2.textContent =
        language.RU.contentsub2
        contenttext1.textContent =
        language.RU.contenttext1
        contentsub1.textContent =
        language.RU.contentsub1
        contentt.textContent =
        language.RU.contentt
        sectext.textContent =
        language.RU.sectext
        sec1.textContent =
        language.RU.sec1
        sec2.textContent =
        language.RU.sec2
        sectionsub.textContent =
        language.RU.sectionsub
        sectionname.textContent =
        language.RU.sectionname
        pagebtn1.textContent =
        language.RU.pagebtn1
        pagebtn2.textContent =
        language.RU.pagebtn2
        pagebtn3.textContent =
        language.RU.pagebtn3
        pagebtn4.textContent =
        language.RU.pagebtn4
        bizh.textContent =
        language.RU.bizh
        xizmat.textContent =
        language.RU.xizmat
        mijoz.textContent =
        language.RU.mijoz
        vak.textContent =
        language.RU.vak
        kontakt.textContent =
        language.RU.kontakt
        yangilik.textContent =
        language.RU.yangilik
        header__name.textContent =
        language.RU.header__name
        header__text.textContent =
        language.RU.header__text
        header__btn.textContent =
        language.RU.header__btn
        header__item.textContent =
        language.RU.header__item
        hero1.textContent =
        language.RU.hero1
        hero2.textContent =
        language.RU.hero2
        hero3.textContent =
        language.RU.hero3
        hero4.textContent =
        language.RU.hero4
        maint.textContent =
        language.RU.maint
        maintext.textContent =
        language.RU.maintext
        pagetittle.textContent =
        language.RU.pagetittle
        page__text.textContent =
        language.RU.page__text
        page__sub.textContent =
        language.RU.page__sub
        pageitem1.textContent =
        language.RU.pageitem1
        pageitem2.textContent =
        language.RU.pageitem2
        pageitem3.textContent =
        language.RU.pageitem3
        pageitem4.textContent =
        language.RU.pageitem4
    }
}




