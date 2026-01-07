import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement>({
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
}: IntersectionObserverOptions) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);

                if (entry.isIntersecting && freezeOnceVisible) {
                    observer.unobserve(element);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return { ref, isInView };
}
