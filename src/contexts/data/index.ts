/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';
import { calcGrade } from 'utils/gradeCalc';
import { v4 as uuidv4 } from 'uuid';
import {
  auImage1,
  auImage2,
  auImage3,
  auImage4,
  auImage5,
  auImage6,
  chImage1,
  chImage2,
  chImage3,
  chImage4,
  chImage5,
  chImage6,
  grImage1,
  grImage2,
  grImage3,
  grImage4,
  grImage5,
  grImage6,
  krImage1,
  krImage2,
  krImage3,
  krImage4,
  krImage5,
  krImage6,
  seImage1,
  seImage2,
  seImage3,
  seImage4,
  seImage5,
  seImage6,
  Boudin,
  Chilis,
  InNout,
  PaneraBread,
  TacoBell,
  IndeedLogo,
  CRCLogoPNG,
  GlassdoorLogo,
  GlassdoorText,
  IndeedText,
  LinkedinLogo,
  LinkedinText
} from 'assets';

export const classesData: {
  id: string;
  link: string;
  header: string;
  description: string;
  meta: string;
  complete: string;
  college: string;
  iconName: SemanticICONS;
  iconColor: SemanticCOLORS;
}[] = [
  {
    id: 'cisc-305',
    link: '/cisc305',
    header: 'CISC 305',
    description: 'Intro to the Internet',
    meta: 'CRC - Fishman - Fall 2022',
    complete: 'complete',
    college: 'CRC',
    iconName: 'internet explorer',
    iconColor: 'blue'
  },
  {
    id: 'cisc-310',
    link: '/cisc310',
    header: 'CISC 310',
    description: 'Intro to Computer Information Science',
    meta: 'SCC - Bair - Fall 2022',
    complete: 'complete',
    college: 'SCC',
    iconName: 'microchip',
    iconColor: 'grey'
  },
  {
    id: 'cisc-323',
    link: '/cisc323',
    header: 'CISC 323',
    description: 'Linux Operating System',
    meta: 'SCC - Mukarram - Fall 2022',
    complete: 'complete',
    college: 'SCC',
    iconName: 'linux',
    iconColor: 'black'
  },
  {
    id: 'cisc-324',
    link: '/cisc324',
    header: 'CISC 324',
    description: 'Intermediate Linux Operating System',
    meta: 'SCC - Osman - Fall 2022',
    complete: 'complete',
    college: 'SCC',
    iconName: 'terminal',
    iconColor: 'red'
  },
  {
    id: 'cisw-306',
    link: '/cisw306',
    header: 'CISW 306',
    description: 'Intro to Web Page Creation and Web A11y',
    meta: 'SCC - Little - Spring 2023',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'universal access',
    iconColor: 'blue'
  },
  {
    id: 'cisw-308',
    link: '/cisw308',
    header: 'CISW 308',
    description: 'Mobile Web Development',
    meta: 'CRC - Fishman - Fall 2022',
    complete: 'complete',
    college: 'CRC',
    iconName: 'mobile',
    iconColor: 'olive'
  },
  {
    id: 'cisw-327',
    link: '/cisw327',
    header: 'CISW 327',
    description: 'Intro to Web Dev coding HTML and CSS',
    meta: 'SCC - Little - Fall 2022',
    complete: 'complete',
    college: 'SCC',
    iconName: 'code',
    iconColor: 'pink'
  },
  {
    id: 'cisw-400',
    link: '/cisw400',
    header: 'CISW 400',
    description: 'Client Web Scripting',
    meta: 'CRC - Fishman - Fall 2022',
    complete: 'complete',
    college: 'CRC',

    iconName: 'js',
    iconColor: 'yellow'
  },
  {
    id: 'ddsn-331',
    link: '/ddsn331',
    header: 'DDSN 331',
    description: 'Digital Imaging I',
    meta: 'SCC - Crail - Spring 2023',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'images',
    iconColor: 'teal'
  },
  {
    id: 'ddsn-360',
    link: '/ddsn360',
    header: 'DDSN 360',
    description: 'User Interface Design',
    meta: 'SCC - Button - Spring 2023',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'sitemap',
    iconColor: 'violet'
  },
  {
    id: 'ciss-300',
    link: '/ciss300',
    header: 'CISS 300',
    description: 'Intro to Information Systems Security',
    meta: 'SCC - Richardson - Sequeira - Fall 2022',
    complete: 'complete',
    college: 'SCC',
    iconName: 'shield alternate',
    iconColor: 'green'
  },
  {
    id: 'cisp-301',
    link: '/cisp301',
    header: 'CISP 301',
    description: 'Algorithm Design and Implementation',
    meta: 'SCC - Krofchok - Spring 2023',
    complete: 'in-progress',
    college: 'SCC',
    iconName: 'chart area',
    iconColor: 'purple'
  }
];

