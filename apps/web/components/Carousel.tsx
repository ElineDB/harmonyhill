'use client';

import React, { useCallback, useMemo, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Or your React Icons
import RoundedImage from "./RoundedImage";
import { ImageProps } from "@/types";
import styles from "./Carousel.module.css";

interface Deck {
    images: ImageProps[];
}

export default function Carousel({ images }: Deck) {
    const max = 6000;
    const min = 4000;
    const rotationInterval = useMemo(() => Math.floor(Math.random() * (max - min + 1)) + min, []);

    const autoplayOptions = {
        delay: rotationInterval,
        stopOnInteraction: false, // Stop if guest clicks a slide
        stopOnMouseEnter: true,   // Pauses when hovering
    };

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);
    // Load only the first slide in the carousel when opening, maximizing performance
    const [slidesInView, setSlidesInView] = useState<number[]>([0]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const updateSlidesInView = useCallback((api: any) => {
        // Get the indices of slides currently visible in the viewport
        setSlidesInView((prev) => {
            const inView = api.slidesInView();
            // Use Set to not "un-load" images once seen
            return Array.from(new Set([...prev, ...inView]))
        })
    }, []);

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('slidesInView', updateSlidesInView)
        emblaApi.on('init', updateSlidesInView)
    }, [emblaApi, updateSlidesInView]);

    return (
        <div className={styles.embla} id="villa-carousel">
            {/* 1. Viewport (The "Window") */}
            <div className={styles.emblaViewport} ref={emblaRef}>
                {/* 2. Container (The long strip of images) */}
                <div className={styles.emblaContainer}>
                    {images.map((img, index) => (
                        <div className={styles.emblaSlide} key={index}>
                            {slidesInView.includes(index) ? (
                                <RoundedImage 
                                    src={img.src} 
                                    alt={img.alt} 
                                    description={img.description}
                                    index={index}
                                />
                            ): (
                                <div className="w-full h-[500px] bg-neutral-800 animate-pulse" />
                            )}
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