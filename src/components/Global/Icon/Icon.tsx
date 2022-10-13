import { component$, Slot } from "@builder.io/qwik";


type IconProps = {
  className?: string;
}

export const Icon = component$(({className = ""}: IconProps) => {
  return (
    <i class={`material-symbols-rounded ${className}`}>
      <Slot />
    </i>
  );
});
