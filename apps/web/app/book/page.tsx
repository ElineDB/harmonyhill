import SirvoyBooking from "@/components/SirvoyBooking";
import BookingPolicy from "@/components/BookingPolicy";
import Carousel from "@/components/Carousel";

const images = [
    { src: '/images/pool-deck-view-smaller.avif', alt: 'Infinity Pool' },
    { src: '/images/bdr-3-villa-1.jpeg', alt: 'bed room'},
    { src: '/images/living-room-villa-1.avif', alt: 'spacious living room'},
    { src: '/images/villa-1-taking-bath.avif', alt: 'luxurious copper bath tub' },
    { src: '/images/infinity-pool-view.webp', alt: 'jungle infinity pool' },
];

export default function Book() {
    return (
        <main>
            <Carousel images={images} />
            <SirvoyBooking />
            <BookingPolicy />
        </main>
    );
}