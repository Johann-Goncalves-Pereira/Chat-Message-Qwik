import { component$, Slot } from "@builder.io/qwik";

type BaseSectionProps = {
  className?: string;
  titleId: string;
};

export const BaseSection = component$(
  ({ className: classHeader = "", titleId }: BaseSectionProps) => {
    return (
      <section
        class="grid grid-rows-header-content 
        border-b border-solid border-surface-700 [&_+_section]:border-l"
        aria-labelledby={titleId}
      >
        <header
          class={`border-b border-solid border-surface-700 bg-surface-900 ${classHeader}`}
        >
          <Slot name="header" />
        </header>
        <Slot name="body" />
      </section>
    );
  }
);
