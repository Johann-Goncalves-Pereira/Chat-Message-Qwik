import { component$, Slot, useStore } from "@builder.io/qwik";
import { Icon, SimpleComponentProps } from "@components/Global";

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
        <label for="search-bar" class="pointer-events-none scale-0 opacity-0">
          Search Bar - Search anything you want
        </label>
        <input
          type="search"
          id="search-bar"
          name="search-bar"
          class="flex-1 bg-transparent px-3 py-1 text-surface-200"
          onInput$={({ target }) =>
            (state.search = (target as HTMLInputElement).value)
          }
          value={state.search}
        />
        <Slot />
        <button class="grid h-full place-items-center px-1">
          <Icon className="scale-75 text-surface-400">search</Icon>
        </button>
      </div>
    );
  }
);
