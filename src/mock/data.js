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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};
//SKILLS DATA
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
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
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
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