export const CISW400HomePageAssignmentsData = [
  {
    id: 'cisw400-assignment-1',
    link: '/cisw400/assignment-1',
    header: 'Assignment 1',
    description: 'Menu Page & Date',
    meta: `${calcGrade(50, 50)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-2',
    link: '/cisw400/assignment-2',
    header: 'Assignment 2',
    description: 'Rollovers',
    meta: `${calcGrade(53, 50)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-3',
    link: '/cisw400/assignment-3',
    header: 'Assignment 3',
    description: 'Pop-Up & Browser Detection',
    meta: `${calcGrade(90, 75)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-4',
    link: '/cisw400/assignment-4',
    header: 'Assignment 4',
    description: 'Slide Show',
    meta: `${calcGrade(78, 75)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-5',
    link: '/cisw400/assignment-5',
    header: 'Assignment 5',
    description: 'Smart Forms',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-6',
    link: '/cisw400/assignment-6',
    header: 'Assignment 6',
    description: 'DHTML',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  },
  {
    id: 'cisw400-assignment-7',
    link: '/cisw400/assignment-7',
    header: 'Assignment 7',
    description: 'Cookies',
    meta: `${calcGrade(0, 100)}`,
    extra: 'complete'
  }
];

export const CISW400Assignment6AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'a drop-down menu with 3 or more destination options.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'a set of corresponding thumbnail images for each dropdown option.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'roll over effect - when the user hovers a thumbnail image a larger version of the image is displayed.'
  }
];

export const CISW400Assignment6DestinationOptions = [
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'gr', value: 'gr', flag: 'gr', text: 'Greece' },
  { key: 'kr', value: 'kr', flag: 'kr', text: 'South Korea' },
  { key: 'se', value: 'se', flag: 'se', text: 'Sweden' },
  { key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland' }
];

export const CISW400Assignment6AUImages = [
  {
    id: uuidv4(),
    src: auImage1,
    place: 'Black Spur Drive'
  },
  {
    id: uuidv4(),
    src: auImage2,
    place: 'Cape Le Grand National Park'
  },
  {
    id: uuidv4(),
    src: auImage3,
    place: 'Flinders Ranges'
  },
  {
    id: uuidv4(),
    src: auImage4,
    place: 'Ningaloo Reef'
  },
  {
    id: uuidv4(),
    src: auImage5,
    place: 'Uluru Ayers Rock'
  },
  {
    id: uuidv4(),
    src: auImage6,
    place: 'The Twelve Apostles'
  }
];

export const CISW400Assignment6GRImages = [
  {
    id: uuidv4(),
    src: grImage1,
    place: 'Port of Tinos'
  },
  {
    id: uuidv4(),
    src: grImage2,
    place: 'The Monastery of Roussanou'
  },
  {
    id: uuidv4(),
    src: grImage3,
    place: 'Santorini'
  },
  {
    id: uuidv4(),
    src: grImage4,
    place: 'Athens'
  },
  {
    id: uuidv4(),
    src: grImage5,
    place: 'Santorini'
  },
  {
    id: uuidv4(),
    src: grImage6,
    place: 'Navagio Bay'
  }
];

export const CISW400Assignment6SEImages = [
  {
    id: uuidv4(),
    src: seImage1,
    place: "The King's Trail"
  },
  {
    id: uuidv4(),
    src: seImage2,
    place: 'Gamla Stan'
  },
  {
    id: uuidv4(),
    src: seImage3,
    place: 'Ales Stenar'
  },
  {
    id: uuidv4(),
    src: seImage4,
    place: 'Lake Siljan'
  },
  {
    id: uuidv4(),
    src: seImage5,
    place: 'Gamla Hamn Naturreservat'
  },
  {
    id: uuidv4(),
    src: seImage6,
    place: 'Visby'
  }
];

export const CISW400Assignment6CHImages = [
  {
    id: uuidv4(),
    src: chImage1,
    place: 'Somewhere in Switzerland'
  },
  {
    id: uuidv4(),
    src: chImage2,
    place: 'Swiss Alps'
  },
  {
    id: uuidv4(),
    src: chImage3,
    place: 'Lake Zurich'
  },
  {
    id: uuidv4(),
    src: chImage4,
    place: 'Saxon Switzerland Mountains'
  },
  {
    id: uuidv4(),
    src: chImage5,
    place: 'Matterhorn'
  },
  {
    id: uuidv4(),
    src: chImage6,
    place: 'Saxon Switzerland Mountains'
  }
];

export const CISW400Assignment6KRImages = [
  {
    id: uuidv4(),
    src: krImage1,
    place: 'Bukchon Hanok Village'
  },
  {
    id: uuidv4(),
    src: krImage2,
    place: 'Cheonjiyeon Waterfall'
  },
  {
    id: uuidv4(),
    src: krImage3,
    place: 'Metasequoia-lined Road'
  },
  {
    id: uuidv4(),
    src: krImage4,
    place: 'Jirisan National Park'
  },
  {
    id: uuidv4(),
    src: krImage5,
    place: 'Juwangsan National Park'
  },
  {
    id: uuidv4(),
    src: krImage6,
    place: 'Nagan Eupseong Folk Village'
  }
];

export const CISW400Assignment5AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'a registration form which prompts the user for their City, State, Zip Code, and Email address.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'validation scripts to verify proper zip code, state, and email address input.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'autofocus for the first form field when the page loads.'
  }
];

export const CISW400Assignment4AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'a pop-up.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'a slide show that alternates a series of images in a timed-sequence loop.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'at least three images in the rotation.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'images on the slideshow are click-able and each image must link to a different URL.'
  }
];

