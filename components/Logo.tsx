import Image from "next/image";

export default function Logo({
  className = "h-14",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/sefora-logo-approved.png"
      alt="Sefora"
      width={599}
      height={442}
      priority={priority}
      className={`w-auto ${className}`}
    />
  );
}
