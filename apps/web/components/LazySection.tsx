'use client'
import { useInView } from 'react-intersection-observer';

export default function LazySection({ children }: Readonly<{ children: React.ReactNode; }>) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px', // Start loading 200px before user reaches it
    });

    return (
        <div ref={ref} className="min-h-[100px]">
            {inView ? children : <div className="h-20" />}
        </div>
    );
}