export const CISW400Assignment4ExtraCreditData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Make the images appear in random order.'
  }
];

export const CISW400Assignment4Images = [
  {
    id: uuidv4(),
    name: 'crc',
    src: 'https://crc.losrios.edu/crc/main/img/admin/logo/crc-logo.svg',
    url: 'https://crc.losrios.edu/'
  },
  {
    id: uuidv4(),
    name: 'scc',
    src: 'https://scc.losrios.edu/scc/main/img/sitewide-multi/logo/scc-logo-desktop.svg',
    url: 'https://scc.losrios.edu/'
  },
  {
    id: uuidv4(),
    name: 'arc',
    src: 'https://arc.losrios.edu/arc/main/img/logos/arc-logo.svg',
    url: 'https://arc.losrios.edu/'
  },
  {
    id: uuidv4(),
    name: 'flc',
    src: 'https://flc.losrios.edu/flc/shared/img/admin/logos-icons/flc-desktop-logo.svg',
    url: 'https://flc.losrios.edu/'
  }
];

export const CISW400Assignment3AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'a pop-up.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'the pop-up has a close button that the user must click in order to see the webpage.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'a “show pop-up” button that the user can click to reopen the pop-up.'
  }
];

export const CISW400Assignment3ExtraCreditData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'display a message which identifies which browser vendor and version the client is running.'
  },
  {
    id: uuidv4(),
    completed: false,
    name: 'change the background color and the text color depending on which browser vendor the client is using to view this website'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'include links to the respective download pages for other browsers.'
  }
];

export const browserNameMicrosoftEdge = [
  {
    id: uuidv4(),
    link: 'https://support.apple.com/downloads/safari',
    image:
      'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
  },
  {
    id: uuidv4(),
    image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
    link: 'https://www.google.com/chrome/'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
    image:
      'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
  },
  {
    id: uuidv4(),
    link: 'https://www.mozilla.org/en-US/firefox/new/',
    image: 'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
  }
];

export const browserNameInternetExplorer = [
  {
    id: uuidv4(),
    link: 'https://support.apple.com/downloads/safari',
    image:
      'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
  },
  {
    id: uuidv4(),
    image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
    link: 'https://www.google.com/chrome/'
  },
  {
    id: uuidv4(),
    link: 'https://www.mozilla.org/en-US/firefox/new/',
    image: 'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/edge',
    image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
  }
];

export const browserNameFirefox = [
  {
    id: uuidv4(),
    link: 'https://support.apple.com/downloads/safari',
    image:
      'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
  },
  {
    id: uuidv4(),
    image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
    link: 'https://www.google.com/chrome/'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
    image:
      'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/edge',
    image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
  }
];

export const browserNameSafari = [
  {
    id: uuidv4(),
    image: 'https://www.mygsc.com/wp-content/uploads/2020/06/Chrome-emblem.jpg',
    link: 'https://www.google.com/chrome/'
  },
  {
    id: uuidv4(),
    link: 'https://www.mozilla.org/en-US/firefox/new/',
    image: 'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
    image:
      'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/edge',
    image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
  }
];

export const browserNameChrome = [
  {
    id: uuidv4(),
    link: 'https://support.apple.com/downloads/safari',
    image:
      'https://image.chitra.live/api/v1/wps/33d91e5/d9f427c1-cf34-443c-9625-e57444e18d8b/6/Apple-Safari-580x358.jpg'
  },
  {
    id: uuidv4(),
    link: 'https://www.mozilla.org/en-US/firefox/new/',
    image: 'https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef09471731cbb40b3d85aac_firefox_2019_logo.jpg'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/download/internet-explorer.aspx',
    image:
      'https://static.businessworld.in/article/article_extra_large_image/1655096916_nrep6W_internet_explorer_logo_900x330.png'
  },
  {
    id: uuidv4(),
    link: 'https://www.microsoft.com/en-us/edge',
    image: 'https://winaero.com/blog/wp-content/uploads/2019/12/Microsoft-Edge-Chromium-banner.png'
  }
];

export const CISW400Assignment3PopupStyle = (browserName: string | undefined) =>
  typeof browserName !== 'string'
    ? { backgroundColor: 'white', color: 'black' }
    : browserName === 'Safari'
    ? { backgroundColor: 'gray', color: 'blue' }
    : browserName === 'Chrome'
    ? { backgroundColor: 'green', color: 'red' }
    : browserName === 'Firefox'
    ? { backgroundColor: 'yellow', color: 'black' }
    : browserName === 'Internet Explorer'
    ? { backgroundColor: 'blue', color: 'white' }
    : browserName === 'Microsoft Edge'
    ? { backgroundColor: 'blue', color: 'white' }
    : {};

export const CISW400Assignment3OtherBrowserOptions = (browserName: string | undefined) =>
  typeof browserName !== 'string'
    ? [
        {
          id: '',
          link: '',
          image: ''
        }
      ]
    : browserName === 'Safari'
    ? browserNameSafari
    : browserName === 'Chrome'
    ? browserNameChrome
    : browserName === 'Firefox'
    ? browserNameFirefox
    : browserName === 'Internet Explorer'
    ? browserNameInternetExplorer
    : browserName === 'Microsoft Edge'
    ? browserNameMicrosoftEdge
    : [{ id: uuidv4(), link: '', image: '' }];

