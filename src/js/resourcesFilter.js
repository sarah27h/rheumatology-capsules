// data
const resourcesData = [
  {
    category_name: 'reading',
    id: 0,
    types: [
      {
        src: '/images/resources/uptodate.png',
        type_name: 'Up To Date',
        link: 'https://www.uptodate.com/contents/whats-new-in-rheumatology',
        alt: 'Screenshot for the up to date website',
      },
      {
        src: '/images/resources/springer.png',
        type_name: 'Springer',
        link: 'https://www.springer.com/journal/296',
        alt: 'Screenshot for the Springer website',
      },
      {
        src: '/images/resources/medscape.png',
        type_name: 'Medscape',
        link: 'https://www.medscape.org/viewpublication/30073',
        alt: 'Screenshot for the medscape website',
      },
    ],
  },
  {
    category_name: 'Videos',
    id: 1,
    types: [
      {
        src: '/images/resources/Geeky_Medics.png',
        type_name: 'Geeky Medics',
        link:
          'https://www.youtube.com/playlist?list=PLwYICl63HBzmxTZa84pFCyuCgu2rl9dS-&fbclid=IwAR1IxCDhKFX7DA8EhvcQP1NoooeBV-5Oq9Gmhf_rkstUGx_XqgPLeD08rRU',
        alt: 'Screenshot for the Geeky Medics website',
      },
      {
        src: '/images/resources/Dr_Nabil_Ebraheim.png',
        type_name: 'Dr. Nabil Ebraheim',
        link: 'https://www.youtube.com/user/nabilebraheim',
        alt: 'Screenshot for the Dr. Nabil Ebraheim website',
      },
      {
        src: '/images/resources/RheumTutor.png',
        type_name: 'RheumTutor',
        link:
          'https://www.youtube.com/channel/UCDmKR_5TenO8kqefM4ryuAg?fbclid=IwAR2vESydSl9dMAx1VNQTNgLM-TDrw18cX0a3Hl1RO7OKir7Dd1GXk1avAEM',
        alt: 'Screenshot for the RheumTutor website',
      },
    ],
  },
  {
    category_name: 'Online Courses',
    id: 2,
    types: [
      {
        src: '/images/resources/eular.png',
        type_name: 'Eular',
        link: 'https://esor.eular.org/',
        alt: 'Screenshot for the Eular website',
      },
    ],
  },
];

const filter = document.getElementsByClassName('resources__nav-items');
const filterLinks = document.getElementsByClassName('resources__nav-link');
const resourcesContainer = document.getElementsByClassName('resources__container')[0];

const displayActiveCategory = (e) => {
  e.preventDefault();
  if (e.target.nodeName.toLowerCase() === 'a') {
    // empty products before next time
    resourcesContainer.textContent = '';

    const clickedFilterNav = e.target.getAttribute('data-resource-filter');

    if (clickedFilterNav === 'all') {
      displayAllresourcesCategory();
      setActive(e.target);
    } else {
      const chosenCategory = resourcesData.filter(
        (resource) => resource.category_name === clickedFilterNav
      );
      displayResourceCategory(chosenCategory[0]['types'], chosenCategory[0].category_name);

      setActive(e.target);
    }
  }
};

filter[0].addEventListener('click', displayActiveCategory);

/**
 * @description create our resource list
 */
const displayResourceCategory = (category, categoryName) => {
  const fragment = document.createDocumentFragment();

  category.forEach((resource) => {
    const resourceContainer = document.createElement('div');
    setAttributes(resourceContainer, {
      class: 'resource',
      'data-resource-filter': categoryName,
    });
    const imgSurroundLink = document.createElement('a');
    setAttributes(imgSurroundLink, { class: 'resource__img', href: resource.link, tabindex: '-1' });
    const resourceImg = document.createElement('img');
    setAttributes(resourceImg, { class: 'resource__img', src: resource.src, alt: resource.alt });
    imgSurroundLink.append(resourceImg);
    resourceContainer.append(imgSurroundLink);

    const resourceHeading = document.createElement('h3');
    setAttributes(resourceHeading, { class: 'resource__heading heading-2' });
    const headingSurroundLink = document.createElement('a');
    setAttributes(headingSurroundLink, { href: resource.link, tabindex: '-1' });
    headingSurroundLink.textContent = resource.type_name;
    resourceHeading.append(headingSurroundLink);
    resourceContainer.append(resourceHeading);

    const resourceLink = document.createElement('a');
    setAttributes(resourceLink, {
      class: 'resource__btn btn btn-main',
      href: resource.link,
      target: '_blank',
      'aria-label': `Visit the ${resource.type_name} website`,
    });
    resourceLink.textContent = `Visit Website`;
    resourceContainer.append(resourceLink);

    fragment.append(resourceContainer);
  });
  resourcesContainer.append(fragment);
};

/**
 * @description display all resources data
 */
const displayAllresourcesCategory = () => {
  resourcesData.forEach((category) => {
    displayResourceCategory(category['types'], category.category_name);
  });
};

// set All as a default and display all resource data
displayAllresourcesCategory();

/**
 * @description add active class for active category
 * @param {object} category <a data-resource-filter="bread" href="" class="resources__nav-link">All</a>
 */
const setActive = (category) => {
  console.log(category);
  Array.from(filterLinks).forEach((link) => {
    link.classList.remove('active');
    if (!category.classList.contains('active')) {
      category.classList.add('active');
    }
  });
};

/**
 * @description Set attributes at once for an element
 * @param {html element} element
 * @param {object} attributes
 */
function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
