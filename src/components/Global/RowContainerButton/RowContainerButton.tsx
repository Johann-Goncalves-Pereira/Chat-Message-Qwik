import { component$, PropFunction, Slot } from "@builder.io/qwik";

type RowContainerButtonProps = {
  className?: string;
  onClick$: PropFunction<() => any>;
  onMouseOver$: PropFunction<() => any>;
  onMouseOut$: PropFunction<() => any>;
};

export const RowContainerButton = component$(
  ({
    className = "",
    onClick$,
    onMouseOver$,
    onMouseOut$,
  }: RowContainerButtonProps) => {
    return (
      <button
        class={`rounded border border-solid border-surface-600 bg-surface-900 py-1 px-2 ${className}`}
        onClick$={async () => await onClick$()}
        onMouseOver$={async () => await onMouseOver$()}
        onMouseOut$={async () => await onMouseOut$()}
      >
        <Slot />
      </button>
    );
  }
);
