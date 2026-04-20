import Image from "next/image";
import type { ReactNode } from "react";

type PhoneFrameProps = {
  src?: string;
  alt?: string;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
};

export function PhoneFrame({
  src,
  alt,
  priority = false,
  children,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto aspect-[430/932] w-full max-w-[320px] overflow-hidden rounded-[2rem] bg-black shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 z-20 rounded-[2rem] ring-1 ring-inset ring-white/[0.06]" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
        {children ??
          (src && (
            <Image
              src={src}
              alt={alt ?? ""}
              fill
              sizes="(min-width: 768px) 320px, 80vw"
              className="object-cover"
              priority={priority}
            />
          ))}
      </div>
    </div>
  );
}
