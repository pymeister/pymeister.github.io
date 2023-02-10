// gitprofile.config.js

const config = {
  github: {
    username: 'pymeister', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'lancemeister',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'k.lancemeister',
    dev: 'pymeister',
    stackoverflow: '14851839/lance-meister', // format: userid/username
    website: 'https://pymeister.github.io/',
    phone: '',
    email: 'dev.pymeister@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
   
    'Django',
    'Python',
    'Pandas',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Heroku',
    'CSS',
    'JavaScript',
    'HTML',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Self Employed',
      position: 'Freelance Marketing',
      from: 'May 2020',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'XXXLutz Marketing',
      position: 'Technical SEO Manager',
      from: 'May 2020',
      to: 'May 2021',
      companyLink: 'https://www.xxxlutz.de',
    },
  ],
   certifications: [
    {
      name: 'Python for Marketing',
      body: 'Certificate Id: AboyQixDI-AfafXQiCV4OUuzuhPi',
      year: 'March 2022',
      link: 'https://cdn.jsdelivr.net/gh/pymeister/pymeister.github.io@main/certificates/CertificateOfCompletion_Python%20for%20Marketing.pdf'
    },
  ], 
//      certifications: [
//     {
//       name: 'Advanced Google Ads',
//       body: 'Certificate Id: AVAzLaLEz7wGDbI-zSRFJrJJ6ck8',
//       year: 'May 2022',
//       link: 'https://cdn.jsdelivr.net/gh/pymeister/pymeister.github.io@main/certificates/CertificateOfCompletion_Advanced%20Google%20Ads.pdf'
//     },
//   ], 
//      certifications: [
//     {
//       name: 'Advanced Web Development with Django',
//       body: 'Certificate Id: Ab1l1jhME3gcSqQ2E9Rl_uL9iVH5',
//       year: 'May 2020',
//       link: 'https://cdn.jsdelivr.net/gh/pymeister/pymeister.github.io@main/certificates/CertificateOfCompletion_Advanced%20Web%20Development%20with%20Django.pdf'
//     },
//   ], 
//      certifications: [
//     {
//       name: 'Affiliate Marketing Foundations',
//       body: 'Certificate Id: AQXdFsj01a2R_5tHwAqZquBxV4pO',
//       year: 'January 2023',
//       link: 'https://cdn.jsdelivr.net/gh/pymeister/pymeister.github.io@main/certificates/CertificateOfCompletion_Affiliate%20Marketing%20Foundations.pdf'
//     },
//   ], 
   
  education: [
    {
      institution: 'Southern Methodist University',
      degree: 'Bachelors',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'North Lake College',
      degree: 'Assosciates',
      from: '2012',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Meister Affiliate Shop',
      description: 'Amazon Affiliate Website',
      imageUrl: 'https://www.meisteraffiliateshop.com/static/logo/vertical_logo.b6108b73944e.svg',
      link: 'https://www.meisteraffiliateshop.com/',
    },
    {
      title: 'Kletter.Info',
      description:
        'Best climbing locations in Germany',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'k.lancemeister', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3360880',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
