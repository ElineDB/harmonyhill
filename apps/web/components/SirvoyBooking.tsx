'use client';

import { useEffect, useRef } from 'react';
import styles from "./SirvoyBooking.module.css"

export default function SirvoyBooking() {
    const containerRef = useRef<HTMLDivElement>(null);

    const dataFormId = process.env.NEXT_PUBLIC_SIRVOY_DATA_FORM_ID;

    useEffect(() => {
        if (!dataFormId || !containerRef.current) return;

        // 1. Check if the script is already there to avoid duplicates
        if (containerRef.current.querySelector('script')) return;

        // 2. Create the script element manually
        const script = document.createElement('script');
        script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
        script.async = true;
        script.setAttribute('data-form-id', dataFormId);

        // 3. PHYSICAL INJECTION: Put the script INSIDE your div
        // This forces the form to render exactly where this div sits.
        containerRef.current.appendChild(script);

        return () => {
            // Cleanup if the user leaves the page
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [dataFormId]);

    return (
        <div className="booking-wrapper">
            {/* This is the container that will hold the booking form */}
            <div 
                ref={containerRef} 
                className={styles.sirvoyWidgetContainer}
            >
                {/* Script will be injected here via useEffect */}
            </div>
        </div>
    );
}