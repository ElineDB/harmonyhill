'use client';

import Gallery from "@/components/Gallery";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
    title: 'The Jungle Nook Gallery | Harmony Hill Bali',
    alternates: {
        canonical: '/junglenook-gallery',
    },
}

const images = [
    { src: "/images/nook-deck-breakfast-1.avif",     width: 1440, height: 1080, alt: "wooden deck with jungle valley views"      },
    { src: "/images/waterfall-tour.avif",            width: 894,  height: 1280, alt: "waterfall tour"                            },
    { src: "/images/sushi.avif",                     width: 650,  height: 488,  alt: "homemade vegan sushi"                      },
    { src: "/images/vegan-forest-berry-cake.avif",   width: 720,  height: 942,  alt: "scrumptious vegan berry cake",             description: "Try our scrumptious vegan berry cake!"},
    { src: "/images/welcome-to-jungle-nook.avif",    width: 1200, height: 1600, alt: "bath with rice paddy views"                },
    { src: "/images/rice-paddy-tour.avif",           width: 1000, height: 762,  alt: "guided rice paddy walk"                    },
    { src: "/images/nook-bed-view.avif",             width: 1248, height: 936,  alt: "bed with rice paddy views"                 },
    { src: "/images/nook-surrounded-by-nature.avif", width: 1200, height: 675,  alt: "secluded cottage surrounded by nature"     },
    { src: "/images/nook-bathroom-sink.avif",        width: 1440, height: 1080, alt: "stylish bathroom"                          },
    { src: "/images/nook-bathroom-view.avif",        width: 1000, height: 750,  alt: "bathroom with copper bathtub and view"     },
    { src: "/images/nook-bath.avif",                 width: 1440, height: 960,  alt: "handmade copper bath tub with jungle view" },
    { src: "/images/nook-deck-view.avif",            width: 1200, height: 900,  alt: "wooden deck with rice paddy views"         },
    { src: "/images/nook-deck-breakfast-2.avif",     width: 1280, height: 960,  alt: "complimentary plantbased breakfast"        },
    { src: "/images/nook-bed-swans.avif",            width: 1000, height: 750,  alt: "swan towel art"                            },
    { src: "/images/ricefield2.avif",                width: 930,  height: 701,  alt: "rice paddy views"                          },
    { src: "/images/nook-breakfast-2.avif",          width: 1280, height: 960,  alt: "breakfast on the deck"                     },
    { src: "/images/villa-1-nookie.avif",            width: 1440, height: 1080, alt: "jungle kitten"                             },
    { src: "/images/nook-kitchen-view.avif",         width: 1000, height: 750,  alt: "jungle view from kitchen"                  },
    { src: "/images/nook-work-desk-view.avif",       width: 750,  height: 1000, alt: "jungle view from your work desk"           },
    { src: "/images/nook-bed-dark.avif",             width: 1440, height: 1920, alt: "bedtime goodnight"                         },
];

export default function JungleNookGallery() {
    return (
        <main>
            <Gallery title={"The Jungle Nook Gallery"} images={images} />
            <FloatingButtons />
        </main>
    )
}
