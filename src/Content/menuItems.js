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
    url: '/services',
    submenu: [
      {
        title: 'Web Development',
        url: 'web-development',
      },
      {
        title: 'Web Scraping',
        url: 'web-scraping',
      },
      {
        title: 'Email Lists',
        url: 'email-lists',
      },
      {
        title: 'Application Development',
        url: 'application-development',
      },
      {
        title: 'Web Tool Development',
        url: 'web-tool-development',
      },
      {
        title: 'SEO & Affiliate Marketing',
        url: 'seo-affiliates',
      },
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
