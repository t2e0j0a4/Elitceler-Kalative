import Gif1 from "../assets/HomeWhy1.gif";
import Gif2 from "../assets/HomeWhy2.gif";
import Gif3 from "../assets/HomeWhy3.gif";

import dummy from "../assets/Dummy.jpeg";
import Member from "../assets/Dummy.svg";

const homeWhyUs = [
    {
        id : 1,
        title : 'Development of Real Values',
        description : 'We are living in a global village with abundance of information but lack of appealing ways to access it. This compels us to consume unnecessary content, ignoring the things that is necessary.',
        bgColor : '#FF866A',
        presentGif : Gif1
    },
    {
        id : 2,
        title : 'To Build Curiosity',
        description : 'There is an emphasis put on education and career building but not enough on the development of real values. There is a disconnect between different generations and we are unable to mend the gaps.',
        bgColor : '#FFC066',
        presentGif : Gif2
    },
    {
        id : 3,
        title : 'Creativity for Students',
        description : 'There is an absence of synergy amongst students for nurturing or exploring the creative world. Young minds are the most creative curious individuals but an career centric education system limits them to hone their talents.',
        bgColor : '#8DCCD6',
        presentGif : Gif3
    },
    
]

const homeObjectivies = [
    {
        id : 1,
        content : 'To re-introduce the ancient Indian ethics and values in the education system and help in establishing a students community.',
        color : '#FFB449'
    },
    {
        id : 2,
        content : 'Working on, in eradicating major teenage problems like - depression, mental health issues, addiction and social behaviour.',
        color : '#54AFBC'
    },
    {
        id : 3,
        content : 'To give some fun time to students, and also spread awareness om some of the necessary topics.',
        color : '#FE5C36'
    },
    
]

const homeTestimonials = [
    {
        id : 1,
        detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
        person : 'John Doe'
    },
    {
        id : 2,
        detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
        person : 'John Doe'
    },
    {
        id : 3,
        detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
        person : 'John Doe'
    },
    {
        id : 4,
        detail : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l',
        person : 'John Doe'
    },
]

// Later fetches top 3 from API.
const homeBlogsDemo = [
    {
        id : 1,
        image : dummy,
        title : 'Title of blog.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
    },
    {
        id : 2,
        image : dummy,
        title : 'Title of blog.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
    },
    {
        id : 3,
        image : dummy,
        title : 'Title of blog.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
    },
]

// Newsletters Demo. Later fetched from API.
const homeNewsDemo = [
    {
        id : 10,
        image : dummy,
        title : 'Title of News.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
    },
    {
        id : 11,
        image : dummy,
        title : 'Title of News.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
    },
    {
        id : 12,
        image : dummy,
        title : 'Title of News.',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
    },
]

const homeTeam = [
  {
    id: 1,
    image: Member,
    name: "Aditya Havaldar",
    role: "Founder & CEO",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "",
      },
      {
        id: 2,
        name: "logo-twitter",
        link: "",
      },
      {
        id: 3,
        name: "logo-linkedin",
        link: "",
      },
    ],
  },
  {
    id: 2,
    image: Member,
    name: "Akshat Anand",
    role: "Writer & Founder",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "",
      },
      {
        id: 2,
        name: "logo-twitter",
        link: "",
      },
      {
        id: 3,
        name: "logo-linkedin",
        link: "",
      },
    ],
  },
  {
    id: 3,
    image: Member,
    name: "Kaashyap B.K",
    role: "HEAD - BUSINESS",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "",
      },
      {
        id: 2,
        name: "logo-twitter",
        link: "",
      },
      {
        id: 3,
        name: "logo-linkedin",
        link: "",
      },
    ],
  },
  {
    id: 4,
    image: Member,
    name: "Vishesh Agarwal",
    role: "Program Manager",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "",
      },
      {
        id: 2,
        name: "logo-linkedin",
        link: "",
      },
    ],
  },
  {
    id: 5,
    image: Member,
    name: "Aryaveer Agarwal",
    role: "Product Manager",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "",
      },
      {
        id: 2,
        name: "logo-linkedin",
        link: "",
      },
    ],
  },
];

export { homeWhyUs, homeObjectivies, homeTestimonials, homeBlogsDemo, homeNewsDemo, homeTeam };