'use client';

import Link from 'next/link';
import styles from "./Faq.module.css";

export default function Faq() {
    return (
        <section id="faq" className={styles.sectionBackground} itemScope itemType="https://schema.org/FAQPage">

            <h2 className="section-title">Common Questions</h2>

            <details className="faqItem" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">How far is Harmony Hill from central Ubud?</summary>
                <div className="faqAnswer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">We are located in the peaceful Tampaksiring region, about a 30-minute drive
                        from the center of Ubud.</p>
                </div>
            </details>

            <details className="faqItem" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Is breakfast included in the stay?</summary>
                <div className="faqAnswer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Yes, a nourishing homecooked breakfast is included with your stay. We offer savoury
                        options like avocado toast with scrambled tofu and sweet delights like waffles and chia pudding. We
                        also pride ourselves on serving locally grown arabica coffee. For more details, please take a look
                        at our <u><Link href="https://www.canva.com/design/DAGZCJNzgeA/L9Tz7Y8pdyin1PZQ9KeN7Q/view?utm_content=DAGZCJNzgeA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99deea3dde" target="_blank" className="white-link">menu</Link></u>.
                    </p>
                </div>
            </details>

            <details className="faqItem" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Can you assist with transport?</summary>
                <div className="faqAnswer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">Absolutely. We can arrange a private driver from our village to meet you at the
                        airport, harbour or anywhere else you need.
                        Please contact us via <u><Link href="mailto:harmonyhillbali@gmail.com" target="_blank"
                                className="white-link">email</Link></u> or <u><Link className="white-link"
                                href="https://wa.me/message/TVA3I5GFI5VLO1">WhatsApp</Link></u> to coordinate.</p>
                </div>
            </details>
        </section>
    )
}