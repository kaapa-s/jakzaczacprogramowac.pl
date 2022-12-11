(() => {
    var episodes = [
        {
            title: "#93 - Programowanie + Pizza = ❤️",
            link: "https://www.youtube.com/watch?v=f7BzUU5h5y8",
            embedLink: "https://www.youtube.com/embed/f7BzUU5h5y8",
            description:
                "Wracają meetupy i konferencje programistyczne. Dzisiaj opowiemy Wam dlaczego warto na nie chodzić!",
        },
        {
            title: "#92 - Czego NIENAWIDZĘ w programowaniu? 🤬",
            link: "https://www.youtube.com/watch?v=PHZ_UV0eiTg",
        },
        {
            title: "#91 - Zadawaj dobre pytania 🙋‍♂️ Jak SZYBCIEJ i LEPIEJ uczyć się programowania?",
            link: "https://www.youtube.com/watch?v=evgh_SwBmSU",
        },
        {
            title: "#90 - Kod początkujących okiem programisty 👀",
            link: "https://www.youtube.com/watch?v=rZ72aD9gxjI",
        },
        {
            title: "#89 - Code Review projektów początkujących! Szybsza nauka programowania",
            link: "https://www.youtube.com/watch?v=Q5C9tIm6GZc",
        },
        {
            title: "#88 - Czego NIE mówią PROGRAMIŚCI ?",
            link: "https://www.youtube.com/watch?v=UFBMHai6dc0",
        },
        {
            title: "#87 - Tutorial Javascript i REST API, ale bez ściemy",
            link: "https://www.youtube.com/watch?v=V0zaBuHkzOY",
        },
        {
            title: "#86 - Nauka programowania - moje błędy 2",
            link: "https://www.youtube.com/watch?v=jdaW5koh9YY",
        },
        {
            title: "#85 - Co musisz wiedzieć o wydajności stron i aplikacji? Mateusz Krzeszowiak o Web Performance",
            link: "https://www.youtube.com/watch?v=EdPVyF1-7Oc",
        },
        {
            title: "#84 - Znasz już frontend, ale przeraża Cię backend?",
            link: "https://www.youtube.com/watch?v=WXUUmwx3x-Y",
        },
        {
            title: "#83 - Tutorial HTML CSS i Javascript, ale bez ściemy",
            link: "https://www.youtube.com/watch?v=lfQmsYCDci8",
        },
        {
            title: "#82 - Prawda o przebranżowieniu do IT",
            link: "https://www.youtube.com/watch?v=X26YTrdnEOQ",
        },
        {
            title: "#81 - Rozmowa o pracę w IT - cultural fit 🟣 !",
            link: "https://www.youtube.com/watch?v=da7wCXgcZK8",
        },
        {
            title: "#80 - Code Review projektów początkujących!",
            link: "https://www.youtube.com/watch?v=KtK76BPKms8",
        },
        {
            title: "#79 - Chciałbym to wiedzieć na Twoim miejscu!",
            link: "https://www.youtube.com/watch?v=KC0AANAYoTg",
        },
        {
            title: "#78 - Junior Frontend Developer - rozmowa o pracę!",
            link: "https://www.youtube.com/watch?v=g3VKD_voy0g",
        },
        {
            title: "#77 - Kiedy najlepiej aplikować do pierwszej pracy?",
            link: "https://www.youtube.com/watch?v=bzM50MvhHZs",
        },
        {
            title: "#76 - Accessibility - dostępność stron internetowych w HTML i CSS",
            link: "https://www.youtube.com/watch?v=TlHUWnXnUrQ",
        },
        {
            title: "#75 - Grid layout - praktyczny tutorial CSS dla początkujących!",
            link: "https://www.youtube.com/watch?v=HaDYXVqbJcw",
        },
        {
            title: "#74 - Event Delegation - podstawy front-endu. Wzroce w JavaScript.",
            link: "https://www.youtube.com/watch?v=9Bmk2mm-lWw",
        },
        {
            title: "#73 - Typescript - kurs podstaw 🔥 Tutorial krok po kroku!",
            link: "https://www.youtube.com/watch?v=5CBZ6DymX0Y",
        },
        {
            title: "#72 - Pomagamy początkującym z ich projektami! #4 część druga",
            link: "https://www.youtube.com/watch?v=EkPk79XPf7U",
        },
        {
            title: "#71 - Pomagamy początkującym z ich projektami! #4 część pierwsza",
            link: "https://www.youtube.com/watch?v=GHROqbecz48",
        },
        {
            title: "#70 - Flexbox - praktyczny tutorial CSS dla początkujących!",
            link: "https://www.youtube.com/watch?v=o_GnXwio5Hs",
        },
        {
            title: "#69 - Jak napisać CV które pomoże Ci znaleźć pracę w IT. Rekruter IT opowiada",
            link: "https://www.youtube.com/watch?v=GtULYTgBtuk",
        },
        {
            title: "#68 - Galeria zdjęć w HTML, CSS i Javascript - poradnik dla początkujących! Bez jQuery!",
            link: "https://www.youtube.com/watch?v=YpB1I3wgDgQ",
        },
        {
            title: "#67 - SSL, HTTPs - Skrzynie na skarby i kłódki. Jak to działa? Czy front-end developer musi to wiedzieć?",
            link: "https://www.youtube.com/watch?v=SN1BhQSitVs",
        },
        {
            title: "#66 - Promise i asynchroniczność - Podstawy JavaScript",
            link: "https://www.youtube.com/watch?v=K2G5aB5eWOk",
        },
        {
            title: "#65 - Czy pokona mnie gra dla programistów?",
            link: "https://www.youtube.com/watch?v=wfaAsX0AxpI",
        },
        {
            title: "#64 - Jak wytłumaczyć babci czym jest Frontend i Backend? 👵",
            link: "https://www.youtube.com/watch?v=isoxg-IQM54",
        },
        {
            title: "#63 - Czego życzyć programistom na święta? ❄️ 🎁 🎄",
            link: "https://www.youtube.com/watch?v=osCosFeGJMQ",
        },
        {
            title: "#62 - Programowanie, zmiana pracy i... walki z kaczkami?",
            link: "https://www.youtube.com/watch?v=ZLoMN0DUJr4",
        },
        {
            title: "#61 - Przebranżowienie - Hello Roman radzi",
            link: "https://www.youtube.com/watch?v=jRkfPiHPZSA",
        },
        {
            title: "#60 - ...przecież Javascript nie nadaje się do niczego!",
            link: "https://www.youtube.com/watch?v=poCr-f9dmsc",
        },
        {
            title: "#59 - Mikołaj w HTML i CSS 🎅 Tutorial krok po kroku!",
            link: "https://www.youtube.com/watch?v=XaE6dF3MBPU",
        },
        {
            title: "#58 - Dark Theme z localStorage i CSS variables! 🌓 Tutorial HTML CSS i Javascript dla początkujących!",
            link: "https://www.youtube.com/watch?v=gTX--uDIE9Y",
        },
        {
            title: "#57 - Stare funkcje w JavaScript i CSS, które warto znać!",
            link: "https://www.youtube.com/watch?v=AYSwgpKTCgg",
        },
        {
            title: "#56 - Moje stanowisko pracy zdalnej! 🔥 Programowanie, ergonomia i minimalizm 🖥️",
            link: "https://www.youtube.com/watch?v=4LUSQNjS13w",
        },
        {
            title: "#55 - Kurs JavaScript od zera",
            link: "https://www.youtube.com/watch?v=n-cW9HzpnRk",
        },
        {
            title: "#54 - Formularz logowania w HTML i CSS - krok po kroku!",
            link: "https://www.youtube.com/watch?v=L9F5mIUpnkA",
        },
        {
            title: "#53 - HTML & CSS login form | Time lapse 🕒",
            link: "https://www.youtube.com/watch?v=HXWjNLHYWZQ",
        },
        {
            title: "#52 - Pomagamy początkującym z ich projektami! #3",
            link: "https://www.youtube.com/watch?v=ELJwroiNhIw",
        },
        {
            title: "#51 - Frontend - quiz dla początkujących! 🥳",
            link: "https://www.youtube.com/watch?v=jKzqJKkOdvg",
        },
        {
            title: "#50 - position: absolute wyjaśnione w 10 minut *poradnik CSS*",
            link: "https://www.youtube.com/watch?v=uDjv-CsXqbs",
        },
        {
            title: "#49 - SVG - Zastosowanie i optymalizacja obrazków wektorowych",
            link: "https://www.youtube.com/watch?v=AgXB6J4Yrxk",
        },
        {
            title: "#48 - Czy musisz znać programowanie funkcyjne?",
            link: "https://www.youtube.com/watch?v=kCF2nSu1Fd8",
        },
        {
            title: "#47 - Github Copilot i AI - czy pozbawią mnie pracy programisty?",
            link: "https://www.youtube.com/watch?v=SAW-AV_MY2k",
        },
        {
            title: "#46 - Moja ulubiona metoda nauki frontendu!",
            link: "https://www.youtube.com/watch?v=udykPDO4mh4",
        },
        {
            title: "#45 - Jak zdobyć doświadczenie przed dostaniem się do pierwszej pracy w IT?",
            link: "https://www.youtube.com/watch?v=Al2LDJbX4jw",
        },
        {
            title: "#44 - Podstawy HTML + CSS w dwie godziny - kurs krok po kroku!",
            link: "https://www.youtube.com/watch?v=opNgrPv3Qw8",
        },
        {
            title: "#43 - Co pomogło mi dobrze zrozumieć git?",
            link: "https://www.youtube.com/watch?v=TayzBipV0cg",
        },
        {
            title: "#42 - Studia - korzyści i straty. Przemyślenia samouka i magistra",
            link: "https://www.youtube.com/watch?v=uHQOC6hKdYM",
        },
        {
            title: "#41 - Nie idź na informatykę dla papierka!",
            link: "https://www.youtube.com/watch?v=Rk_at0K2KUA",
        },
        {
            title: "#40 - Jak zdalnie pokazać swój localhost? Tutorial ngrok",
            link: "https://www.youtube.com/watch?v=palp_5k81j0",
        },
        {
            title: "#39 - Jak obsłużyć formularz w HTML nie znając backendu?",
            link: "https://www.youtube.com/watch?v=KRd9JN0fKZU",
        },
        {
            title: "#38 - Testy end-to-end w JavaScript. Cypress tutorial",
            link: "https://www.youtube.com/watch?v=V-uIaI-JoH0",
        },
        {
            title: "#37 - Testy na front-endzie: Podstawy",
            link: "https://www.youtube.com/watch?v=w_pkPTCzduY",
        },
        {
            title: "#36 - Frontend - na co uważać podczas nauki?",
            link: "https://www.youtube.com/watch?v=16EfoKAAiFY",
        },
        {
            title: "#35 - NAJSZYBSZY ALGORYTM SORTUJĄCY W JAVASCRIPT! SPRAWDŹ JAK",
            link: "https://www.youtube.com/watch?v=guC-PJnUc4k",
        },
        {
            title: "#34 - Jak zrobić pisankę w CSS?",
            link: "https://www.youtube.com/watch?v=2oWrqdLZpsg",
        },
        {
            title: "#33 - Pomagamy początkującym z ich projektami! #2",
            link: "https://www.youtube.com/watch?v=YM02FB2KOgQ",
        },
        {
            title: "#32 - Backend w Node.js - PATCH, DELETE. Darmowy hosting na Heroku i Github pages",
            link: "https://www.youtube.com/watch?v=TCjpRrIpZQ4",
        },
        {
            title: "#31 - Backend - Podstawy w Node.js i Express",
            link: "https://www.youtube.com/watch?v=Oc9hbOL0_nk",
        },
        {
            title: "#30 - Zrobiłem mini Among Us w CSS i Vanilla Javascript! 🚀",
            link: "https://www.youtube.com/watch?v=_IXPA7s37TE",
        },
        {
            title: "#29 - Pomagamy początkującym z ich projektami! #1",
            link: "https://www.youtube.com/watch?v=jaZsdeFsD2Y",
        },
        {
            title: "#28 - Jak zrobić stronę internetową w szklanym stylu? Tutorial HTML i CSS krok po kroku!",
            link: "https://www.youtube.com/watch?v=DuhCOiOTyRQ",
        },
        {
            title: "#27 - Podstawy programowania: Code Review",
            link: "https://www.youtube.com/watch?v=pBZGNvbz9QY",
        },
        {
            title: "#26 - Mój pierwszy projekt!",
            link: "https://www.youtube.com/watch?v=PXIXkjAm4U4",
        },
        {
            title: "#25 - Jak radziłem sobie z demotywacją podczas nauki programowania?",
            link: "https://www.youtube.com/watch?v=J4uIf17q6wE",
        },
        {
            title: "#24 - Plan nauki programowania - newsletter!",
            link: "https://www.youtube.com/watch?v=E_GzgvAH-nQ",
        },
        {
            title: "#23 - Jak mądrze wybrać pierwszy język programowania?",
            link: "https://www.youtube.com/watch?v=0EyfX7H3NNg",
        },
        {
            title: "#22 - Nietypowe książki dla programistek i programistów",
            link: "https://www.youtube.com/watch?v=nXHYd5x3Bio",
        },
        {
            title: "#21 - Jak zrobić śnieg na stronę w JavaScript, HTML i CSS? cz. 2",
            link: "https://www.youtube.com/watch?v=2U-hHMMqS8E",
        },
        {
            title: "#20 - Jak zrobić śnieg na stronę w JavaScript, HTML i CSS? cz. 1",
            link: "https://www.youtube.com/watch?v=u9OvTqC20CU",
        },
        {
            title: "#19 - Zagraniczne oferty pracy dla programistów i programistek",
            link: "https://www.youtube.com/watch?v=vj2_cmIVRTo",
        },
        {
            title: "#18 - Czy rekruter IT patrzy na wiek kandytatów?",
            link: "https://www.youtube.com/watch?v=DNQhrLiA5o4",
        },
        {
            title: "#17 - Skąd brać wiedzę i motywację do nauki? Front-end",
            link: "https://www.youtube.com/watch?v=Iqs6N1UZijs",
        },
        {
            title: "#16 - Jak zmniejszyć stres na rozmowie kwalifikacyjnej?",
            link: "https://www.youtube.com/watch?v=uF5IvikYI78",
        },
        {
            title: "#15 - Za stary na programowanie?",
            link: "https://www.youtube.com/watch?v=aPPkufI70HM",
        },
        {
            title: "#14 - Java, C++, Python - Skąd języki programowania wzięły swoje nazwy?",
            link: "https://www.youtube.com/watch?v=omoIm8PpPzE",
        },
        {
            title: "#13 - Programujemy grę Sliding Puzzle w JavaScript",
            link: "https://www.youtube.com/watch?v=dOxrZ3F_gu8",
        },
        {
            title: '#12 - "Codzienność" branży IT okiem programisty',
            link: "https://www.youtube.com/watch?v=0yR5raNYmC0",
        },
        {
            title: "#11 - Jak zwiększyć swoje szanse na zdobycie pracy jako junior developer?",
            link: "https://www.youtube.com/watch?v=2GJnpgz5VrQ",
        },
        {
            title: "#10 - Gdzie szukać pracy jako programista i programistka w branży IT?",
            link: "https://www.youtube.com/watch?v=2-09cjbaS8Q",
        },
        {
            title: "#9 - Popularne specjalizacje w programowaniu",
            link: "https://www.youtube.com/watch?v=bYBrM9LMG5U",
        },
        {
            title: "#8 - Nauka programowania - moje błędy",
            link: "https://www.youtube.com/watch?v=58etbJqMJR0",
        },
        {
            title: "#7 - Dzień z życia programisty. Praca zdalna.. z biura?",
            link: "https://www.youtube.com/watch?v=R5FaS46guU0",
        },
        {
            title: "#6 - Jak kontynuować naukę programowania? Studia, kursy czy bootcampy?",
            link: "https://www.youtube.com/watch?v=PJJc-psiimA",
        },
        {
            title: "#5 - Czy kariera programisty jest dla każdego?",
            link: "https://www.youtube.com/watch?v=vGPyYdaoyXQ",
        },
        {
            title: "#4 - Od czego zacząć naukę programowania?",
            link: "https://www.youtube.com/watch?v=NQzxGt-c9WE",
        },
        {
            title: "#3 - Dlaczego warto zacząć uczyć się programowania?",
            link: "https://www.youtube.com/watch?v=_GWLayhyKSY",
        },
        {
            title: "#2 - Czym jest programowanie?",
            link: "https://www.youtube.com/watch?v=sJVke1PKPDM",
        },
        {
            title: "#1 - Jak zostałem programistą?",
            link: "https://www.youtube.com/watch?v=CHEGLDBS_aI",
        },
        {
            title: "#0 - Jak zacząć programować?",
            link: "https://www.youtube.com/watch?v=yLvg_3HPobk",
        },
    ];

    const lastEpisode = episodes.shift();

    document.querySelector("#main-video-title").innerText = lastEpisode.title;
    document.querySelector("#main-video-iframe").src = lastEpisode.embedLink;

    document.querySelector("#main-video-description").innerText =
        lastEpisode.description;

    episodes.forEach((episode) => {
        var container = document.createElement("div");
        var link = document.createElement("a");
        link.innerText = episode.title;
        link.setAttribute("href", episode.link);
        link.setAttribute("target", "_blank");
        container.classList.add("episode");
        container.appendChild(link);

        document.querySelector(".epiosdes").appendChild(container);
    });
})();

// Script to run
// [...document.querySelectorAll("ytd-rich-grid-media")].map((video, i, arr) => {
//     const link = video.querySelector("#thumbnail").href.split("&")[0];
//     const title = `#${arr.length - i - 1} - ${
//         video.querySelector("#video-title").innerText
//     }`;
//     return {
//         title,
//         link,
//     };
// });
