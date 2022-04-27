import { useEffect, useRef, useState } from "react";

export const Animation = () => {
  const ref = useRef(null);
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/fireworks.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <div
      className="w-screen h-screen grid place-items-center absolute"
      ref={ref}
    />
  );
};
