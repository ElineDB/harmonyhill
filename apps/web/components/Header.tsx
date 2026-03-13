'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    return (
        <header className={styles.stickyBanner}>
            <nav className={styles.mainNav}>
                <div className={styles.bookNowHeader}><Link href="https://harmonyhill.reserveonline.id/book/1245" target="_blank" rel="noopener">Book Now</Link></div>
                <ul className={styles.mainNavLinks} id="main-nav-links">
                    <li><Link href="#about-us">About Us</Link></li>
                    <li><Link href="#our-villas">Our Villas</Link></li>
                    <li><Link href="#natures-kitchen">Nature's Kitchen</Link></li>
                    <li><Link href="#stay-in">Stay In</Link></li>
                    <li><Link href="#explore">Explore</Link></li>
                    <li><Link href="#goodtoknow">Good To Know</Link></li>
                    <li><Link href="#availability">Availability</Link></li>
                </ul>
                <button className={styles.hamburger} id="hamburger" aria-label="Menu">
                    ☰
                </button>
            </nav>
        </header>
    );
}
