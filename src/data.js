//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
} from 'react-icons/fi';

// projects images
import tran1 from './assets/img/projects/Transcript_unlocked1.jpg';
import tran2 from './assets/img/projects/Transcript_unlocked2.jpg';
import resume from './assets/img/projects/ดนัยพงศ์ แสงอรุณ Resume.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/c++.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/java.png';

// testimonial images
import new1 from './assets/img/testimonials/new.jpg'
import jj from './assets/img/testimonials/jj.jpg'
import max from './assets/img/testimonials/max.jpg'

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/channel/UC-tOcFcsEh5trIFIa1kI3xg',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/flukedanaii/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Flxke15?tab=repositories',
  },
  {
    icon: <FiFacebook/>,
    href: 'https://www.facebook.com/flukk.danaipong.7/',
  },
];


// projects
export const projectsData = [
  {
    id: '7',
    image: resume,
    name: 'Resume',
    category: 'Resume',
  },
  {
    id: '8',
    image: tran1,
    name: 'Transcript',
    category: 'Transcript',
  },
  {
    id: '9',
    image: tran2,
    name: 'Transcript',
    category: 'Transcript',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Resume',
  },
  {
    name: 'Transcript',
  },

];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];



// testimonials
export const testimonials = [
  {
    authorImg: new1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Chanasorn Somthong',
    authorPosition: 'EnET-C ปี 4',
  },
  {
    authorImg: jj,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Jinjishot Arwootsopapuri',
    authorPosition: 'EnET-C ปี 4',
  },
  {
    authorImg: max,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Suranat Muksaksri',
    authorPosition: 'EnET-C ปี 4',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
