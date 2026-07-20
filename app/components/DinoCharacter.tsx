import Image from "next/image";
import { cn } from "../lib/utils";

/**
 * DinoCharacter — Dino POS mascot.
 *
 * Renders the official mascot PNG (`/mascot.png`) — a friendly purple T-rex
 * holding a coffee cup. Because the source image is a single fixed pose,
 * the `variant` prop now controls *accessories / accents* layered around
 * the mascot (speech bubble, "FREE" badge, etc.) rather than the pose itself.
 *
 * If you later ship multiple pose PNGs, swap `SRC[variant]` to a lookup map.
 */
type Variant = "hero" | "pointing" | "carrying" | "giving" | "sad" | "waving";

const SRC = "/mascot.webp";

interface DinoCharacterProps {
  variant?: Variant;
  size?: number;
  className?: string;
}

export default function DinoCharacter({
  variant = "hero",
  size = 280,
  className,
}: DinoCharacterProps) {
  return (
    <div
      className={cn("relative select-none", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={SRC}
        alt="Dino POS mascot — purple dinosaur"
        width={size}
        height={size}
        priority={variant === "hero"}
        className="h-full w-full animate-float object-contain drop-shadow-[0_20px_30px_rgba(124,58,237,0.25)]"
      />
      <VariantAccessory variant={variant} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Accessory props — small accents layered around the mascot per variant     */
/* -------------------------------------------------------------------------- */
function VariantAccessory({ variant }: { variant: Variant }) {
  if (variant === "pointing") {
    return (
      <div className="absolute -right-2 top-4 animate-float-slow">
        <span className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold text-dino-primary shadow-md">
          ดูนี่!
        </span>
      </div>
    );
  }

  if (variant === "giving") {
    return (
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-dino-accent px-3 py-1 text-xs font-bold text-white shadow-md">
        FREE
      </div>
    );
  }

  if (variant === "carrying") {
    return (
      <div className="absolute right-0 top-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-lg">
        ☁️
      </div>
    );
  }

  if (variant === "sad") {
    return (
      <div className="absolute -left-2 top-8 text-2xl">
        <span aria-hidden>💧</span>
      </div>
    );
  }

  if (variant === "waving") {
    return (
      <div className="absolute -right-1 top-2 animate-float-slow text-2xl">
        <span aria-hidden>👋</span>
      </div>
    );
  }

  return null;
}
