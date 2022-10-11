import { component$ } from "@builder.io/qwik";

type UserPhotoProps = {
  size?: number;
  className?: string;
  src: string;
  name: string;
};

export const UserPhoto = component$(
  ({ size = 9, className = "", src, name }: UserPhotoProps) => {
    return (
      <img
        style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
        class={`aspect-square rounded object-cover ${className} text-xs`}
        src={src}
        alt={`User photo - ${name}`}
      />
    );
  }
);
