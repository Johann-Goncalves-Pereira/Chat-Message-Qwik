import { component$, PropFunction, Slot, useStore } from "@builder.io/qwik";

import { Icon } from "@components/Global";

export const CollapsibleList = component$(() => {
  const state = useStore({
    colapse: true,
  });

  return (
    <details class="" open={state.colapse}>
      <summary
        class="flex cursor-pointer select-none items-center gap-1 py-2 px-2"
        onClick$={() => (state.colapse = !state.colapse)}
      >
        <Icon>{state.colapse ? "arrow_drop_down" : "arrow_right"}</Icon>
        {/* <Icon>{state.colapse ? "arrow_right" : "arrow_drop_down"}</Icon> */}

        <Slot name="summary" />
      </summary>

      <ul class="grid gap-1">
        <Slot />
      </ul>
    </details>
  );
});

type SidebarItemProps = {
  title: string;
  onClick$?: PropFunction<() => any>;
};

export const SidebarItem = component$(
  ({ title, onClick$ }: SidebarItemProps) => {
    return (
      <li class="">
        <button
          class="flex w-full cursor-pointer items-center 
                gap-2 py-2 pl-4 text-sm
              text-surface-300 hover:bg-surface-700"
          onClick$={async () => await onClick$?.()}
        >
          <Slot />
          <p class="max-w-[14rem] overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </p>
        </button>
      </li>
    );
  }
);
