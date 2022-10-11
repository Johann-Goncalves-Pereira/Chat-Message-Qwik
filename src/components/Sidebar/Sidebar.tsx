import { component$ } from "@builder.io/qwik";
import { BaseSection } from "@components/Global";

export const Sidebar = component$(() => {
  return (
    <BaseSection className="relative" titleId="main-sidebar">
      <button
        q:slot="header"
        class="absolute inset-0 flex items-center gap-1 px-4 text-surface-200"
      >
        <h1 class="text-xl font-semibold" id="main-sidebar">
          Test
        </h1>
        <span class="material-symbols-rounded text-lg ">
          keyboard_arrow_down
        </span>
      </button>
      <button
        q:slot="header"
        class=" absolute inset-y-0 right-4 my-auto grid h-8 w-8 place-content-center rounded-full bg-surface-200  text-surface-900"
      >
        <span class="material-symbols-rounded -translate-y-[1px] text-xl">
          edit_square
        </span>
      </button>

      <div q:slot="body" class="flex h-full flex-col"></div>

      <footer
        q:slot="body"
        class="flex items-center gap-2 border-t border-solid border-surface-700 py-3 px-4 text-surface-300"
      >
        <span class="material-symbols-rounded text-lg">headphones</span>
        <b class="text-xs">Start a huddle</b>
      </footer>
    </BaseSection>
  );
});