export const CISW400Assignment2AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: '3  links  with  JavaScript rollovers (hover effect with two images ).'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'rollover  link  to  CRC  using  the  Cosumnes River logo or photo from the main campus web site.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'link this page to your assignments menu page.'
  }
];

export const CISW400Assignment2ExtraCreditData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'include multiple rollovers on single hover.'
  }
];

export const CISW400Assignment2RolloverImageData = [
  {
    id: uuidv4(),
    link: 'https://www.indeed.com',
    hoverName: 'indeed-hover',
    logoImage: IndeedLogo,
    textImage: IndeedText,
    altText: 'Indeed Company Logo'
  },

  {
    id: uuidv4(),
    link: 'https://www.linkedin.com',
    hoverName: 'linkedin-hover',
    logoImage: LinkedinLogo,
    textImage: LinkedinText,
    altText: 'Linked In Company Logo'
  },
  {
    id: uuidv4(),
    link: 'https://www.glassdoor.com',
    hoverName: 'glassdoor-hover',
    logoImage: GlassdoorLogo,
    textImage: GlassdoorText,
    altText: 'Glassdoor Company Logo'
  },
  {
    id: uuidv4(),
    link: 'https://crc.losrios.edu',
    hoverName: 'crc-hover',
    logoImage: CRCLogoPNG,
    textImage: '',
    altText: 'CRC College logo'
  }
];

export const CISW308Assignment5AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'a clickable “SHOW MAP” buttons or links for 2 or more Locations that opens a “map page” for each of your food locations.'
  }
];

export const CISW308Assignment5ExtraCreditData = [
  {
    id: uuidv4(),
    completed: true,
    name: `a clickable “GET DIRECTIONS” link or button on each map page, that links to another map with directions from the users' current location to the restaurant location.`
  }
];
export const CISW308Assignment5FavoritePlacesData = [
  {
    id: uuidv4(),
    src: Boudin,
    name: 'Boudin Bakery',
    phoneNumber: '(916) 973-1849',
    phoneNumberLink: 'tel:+1-916-973-1849',
    address: '2573 Fair Oaks Blvd, Sacramento, CA 95825',
    addressLink:
      'https://www.google.com/maps/place/Boudin+SF/@38.5749736,-121.4019994,17z/data=!3m1!4b1!4m5!3m4!1s0x809ada557d7929af:0x4b8201a127d64751!8m2!3d38.5749736!4d-121.4019994',
    placeCoords: { lat: 38.57498557564539, lng: -121.40199854938247 }
  },
  {
    id: uuidv4(),
    src: InNout,
    name: 'In-N-Out',
    phoneNumber: '(800) 786-1000',
    phoneNumberLink: 'tel:+1-800-786-1000',
    address: '3501 Truxel Rd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/5rtssiGZb2KyLQpKA',
    placeCoords: { lat: 38.63682135923305, lng: -121.5041714687768 }
  },
  {
    id: uuidv4(),
    src: Chilis,
    name: `Chili's`,
    phoneNumber: '(916) 285-8703',
    phoneNumberLink: 'tel:+1-916-285-8703',
    address: '3870 Truxel Rd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/iFCDnk23ywRSH5HN7',
    placeCoords: { lat: 38.6385674159852, lng: -121.50372754232959 }
  },

  {
    id: uuidv4(),
    src: PaneraBread,
    name: 'Panera Bread',
    phoneNumber: '(916) 515-2012',
    phoneNumberLink: 'tel:+1-916-515-2012',
    address: '3571 N Freeway Blvd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/erkno1X3d68db3BK9',
    placeCoords: { lat: 38.6402061514062, lng: -121.50000428469711 }
  },
  {
    id: uuidv4(),
    src: TacoBell,
    name: 'Taco Bell',
    phoneNumber: '(916) 649-1790',
    phoneNumberLink: 'tel:+1-916-649-1790',
    address: '3820 Northgate Blvd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/2Xyd3uF1trWQydeH6',
    placeCoords: { lat: 38.63686305635747, lng: -121.47572123063725 }
  }
];

export const CISW308Assignment4AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'listing and linking  to your favorite-5 (or fewer) places to eat.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'listings contain information such as phone number (use telephone hyperlinks), address (link to a Google Map).'
  }
];

