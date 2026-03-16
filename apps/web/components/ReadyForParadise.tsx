'use client';

import Link from 'next/link';
import styles from "./ReadyForParadise.module.css";
import RoundedImage from './RoundedImage';

export default function ReadyForParadise() {
    return (
        <section id="ready-paradise" className={styles.section}>
            <div className={styles.sectionBody}>
                <div className={styles.desktopOnlyImage}>
                    <RoundedImage src={"/images/floating-breakfast.avif"} alt={"Complimentary floating breakfast"}/>
                </div>
                <div id="inclusions" className={styles.textContent}>
                    <h2 className="section-title">Ready for Paradise?</h2>
                    <div className={styles.supportUsText}>
                        Support us by booking directly and we'll treat you to a complimentary floating 
                        breakfast (Harmony  Hill) or a free dessert tasting (The Jungle Nook).
                    </div>

                    <br/>

                    <strong>What is waiting for you at Harmony Hill and The Jungle Nook?</strong><br/>
                    <div>&hearts; Delicious plantbased breakfast included</div>
                    <div>&hearts; Complimentary arabica coffee, tea and tropical fruit basket on arrival</div>
                    <div>&hearts; Complimentary guided rice paddy, village & waterfall walk</div>
                    <div>&hearts; 100% Vegan Amenities</div>
                    <div>&hearts; Our Wonderful Team ready to make your stay unforgettable: we provide hotel-level service
                        in the privacy of your own villa</div>
                    <div>&hearts; Homemade vegan lunch, dinners and desserts from our
                        {" "}<Link href="https://www.canva.com/design/DAGZz36GPtY/OarAkAxLlISRwIHy9tLvfg/view?utm_content=DAGZz36GPtY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8b0707566f" className="green-link" target="_blank">menu</Link>,
                        freshly prepared at your request
                    </div>
                </div>
               
                <div className={styles.mobileOnlyContent}>
                    <RoundedImage src={"/images/floating-breakfast.avif"} alt={"Complimentary floating breakfast"}/>
                </div>
            </div>
        </section>
    );
}