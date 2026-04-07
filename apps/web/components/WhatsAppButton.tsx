'use client';

import Link from 'next/link';
import styles from "./FloatingButton.module.css";
import { FaWhatsapp } from 'react-icons/fa';
import { CSSProperties } from 'react';

export default function WhatsAppButton() {
    //href="https://wa.me/message/TVA3I5GFI5VLO1"
    
    const message = "Hi! I'm interested in staying at Harmony Hill";
    const encodedMessage = encodeURIComponent(message);
    const waNumber = "6287789040323";
    const waRef = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    const style : CSSProperties = {
        display : "flex",
        flexDirection : "row",
        gap: "0.2rem"
    };

    return (
        <div className={styles.floatingButton}>
            <Link href={waRef} target="_blank" className="social-med-icons" aria-label="WhatsApp link">
                <div style={style}>
                    <FaWhatsapp size={25}/>
                    <span>Whatsapp</span>
                </div>
            </Link>
        </div>
    );
}
