'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.stickyBanner}>
            <nav className={styles.mainNav}>
                <div className={styles.bookNowHeader}><Link href="/book" target="_blank" rel="noopener">Book Now</Link></div>
                
                <div className={styles.navLinksContainer}>
                    <ul className={`${styles.mainNavLinks} ${isOpen ? styles.active : ""}`} id="main-nav-links">
                        <li onClick={() => setIsOpen(false)}><Link href="/#about-us">About Us</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#our-villas">Our Villas</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#natures-kitchen">Nature's Kitchen</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#stay-in">Stay In</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#explore">Explore</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#goodtoknow">Good To Know</Link></li>
                        {/* <li onClick={() => setIsOpen(false)}><Link href="/#availability">Availability</Link></li> */}
                    </ul>
                </div>

                <button 
                    className={styles.hamburger} 
                    id="hamburger" aria-label="Menu"
                    onClick={toggleMenu}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>
        </header>
    );
}
