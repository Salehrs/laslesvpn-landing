'use client';

import { useState } from 'react';

const Check = () => <span className="check">✓</span>;

function Logo() {
  return <a className="logo" href="#top" aria-label="LaslesVPN home"><span className="logo-mark">⌁</span><strong>Lasles<span>VPN</span></strong></a>;
}

function HeroArt() {
  return <div className="hero-art" aria-hidden="true">
    <div className="world-line one" /><div className="world-line two" />
    <div className="hero-person person-a"><i /><b /></div>
    <div className="hero-person person-b"><i /><b /></div>
    <div className="device"><span /><span /><span /></div>
    <div className="shield">✓</div>
    <div className="signal"><i /><i /><i /></div>
  </div>;
}

function FeatureArt() {
  return <div className="feature-art" aria-hidden="true"><div className="feature-laptop"><div className="laptop-screen"><span>●</span><i /><b /></div></div><div className="plant"><i /><i /><i /></div><div className="feature-person"><i /><b /></div></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    { name: 'Viezh Robert', city: 'Warsaw, Poland', score: '4.5', copy: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.”', initials: 'VR' },
    { name: 'Yessica Christy', city: 'Shanxi, China', score: '4.5', copy: '“I like it because I like to travel far and still can connect with high speed.”', initials: 'YC' },
    { name: 'Kim Young Jou', city: 'Seoul, South Korea', score: '4.5', copy: '“This is very unusual for my business that currently requires a virtual private network with high security.”', initials: 'KY' },
  ];
  const notify = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 2800); };

  return <main id="top">
    <header className="header"><div className="container nav-wrap"><Logo /><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button><nav className={menuOpen ? 'nav open' : 'nav'}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a><a className="mobile-sign" href="#signup" onClick={() => setMenuOpen(false)}>Sign Up</a></nav><div className="account"><button onClick={() => notify('Sign in is coming soon.')}>Sign In</button><button className="outline-btn" onClick={() => notify('Welcome to LaslesVPN!')}>Sign Up</button></div></div></header>

    {notice && <div className="toast" role="status">{notice}</div>}

    <section className="hero container" id="about"><div className="hero-copy"><h1>Want anything to be easy with <strong>LaslesVPN.</strong></h1><p>Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> discover interesting features from us.</p><button className="primary-btn" onClick={() => document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' })}>Get Started</button></div><HeroArt /></section>

    <section className="stats container" aria-label="LaslesVPN statistics"><div><span className="stat-icon">♙</span><p><strong>90+</strong><br />Users</p></div><div><span className="stat-icon">⌖</span><p><strong>30+</strong><br />Locations</p></div><div><span className="stat-icon">▣</span><p><strong>50+</strong><br />Servers</p></div></section>

    <section className="features container" id="features"><FeatureArt /><div className="features-copy"><h2>We Provide Many Features You Can Use</h2><p>You can explore the features that we provide with fun and have their own functions each feature.</p><ul><li><Check />Powerfull online protection.</li><li><Check />Internet without borders.</li><li><Check />Supercharged VPN</li><li><Check />No specific time limits.</li></ul></div></section>

    <section className="pricing-section" id="pricing"><div className="container"><div className="section-heading"><h2>Choose Your Plan</h2><p>Let&apos;s choose the package that is best for you and explore it happily and cheerfully.</p></div><div className="plans">{[
      ['Free Plan', ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'], 'Free'],
      ['Standard Plan', ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware'], '$9 <small>/ mo</small>'],
      ['Premium Plan', ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'], '$12 <small>/ mo</small>'],
    ].map(([name, benefits, price]) => <article className={`plan ${name === 'Premium Plan' ? 'featured' : ''}`} key={name}><div className="plan-box">▣</div><h3>{name}</h3><ul>{benefits.map((item) => <li key={item}><Check />{item}</li>)}</ul><div className="plan-bottom"><h3 dangerouslySetInnerHTML={{ __html: price }} /><button className={name === 'Premium Plan' ? 'select selected' : 'select'} onClick={() => notify(`${name} selected — demo only.`)}>Select</button></div></article>)}</div></div></section>

    <section className="network container"><div className="section-heading"><h2>Huge Global Network<br />of Fast VPN</h2><p>See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.</p></div><div className="map" aria-label="Global network map"><span className="pin p1" /><span className="pin p2" /><span className="pin p3" /><span className="pin p4" /><span className="pin p5" /><span className="pin p6" /></div><div className="brand-row"><b>NETFLIX</b><b>reddit</b><b>amazon</b><b>discord</b><b>spotify</b></div></section>

    <section className="testimonials" id="testimonials"><div className="container"><div className="section-heading"><h2>Trusted by Thousands of<br />Happy Customer</h2><p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p></div><div className="testimonial-grid">{testimonials.map((person, i) => <article className={i === activeTestimonial ? 'testimonial active' : 'testimonial'} key={person.name}><div className="customer"><span className="avatar">{person.initials}</span><div><strong>{person.name}</strong><small>{person.city}</small></div><span className="rating">{person.score} ★</span></div><p>{person.copy}</p></article>)}</div><div className="slider-controls"><span className="dots">{testimonials.map((_, i) => <button key={i} onClick={() => setActiveTestimonial(i)} aria-label={`Show testimonial ${i + 1}`} className={i === activeTestimonial ? 'dot on' : 'dot'} />)}</span><span><button className="circle" onClick={() => setActiveTestimonial((activeTestimonial + 2) % 3)} aria-label="Previous testimonial">←</button><button className="circle filled" onClick={() => setActiveTestimonial((activeTestimonial + 1) % 3)} aria-label="Next testimonial">→</button></span></div></div></section>

    <section className="subscribe container" id="signup"><div><h2>Subscribe Now for<br />Get Special Features!</h2><p>Let&apos;s subscribe with us and find the fun.</p></div><button className="primary-btn" onClick={() => notify('Thanks! Your interest has been recorded locally.')}>Subscribe Now</button></section>

    <footer><div className="container footer-grid"><div className="footer-intro"><Logo /><p><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p><div className="social"><button aria-label="Facebook">f</button><button aria-label="Twitter">𝕏</button><button aria-label="Instagram">◎</button></div><small>©2020Lasles<span>VPN</span></small></div>{[['Product', 'Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'], ['Engage', 'LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'], ['Earn Money', 'Affiliate', 'Become Partner']].map(([title, ...links]) => <div className="footer-links" key={title}><h3>{title}</h3>{links.map(link => <a key={link} href="#top">{link}</a>)}</div>)}</div></footer>
  </main>;
}
