import { component$, Slot, useStore } from "@builder.io/qwik";

type BaseSectionProps = {
  className?: string;
  titleId: string;
};

export const BaseSection = component$(
  ({ className: classHeader = "", titleId }: BaseSectionProps) => {
    const state = useStore({
      canChange: false,
      window: {
        w: 0,
        h: 0,
      },
      mouse: {
        x: 0,
        y: 0,
      },
    });

    return (
      <section
        class="relative grid grid-rows-header-content
        border-b border-solid border-surface-700 [&_+_section>#position-selection]:block"
        aria-labelledby={titleId}
      >
        <header
          class={`bg-surfdoace-900 border-b border-solid border-surface-700 ${classHeader}`}
        >
          <Slot name="header" />
        </header>

        <div
          class="absolute inset-y-0 left-0 hidden w-[1px] cursor-e-resize bg-surface-700"
          id="position-selection"
          onClick$={(ev) => {
            state.mouse.x = ev.clientX;
            state.mouse.y = ev.clientY;

            console.table([state.mouse.x, state.mouse.y]);
          }}
        ></div>

        <Slot />
      </section>
    );
  }
);
