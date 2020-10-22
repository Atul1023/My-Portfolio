/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Atul Raj",
  logo_name: "AtulRaj",
  // nickname: "layman_brother",
  subTitle:
    "Just another wannabe developer having an experience of building Web and Mobile applications with Flutter, Javascript/Reactjs and few other cool frameworks.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/atul1023",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/atul-r-b14bb6167/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:07atul1023@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/07_atul_1023",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/atul.ar1023/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ar_atul07/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Programming Languages",
      skills: [],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos-c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos-dart",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web and Mobile development",
      skills: [],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "logos-html-5",
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "logos-css-3",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos-flutter",
        },
      ],
    },
    {
      title: "Others",
      skills: [],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "logos-git-icon",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "logos-github-icon",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "kiit_logo.png",
      alt_name: "KIIT Bhubaneswar",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied basic IT engineering subjects like DS, Algorithms, DBMS, OS, OOP, Networking etc.",
        "⚡ Apart from this, I have done courses on Machine Learning and Web Development.",
      ],
      website_link: "http://kiit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "C++",
      subtitle: "- Wade Fagen-Ulmschneider",
      logo_path: "illinois_logo.png",
      certificate_link:
        "https://coursera.org/share/0af7601223963f93316a556e0ca49b2f",
      alt_name: "University of Illinois",
      color_code: "#fff",
    },
    {
      title: "Python",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/536a11af4f54d8fd07900aa0dce707a7",
      alt_name: "Google",
      color_code: "#fff",
    },
    {
      title: "Python - Data Structures, Databases and Data Visualizations",
      subtitle: "- Charles Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/c207aa0e3a8c23e1a6104575b2b10c70",
      alt_name: "University of Michigan",
      color_code: "#002649",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- Freecodecamp",
      logo_path: "freecodecamp_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/atul1023/responsive-web-design",
      alt_name: "freecodecamp.org",
      color_code: "#0B0B23",
    },
    {
      title: "Flutter",
      subtitle: "- Angela Yu",
      logo_path: "appbrewery_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "The App Brewery",
      color_code: "#F68E71",
    },
    {
      title: "React JS",
      subtitle: "- Coding Blocks",
      logo_path: "codingblocks_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bzB8FA54hudFjtFXBvgp4KbFRwQ31GMn/view?usp=sharing",
      alt_name: "Coding Blocks",
      color_code: "#fff",
    },
    {
      title: "Machine Learning",
      subtitle: "- Verzeo",
      logo_path: "verzeo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1E4q6kAah2KnBwUw3QvFupUR3e2n_CwbY/view?usp=sharing",
      alt_name: "Verzeo",
      color_code: "#fff",
    },
    {
      title: "Web Application Development Internship",
      subtitle: "- Aztlan Pvt. Ltd.",
      logo_path: "aztlan_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1I0SthTHdHnU12F36Ls1EHIuSyHWoHtlx/view?usp=sharing",
      alt_name: "Aztlan",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
      experiences: [
        {
          title: "Frontend Developer",
          company: "Aztlan Pvt. Ltd.",
          company_url: "https://www.aztlan.in/",
          logo_path: "aztlan_logo.png",
          duration: "10 July 2020 - 12 Oct 2020",
          location: "Work From Home",
          description:
            "Worked on project of developing an application or rather a platform that takes care of all the meetings of its users in one place. My role was to develop, test and deploy the frontend part using Flutter and Dart.",
          color: "#d11621",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
