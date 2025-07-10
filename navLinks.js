const navItems = [
  {
    title: 'Why Spring',
    items: [
      'Overview',
      'Generative AI',
      'Microservices',
      'Reactive',
      'Event Driven',
      'Cloud',
      'Web Applications',
      'Serverless',
      'Batch'
    ]
  },
  {
    title: 'Learn',
    items: ['Overview', 'Quickstart', 'Guides', 'Blog', 'Security Advisories']
  },
  {
    title: 'Projects',
    items: [
      'Overview',
      'Spring Boot',
      'Spring Framework',
      'Spring Cloud',
      'Spring Cloud Data Flow',
      'Spring Data',
      'Spring Integration',
      'Spring Batch',
      'Spring Security',
      'Spring AI',
      '',
      'Release Calendar',
      'Security advisories',
      '',
      'DEVELOPMENT TOOLS',
      'Spring Tolls',
      {
        label: 'Spring Initializr',
        icon: 'assets/icons/share-box-fill.svg',
        iconAlt: 'Share',
        iconWidth: 24,
        iconHeight: 24
      }
    ]
  },
  {
    title: 'Academy',
    items: ['Courses', 'Get Certified']
  },
  {
    title: 'Community',
    items: ['Overview', 'Events', 'Authors']
  },
  {
    title: null,
    items: [{ label: 'Tanzu Spring', className: 'a-header' }]
  }
];

const nav = document.getElementById('side-bar');

const contentm = navItems
  .map((item) => {
    if (!item.title) {
      return item.items
        .map((subItem) => {
          if (typeof subItem === 'object' && subItem.className) {
            return `<span class="${subItem.className}">${subItem.label}</span>`;
          }
          return '';
        })
        .join('');
    }

    const listItems = item.items
      .map((subItem) => {
        if (typeof subItem === 'string') {
          if (subItem === '') {
            return '<li style="height: 1.5em;"></li>';
          }
          return `<li><a class="navbar-item">${subItem}</a></li>`;
        } else if (typeof subItem === 'object') {
          return `<li>
            <a class="navbar-item">
              ${subItem.label}
              <img src="${subItem.icon}" alt="${subItem.iconAlt}" width="${subItem.iconWidth}" height="${subItem.iconHeight}" />
            </a>
          </li>`;
        }
        return '';
      })
      .join('');

    return `
      <div class="navbar-item-wrapper">
        <div class="navbar-link">
          ${item.title}
          <span class="arrow-down"></span>
        </div>
        <ul class="navbar-dropdown">
          ${listItems}
        </ul>
      </div>
    `;
  })
  .join('');

nav.innerHTML = contentm;
