(function () {
  let portals = [
    {
      name: 'Bulldog Job',
      link: 'https://bulldogjob.pl/companies/jobs',
    },
    {
      name: 'CrossJob',
      link: 'https://crossweb.pl/job/oferty-pracy/',
    },
    {
      name: 'Jobs For Geek',
      link: 'https://jobsforgeek.com/job-offers',
    },
    {
      name: 'Junior Jobs Only',
      link: 'https://juniorjobsonly.com',
    },
    {
      name: 'Just Join IT',
      link: 'https://justjoin.it/',
    },
    {
      name: 'No Fluff Jobs',
      link: 'https://nofluffjobs.com/pl',
    },
    {
      name: 'Pracuj.pl',
      link: 'https://www.pracuj.pl/praca/programista;kw?rd=30',
    },
    {
      name: 'Startup Jobs',
      link: 'https://startup.jobs/',
    },
    {
      name: 'SOLID.Jobs',
      link: 'https://solid.jobs/offers/it',
    },
    {
      name: '4programmers',
      link: 'https://4programmers.net/Praca',
    },
    {
      name: 'TeamQuest',
      link: 'https://teamquest.pl/praca-w-it',
    },
  ];

  const groups = [
    {
      name: 'Pierwsza praca / staż',
      list: [
        {
          name:
            'Praca w IT dla Stażystów i Juniorów (IT Jobs for Intern/Junior)',
          link: 'https://www.facebook.com/groups/1561984417428846/',
        },
        {
          name: 'Front-end: pierwsza praca w HTML5, CSS3 i JavaScript',
          link: 'https://www.facebook.com/groups/1485218891734165/',
        },
        {
          name: 'Pierwsza praca w IT',
          link: 'https://www.facebook.com/groups/113248352460089/',
        },
        {
          name: 'Praca / Staż w IT',
          link: 'https://www.facebook.com/groups/1778129425801951/',
        },
        {
          name: 'Zdobywamy pierwszą pracę w IT',
          link: 'https://www.facebook.com/groups/juniorjobsonly/',
        },
        {
          name: 'Praca w IT - Junior/Staż',
          link: 'https://www.facebook.com/groups/802556203473410/',
        },
        {
          name:
            'Staże i praktyki w branży IT programisci ,administratorzy sieci ,graficy',
          link: 'https://www.facebook.com/groups/158819111208124/',
        },
        {
          name:
            'Zlecenia dla studentów - programiści, graficy, copywriterzy, i inni',
          link: 'https://www.facebook.com/groups/zleceniadlastudentow/',
        },
        {
          name: 'Back-end. Pierwsza praca',
          link: 'https://www.facebook.com/groups/1852128488353939/',
        },
      ],
    },
    {
      name: 'Ogólne',
      list: [
        {
          name:
            'Praca dla programistów i programistek powyżej 20000zł, 30000zł i 40000zł',
          link: 'https://www.facebook.com/groups/280382479112568/',
        },
        {
          name: 'Oferty Pracy IT z Widełkami',
          link: 'https://www.facebook.com/groups/227368341464993/',
        },
        {
          name: 'Praca IT / Jobs IT',
          link: 'https://www.facebook.com/groups/pracait/',
        },
        {
          name: 'PRACA IT - POLSKA I ŚWIAT',
          link: 'https://www.facebook.com/groups/1645832589008328/',
        },
        {
          name: 'Praca dla programistów-Polska',
          link: 'https://www.facebook.com/groups/880143435429902/',
        },
        {
          name: 'PRACA ZDALNA IT',
          link: 'https://www.facebook.com/groups/268603053543086/',
        },
        {
          name: 'Remote Jobs IT - zdalny programista - zlecenia i oferty pracy',
          link: 'https://www.facebook.com/groups/246806639124789/',
        },
        {
          name:
            'Praca w iT - Oferty Pracy: Praktyki i Staż - Junior, Senior, Full Developer',
          link: 'https://www.facebook.com/groups/790784451359457/',
        },
        {
          name: 'Praca w IT',
          link: 'https://www.facebook.com/groups/pracawbranzyit/',
        },
      ],
    },
    {
      name: 'Specjalizacje',
      list: [
        {
          name: 'Python Poland: Jobs',
          link: 'https://www.facebook.com/groups/pythonjobs/',
        },
        {
          name: 'JS News: Jobs',
          link: 'https://www.facebook.com/groups/jsjobs/',
        },
        {
          name: 'GameDev Polska: Praca',
          link: 'https://www.facebook.com/groups/gamedevpolskapraca/',
        },
        {
          name: 'QA Testers - job offers, oferty pracy, jobangebote',
          link: 'https://www.facebook.com/groups/808752555920542/',
        },
        {
          name:
            'Praca Backend (Java, Python, C++, .NET, PHP, Ruby on Rails, Scala)',
          link: 'https://www.facebook.com/groups/469285070091224/',
        },
        {
          name: 'Praca DevOps',
          link: 'https://www.facebook.com/groups/366168403801056/',
        },
        {
          name: 'Praca Aplikacje Mobilne - Android, iOS',
          link: 'https://www.facebook.com/groups/600434323449128/',
        },
      ],
    },
  ];

  const createLinkElement = (entity) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = entity.name;
    a.setAttribute('href', entity.link);
    a.setAttribute('target', '_blank');

    li.appendChild(a);

    return li;
  };

  portals = portals.sort((a, b) => a.name.localeCompare(b.name));

  portals.forEach((portal) => {
    document
      .querySelector('.list--portals')
      .appendChild(createLinkElement(portal));
  });

  groups.forEach((group) => {
    group.list = group.list.sort((a, b) => a.name.localeCompare(b.name));
    const h3 = document.createElement('h3');
    h3.innerText = group.name;

    const spanExpand = document.createElement('span');
    spanExpand.classList.add('expand');
    spanExpand.innerText = ' (rozwiń)';
    const spanCollapse = document.createElement('span');
    spanCollapse.classList.add('collapse');
    spanCollapse.innerText = ' (zwiń)';
    h3.appendChild(spanExpand);
    h3.appendChild(spanCollapse);

    const ulRow = document.createElement('div');
    ulRow.classList.add('row');
    const ul = document.createElement('ul');
    ul.classList.add('list');
    ulRow.appendChild(ul);

    h3.addEventListener('click', () => {
      if (h3.classList.contains('expanded')) {
        h3.classList.remove('expanded');
      } else {
        h3.classList.add('expanded');
      }
    });

    group.list.forEach((listItem) =>
      ul.appendChild(createLinkElement(listItem))
    );
    document.querySelector('.groups').appendChild(h3);
    document.querySelector('.groups').appendChild(ulRow);
  });

  const onScroll = () => {
    window.removeEventListener('scroll', onScroll);
    setTimeout(() => {
      document.querySelector('.bar-container').classList.add('shown');
    }, 2000);
  };

  window.addEventListener('scroll', onScroll);
})();
