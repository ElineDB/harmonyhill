'use client';

import Image from 'next/image';
import styles from "./HeroVideo.module.css";

export default function HeroVideo() {
    return (
        <div className={styles.heroContainer}>

            <video autoPlay loop muted playsInline
                className={styles.videoElement}
                poster="/images/hero-video-fallback.avif"
                width="1920" height="1080">
                <source src="/images/new-hero-video-720.mp4" type="video/mp4" />
            </video>

            <div className={styles.videoElement}>
                <Image src="/images/hero-image-mobile-sharp.avif" alt="Harmony Hill Retreat" width="800" height="1200" fetchPriority="high" />
            </div>

            <div className={styles.overlay}>
                <Image src="/images/logo-white-transparent-background.avif" alt="Harmony Hill Logo" width="540" height="540"
                    fetchPriority="high" className={styles.logo} />
                <h1 className={styles.slogan}>Two Private Villas in the heart of Bali <br /> 100% Vegan</h1>
            </div>
        </div>
    );
}