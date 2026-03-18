'use client';

import Link from 'next/link';
import styles from "./GoodToKnow.module.css";

export default function GoodToKnow() {
    return (
        <section id="goodtoknow" className={styles.section}>
            <h2 className="section-title">Good To Know</h2>
            <p></p>

            <div className={styles.sectionBody}>
                <div className={styles.heartImageContainer}>
                    <img src="/images/smileyinsect.avif" alt="smiling insect" className="img-fluid" />
                    <img src="/images/cats-heart-small.avif" alt="harmony hill kittens" className="img-fluid" />
                </div>

                <div id="goodtoknow-points" className={styles.goodToKnowText}>
                    <ul className="leaf-bullets">
                        <li className="leaf-bullets-li"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 640 640">
                                <path
                                    d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
                            </svg>
                            <span>
                                At Harmony Hill, we live alongside the vibrant creatures that have
                                called this place home long before we arrived. You'll spot beautiful butterflies fluttering
                                through the air and playful squirrels in the trees, as well as perhaps some less familiar
                                jungle creatures like beetles and lizards. As night falls, you might be lucky enough to see
                                fireflies dancing over the rice paddies... Just look at that little smiley face :) 
                            </span>
                        </li>
                        <li className="leaf-bullets-li"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 640 640">
                                <path
                                    d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
                            </svg>
                            The largest and furriest creatures you're likely to encounter are our
                            four Bali kittens - all foundlings who found their way into our hearts</li>
                        <li className="leaf-bullets-li"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 640 640">
                                <path
                                    d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
                            </svg>
                            <div>
                                <Link href="https://maps.app.goo.gl/vm7oAYE28zNFGzVx5" className="green-link"
                                    target="_blank">Harmony
                                    Hill</Link>{" "} and
                                    {" "}<Link href="https://maps.app.goo.gl/vxCFRJwAhWu9ZazPA" className="green-link" target="_blank">The
                                    Jungle Nook</Link>{" "} are located halfway between Ubud and the majestic
                                UNESCO geopark of Mount Batur. We are at an elevation of 500m. That means we don't need
                                aircon and can
                                instead rely on natural ventilation to ensure you have a restful sleep.
                            </div>
                        </li>
                        <li className="leaf-bullets-li"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 640 640">
                                <path
                                    d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
                            </svg>
                            <div>We do our best to make our villas as sustainable as possible

                                <ul>
                                    <li>We capture and filter rain water for toilets and showers </li>
                                    <li>Our drinking water is filtered using ancient ceramic filtering techniques (find out
                                        more
                                        on {" "}<Link href="https://www.terrawaterindonesia.com/" className="green-link">Terra</Link>'s
                                        website)</li>
                                    <li>Our menu evolves with the seasons and nearly all our products are locally sourced
                                    </li>
                                    <li> We are building a food garden, which provides jackfruit, durian, passion fruit,
                                        chaya (the miracle spinach tree) amongst other treasures</li>
                                    <li>Any food scraps are composted in our garden</li>
                                    <li> We are striving to make our villa plastic free </li>
                                </ul>
                                We are always looking for ways to do better so we'd love to hear from you if you have
                                suggestions or ideas &hearts;
                            </div>
                        </li>
                        <li className="leaf-bullets-li"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 640 640">
                                <path
                                    d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
                            </svg>
                            <div>
                                We have one car parking spot available. You may keep your scooters here and drop-offs 
                                by car are of course no problem at all, but if you plan to keep more than one car here 
                                during your stay, please let us know in advance, so that we may help arrange parking for you.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
