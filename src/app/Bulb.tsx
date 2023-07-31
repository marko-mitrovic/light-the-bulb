import React from "react";
import Image, { ImageProps } from "next/image";
interface BulbProps extends ImageProps {
  src: string;
  alt: string;
}

function Bulb({ src, alt }: BulbProps) {
  return (
    <Image
      className="block m-auto py-4"
      src={src}
      // src={isBulbOn ? bulbOn : bulbOff} // Change the bulb image based on isBulbOn state
      width={150}
      height={150}
      alt={alt}
    />
  );
}

export default Bulb;
