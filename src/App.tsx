import React, { useState } from 'react';
import { 
  Coffee, 
  Menu as MenuIcon, 
  X, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  Users, 
  MessageCircle,
  Instagram,
  Facebook,
  ChevronDown,
  History,
  BookOpen,
  Sparkles,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import img1 from './images/menu-1.png';
import img2 from './images/menu-2.jpg';
import img3 from './images/menu-3.jpg';
import img4 from './images/menu-4.jpg';
import img5 from './images/menu-5.jpg';

// --- Components ---

const Navbar = ({ activeScreen, setActiveScreen }: { activeScreen: string, setActiveScreen: (s: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'story', label: 'The Story' },
    { id: 'menu', label: 'Menu' },
    { id: 'reservations', label: 'Reservations' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-surface/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setActiveScreen('story')}
        >
          <Coffee className="text-brand-primary w-6 h-6" />
          <h1 className="text-2xl font-light tracking-tight text-brand-primary font-display">Café 38</h1>
        </div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeScreen === item.id ? 'text-brand-primary font-bold underline underline-offset-8' : 'text-brand-on-surface-variant hover:text-brand-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          className="md:hidden text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-surface border-t border-brand-outline-variant/30 px-6 py-6 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveScreen(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 text-lg ${
                  activeScreen === item.id ? 'text-brand-primary font-bold' : 'text-brand-on-surface-variant'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full py-12 px-6 border-t border-brand-outline-variant/30">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-light text-brand-primary font-display">Café 38</h2>
        <p className="text-xs text-brand-on-surface-variant mt-1">© 2024 Café 38. Crafted with patience.</p>
      </div>
      <div className="flex gap-6 flex-wrap justify-center">
        <a href="#" className="text-xs text-brand-on-surface-variant hover:text-brand-secondary transition-colors">Instagram</a>
        <a href="#" className="text-xs text-brand-on-surface-variant hover:text-brand-secondary transition-colors">Facebook</a>
        <a href="#" className="text-xs text-brand-on-surface-variant hover:text-brand-secondary transition-colors">Contact Us</a>
        <a href="#" className="text-xs text-brand-on-surface-variant hover:text-brand-secondary transition-colors">Privacy</a>
      </div>
    </div>
  </footer>
);

// --- Screens ---

const StoryScreen = () => (
  <div className="pt-24 space-y-20">
    {/* Hero Section */}
    <section className="px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold text-brand-secondary tracking-[0.2em] mb-4 block">SINCE 1938</span>
          <h2 className="text-5xl md:text-6xl font-light text-brand-primary leading-tight mb-6">
            Crafted with patience,<br />served with heart.
          </h2>
          <p className="text-lg text-brand-on-surface-variant max-w-lg leading-relaxed">
            At Café 38, we believe in the art of the pause. Nestled in the heart of the community, our atelier is a tribute to the European café culture—where time slows down, and every cup of coffee is a testament to artisanal mastery.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoUBtSVykYRXJ2TvH2lieJDLj9fmw-EHqjrvI5DxhJTH904ZL5k_15BdflomGB6JesROSDRq5oVp8I6aInKTzmh3nUUuadaDIiEr7RvnjNiqdhj1mmHbfY8PvGPxqWr9SVeksbsytJi4Bu3SbE6FeoV-6FuZ-_p_VVokFvJ5F_MW9-UGpnbglV0Kn6TANJNxWU_s7uVsXTNHdojHe_V-tXjrGznGZg5dGPK_FKuo6Kkp9KG2eqy6A1xjub0zD55L2lZ2ueLmBFPtw" 
            alt="Artisan Barista" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="bg-brand-surface-container-low py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD0KqnyrCb6FerQfSv0oE60NQurmi-0R3GiM95TGtDP5fM0ltV2YGUPcI53tlvYCMQdB62sFX7zJMaFumXsQJuA6QuxCIWTey40aPiZIpI0gBspiMNAQNSaOm5-VWMHhxkVtWSKOR_swOARb6ck7qAC0XuCNCA0NQP-QyrZSvJMOM6kMSXhVOrqxf_xlH_PlUHojNHxtqkzAumV7hCRD7bvPxhSS86WtiGha7lVCSol0GZi3wIdemdF0mrqn80Ttc_FDA-mQwJkTc" 
            alt="Interior" 
            className="rounded-xl w-full h-48 object-cover mt-8"
          />
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnZ9Ug4sIZqE7QClG5vRvLkoCI021nSQ2YAz8kJNSoP-boEfvLZioD51q_nb_gEMSLkgJldzpgYzzh23ic9gmX0ih90uOiSg8Y-4RjHvWbR18FPulUJssdUzS6BCEFTXy12QlRpXXNgSGX9vn8O6JbltfDUeHx4vryvN9MXWXrLJzGdbOTe4V_68jen-hOZutVsHIBp-8mcd2u7tJsODvylPPQmN97r-OcxAAaKjQBeVkY9nF9BZ7De1a6pfEv7zHPMF9-XU1T2KM" 
            alt="Cozy Corner" 
            className="rounded-xl w-full h-64 object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-3xl font-medium text-brand-primary mb-6">A Sanctuary for the Senses</h3>
          <p className="text-brand-on-surface-variant mb-8 leading-relaxed">
            Our space is designed to be an extension of your living room. From the hand-picked tactile modernism of our furniture to the soft hum of vinyl records, every detail invites you to linger.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-secondary w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Sustainably Sourced Beans</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-secondary w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Community Art Exhibitions</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-secondary w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Quiet, Tech-Free Zones</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-medium text-brand-primary">Capturing the Moment</h3>
        <p className="text-brand-on-surface-variant mt-2">Moments shared at Café 38.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden group">
          <img 
            src={img1}
            alt="Latte Art" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="rounded-2xl overflow-hidden group">
          <img 
            src={img2}
            alt="Espresso" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="rounded-2xl overflow-hidden group">
          <img 
            src={img3} 
            alt="Pastries" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden group">
          <img 
            src={img4}
            alt="Friends" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="hidden md:block rounded-2xl overflow-hidden group">
          <img 
            src={img5}
            alt="Beans" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>

    {/* Community Board */}
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto bg-brand-primary p-12 rounded-3xl text-brand-on-primary">
        <div className="max-w-2xl mb-12">
          <h3 className="text-3xl font-medium mb-3">Community Board</h3>
          <p className="opacity-80">Join us for our upcoming atelier events. No rush, just connection.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { date: 'AUG 24', title: 'Poetry Under the Oaks', desc: 'An evening of local verse and slow-poured brew.' },
            { date: 'SEP 02', title: 'Jazz Sundays', desc: 'Live acoustic jazz from 10 AM to 2 PM.' },
            { date: 'SEP 15', title: 'Cupping Workshop', desc: 'Learn the nuances of our single-origin roasts.' },
          ].map((event, i) => (
            <div key={i} className="bg-brand-primary-container p-8 rounded-2xl border border-brand-outline-variant/10 hover:border-brand-secondary/30 transition-colors duration-300">
              <span className="text-xs font-bold text-brand-secondary-fixed block mb-2 tracking-[0.1em]">{event.date}</span>
              <h4 className="text-xl font-medium mb-2 text-white">{event.title}</h4>
              <p className="text-sm text-brand-on-primary-container/90 leading-relaxed font-light">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const MenuScreen = () => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-xs uppercase tracking-[0.3em] text-brand-secondary mb-4 block">Curated Selection</span>
      <h2 className="text-5xl font-light text-brand-primary mb-6 font-display">Artisanal Provisions</h2>
      <p className="text-lg text-brand-on-surface-variant">Every item in our atelier is chosen for its heritage, crafted with patience, and served with intention.</p>
    </div>

    {/* Section: Coffee */}
    <section>
      <div className="flex items-center gap-6 mb-12">
        <h3 className="text-3xl font-medium text-brand-primary whitespace-nowrap">Coffee & Hot Drinks</h3>
        <div className="h-px bg-brand-outline-variant/30 w-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: 'Signature Latte', 
            price: '$5.50', 
            tags: ['Fruity', 'Floral'], 
            desc: 'Double shot of single-origin espresso with velvet-textured milk and a hint of wildflower honey.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZfzzLvaQrx44UqE9DjJiHXCG2-gaDAZI6OUGi4zbbbFvZxwtDvVkZEWFPyhpWblQ-RFVJHvxCKoss7LrzW_ql2a62n9S59XZ09BByWyvPwB1ycawUyh-3FhVeIsQV1KjBiePKmWyZrLFR15paWSiuG5ZDY1vMfFNmgYswg5ghPJ9CKYO8zjXxSZld5T3mWl56C3v5z84WKr37S-B6yTAMAfsCrHuQBlLX9H-ni8RXq9b-_pyKzc8LPBd2FIC4YW_zjLRnF40CucQ'
          },
          { 
            title: 'Ethos Espresso', 
            price: '$3.80', 
            tags: ['Nutty', 'Cacao'], 
            desc: 'Our house blend with notes of dark cacao, toasted hazelnut, and a bright citrus finish.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMyX90F6R3laFMHbuvcSKz_EfC6v0v5bijGuY07EAmMf7fOOZAaQjfOfwUHYIY-Ps7o-T7x8KvQ88iyZBVB4pgQaQw5VUhsaAnU2nJKIU1OAmrafTbEkfX2049wf19ebX1DdLNeCAYjH8VvGPqQwSaMmmFtQMbrGbvApllGV0cF2NoFKS-icA_lnmeXX5WmNOLHiQKbeAOVutVH55nJUiUwus2rBX_opNHbgw5N03q8GxL1XnTT9iatXgIGF5aJ0716O8yXcVeAoc'
          },
          { 
            title: 'Slow Pour Over', 
            price: '$6.50', 
            tags: ['Artisanal', 'Seasonal'], 
            desc: 'Rotating seasonal microlots, precision brewed for optimal clarity and nuance.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRMy1ku9J2-HXdKnmTA6yPvCB58GNlAmQmmznVQZk7MTxIWDDuJIOhRlMRUCK1Ei9AlOUBtkyPni1p1g-QvXgV5n19hesOJMUB4s6DGWGtopJCdyWgl85SuUMUO_vx-hjF2beD9vnfgI8EAQ2LMgjHWBGHnn1K3EQT4d153lXJeWEn6twB8sIKQCItqS_pgwH6uEOl1NpC-JCKyo9wZFsDNdTMiPuX9flyKnrnMOO0fehpVl6AVIJ2G6e0RpsL0rCz1mUdm4IejQg'
          },
        ].map((item, i) => (
          <div key={i} className="bg-brand-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(51,35,29,0.05)] flex flex-col hover:scale-[1.02] transition-transform duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-medium text-brand-primary">{item.title}</h4>
                <span className="text-sm font-semibold text-brand-secondary">{item.price}</span>
              </div>
              <p className="text-brand-on-surface-variant mb-6 leading-relaxed">{item.desc}</p>
              <div className="mt-auto flex gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-brand-surface-container rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-on-surface-variant">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Section: Breakfast */}
    <section>
      <div className="flex items-center gap-6 mb-12">
        <h3 className="text-3xl font-medium text-brand-primary whitespace-nowrap">Breakfast & Brunch</h3>
        <div className="h-px bg-brand-outline-variant/30 w-full"></div>
      </div>
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8 bg-brand-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(51,35,29,0.05)] flex flex-col md:flex-row">
          <div className="md:w-1/2 overflow-hidden aspect-video md:aspect-auto">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCZ0QEagKPZ93xBn6dvwEroMbSW7oi5zKX-IYapQ2T1SnvDa9EHeoxJWxENJuNs8Wqe-xPsP3HDEFHcVos1aoS-KXd-CBonUmN5Vdqn_PgPL6gux9KRy-FddyZmi-kA7SquUbAbdLRpvIgfjRF3zoiNYZXxilUjq7CslUG7efuUZ7oX5oa8W-rEHiFye2uXi1B7Eop6l0lbnB0xe2RjMwU_ZfScrtRHY26UxfL1GWSqe1nMpisk-xdQvKKpCQ6RVlBHzAYwFS7HqA" 
              alt="Avocado Toast" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 flex flex-col md:w-1/2">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-2xl font-medium text-brand-primary">Atelier Avocado Toast</h4>
              <span className="text-sm font-semibold text-brand-secondary">$14.50</span>
            </div>
            <p className="text-lg text-brand-on-surface-variant mb-10 leading-relaxed">Smashed Hass avocado on toasted sourdough, topped with a slow-poached heritage egg, Dukkah spice, and cold-pressed olive oil.</p>
            <button className="mt-auto px-6 py-3 bg-brand-primary text-brand-on-primary rounded font-bold text-xs uppercase tracking-widest self-start hover:opacity-90 transition-opacity">Select Options</button>
          </div>
        </div>
        <div className="md:col-span-4 bg-brand-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_10px_40_rgba(51,35,29,0.05)] flex flex-col">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkudxy3gr0sTcLnPgUDjGVnvqDY11Li1Iz8pGMdWGFKXvSBx6Bs2vnYB0iRw3Sho0vJbZSfVFMeqfF709W6eC-u1GsBRgNXqg17WiF3NTHBRZ3MvHXvExf3OuOZuU-S6mFhl9coly993_zZ-M4DoE-braNpWxubqQgbIirKAmqYyOBDbECPiWmFtPjlcnJFCdfUJ7Mw_-Pl9sJVgthNNP0HI2LtiQJ22ybDd8yPuGIoBL9IrnSVivXoyEOgBIReq6k-7ymuGTYeGw" 
              alt="Muesli" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-2xl font-medium text-brand-primary">Bircher Muesli</h4>
              <span className="text-sm font-semibold text-brand-secondary">$12.00</span>
            </div>
            <p className="text-brand-on-surface-variant leading-relaxed">Overnight oats soaked in almond milk, served with seasonal berries and roasted pepitas.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Section: Light Meals & Snacks */}
    <section>
      <div className="flex items-center gap-6 mb-12">
        <h3 className="text-3xl font-medium text-brand-primary whitespace-nowrap">Light Meals & Snacks</h3>
        <div className="h-px bg-brand-outline-variant/30 w-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: 'Brie & Prosciutto Baguette',
            price: '$11.50',
            desc: 'Artisan baguette, aged brie, prosciutto di Parma, and fig jam.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjFGRlbWHkT_aRPWzPO_U4jc6jqXBW0dMyWd8Ab4UZ-ADAlk-w7sFNslOnhe4GKLk_hTFOQwVI3vt1tITX7rfXdEs4viPdRyDxib-Ggf5zNeZheQ1M_0M2DiAiOJ0AYbEHXasMgmDMvzJrap3sz_k1dKU47d4PnceUC5LLlKFqmKwOnkbinqsmRamgyVXePM4DLKpXqTZzMCOYFQXxgFUY6g-8Tz8kW_CSC0Z9Q_Maxl4ZdK28Fm695ZlTcm9Y42Ur36KC6gR0RO8'
          },
          {
            title: 'Heirloom Garden Bowl',
            price: '$13.00',
            desc: 'Seasonal greens, heirloom tomatoes, and a light lemon-thyme vinaigrette.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRWFcjlGur1evrLpOA1Tnony0VuI5oVG1iex7J8aViQ98EGefUASdB0ie__8qVhSBuwA-o6ovuzci74qbD8juVCksvPYDyw_eD9OOfIrRaZL_AJud88QVo2rPZnPcFKSHwox-O05Lto19l1gjLN52pxESbiC4XIWf7Qjpezg4bsc_dZSrQLmZS0NzLkOuvzA7AYFcR4S3Ke-85SYvOAgA9aubo1Dvyp2vf75-6X8tXhoegXxfCAYhh7iKETWJVwtx1irvU'
          },
          {
            title: 'Daily Patisserie',
            price: '$4.50',
            desc: "Ask our hosts for today's selection of freshly baked pastries and sweets.",
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8J_PUw0ddTucdKxIvpLmFPWw4ok6LIgLND6_NT2w-JkHjXPUVIPYO-Q7YXyUOuIsuv9rKHNWeWko8DYmV1RJ1KUJkAQLEzIE8_KcVan_8C61cKEw-B-TkWH3theTIwFy3kGClvzJq7Ipu-AzB8UA-hWGXkVyergoSFBK8tW6A4V2N518Kys1oYSrxTydLH8yaywJ2ymFFH6bbgXxfPAQfU0ltZsoaCXPoIrtPBYtrMzB0RjfUZzzsyNb5gIsT1hXFTGa9KDk91Mg'
          },
          {
            title: 'Rosemary Roasted Nuts',
            price: '$6.00',
            desc: 'Warm almonds and walnuts tossed in rosemary-infused sea salt.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxJyLxKeNqVkOrdbsveje1GMOKPhvVQ-IfMeDjqP7vSOhArA9N37DpetMe6_wEJMYypsJHLrXZ7Sfnr7BayG_BC4IWlyQjnPYsq7mqRsryz83sWz9NC5gHTPVRX0MHrPugqlNLXfFBydVRYs2a4y3aZQ2SUHtdQoGsEerTu-bJ-aOVHKiK8OUhcT4iLEqfANOWFEfapiX-okrjzzerZNqLu4-ZYG6Tz1H_wMX6-bSb81eoiVmF13oRhIhOh_a2u8ZoewUIhh7GpXk'
          }
        ].map((item, i) => (
          <div key={i} className="group bg-brand-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(51,35,29,0.05)] flex items-center p-4 gap-6 hover:scale-[1.01] transition-transform duration-300">
            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow pr-4">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-bold text-brand-primary">{item.title}</h4>
                <span className="text-sm font-semibold text-brand-secondary">{item.price}</span>
              </div>
              <p className="text-xs text-brand-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const BookingScreen = () => (
  <div className="pt-16">
    <section className="relative h-[442px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/20 z-10"></div>
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcj3dwET2RD8TPy1PvVIFMUfPjpoTR_9gY8tsC2tc1oS9vLzLO4dhB2rVz-2H-nc4FtqnAqAMUJqm-ELdxEMXM84W9hmWyvBsuHMXXl87UdbPmbU84Ehiz5frBf8fAigTfnhYGNpFmlGbrQgh0K1gt7XZOFU7RKQL5aX5fMr1h2BcUI0jv1RGiFS3tzwy5bsuyv-gF3lzQ586sYDFZKJABfZsgjof1fhkfp43IwcK1zk4p8ne7AuBiP-9yr0aqUgo_BnU5AjrCF8M" 
        alt="Hero Interior" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center px-6 max-w-2xl">
        <h2 className="text-6xl font-light text-white mb-4 tracking-tight font-display">Reserve Your Moment</h2>
        <p className="text-lg text-white/90">Join us for a slow-poured experience in the heart of the city. We welcome you to find your corner of quiet luxury.</p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
      <div className="flex-1 space-y-10">
        <div>
          <h3 className="text-4xl font-medium text-brand-primary mb-4">Waitlist & Bookings</h3>
          <p className="text-brand-on-surface-variant text-lg leading-relaxed">To maintain our boutique atmosphere, we operate primarily on a curated reservation basis. For groups larger than six, please reach out directly via WhatsApp.</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Clock className="text-brand-secondary w-6 h-6 mt-1" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-outline mb-1">Operating Hours</p>
              <p className="text-brand-primary">Tue — Sun: 08:00 AM — 10:00 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-brand-secondary w-6 h-6 mt-1" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-outline mb-1">Location</p>
              <p className="text-brand-primary">38 Artisan Alley, Cathedral District</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-surface-container-low p-8 rounded-2xl border border-brand-outline-variant/30">
          <p className="text-[10px] font-bold italic text-brand-secondary mb-2">Note from the Atelier</p>
          <p className="text-brand-on-surface-variant italic leading-relaxed">"We request that guests arrive within 15 minutes of their scheduled time to ensure the best possible service for all our patrons."</p>
        </div>
      </div>

      <div className="flex-1 bg-white p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(51,35,29,0.05)] h-fit">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Full Name</label>
            <input type="text" placeholder="Evelyn Thorne" className="w-full bg-brand-surface-container-low border-b-2 border-brand-outline-variant focus:border-brand-secondary focus:ring-0 px-4 py-3 text-brand-primary transition-all rounded-t" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Phone / WhatsApp</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-brand-surface-container-low border-b-2 border-brand-outline-variant focus:border-brand-secondary focus:ring-0 px-4 py-3 text-brand-primary transition-all rounded-t" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Date</label>
              <input type="date" className="w-full bg-brand-surface-container-low border-b-2 border-brand-outline-variant focus:border-brand-secondary focus:ring-0 px-4 py-3 text-brand-primary transition-all rounded-t" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Time</label>
              <input type="time" className="w-full bg-brand-surface-container-low border-b-2 border-brand-outline-variant focus:border-brand-secondary focus:ring-0 px-4 py-3 text-brand-primary transition-all rounded-t" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Number of Guests</label>
            <div className="relative">
              <select className="w-full bg-brand-surface-container-low border-b-2 border-brand-outline-variant focus:border-brand-secondary focus:ring-0 px-4 py-3 text-brand-primary transition-all rounded-t appearance-none">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-on-surface-variant pointer-events-none w-4 h-4" />
            </div>
          </div>
          <button className="w-full bg-brand-primary text-brand-on-primary py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-brand-secondary transition-all active:scale-[0.98]">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Request via WhatsApp</span>
          </button>
          <p className="text-center text-[10px] text-brand-outline tracking-wider">Your reservation will be confirmed via text.</p>
        </form>
      </div>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeScreen, setActiveScreen] = useState('story');

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeScreen === 'story' && <StoryScreen />}
            {activeScreen === 'menu' && <MenuScreen />}
            {activeScreen === 'reservations' && <BookingScreen />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Specialty Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-brand-surface-container-lowest/90 backdrop-blur-md flex justify-around items-center py-4 border-t border-brand-outline-variant/20 z-50">
        <button 
          onClick={() => setActiveScreen('story')}
          className={`flex flex-col items-center gap-1 ${activeScreen === 'story' ? 'text-brand-primary' : 'text-brand-on-surface-variant'}`}
        >
          <History className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Story</span>
        </button>
        <button 
          onClick={() => setActiveScreen('menu')}
          className={`flex flex-col items-center gap-1 ${activeScreen === 'menu' ? 'text-brand-primary' : 'text-brand-on-surface-variant'}`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Menu</span>
        </button>
        <button 
          onClick={() => setActiveScreen('reservations')}
          className={`flex flex-col items-center gap-1 ${activeScreen === 'reservations' ? 'text-brand-primary' : 'text-brand-on-surface-variant'}`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Booking</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-brand-on-surface-variant">
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Vibe</span>
        </button>
      </nav>

      <Footer />
    </div>
  );
}
