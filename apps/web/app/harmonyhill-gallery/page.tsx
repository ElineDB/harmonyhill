'use client';

import Gallery from "@/components/Gallery";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
    title: 'Harmony Hill Gallery | Harmony Hill Bali',
    alternates: {
        canonical: '/harmonyhill-gallery',
    },
}

const images = [
    { src: "/images/infinity-pool-jungle-view.avif",  width: 1200, height: 900,  alt: "infinity pool with jungle valley view"                   },
    { src: "/images/bdr-3-villa-1.avif",              width: 1440, height: 1080, alt: "bed room 3"                                                },
    { src: "/images/bdr-1-villa-1.avif",              width: 1440, height: 1080, alt: "bed room 1"                                                },
    { src: "/images/waterfall-tour.jpeg",             width: 894,  height: 1280, alt: "waterfall tour"                                          },
    { src: "/images/living-room-villa-1.avif",        width: 930,  height: 698,  alt: "living room with a view",                                description: "" },
    { src: "/images/villa-1-bath-3-toilet.avif",      width: 1440, height: 1920, alt: "shower and toilet"                                       },
    { src: "/images/rain-shower-copper-bathtub.avif", width: 1400, height: 2100, alt: "open view bathtub and shower"                            },
    { src: "/images/sushi.avif",                      width: 650,  height: 488,  alt: "vegan sushi"                                             },
    { src: "/images/villa-flower-bath.avif",          width: 1000, height: 750,  alt: "flower bath"                                             },
    { src: "/images/red-door-closeup.avif",           width: 1000, height: 1328, alt: "Balinese door art"                                       },
    { src: "/images/garden-pool-2.avif",              width: 1000, height: 750,  alt: "3 bedroom bali villa with private pool"                  },
    { src: "/images/bathroom-with-copper-tub.avif",   width: 1000, height: 667,  alt: "unique bathroom with antique design and copper bath tub" },
    { src: "/images/flowers-pool-deck.avif",          width: 480,  height: 360,  alt: "flowery pool deck"                                       },
    { src: "/images/villa-1-bath-3-bath.jpeg",        width: 1000, height: 750,  alt: "open bath"                                               },
    { src: "/images/villa-pool-edge.avif",            width: 1000, height: 1501, alt: "infinity pool"                                           },
    { src: "/images/antique-bali-doors.avif",         width: 1200, height: 900,  alt: "antique-bali-doors.avif"                                 },
    { src: "/images/ricefield2.avif",                 width: 930,  height: 701,  alt: "green rice paddies"                                      },
    { src: "/images/rice-paddy-tour.avif",            width: 1000, height: 762,  alt: "rice paddy walk"                                         },
    { src: "/images/bdr-2-villa-1.avif",              width: 1440, height: 1080, alt: "morning light in bedroom"                                },
    { src: "/images/water-rice-paddies.avif",         width: 668,  height: 1280, alt: "water filled rice paddies"                               },
    { src: "/images/villa-1-coffee-supplies.jpeg",    width: 1440, height: 1080, alt: "french press coffee"                                     },
    { src: "/images/floating-breakfast-2.avif",       width: 930,  height: 698,  alt: "floating breakfast"                                      },
    { src: "/images/villa-1-bath-2.avif",             width: 1440, height: 1080, alt: "bathroom"                                                },
    { src: "/images/villa-bdr-2.avif",                width: 960,  height: 1280, alt: "bedroom 2"                                               },
    { src: "/images/infinity-pool-2.avif",            width: 960,  height: 1280, alt: "infinity pool"                                           },
    { src: "/images/villa-front-dark.avif",           width: 1600, height: 1200, alt: "night infinity pool"                                     },
    { src: "/images/villa-livingroom-breakfast.avif", width: 1280, height: 855, alt: "night infinity pool"                                     },
    { src: "/images/villa-1-nookie.avif",             width: 1440, height: 1080, alt: "jungle kitten"                                           },
];

export default function HarmonyHillGallery() {
    return (
        <main>
            <Gallery title={"Harmony Hill Gallery"} images={images} />
            <FloatingButtons />
        </main>
    )
}
