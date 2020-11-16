(() => {
    var episodes = [
        {
            title: "#17 - Skąd brać wiedzę i motywację do nauki? Front-end",
            link: "https://youtu.be/Iqs6N1UZijs"
        },
        {
            title: "#16 - Jak zmniejszyć stres na rozmowie kwalifikacyjnej?",
            link: "https://youtu.be/uF5IvikYI78"
        },
        {
            title: "#15 - Za stary na programowanie?",
            link: "https://youtu.be/aPPkufI70HM"
        },
        {
            title: "#14 - Skąd języki programowania wzięły swoje nazwy?",
            link: "https://www.youtube.com/watch?v=omoIm8PpPzE"
        },{
            title: "#13 - Programujemy grę Sliding Puzzle w JavaScript",
            link: "https://www.youtube.com/watch?v=dOxrZ3F_gu8"
        },{
            title: "#12 - 'Codzienność' branży IT okiem programisty",
            link: "https://www.youtube.com/watch?v=0yR5raNYmC0"
        },{
            title: "#11 - Jak zwiększyć swoje szanse na zdobycie pracy jako junior developer?",
            link: "https://www.youtube.com/watch?v=2GJnpgz5VrQ"
        },{
            title: "#10 - Gdzie szukać pracy jako programista i programistka w branży IT?",
            link: "https://www.youtube.com/watch?v=2-09cjbaS8Q"
        },{
            title: "#9  - Popularne specjalizacje w programowaniu",
            link: "https://www.youtube.com/watch?v=bYBrM9LMG5U"
        },{
            title: "#8  - Nauka programowania - moje błędy",
            link: "https://www.youtube.com/watch?v=58etbJqMJR0"
        },{
            title: "#7  - Dzień z życia programisty. Praca zdalna.. z biura?",
            link: "https://www.youtube.com/watch?v=R5FaS46guU0"
        },{
            title: "#6  - Jak kontynuować naukę programowania? Studia, kursy czy bootcampy?",
            link: "https://www.youtube.com/watch?v=PJJc-psiimA"
        },{
            title: "#5  - Czy kariera programisty jest dla każdego?",
            link: "https://www.youtube.com/watch?v=vGPyYdaoyXQ"
        },{
            title: "#4  - Od czego zacząć naukę programowania?",
            link: "https://www.youtube.com/watch?v=NQzxGt-c9WE"
        },{
            title: "#3  - Dlaczego warto zacząć uczyć się programowania?",
            link: "https://www.youtube.com/watch?v=_GWLayhyKSY"
        },{
            title: "#2  - Czym jest programowanie?",
            link: "https://www.youtube.com/watch?v=sJVke1PKPDM"
        },{
            title: "#1  - Jak zostałem programistą?",
            link: "https://www.youtube.com/watch?v=CHEGLDBS_aI"
        },{
            title: "#0  - Jak zacząć programować?",
            link: "https://www.youtube.com/watch?v=yLvg_3HPobk"
        }
    ];

    episodes.shift();

    episodes.forEach(episode => {
        var container = document.createElement("div"); 
        var link = document.createElement("a");
        link.innerText = episode.title;
        link.setAttribute("href", episode.link);
        link.setAttribute("target", "_blank");
        container.classList.add("episode");
        container.appendChild(link);

        document.querySelector(".epiosdes").appendChild(container);

    })
})()