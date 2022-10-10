import { component$, Slot, useStore } from "@builder.io/qwik";
import { SimpleComponentProps } from "@components/Global";

export const SearchBar = component$(
  ({ className = "" }: SimpleComponentProps) => {
    const state = useStore({
      search: "",
    });

    return (
      <div
        class={`flex items-center rounded border border-solid border-surface-600 ${
          className || ""
        } `}
      >
        <input
          type="search"
          class="flex-1 bg-transparent px-3 py-1 text-surface-200"
          onInput$={({ target }) =>
            (state.search = (target as HTMLInputElement).value)
          }
          value={state.search}
        />
        <Slot />
        <button class="grid h-full place-items-center px-1">
          <span class="material-symbols-rounded scale-75 text-surface-400">
            search
          </span>
        </button>
      </div>
    );
  }
);
