'use client';

import styles from "./AboutUs.module.css";

export default function AboutUs() {
    return (
        <section id="about-us" className={styles.section}>
            <div className={styles.textBody}>
                <h2 className="section-title">A place to reconnect</h2>
                <p>...with the wonders of nature</p>
                <p>...with the food that nourishes your body</p>
                <p>...with the beautiful Balinese people and their cultural heritage</p>
                <p>...with yourself</p>
                <br/>
                <p>Harmony Hill and The Jungle Nook are our luxurious villas, tucked away in a traditional village in the
                    heart of Bali. Perched upon
                    a ridge, overlooking a gorgeous valley and luscious rice fields, we are a scenic 30 minute drive away
                    from
                    both the bustling town of Ubud in the South and the jaw dropping volcanic landscapes of Mount Batur in
                    the North.
                </p>
                <br/>
                <p>
                    Our aim is to offer you a unique opportunity to find sanctuary in nature, while enjoying the comfort of
                    our beautiful villa and the thoughtful service of our team.
                </p>
            </div>
        </section>
    );
}