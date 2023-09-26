import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import HelloWorld from "../src/components/helloworld";
import HomeMain from "./routes/HomeMain";

import './MenuApp.css';

/**React dropdowns**/
import Home from './routes/HomeMain';
import About from '../src/routes/About';

import Services from "../src/components/services";

import WebDevelopment from './routes/Services/WebDevelopment';
import SEOAffiliates from './routes/Services/SEOAffiliates';
import WebScraping from './routes/Services/WebScraping';
import EmailLists from './routes/Services/EmailLists';
import ApplicationDevelopment from './routes/Services/ApplicationDevelopment';
import WebToolDevelopment from './routes/Services/WebToolDevelopment';

import HowItWorks from './routes/HowItWorks';

import Contact from './routes/Contact';

import Layout from '../src/Menu/Layout';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />

                <Route path="web-development" element={<WebDevelopment />} />
                <Route path="web-scraping" element={<WebScraping />} />
                <Route path="email-lists" element={<EmailLists />} />
                <Route path="application-development" element={<ApplicationDevelopment />} />
                <Route path="web-tool-development" element={<WebToolDevelopment />} />
                <Route path="seo-affiliates" element={<SEOAffiliates />} />

                <Route path="how-it-works" element={<HowItWorks />} />

                <Route path="contact" element={<Contact />}/>
                <Route path="*" element={<p>Not found!</p>} />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