export const CISW308Assignment4FavoritePlacesData = [
  {
    id: uuidv4(),
    src: Boudin,
    name: 'Boudin Bakery',
    phoneNumber: '(916) 973-1849',
    phoneNumberLink: 'tel:+1-916-973-1849',
    address: '2573 Fair Oaks Blvd, Sacramento, CA 95825',
    addressLink:
      'https://www.google.com/maps/place/Boudin+SF/@38.5749736,-121.4019994,17z/data=!3m1!4b1!4m5!3m4!1s0x809ada557d7929af:0x4b8201a127d64751!8m2!3d38.5749736!4d-121.4019994'
  },
  {
    id: uuidv4(),
    src: InNout,
    name: 'In-N-Out',
    phoneNumber: '(800) 786-1000',
    phoneNumberLink: 'tel:+1-800-786-1000',
    address: '3501 Truxel Rd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/5rtssiGZb2KyLQpKA'
  },
  {
    id: uuidv4(),
    src: Chilis,
    name: `Chili's`,
    phoneNumber: '(916) 285-8703',
    phoneNumberLink: 'tel:+1-916-285-8703',
    address: '3870 Truxel Rd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/iFCDnk23ywRSH5HN7'
  },

  {
    id: uuidv4(),
    src: PaneraBread,
    name: 'Panera Bread',
    phoneNumber: '(916) 515-2012',
    phoneNumberLink: 'tel:+1-916-515-2012',
    address: '3571 N Freeway Blvd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/erkno1X3d68db3BK9'
  },
  {
    id: uuidv4(),
    src: TacoBell,
    name: 'Taco Bell',
    phoneNumber: '(916) 649-1790',
    phoneNumberLink: 'tel:+1-916-649-1790',
    address: '3820 Northgate Blvd, Sacramento, CA 95834',
    addressLink: 'https://goo.gl/maps/2Xyd3uF1trWQydeH6'
  }
];

export const CISC323HomePageAssignment1Data = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Do the following Hands-on Project exercises: 1.3 - 1.17 with the exception of 1.13 and 1.14.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 1.7.1, 1.11.4, 1.16.2, 1.17.5.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
export const CISC323HomePageLab1Data = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1TWyWLsdkvCXJ_0MHBm7YVZze5AkAuYyk',
  labName: 'Lab 1',
  gradeReceived: `${calcGrade(50, 50)}`,
  codeLink: 'tree/main/Lab1'
};
export const CISC323HomePageAssignment2Data = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Do the following Hands-on Project exercises: 2.1 - 2.12 with the exception of 2.2.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 2.5.1, 2.7.4, 2.8.2, and 2.11.3.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
export const CISC323HomePageLab2Data = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1Scuag1Lx4nHSaGpQHbTn74AqVCh9-z7K',
  labName: 'Lab 2',
  gradeReceived: `${calcGrade(50, 50)}`,
  codeLink: 'tree/main/Lab2'
};
export const CISC323HomePageAssignment3Data = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Do the following Hands-on Project exercises: 3.1 - 3.14.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 3.5.15, 3.9.3, 3.10.2, and 3.14.1.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
export const CISC323HomePageLab3Data = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1sazoa_HS8DuGgRgk9ulsmVDLImiW9wx3',
  labName: 'Lab 3',
  gradeReceived: `${calcGrade(50, 50)}`,
  codeLink: 'tree/main/Lab3'
};
export const CISC323HomePageAssignment4Data = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Do the following Hands-on Project exercises: 4.1 - 4.18.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 4.4.5, 4.8.7,  4.10.9, and 4.11.3.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
export const CISC323HomePageLab4Data = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1TfnGSMNoKj98MSTa7phNso60rP8n7Grx',
  labName: 'Lab 4',
  gradeReceived: `${calcGrade(50, 50)}`,
  codeLink: 'tree/main/Lab4'
};
export const CISC323HomePageAssignment5Data = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Do the following Hands-on Project exercises: 5.1 - 5.20.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 5.9.7, 5.11.2, 5.14.1, and 5.19.7'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
export const CISC323HomePageLab5Data = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1gw-D8izyfCzZl_XSJyno0aonFSddVyXT',
  labName: 'Lab 5',
  gradeReceived: `${calcGrade(50, 50)}`,
  codeLink: 'tree/main/Lab5'
};

export const CISC323HomePageAssignment6Data = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Do the following Hands-on Project exercises: 6.1 - 6.14.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 6.4.12,  6.7.8,  6.9.15, and 6.13.6.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
export const CISC323HomePageLab6Data = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1F2HW95Yob-3DtKjWaHRPdZmi-vBdgQCS',
  labName: 'Lab 6',
  gradeReceived: `${calcGrade(50, 50)}`,
  codeLink: 'tree/main/Lab6'
};
export const CISC323HomePageAssignment7Data = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Do the following Hands-on Project exercises: 6.15 - 6.20.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Take screenshots of the screen output for the following exercises: 6.15.3, 6.16.7, 6.19.3, and 6.20.5.'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Once you have completed the exercises take a screenshot of the screen output for the history command.'
  }
];
export const CISC323HomePageLab7Data = {
  urlToFile: 'https://drive.google.com/uc?export=download&id=1_XV63Amgk15YIkpDtgUhbGHQAHaCxemL',
  labName: 'Lab 7',
  gradeReceived: `${calcGrade(100, 100)}`,
  codeLink: 'tree/main/FinalProject'
};

export const CISC323HomePageData = [
  { id: uuidv4(), assignment: CISC323HomePageAssignment1Data, lab: CISC323HomePageLab1Data, number: 1 },
  { id: uuidv4(), assignment: CISC323HomePageAssignment2Data, lab: CISC323HomePageLab2Data, number: 2 },
  { id: uuidv4(), assignment: CISC323HomePageAssignment3Data, lab: CISC323HomePageLab3Data, number: 3 },
  { id: uuidv4(), assignment: CISC323HomePageAssignment4Data, lab: CISC323HomePageLab4Data, number: 4 },
  { id: uuidv4(), assignment: CISC323HomePageAssignment5Data, lab: CISC323HomePageLab5Data, number: 5 },
  { id: uuidv4(), assignment: CISC323HomePageAssignment6Data, lab: CISC323HomePageLab6Data, number: 6 },
  { id: uuidv4(), assignment: CISC323HomePageAssignment7Data, lab: CISC323HomePageLab7Data, number: 7 }
];

