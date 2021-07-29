import { useEffect, useState } from "react";
/**
 * React custom hook using the intersection observer api. With the help of the api, lazy load images when the target node is in
 * range of the viewport. The hook takes two parameters one being the targeted ref and optional observer configurations.
 * returns the ratio/viewport and whether or not the node is visible.
 */
interface ObserverOptions {
  rootMargin: string;
  threshold: number;
}

export const useIntersectionObserver = (
  nodeRef: React.RefObject<HTMLDivElement>,
  options?: ObserverOptions
) => {
  const [state, setState] = useState({ visible: false, ratio: 0 });
  const observerOptions: ObserverOptions = Object.assign(
    { rootMargin: "0", threshold: 0 },
    options
  );

  useEffect(() => {
    const node = nodeRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setState({ visible: entry.isIntersecting, ratio: entry.intersectionRatio });
    }, observerOptions);

    if (node) observer.observe(node);

    return () => {
      observer.unobserve(node as HTMLImageElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { nodeVisible: state.visible, ratio: state.ratio };
};
