'use client';

import Image from 'next/image';
import styles from "./RoundedImage.module.css"
import { ImageProps } from "@/types";

export default function RoundedImage({ src, alt, description }: ImageProps) {
    return (
        <div className={styles.imageWrapper}>
            <Image
                className={styles.roundedImg}
                src={src}
                alt={alt}
                fill
            />
            {description && (
                <div className={styles.caption}>
                    <p>
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}