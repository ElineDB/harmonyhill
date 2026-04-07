'use client';

import Link from 'next/link';
import styles from "./FloatingButton.module.css";

export default function BookingButton() {
    return (
        <div className={styles.floatingButton}>
            <Link href="https://harmonyhill.reserveonline.id/book/1245" target="_blank" rel="noopener">
                Book now! &hearts;
            </Link>
        </div>
    );
}
