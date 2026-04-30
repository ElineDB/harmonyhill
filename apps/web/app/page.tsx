import styles from "./page.module.css";
import LazySection from "@/components/LazySection";
import HeroVideo from "@/components/HeroVideo";
import AboutUs from "@/components/AboutUs";
import OurVillas from "@/components/OurVillas";
import NaturesKitchen from "@/components/NaturesKitchen";
import StayIn from "@/components/StayIn";
import Explore from "@/components/Explore";
import ReadyForParadise from "@/components/ReadyForParadise";
import GoodToKnow from "@/components/GoodToKnow";
import Faq from "@/components/Faq";
import LeafDivider from "@/components/LeafDivider";
import FloatingButtons from "@/components/FloatingButtons";


//const OurVillas = dynamic(() => import("../components/OurVillas"));
//const NaturesKitchen = dynamic(() => import("../components/NaturesKitchen"));
//const StayIn = dynamic(() => import("../components/StayIn"));
//const Explore = dynamic(() => import("../components/Explore"));
//const ReadyForParadise = dynamic(() => import("../components/ReadyForParadise"));
//const GoodToKnow = dynamic(() => import("../components/GoodToKnow"));
//const Faq = dynamic(() => import("../components/Faq"));
// const Availability = dynamic(() => import("../components/Availability"));

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <HeroVideo />
                <AboutUs />

                <LazySection><OurVillas /></LazySection>
                <LazySection><NaturesKitchen /></LazySection>
                <LazySection><StayIn /></LazySection>
                <LazySection><Explore /></LazySection>
                <LazySection><ReadyForParadise /></LazySection>
                <LazySection><LeafDivider /></LazySection>
                {/* <LazySection><Availability /></LazySection> */}
                {/* <LazySection><LeafDivider /></LazySection> */}
                <LazySection><GoodToKnow /></LazySection>
                <LazySection><Faq /></LazySection>
                <FloatingButtons />
            </main>
        </div>
    );
}
