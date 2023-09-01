import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  solidity,
  angular,
  nextjs,
  ethersjs,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  wordpress,
  touch,
  malta,
  oasisx,
  metapreneurs,
  threejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Blockchain Developer',
    icon: mobile,
  },
  {
    title: 'Mobile App Developer',
    icon: backend,
  },
  {
    title: 'DevOps',
    icon: creator,
  },
]

const technologies = [
//   {
//     name: 'HTML 5',
//     icon: html,
//   },
//   {
//     name: 'CSS 3',
//     icon: css,
//   },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Solidity',
    icon: solidity,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Ethers',
    icon: ethersjs,
  },
  {
    name: 'Next',
    icon: nextjs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
//   {
//     name: 'figma',
//     icon: figma,
//   },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Full Stack and Smart Contract Developer',
    company_name: 'Cryptoware',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'Jan 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js NodeJs and Solidity and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Developed and maintained a production level NFT market place, check it out: oasisx.world',
      'Developed and produced audited smart contracts on real world finTech products. They included liquidity pools, arbitrage, and asset management and trading',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'Atech Australia',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'June 2021 - Jan 2022',
    points: [
      'Developing and maintaining web applications using Angular, VueJS, and .Net',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Developed and maintained enterprise-level CRM systems',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Telecom Intern',
    company_name: 'Touch Lebanon',
    icon: touch,
    iconBg: '#383E56',
    date: 'July 2021 - Sep 2021',
    points: [
      'Covered the main aspects of how telecommunication works for mobile cell companies.',
      'Covered and experimented on the technologies that power up communication in Lebanon',
      'Covered advanced topics such as 5G and 4G-LTE',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company_name: '',
    icon: wordpress,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using Wordpress, React, Solidity, PHP and other related technologies such as Elementor.',
      'Developed Real estate websites for multiple real estate companies. Check one of them out: www.housesinmalta.com',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Developed Web3 applications such as NFT Launchpads with responsive UI and UX for clients around the world',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'OasisX MarketPlace',
    description:
      'Web3 marketplace catered for the web3 space, NFTs, Launchpad, asset management all in one place',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresdb',
        color: 'green-text-gradient',
      },
      {
        name: 'TsEd',
        color: 'pink-text-gradient',
      },
      {
        name: 'Nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Solidity',
        color: 'green-text-gradient',
      },
    ],
    image: oasisx,
    source_code_link: 'https://oasisx.world/home',
  },
  {
    name: 'Houses in Malta',
    description:
      'Real estate website that lets users list, purchase, and view properties of all kinds in malta. Admin panel with morgage and package calculators',
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'php',
        color: 'green-text-gradient',
      },
      {
        name: 'figma',
        color: 'pink-text-gradient',
      },
    ],
    image: malta,
    source_code_link: 'https://www.housesinmalta.com/',
  },
  {
    name: 'Metapreneurs',
    description:
      'A sold out nft project in the Mena region where users get to indulge in the benefits of owning the NFT, such as a web3 portal, web3 authentication for courses, videos and resourses',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: metapreneurs,
    source_code_link: 'https://www.themetapreneurs.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
