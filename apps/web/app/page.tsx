import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
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

type Props = Omit<ImageProps, "src"> & {
    srcLight: string;
    srcDark: string;
};

const ThemeImage = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image {...rest} src={srcLight} className="imgLight" />
            <Image {...rest} src={srcDark} className="imgDark" />
        </>
    );
};

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

                <div id="leaf-divider">
                    <img src="/images/leaf-divider.png" alt="leafy divider" />
                </div>

                <Availability />

                <div id="leaf-divider">
                    <img src="/images/leaf-divider.png" alt="leafy divider" />
                </div>

                <GoodToKnow />
                <Faq />
            </main>
        </div>
    );
}
