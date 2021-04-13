(() => {
  var episodes = [
    {
      title: '#36 - Testy na front-endzie: Podstawy',
      link: 'https://youtu.be/w_pkPTCzduY',
      embedLink: 'https://www.youtube.com/embed/w_pkPTCzduY',
      description:
        'Chciałbym Wam opowiedzieć o tym po co testować kod aplikacji front-endowych. Pokażę Wam, jakie są rodzaje testów i kiedy powinniśmy je stosować. Ten odcinek jest wstępem teoretycznym. Kolejne odcinki z serii o testowaniu będą tutorialami, w których pokażemy Wam jak pisać testy.',
    },
    {
      title: '#35 - Frontend - na co uważać podczas nauki?',
      link: 'https://youtu.be/16EfoKAAiFY',
    },
    {
      title: '#34 - Jak zrobić pisankę w CSS?',
      link: 'https://youtu.be/2oWrqdLZpsg',
    },
    {
      title: '#33 - Pomagamy początkującym z ich projektami! #2',
      link: 'https://youtu.be/YM02FB2KOgQ',
    },
    {
      title: '#32 - Backend w Node.js - PATCH, DELETE. Darmowy hosting na Heroku i Github pages',
      link: 'https://youtu.be/TCjpRrIpZQ4',
    },
    {
      title: '#31 - Backend - Podstawy w Node.js i Express',
      link: 'https://youtu.be/Oc9hbOL0_nk',
    },
    {
      title: '#30 - Zrobiłem mini Among Us w CSS i Vanilla Javascript!',
      link: 'https://youtu.be/_IXPA7s37TE',
    },
    {
      title: '#29 - Pomagamy początkującym z ich projektami! #1',
      link: 'https://youtu.be/jaZsdeFsD2Y',
    },
    {
      title: '#28 - Jak zrobić stronę internetową w szklanym stylu?',
      link: 'https://youtu.be/DuhCOiOTyRQ',
    },
    {
      title: '#27 - Podstawy programowania: Code Review',
      link: 'https://youtu.be/pBZGNvbz9QY',
    },
    {
      title: '#26 - Mój pierwszy projekt!',
      link: 'https://youtu.be/PXIXkjAm4U4',
    },
    {
      title: '#25 - Jak radziłem sobie z demotywacją podczas nauki programowania?',
      link: 'https://youtu.be/J4uIf17q6wE',
    },
    {
      title: '#24 - Plan nauki programowania - newsletter!',
      link: 'https://youtu.be/E_GzgvAH-nQ',
    },
    {
      title: '#23 - Jak mądrze wybrać pierwszy język programowania?',
      link: 'https://youtu.be/0EyfX7H3NNg',
    },
    {
      title: '#22 - Nietypowe książki dla programistek i programistów',
      link: 'https://www.youtube.com/watch?v=nXHYd5x3Bio',
    },
    {
      title: '#21 - Jak zrobić śnieg na stronę w JavaScript, HTML i CSS? cz. 2',
      link: 'https://www.youtube.com/watch?v=2U-hHMMqS8E',
    },
    {
      title: '#20 - Jak zrobić śnieg na stronę w JavaScript, HTML i CSS? cz. 1',
      link: 'https://www.youtube.com/watch?v=u9OvTqC20CU',
    },
    {
      title: '#19 - Zagraniczne oferty pracy dla programistów i programistek',
      link: 'https://youtu.be/vj2_cmIVRTo',
    },
    {
      title: '#18 - Czy rekruter IT patrzy na wiek kandydata?',
      link: 'https://youtu.be/DNQhrLiA5o4',
    },
    {
      title: '#17 - Skąd brać wiedzę i motywację do nauki? Front-end',
      link: 'https://youtu.be/Iqs6N1UZijs',
    },
    {
      title: '#16 - Jak zmniejszyć stres na rozmowie kwalifikacyjnej?',
      link: 'https://youtu.be/uF5IvikYI78',
    },
    {
      title: '#15 - Za stary na programowanie?',
      link: 'https://youtu.be/aPPkufI70HM',
    },
    {
      title: '#14 - Skąd języki programowania wzięły swoje nazwy?',
      link: 'https://www.youtube.com/watch?v=omoIm8PpPzE',
    },
    {
      title: '#13 - Programujemy grę Sliding Puzzle w JavaScript',
      link: 'https://www.youtube.com/watch?v=dOxrZ3F_gu8',
    },
    {
      title: "#12 - 'Codzienność' branży IT okiem programisty",
      link: 'https://www.youtube.com/watch?v=0yR5raNYmC0',
    },
    {
      title:
        '#11 - Jak zwiększyć swoje szanse na zdobycie pracy jako junior developer?',
      link: 'https://www.youtube.com/watch?v=2GJnpgz5VrQ',
    },
    {
      title:
        '#10 - Gdzie szukać pracy jako programista i programistka w branży IT?',
      link: 'https://www.youtube.com/watch?v=2-09cjbaS8Q',
    },
    {
      title: '#9  - Popularne specjalizacje w programowaniu',
      link: 'https://www.youtube.com/watch?v=bYBrM9LMG5U',
    },
    {
      title: '#8  - Nauka programowania - moje błędy',
      link: 'https://www.youtube.com/watch?v=58etbJqMJR0',
    },
    {
      title: '#7  - Dzień z życia programisty. Praca zdalna.. z biura?',
      link: 'https://www.youtube.com/watch?v=R5FaS46guU0',
    },
    {
      title:
        '#6  - Jak kontynuować naukę programowania? Studia, kursy czy bootcampy?',
      link: 'https://www.youtube.com/watch?v=PJJc-psiimA',
    },
    {
      title: '#5  - Czy kariera programisty jest dla każdego?',
      link: 'https://www.youtube.com/watch?v=vGPyYdaoyXQ',
    },
    {
      title: '#4  - Od czego zacząć naukę programowania?',
      link: 'https://www.youtube.com/watch?v=NQzxGt-c9WE',
    },
    {
      title: '#3  - Dlaczego warto zacząć uczyć się programowania?',
      link: 'https://www.youtube.com/watch?v=_GWLayhyKSY',
    },
    {
      title: '#2  - Czym jest programowanie?',
      link: 'https://www.youtube.com/watch?v=sJVke1PKPDM',
    },
    {
      title: '#1  - Jak zostałem programistą?',
      link: 'https://www.youtube.com/watch?v=CHEGLDBS_aI',
    },
    {
      title: '#0  - Jak zacząć programować?',
      link: 'https://www.youtube.com/watch?v=yLvg_3HPobk',
    },
  ];

  const lastEpisode = episodes.shift();

  document.querySelector('#main-video-title').innerText = lastEpisode.title;
  document.querySelector('#main-video-iframe').src = lastEpisode.embedLink;

  document.querySelector('#main-video-description').innerText =
    lastEpisode.description;

  episodes.forEach((episode) => {
    var container = document.createElement('div');
    var link = document.createElement('a');
    link.innerText = episode.title;
    link.setAttribute('href', episode.link);
    link.setAttribute('target', '_blank');
    container.classList.add('episode');
    container.appendChild(link);

    document.querySelector('.epiosdes').appendChild(container);
  });
})();
