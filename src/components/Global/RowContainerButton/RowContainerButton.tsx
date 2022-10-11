import { component$, PropFunction, Slot } from "@builder.io/qwik";

type RowContainerButtonProps = {
  className?: string;
  onClick$: PropFunction<() => any>;
};

export const RowContainerButton = component$(
  ({ className = "", onClick$ }: RowContainerButtonProps) => {
    return (
      <button
        class={`rounded border border-solid border-surface-600 bg-surface-900 py-1 px-2 ${className}`}
        onClick$={async () => await onClick$()}
      >
        <Slot />
      </button>
    );
  }
);
