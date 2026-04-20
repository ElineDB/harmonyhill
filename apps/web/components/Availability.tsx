import Link from 'next/link';
import BookingCalendar from './BookingCalendar';
import { Suspense } from 'react';
import BookingButton from './BookingButton';
import WhatsAppButton from './WhatsAppButton';
import styles from "./Availability.module.css";

export default function Availability() {
    return (
        <section id="availability" className={styles.section}>
            <h2 className="section-title">Availability</h2>
            <p>
                <strong>2 nights minimum stay</strong>
            </p>
            <div className="availabilityText">
                <p>Please review the available dates below and navigate to our {" "}<Link href="/book" className="green-link">booking engine</Link>{" "} to make
                    a reservation. 
                    <br /> You can also reach us on
                    {" "}<Link href="https://wa.me/message/TVA3I5GFI5VLO1" className="green-link">WhatsApp</Link>{" "}
                    or via {" "}<Link href="mailto:harmonyhillbali@gmail.com" target="_blank" className="green-link">email</Link>{" "} for any
                    questions or to make a reservation.
                </p>
            </div>
            <div className={styles.calendarsRowWrapper}>
                {/* Loading booking data asynchronously in the server */}
                <Suspense fallback={<div className="skeleton-loader">Loading dates...</div>}>
                    <BookingCalendar title="Harmony Hill"/>
                </Suspense>

                <Suspense fallback={<div className="skeleton-loader">Loading dates...</div>}>
                    <BookingCalendar title="The Jungle Nook"/>
                </Suspense>
            </div>
            <div className="sub-cal-buttons">
                <BookingButton />
                <WhatsAppButton />
            </div>
        </section>
    );
}
