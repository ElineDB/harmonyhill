'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const BookingButton = dynamic(() => import("@/components/BookingButton"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });
const EmailButton = dynamic(() => import("@/components/EmailButton"), { ssr: false });

export default function FloatingButtons() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    const buttonZIndex = 1000;

    return (
        <div>
            {/* Floating buttons, always visible in the corners */}
            < div style={{ zIndex: buttonZIndex, position: "fixed", right: "1rem", bottom: "1rem" }}>
                <BookingButton />
            </div >

            <div style={{ zIndex: buttonZIndex, position: "fixed", left: "1rem", bottom: "4.5rem" }}>
                <EmailButton />
            </div>

            <div style={{ zIndex: buttonZIndex, position: "fixed", left: "1rem", bottom: "1rem" }}>
                <WhatsAppButton />
            </div>
        </div>
    );
}