import { useI18N } from 'context/i18n';
import Image from 'next/image';
import styles from './styles.module.css';

const TECHNOLOGIES = {
  react: {
    key: 't1',
    name: 'React',
    logo: '/icons/react.svg',
    url: 'https://es.reactjs.org/',
  },
  nextjs: {
    key: 't2',
    name: 'Next.js',
    logo: '/icons/nextdotjs.svg',
    url: 'https://nextjs.org/',
  },
  postgresql: {
    key: 't3',
    name: 'PostgreSQL',
    logo: '/icons/postgresql.svg',
    url: 'https://www.postgresql.org/',
  },
  algolia: {
    key: 't4',
    name: 'Algolia',
    logo: '/icons/algolia.svg',
    url: 'https://www.algolia.com/',
  },
  railway: {
    key: 't5',
    name: 'Railway',
    logo: '/icons/railway.svg',
    url: 'https://railway.app/',
  },
  googlemaps: {
    key: 't6',
    name: 'Google Maps',
    logo: '/icons/googlemaps.svg',
    url: 'https://console.cloud.google.com/',
  },
  mongodb: {
    key: 't7',
    name: 'Mongo DB',
    logo: '/icons/mongodb.svg',
    url: 'https://www.mongodb.com/',
  },
  sendgrid: {
    key: 't8',
    name: 'Sendgrid',
    logo: '/icons/twilio.svg',
    url: 'https://www.sendgrid.com/',
  },
  sqlServer: {
    key: 't9',
    name: 'SQL Server',
    logo: '/icons/microsoftsqlserver.svg',
    url: 'https://www.microsoft.com/en-us/sql-server/',
  },
  gatsby: {
    key: 't10',
    name: 'Gatsby',
    logo: '/icons/gatsby.svg',
    url: 'https://www.gatsbyjs.org/',
  },
  js: {
    key: 't11',
    name: 'JavaScript',
    logo: '/icons/javascript.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  html: {
    key: 't12',
    name: 'HTML',
    logo: '/icons/html5.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  css: {
    key: 't13',
    name: 'CSS',
    logo: '/icons/css3.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  astro: {
    key: 't14',
    name: 'Astro',
    logo: '/icons/astro.svg',
    url: 'https://astro.build/',
  },
  preact: {
    key: 't15',
    name: 'Preact',
    logo: '/icons/preact.svg',
    url: 'https://preactjs.com/',
  },
};

const WIDTHS_IMAGES = {
  movil: {
    width: 534,
    height: 603,
  },
  pc: {
    width: 423,
    height: 353,
  },
  pcApple: {
    width: 474,
    height: 351,
  },
};

