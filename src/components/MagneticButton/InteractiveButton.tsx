import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const InteractiveButton = () => {
  const container = useRef<HTMLButtonElement>(null);
  const elt1 = useRef<HTMLDivElement>(null);
  const elt2 = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0.5 },
      });

      tl.current
        .to(elt1.current, { rotate: -100, opacity: 0, ease: "back.out" }, 0)
        .to(elt2.current, { rotate: 0, ease: "back.out" }, 0)
        .to(".dot-container span", { stagger: 0.1, ease: "power2.inOut" }, 0)
        .to(".dot-container", { scale: 1, ease: "power2.inOut" }, "0-=0.2");

      const play = () => tl.current?.play();
      const reverse = () => tl.current?.reverse();
      container.current?.addEventListener("mouseenter", play);
      container.current?.addEventListener("mouseleave", reverse);

      return () => {
        container.current?.removeEventListener("mouseenter", play);
        container.current?.removeEventListener("mouseleave", reverse);
      };
    },
    { scope: container }
  );

  return (
    <button
      ref={container}
      className="relative px-4 py-2.5 w-[172px] h-12 uppercase text-zinc-900 bg-zinc-200 rounded-md overflow-hidden cursor-pointer"
    >
      <div
        ref={elt1}
        className="opacity-100 absolute top-0 translate-y-1/2 left-0 pl-4 flex justify-center items-center gap-2 origin-left"
      >
        <div className="relative size-3">
          <span className="absolute size-full rounded-full inset-0 bg-purple-700 z-30"></span>
        </div>
        <span>Hover Button</span>
      </div>
      <div
        ref={elt2}
        className="absolute top-0 translate-y-1/2 left-0 pl-4 rotate-[100deg] flex justify-center items-center gap-2 origin-left"
      >
        <div className="dot-container pl-3 relative size-3 scale-50">
          <span className="absolute size-full rounded-full inset-0 bg-purple-700 z-30"></span>
          <span className="absolute size-full rounded-full inset-0 bg-purple-500 z-20"></span>
          <span className="absolute size-full rounded-full inset-0 bg-purple-300 z-10"></span>
        </div>
        <span>Hover Button</span>
      </div>
    </button>
  );
};

export default InteractiveButton;
