import { component$, Slot, useStore, useStylesScoped$ } from "@builder.io/qwik";

import { Icon, RowContainerButton } from "@components/Global";
import { UserPhoto } from "@components/User";

import styles from "./styles.scss?inline";

type UserOptionsItemsProps = {
  separator?: boolean;
};

export const UserOptions = component$(() => {
  const state = useStore({
    changeStatus: false,
  });

  return (
    <section
      class="top-arrow--absolute fixed right-5 top-14 grid gap-3 rounded-md border 
    border-solid border-surface-600 bg-surface-800"
    >
      <header
        class="flex items-center gap-4 px-4 pt-4"
        aria-labelledby="user-options-title"
      >
        <UserPhoto
          className="row-span-2"
          src="https://picsum.photos/200/300"
          name="Johann"
        />
        <div>
          <strong id="user-options-title">Johann</strong>
          <p class="before-ball--empty mt-2 flex items-center gap-2 text-xs text-surface-300 ">
            Active
          </p>
        </div>
      </header>

      <RowContainerButton
        className="mx-4 flex items-center gap-2 py-2 text-lg
        font-medium text-surface-400 hover:border-surface-400 hover:text-surface-300
        [&>i:last-of-type]:hidden [&:hover>i:last-of-type]:grid  [&>i:first-of-type]:grid [&:hover>i:first-of-type]:hidden"
        onClick$={() => (state.changeStatus = !state.changeStatus)}
      >
        <i>🫥</i>
        <i>😁</i>
        <p class="text-xs">Update your status</p>
      </RowContainerButton>

      <ul class="grid">
        <UserOptionsItems>Set yourself as away</UserOptionsItems>
        <UserOptionsItems separator>
          Pulse notifications
          <Icon className="ml-16 text-base">navigate_next</Icon>
        </UserOptionsItems>
        <UserOptionsItems>Profile</UserOptionsItems>
        <UserOptionsItems separator>Preferences</UserOptionsItems>
        <UserOptionsItems>Sing out of XXX</UserOptionsItems>
      </ul>
    </section>
  );
});

export const UserOptionsItems = component$(
  ({ separator = false }: UserOptionsItemsProps) => {
    useStylesScoped$(styles);

    return (
      <li
        class={`relative my-1 flex cursor-pointer items-center py-2 px-4 last-of-type:rounded-b hover:bg-teal-700
        ${separator ? "line" : ""}`}
      >
        <Slot />
      </li>
    );
  }
);