const PROJECTS = [
  {
    id: 'p1',
    title: 'SALUDQUETZAL',
    description: {
      EN: 'Web application to search for health services in my city.',
      ES: 'Aplicación web para buscar servicios de salud en mi ciudad.',
    },
    img: '/projects/saludquetzal-images.png',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://salud-serach-aplp.vercel.app/',
    urlCode: null,
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.algolia,
      TECHNOLOGIES.railway,
      TECHNOLOGIES.googlemaps,
    ],
  },
  {
    id: 'p2',
    title: 'HANGAME',
    description: {
      EN: 'A game about the hangman game with words from Spanish and English, where you can play with a friend.',
      ES: 'Un juego hacer del juego del ahorcado con palabras del Español e Inglés, donde tú podrás jugar con un amigo.',
    },
    img: '/projects/hangame-images.png',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://hangame-app.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/hangame-app',
    technologies: [TECHNOLOGIES.nextjs, TECHNOLOGIES.mongodb],
  },
  {
    id: 'p3',
    title: 'Web APP for Production Assignment and review',
    description: {
      EN: 'Web system to manage and assign the production of policies for an insurer with a log that saves each action performed.',
      ES: 'Sistema web para gestionar y asignar la producción de polizas para una aseguradora con una bitácora que guarda cada acción realizada.',
    },
    img: '/projects/production-images.png',
    size: WIDTHS_IMAGES.pc,
    urlDemo: null,
    urlCode: 'https://github.com/Renato6GS/polizas-app',
    technologies: [TECHNOLOGIES.nextjs, TECHNOLOGIES.sqlServer, TECHNOLOGIES.sendgrid],
  },
  {
    id: 'p4',
    title: 'POOL LANDING PAGE',
    description: {
      // eslint-disable-next-line quotes
      EN: "My first paid project with me to a computer science teacher, to advertise the client's pool maintenance services.",
      ES: 'Mi primer proyecto pagado con mi profesor de informática, para publicitar los servicios de mantenimineto de piscinas de un cliente.',
    },
    img: '/projects/pool-images.png',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://pool-landing-page.vercel.app/',
    urlCode: 'https://github.com/Cloweling/pool-landing-page',
    technologies: [TECHNOLOGIES.gatsby],
  },
  {
    id: 'p5',
    title: 'CALCULATOR APP',
    description: {
      EN: 'A multi-theme calculator with the possibility of expanding its options with a scientific calculator.',
      ES: 'Un calculador multi-tema con la posibilidad de expandir sus opciones con una calculadora científica.',
    },
    img: '/projects/calculator-images.png',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://calculator-app-dusky.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/calculator-app',
    technologies: [TECHNOLOGIES.react],
  },
  {
    id: 'p6',
    title: 'YOUTUBE CLONE',
    description: {
      EN: 'A little YouTube Clone. There is still work to do.',
      ES: 'Un pequeño clon de YouTube. Aun hay trabajo por hacer.',
    },
    img: '/projects/youtube-images.png',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://youtube-clone-ecru.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/youtube-clone',
    technologies: [TECHNOLOGIES.nextjs],
  },
  {
    id: 'p7',
    title: 'BLOGR',
    description: {
      EN: 'Landing page for product advertisement.',
      ES: 'Landing page para publicidad de productos.',
    },
    img: '/projects/blogr-images.png',
    size: WIDTHS_IMAGES.movil,
    urlDemo: 'https://blogr-landing-page-6gs.netlify.app/',
    urlCode: 'https://github.com/Renato6GS/blogr-landing-page',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.js],
  },
  {
    id: 'p8',
    title: 'Sunnysisde Agency Landing Page',
    description: {
      EN: 'My first page made entirely with vanilla.',
      ES: 'Mi primera página hecha enteramente con vanilla.',
    },
    img: '/projects/sunnyside-images.png',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://goofy-perlman-3d0bc0.netlify.app/',
    urlCode: 'https://github.com/Renato6GS/Sunnyside-agency-landing-page',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.js],
  },
  {
    id: 'p9',
    title: 'UMG^REST',
    description: {
      EN: 'Menu of a virtual restaurant where you can consult the different foods and drinks that it offers.',
      ES: 'Menú de un restaurante virtual donde puedes consultar los diferentes alimentos y bebidas que ofrece.',
    },
    img: '/projects/umg-rest-images.png',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://umg-restaurant-app.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/umg-restaurant-app',
    technologies: [TECHNOLOGIES.nextjs],
  },
  {
    id: 'p10',
    title: 'UMG Clone',
    description: {
      EN: 'A replication of the landing page of my university.',
      ES: 'Una replicación de la página de inicio de mi universidad.',
    },
    img: '/projects/umg-images.png',
    size: WIDTHS_IMAGES.pcApple,
    urlDemo: 'https://landing-umg-clone.vercel.app/',
    urlCode: 'https://github.com/Renato6GS/landing-umg-clone',
    technologies: [TECHNOLOGIES.astro, TECHNOLOGIES.preact],
  },
];

export default function Projects() {
  const { t } = useI18N();

  return (
    <section className={styles.projectsSection} id='developedProjects'>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('TITLE_PROJECTS') || 'Developed Projects'}</h2>
        <div className={styles.listOfProjectsContainer}>
          {PROJECTS.map(({ key, title, description, img, size, urlDemo, urlCode, technologies }) => {
            return (
              <article key={key} className={styles.projectContainer}>
                <div className={styles.projectImageContainer}>
                  <Image src={img} alt={title} width={size.width} height={size.height} />
                </div>
                <div className={styles.projectInfoContainer}>
                  <div className={styles.firstDescription}>
                    <h3 className={styles.projectTitle}>{title}</h3>
                    <p className={styles.projectDescription}>
                      {description[t('PROJECT_LANGUAGE')] || 'Description no found'}
                    </p>
                    <div className={styles.linksContainer}>
                      {urlDemo && (
                        <a className={styles.link} href={urlDemo}>
                          Demo
                          <Image src={'/icons/arrowToRight.svg'} width='24' height='24' alt={'Demo of the project'} />
                        </a>
                      )}
                      {urlCode && (
                        <a className={styles.link} href={urlCode}>
                          GitHub
                          <Image src={'/icons/github.svg'} width='24' height='24' alt={'Link to code source'} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className={styles.technologiesContainer}>
                    <span className={styles.techTitle}>{t('TECHNOLOGIES')}</span>
                    <div className={styles.listOfTechnologiesContainer}>
                      {technologies.map(({ key, name, logo, url }) => {
                        return (
                          <a key={key} className={styles.link} href={url}>
                            <Image src={logo} width='24' height='24' alt={name} />
                            {name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
