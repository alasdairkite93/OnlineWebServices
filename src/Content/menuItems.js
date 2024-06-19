import {Route} from "react-router-dom";
import WebDevelopment from "../routes/Services/WebDevelopment";
import SEOAffiliates from "../routes/Services/SEOAffiliates";

export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    submenu: [
      {
        title: 'Full Stack Web Applications',
        url: 'web-development',
      },
      {
        title: 'Web Scraping',
        url: 'web-scraping',
      },
      {
        title: 'New Leads',
        url: 'email-lists',
      },
      {
        title: 'Database Design & Development',
        url: 'database-design',
      },
      {
        title: 'Applications',
        url: 'web-tool-development',
      }
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'How it works',
        url: 'how-it-works',
      }
    ]
  },
  {
    title: 'Contact',
    url: '/contact',
  }
];
