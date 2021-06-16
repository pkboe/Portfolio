import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Pranil Kharche || Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Pranil's Portfolio`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Greetings! my name is`,
  name: 'Pranil Kharche',
  subtitle: `I'm a Full-Stack Developer `,
  cta: 'About Me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi!, I'm Pranil Kharche, a Computer Engineering student.I do love to code in react and revolve around new tech.`,
  paragraphTwo: 'I 🤍 to code and build cross platform apps.',
  paragraphThree: `I'm currently learning so many things like Music Theory, Ui/Ux and Spring Boot and much to come`,
  resume: 'https://1drv.ms/b/s!AuTBNfbqCVxqhE11bTxAKml2KRb2', // if no resume, the button will not show up
};
// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    title: 'HTML5',
  },
  {
    id: nanoid(),
    title: 'CSS3',
  },
  {
    id: nanoid(),
    title: 'JS',
    extra: 'JS',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
  },
  {
    id: nanoid(),
    title: 'React',
  },
  {
    id: nanoid(),
    title: 'angular',
  },
  {
    id: nanoid(),
    title: 'Git-alt',
  },
  {
    id: nanoid(),
    title: 'Python',
  },
  {
    id: nanoid(),
    title: 'Node-Js',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    extra: 'envira',
  },
];
// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Metricgrade',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Billstatic',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Covid-19 Tracker',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Enlist',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Twitter Sentiment Analyser',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanna get in touch ?',
  btn: 'Write Me',
  email: 'pranilkharche@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/PranilKharche',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/pkboe',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pranil/?originalSubdomain=in',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pkboe',
    },
    { id: nanoid(), name: 'instagram', url: 'https://www.instagram.com/pranilkharche' },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
