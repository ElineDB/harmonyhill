'use client';

import Link from 'next/link';
import Carousel from "./Carousel";
import styles from "./Explore.module.css";

const images = [
    {src: "/images/gunung-kawi-resize.avif", alt: "Gunung Kawi", description: "Immerse yourself in the sacred stillness of Gunung Kawi, the Valley of The Balinese Kings, or partake in a purification ritual at Tirta Empul, Bali's largest spring water temple. Both just 5mins drive away"},
    {src: "/images/barong2.avif", alt: "Barong Bali", description: "Get lost in the bustling town of Ubud - Bali's cultural heartland and our personal vegan food heaven. We are happy to share our favorite eats or organize a driver to take you around this beautiful town."},
    {src: "/images/batur-optimized.avif", alt: "Kintamani", description: "Hike up Mount Batur and watch the sun rise over Bali's most sacred Mount Agung, or take a thrilling jeep tour through the lava fields in this UNESCO GeoPark"},
];

export default function Explore() {
    return (
        <section id="explore" className={styles.sectionBackground}>
            <h2 className="section-title">Explore</h2>
            <p>Our team will be more than happy to help you plan excursions to Bali's most beloved spots as well as local
                hidden gems.
            </p>

            <Carousel images={images}/> 

            <div className="see-more-here">
                <br />
                <Link href="https://harmonyhillbali.com/activities" target="_blank">
                    Get inspired on what to do in and around Harmony Hill &rarr;
                </Link>
            </div>
        </section>
    )
}
