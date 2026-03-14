'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Or your React Icons
import RoundedImage from "./RoundedImage";
import {ImageProps} from "@/types";
import styles from "./Carousel.module.css";

interface Deck {
    images: ImageProps[];
}

export default function Carousel({images} : Deck) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className={styles.embla} id="villa-carousel">
            {/* 1. Viewport (The "Window") */}
            <div className={styles.emblaViewport} ref={emblaRef}>
                {/* 2. Container (The long strip of images) */}
                <div className={styles.emblaContainer}>
                {images.map((img, index) => (
                    <div className={styles.emblaSlide} key={index}>
                        <RoundedImage src={img.src} alt={img.alt} description={img.description}/>
                    </div>
                ))}
                </div>
            </div>

            {/* 3. Navigation Buttons */}
            <button className={`${styles.emblaButton} ${styles.prev}`} onClick={scrollPrev}>
                <ChevronLeft size={30} />
            </button>
            <button className={`${styles.emblaButton} ${styles.next}`} onClick={scrollNext}>
                <ChevronRight size={30} />
            </button>
        </div>
    );
}