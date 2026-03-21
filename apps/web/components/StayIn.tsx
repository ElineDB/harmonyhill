'use client';

import styles from "./StayIn.module.css";
import RoundedImage from "./RoundedImage";

export default function StayIn() {
    return (
        <section id="stay-in" className={styles.section}>
            <div className={styles.sectionBody}>
                <div>
                    <h2 className="section-title">Stay In</h2>
                    <p>Whether you want to relax on our wooden deck with a book and a tropical juice, pamper yourself with a
                        luxurious massage or bathe in a natural waterfall, we've got you covered.</p>
                    <p>A cosy retreat at Harmony Hill or The Jungle Nook:
                        <br />... Sip a fresh cup of coffee on your wooden deck, enjoying the <b>morning sun on your face</b>
                        and
                        glimpsing tropical birds fly through the misty valley. They make their way to the <b>rice
                            paddies</b> to hunt for breakfast.
                        <br />... Why not follow suit? Wander through the paddies, down to a <b>secluded waterfall</b> for a
                        morning dip, just 5 minutes walk away.
                        <br />... Join us as we prepare the <b>daily offerings</b> or "canang"
                        <br />... Stroll around our <b>tropical fruit garden</b> and learn about the various plants
                        <br />... Have a <b>Balinese massage</b> or a <b>yoga class</b> with a private instructor on the
                        wooden deck (extra charge)
                    </p>
                </div>
                <div>
                    <RoundedImage
                        src={"/images/ricefield2-resize.avif"}
                        alt={"Lush rice paddies near Harmony Hill"}
                    />
                </div>
            </div>
        </section>
    );
}
