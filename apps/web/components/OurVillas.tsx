'use client';

import Link from "next/link";
import styles from "./OurVillas.module.css";
import Carousel from "./Carousel";

const hhImages = [
    { src: '/images/pool-deck-view-smaller.avif', alt: 'Infinity Pool', description: "How about some forest bathing?" },
    { src: '/images/bdr-3-villa-1.jpeg', alt: 'bed room', description: "Let the early morning light wash over your face as you wake up" },
    { src: '/images/living-room-villa-1.avif', alt: 'spacious living room', description: "Convene with your family and friends over breakfast, in this spacious, brightliving room" },
    { src: '/images/villa-1-taking-bath.avif', alt: 'luxurious copper bath tub', description: "Take a relaxing hot soak in a handmade copper bathtub" },
    { src: '/images/infinity-pool-view.webp', alt: 'jungle infinity pool', description: "Indulge in an afternoon dip after a long day of relaxing or adventures" },
];

const jnImages = [
    { src: '/images/nook-bath.jpeg', alt: 'copper bath tub', description: "Could this be the best bath in Bali? We sure think so ^_^" },
    { src: '/images/nook-bed-view-resized.avif', alt: 'The Jungle Nook bedroom', description: "The Jungle Nook is designed to let nature flow inside" },
    { src: '/images/nook-deck.jpeg', alt: 'The Jungle Nook wooden decking', description: "A private deck with gorgeous valley views" },
    { src: '/images/nook-deck-view.avif', alt: 'The Jungle Nook wooden decking', description: "A private deck with gorgeous valley views" },
    { src: '/images/nook-bed-swans.avif', alt: 'Enjoy your secluded cottage with private kitchen', description: "Enjoy our cosy cottage with private kitchen" },
];

export default function OurVillas() {
    return (
        <section id="our-villas" className={styles.sectionBackground}>
            <h2 className="section-title">Our Villas</h2>
            <div className={styles.villaRow}>

                <div>
                    <h3 className="section-title">Harmony Hill</h3>
                    <div className={styles.villaDescription}>
                        The perfect retreat for families or groups. Our expansive villa features three private
                        bedrooms, each with its own ensuite bathroom. Designed with soaring 5-meter
                        ceilings, the home flows onto a grand wooden deck overlooking a private infinity pool suspended over
                        the emerald rice paddies and lush jungle valley.
                    </div>

                    <div className={styles.featuresContainer}>
                        <div className={styles.featureItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M2 17h20M2 8v9M22 8v9M2 11h20" />
                                <path d="M6 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                                <path d="M12 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                            </svg>
                            <div className={styles.featureLabel}>3 Bedrooms</div>
                            <div className={styles.featureDetail}>King-sized comfort</div>
                        </div>

                        <div className={styles.featureItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M3 11h18c.6 0 1 .4 1 1v2c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6v-2c0-.6.4-1 1-1Z" />
                                <path d="M7 20v2" />
                                <path d="M17 20v2" />
                                <path d="M19 11V7a2 2 0 0 0-2-2h-1" />
                            </svg>
                            <div className={styles.featureLabel}>3 Ensuites</div>
                            <div className={styles.featureDetail}>2 with signature tubs</div>
                        </div>

                        <div className={styles.featureItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                    d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                                <path
                                    d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                                <path
                                    d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                            </svg>
                            <div className={styles.featureLabel}>Infinity Pool</div>
                            <div className={styles.featureDetail}>Private & jungle-facing</div>
                        </div>

                        <div className={styles.featureItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M6 18h12l-1-8a5 5 0 0 0-10 0l-1 8Z" />
                                <path d="M9 18v3" />
                                <path d="M15 18v3" />
                                <path d="M17 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
                            </svg>
                            <div className={styles.featureLabel}>Private Chef</div>
                            <div className={styles.featureDetail}>100% plant-based</div>
                        </div>
                    </div>

                    <Carousel images={hhImages} />

                    <div className="see-more-here">
                        <br />
                        <Link href="/harmonyhill-gallery">See more from the villa gallery &rarr;</Link>
                    </div>
                </div>

                <div>
                    <h3 className="section-title">The Jungle Nook</h3>
                    <div className={styles.villaDescription}>
                        This spacious one-bedroom cottage features a deep-soak bathtub positioned for starlit jungle views
                        and a private wooden deck that floats above the green valley. Whether you're enjoying the vista of
                        tiered rice paddies or falling asleep to the natural jungle symphony, every corner is designed for
                        deep connection with nature
                    </div>

                    <div className={styles.featuresContainer}>
                        <div className={styles.featureItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 17h20M2 8v9M22 8v9M2 11h20" />
                                <path d="M6 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                                <path d="M12 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                            </svg>
                            <div className={styles.featureLabel}>1 Bedroom</div>
                            <div className={styles.featureDetail}>King-sized comfort</div>
                        </div>

                        <div className={styles.featureItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 11h18c.6 0 1 .4 1 1v2c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6v-2c0-.6.4-1 1-1Z" />
                                <path d="M7 20v2" />
                                <path d="M17 20v2" />
                                <path d="M19 11V7a2 2 0 0 0-2-2h-1" />
                            </svg>
                            <div className={styles.featureLabel}>Ensuite Bath</div>
                            <div className={styles.featureDetail}>Copper Tub</div>
                        </div>

                        <div className={styles.featureItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M6 18h12l-1-8a5 5 0 0 0-10 0l-1 8Z" />
                                <path d="M9 18v3" />
                                <path d="M15 18v3" />
                                <path d="M17 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
                            </svg>
                            <div className={styles.featureLabel}>Private Chef</div>
                            <div className={styles.featureDetail}>100% plant-based</div>
                        </div>
                    </div>

                    <Carousel images={jnImages} />

                    <div className="see-more-here">
                        <br />
                        <Link href="/junglenook-gallery">See more from the jungle nook gallery &rarr;</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}