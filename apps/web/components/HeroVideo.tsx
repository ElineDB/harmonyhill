'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "./HeroVideo.module.css";

export default function HeroVideo() { 
    const mobileVideo = { src: "/images/hero-video-mobile.mp4", height: 406, width: 720 };
    const desktopVideo = { src: "/images/hero-video.mp4", height: 1080, width: 1920 };

    const [video, setVideo] = useState(mobileVideo);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        setVideo(isMobile ? mobileVideo : desktopVideo);
    }, []);

    // todo: fallback image must have same aspect ratio as video!

    return (
        <div className={styles.heroContainer}>
            <video autoPlay loop muted playsInline
                className={styles.videoElement}
                poster="/images/hero-video-fallback.avif"
                width={video.width} height={video.height}>
                <source 
                    src={video.src} 
                    type="video/mp4"
                />  
            </video>

            <div className={styles.overlay}>
                <Image 
                    src="/images/logo-white-transparent-background.avif" 
                    alt="Harmony Hill Logo" 
                    width="540" height="540"
                    fetchPriority="high" 
                    className={styles.logo} 
                />

                <h1 className={styles.slogan}>Two Private Villas in the heart of Bali <br />
                    100% Vegan
                </h1>
            </div>
        </div>
    );
}