export const CISW308Assignment1AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Your Name'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'Heading for Class title/#'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'List of Assignment'
  },
  {
    id: uuidv4(),
    completed: true,
    name: 'No graphics'
  }
];

export const CISW308Assignment2AssignmentData = [
  { id: uuidv4(), name: 'What were the websites that you found? (include URLs)' },
  { id: uuidv4(), name: 'How did you test the websites? (name devices and/or browsers)' },
  { id: uuidv4(), name: 'On the responsive site, what elements changed? (text, images, layout, etc)' },
  {
    id: uuidv4(),
    name: 'On the non-responsive site, describe the viewing experience from a user’s perspective. What could be improved?'
  }
];
export const CISW308Assignment2DataUnresposiveList = [
  {
    id: uuidv4(),
    link: 'http://dequeuniversity.com/library/responsive/1-non-responsive'
  },
  { id: uuidv4(), link: 'http://sacramento.craigslist.org' },
  { id: uuidv4(), link: 'http://www.pennyjuice.com' }
];
export const CISW308Assignment2DataResposiveList = [
  { id: uuidv4(), link: 'https://dequeuniversity.com/library/responsive/1-responsive' },
  { id: uuidv4(), link: 'https://www.dropbox.com' },
  { id: uuidv4(), link: 'https://dribbble.com' },
  { id: uuidv4(), link: 'https://github.com' },
  { id: uuidv4(), link: 'http://www.starbucks.com' },
  { id: uuidv4(), link: 'https://slack.com' },
  { id: uuidv4(), link: 'http://css-tricks.com' }
];

export const CISW308Assignment2DataQuestion3List = [
  {
    id: uuidv4(),
    name: 'By viewing the same website on a desktop computer and then viewing the same site on a mobile device.'
  },

  { id: uuidv4(), name: 'By emulating different screen sizes/devices in the developer tools.' },
  { id: uuidv4(), name: 'By resizing the browser window.' }
];
export const CISW308Assignment2DataQuestion4List = [
  {
    id: uuidv4(),
    name: 'Content wrapped, resized, and moved to adapt to the space available. Images resized. Text wrapped. Sidebars moved out of the way.'
  },

  {
    id: uuidv4(),
    name: 'Horrible, as content overflowed or on the mobile buttons were so small and thus the website was unusable.'
  }
];

export const CISW308Assignment3AssignmentData = [
  { id: uuidv4(), completed: true, name: 'auto-centered 1-month calendar.' },
  { id: uuidv4(), completed: true, name: 'month heading above calendar.' },
  {
    id: uuidv4(),
    completed: true,
    name: 'atleast 5 media queries (for each breakpoint change the calendar width, text-size, and background color ).'
  }
];

export const CISW308Assignment3DayData = [
  { id: uuidv4(), name: 'S' },
  { id: uuidv4(), name: 'M' },
  { id: uuidv4(), name: 'T' },
  { id: uuidv4(), name: 'W' },
  { id: uuidv4(), name: 'T' },
  { id: uuidv4(), name: 'F' },
  { id: uuidv4(), name: 'S' }
];
export const CISW308Assignment3Week0Data = [
  { id: uuidv4(), name: '' },
  { id: uuidv4(), name: '' },
  { id: uuidv4(), name: '' },
  { id: uuidv4(), name: '' },
  { id: uuidv4(), name: '01' },
  { id: uuidv4(), name: '02' },
  { id: uuidv4(), name: '03' }
];
export const CISW308Assignment3Week1Data = [
  { id: uuidv4(), name: '04' },
  { id: uuidv4(), name: '05' },
  { id: uuidv4(), name: '06' },
  { id: uuidv4(), name: '07' },
  { id: uuidv4(), name: '08' },
  { id: uuidv4(), name: '09' },
  { id: uuidv4(), name: '10' }
];
export const CISW308Assignment3Week2Data = [
  { id: uuidv4(), name: '11' },
  { id: uuidv4(), name: '12' },
  { id: uuidv4(), name: '13' },
  { id: uuidv4(), name: '14' },
  { id: uuidv4(), name: '15' },
  { id: uuidv4(), name: '16' },
  { id: uuidv4(), name: '17' }
];
export const CISW308Assignment3Week3Data = [
  { id: uuidv4(), name: '18' },
  { id: uuidv4(), name: '19' },
  { id: uuidv4(), name: '20' },
  { id: uuidv4(), name: '21' },
  { id: uuidv4(), name: '22' },
  { id: uuidv4(), name: '23' },
  { id: uuidv4(), name: '24' }
];
export const CISW308Assignment3Week4Data = [
  { id: uuidv4(), name: '25' },
  { id: uuidv4(), name: '26' },
  { id: uuidv4(), name: '27' },
  { id: uuidv4(), name: '28' },
  { id: uuidv4(), name: '29' },
  { id: uuidv4(), name: '30' },
  { id: uuidv4(), name: '' }
];

