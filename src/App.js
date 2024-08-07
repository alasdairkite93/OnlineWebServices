import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import HelloWorld from "../src/components/helloworld";
import HomeMain from "./routes/HomeMain";

import './MenuApp.css';

/**React dropdowns**/
import Home from './routes/HomeMain';
import About from '../src/routes/About';

import WebDevelopment from './routes/Services/WebDevelopment';
import SEOAffiliates from './routes/Services/SEOAffiliates';
import WebScraping from './routes/Services/WebScraping';
import EmailLists from './routes/Services/EmailLists';
import DatabaseDesign from './routes/Services/DatabaseDesign';
import WebToolDevelopment from './routes/Services/WebToolDevelopment';


import HowItWorks from './routes/HowItWorks';

import Contact from './routes/Contact';

import Layout from '../src/Menu/Layout';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>

                <Route index element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="web-development" element={<WebDevelopment />} />
                <Route path="web-scraping" element={<WebScraping />} />
                <Route path="email-lists" element={<EmailLists />} />
                <Route path="web-tool-development" element={<DatabaseDesign />} />
                <Route path="application-development" element={<WebToolDevelopment />} />
                <Route path="seo-affiliates" element={<SEOAffiliates />} />

                <Route path="how-it-works" element={<HowItWorks />} />

                <Route path="contact" element={<Contact />}/>

                <Route path="*" element={<p>Not found!</p>} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
