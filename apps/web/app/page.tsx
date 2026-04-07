import styles from "./page.module.css";
import OurVillas from "@/components/OurVillas";
import HeroVideo from "@/components/HeroVideo";
import AboutUs from "@/components/AboutUs";
import NaturesKitchen from "@/components/NaturesKitchen";
import StayIn from "@/components/StayIn";
import Explore from "@/components/Explore";
import ReadyForParadise from "@/components/ReadyForParadise";
import Availability from "@/components/Availability";
import GoodToKnow from "@/components/GoodToKnow";
import Faq from "@/components/Faq";
import LeafDivider from "@/components/LeafDivider";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <HeroVideo />
                <AboutUs />
                <OurVillas />
                <NaturesKitchen />
                <StayIn />
                <Explore />
                <ReadyForParadise />
                <LeafDivider />
                <Availability />
                <LeafDivider />
                <GoodToKnow />
                <Faq />
            </main>
        </div>
    );
}