export const CISW400Assignment1AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'JavaScript code to display at the bottom of the page - the date the page was last modified.'
  },
  { id: uuidv4(), completed: true, name: 'List of links to the assignments you complete.' }
];

const CISC324Chapte7Question20 = `Consider the following shell script:

echo -e "What is your favorite color? - - › \\c"
read REPLY
if ["$REPLY" = "red" -o "$REPLY" = "blue" ]
then
echo "The answer is red or blue."
else
echo "The answer is not fi red nor blue."
fi

What would be displayed if a user executes the program in question 20 and answered Blue when prompted?`;

export const CISW327Chapter7ReviewQuestionsData = [
  {
    id: uuidv4(),
    question:
      'Because Standard Error and Standard Output represent the results of a command and Standard Input represents the input required for a command, only Standard Error and Standard Output can be redirected to/from a file.',

    possibleAnswers: [
      {
        id: uuidv4(),
        answer: 'True'
      },
      {
        id: uuidv4(),
        answer: 'False'
      }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[1].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'Before a user-defined variable can be used by processes that run in subshells, that variable must be _______________?',
    possibleAnswers: [
      { id: uuidv4(), answer: 'imported' },
      { id: uuidv4(), answer: 'validated by running the env command' },
      { id: uuidv4(), answer: 'exported' },
      { id: uuidv4(), answer: 'redirected to the BASH shell' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[2].id];
    }
  },
  {
    id: uuidv4(),
    question: 'The alias command can be used to make a shortcut to a single command.',
    possibleAnswers: [
      {
        id: uuidv4(),
        answer: 'True'
      },
      {
        id: uuidv4(),
        answer: 'False'
      }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[0].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'Which of the following files is always executed immediately after any user logs in to a Linux system and receives a BASH shell?',

    possibleAnswers: [
      { id: uuidv4(), answer: '/etc/profile' },
      { id: uuidv4(), answer: '~/.bash_profile' },
      { id: uuidv4(), answer: '~/.bash_login' },
      { id: uuidv4(), answer: '~/.profile' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[0].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'Which command could you use to see a list of all environment and user-defined shell variables as well as their current values?',

    possibleAnswers: [
      { id: uuidv4(), answer: 'ls /var' },
      { id: uuidv4(), answer: 'env' },
      { id: uuidv4(), answer: 'set' },
      { id: uuidv4(), answer: 'echo' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[2].id];
    }
  },

  {
    id: uuidv4(),
    question: 'Every if construct begins with if and must be terminated with _______________.',
    possibleAnswers: [
      { id: uuidv4(), answer: 'end' },
      { id: uuidv4(), answer: 'endif' },
      { id: uuidv4(), answer: 'stop' },
      { id: uuidv4(), answer: 'fi' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[3].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'Which of the following will display the message welcome home if the cd /home/user1 command is successfully executed?',
    possibleAnswers: [
      { id: uuidv4(), answer: 'cd /home/user1 && echo "welcome home"' },
      { id: uuidv4(), answer: 'cat "welcome home" II cd /home/user1' },
      { id: uuidv4(), answer: 'cd /home/user1 || cat "welcome home"' },
      { id: uuidv4(), answer: 'echo "welcome home" && cd /home/user1' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[0].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'The current value for the HOME variable is displayed by which of the following commands? (Choose all that apply.)',
    possibleAnswers: [
      { id: uuidv4(), answer: 'echo HOME=' },
      { id: uuidv4(), answer: 'echo ~' },
      { id: uuidv4(), answer: 'echo $HOME' },
      { id: uuidv4(), answer: 'echo ls HOME' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[1].id, this.possibleAnswers[2].id];
    }
  },
  {
    id: uuidv4(),
    question: 'Which of the following file descriptor numbers represents stdout?',

    possibleAnswers: [
      { id: uuidv4(), answer: '2' },
      { id: uuidv4(), answer: '0' },
      { id: uuidv4(), answer: '1' },
      { id: uuidv4(), answer: '3' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[2].id];
    }
  },
  {
    id: uuidv4(),
    question: 'Which of the following operators reverses the meaning of a test statement?',
    possibleAnswers: [
      { id: uuidv4(), answer: '#!' },
      { id: uuidv4(), answer: '-o' },
      { id: uuidv4(), answer: '-a' },
      { id: uuidv4(), answer: '!' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[3].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'What would be the effect of using the alias command to make an alias for the date command named cat in honor of your favorite pet?',

    possibleAnswers: [
      {
        id: uuidv4(),
        answer:
          'It cannot be done because there already is an environment variable cat associated with the cat command.'
      },
      { id: uuidv4(), answer: 'It cannot be done because there already is a command cat on the system.' },
      {
        id: uuidv4(),
        answer:
          'When you use the cat command at the command prompt with the intention of viewing a text file, the date appears instead.'
      },
      { id: uuidv4(), answer: 'There is no effect until the alias is imported because it is a user-declared variable.' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[2].id];
    }
  },
  {
    id: uuidv4(),
    question: 'How do you indicate a comment line in a shell script?',

    possibleAnswers: [
      { id: uuidv4(), answer: 'There are no comment lines in a shell script.' },
      { id: uuidv4(), answer: 'Begin the line with #!.' },
      { id: uuidv4(), answer: 'Begin the line with !.' },
      { id: uuidv4(), answer: 'Begin the line with #.' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[3].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'You have redirected Standard Error to a file called Errors. You view the contents of this file afterward and notice that there are six error messages. After repeating the procedure, you notice that there are only two error messages in this file. Why?',

    possibleAnswers: [
      { id: uuidv4(), answer: 'After you open the file and view the contents, the contents are lost.' },
      { id: uuidv4(), answer: 'The system generated different Standard Output.' },
      {
        id: uuidv4(),
        answer:
          'You did not append the Standard Error to the Error file, and as a result it was overwritten when the command was run a second time.'
      },
      {
        id: uuidv4(),
        answer:
          'You must specify a new file each and every time you redirect because the system creates the specified file by default.'
      }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[2].id];
    }
  },
  {
    id: uuidv4(),
    question: 'The sed and awk commands are filter commands commonly used to form data within a pipe.',
    possibleAnswers: [
      {
        id: uuidv4(),
        answer: 'True'
      },
      {
        id: uuidv4(),
        answer: 'False'
      }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[1].id];
    }
  },
  {
    id: uuidv4(),
    question: 'What is wrong with the following command string: ls /etc/hosts › listofhostfile?',
    possibleAnswers: [
      { id: uuidv4(), answer: 'Nothing is wrong with the command.' },
      {
        id: uuidv4(),
        answer:
          'The file descriptor was not declared; unless 1 for standard output or 2 for standard error is indicated, the command will fail.'
      },
      {
        id: uuidv4(),
        answer:
          'The is command is one of the commands that cannot be used with redirection. You must use I to pipe instead.'
      },
      {
        id: uuidv4(),
        answer:
          'The file listofhostfile will always only contain standard error because a file descriptor for was not declared.'
      }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[0].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'Which of the following is not necessarily generated by every command on the system? (Choose all that apply.)',
    possibleAnswers: [
      { id: uuidv4(), answer: 'Standard Input' },
      { id: uuidv4(), answer: 'Standard Deviation' },
      { id: uuidv4(), answer: 'Standard Output' },
      { id: uuidv4(), answer: 'Standard Error' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[0].id];
    }
  },
  {
    id: uuidv4(),
    question: 'Which construct can be used in a shell script to read Standard Input and place it in a variable?',

    possibleAnswers: [
      { id: uuidv4(), answer: 'read' },
      { id: uuidv4(), answer: 'sum' },
      { id: uuidv4(), answer: 'verify' },
      { id: uuidv4(), answer: 'test' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[0].id];
    }
  },
  {
    id: uuidv4(),
    question:
      'A for construct is a loop construct that processes a specified list of objects.As a result, it is executed as long as there are remaining objects to process.',
    possibleAnswers: [
      { id: uuidv4(), answer: 'True' },
      { id: uuidv4(), answer: 'False' }
    ],

    myAnswer: function () {
      return [this.possibleAnswers[0].id];
    }
  },
  {
    id: uuidv4(),
    question: 'What does » accomplish when entered on the command line after a command ?',
    possibleAnswers: [
      { id: uuidv4(), answer: 'It redirects both Standard Error and Standard Output to the same location.' },

      { id: uuidv4(), answer: 'It does not accomplish anything.' },

      { id: uuidv4(), answer: 'It redirects Standard Error and Standard Input to the same location.' },

      { id: uuidv4(), answer: 'It appends Standard Output to a file.' }
    ],

    myAnswer: function () {
      return [this.possibleAnswers[3].id];
    }
  },

  {
    id: uuidv4(),
    question: CISC324Chapte7Question20,
    possibleAnswers: [
      { id: uuidv4(), answer: 'The answer is red or blue.' },

      { id: uuidv4(), answer: 'The answer is not red nor blue.' },

      { id: uuidv4(), answer: 'The code would cause an error.' },

      { id: uuidv4(), answer: 'The answer is red or blue. The answer is not red nor blue.' }
    ],
    myAnswer: function () {
      return [this.possibleAnswers[1].id];
    }
  }
];

export const CISW400Assignment7ThemeOptions: {
  id: string;
  value: string;
  icon: SemanticICONS;
  color: SemanticCOLORS;
}[] = [
  { id: uuidv4(), value: 'spring', icon: 'leaf', color: 'green' },
  { id: uuidv4(), value: 'summer', icon: 'sun', color: 'yellow' },
  { id: uuidv4(), value: 'fall', icon: 'rain', color: 'orange' },
  { id: uuidv4(), value: 'winter', icon: 'snowflake', color: 'teal' }
];

export const CISW400Assignment7AssignmentData = [
  {
    id: uuidv4(),
    completed: true,
    name: 'Theme Changer - offer at least 3 diffrent themes, and save user theme preference to Cookies.'
  }
];

export const CISW400Assignment7AssignmentExtraCreditData = [
  { id: uuidv4(), completed: true, name: 'Create a Mortgage Calculator.' }
];
