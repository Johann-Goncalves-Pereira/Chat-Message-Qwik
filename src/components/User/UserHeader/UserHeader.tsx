import { RowContainerButton } from "@/components/Global";
import { component$, Slot, useStore, useStyles$ } from "@builder.io/qwik";
import { UserPhoto } from "@components/User";

import styles from "./styles.scss?inline";

type UserProps = {
  hasNotifications?: boolean;
  name: string;
};

type UserOptionsItemsProps = {
  separator?: boolean;
};

export const UserHeader = component$(
  ({ hasNotifications, name }: UserProps) => {
    useStyles$(styles);

    return (
      <>
        <div
          class={`relative ml-auto mr-5 cursor-pointer
           hover:brightness-110 [&>p]:hover:opacity-100 [&>p]:hover:delay-700 ${
             hasNotifications || "before-ball--notification"
           }`}
          aria-labelledby={`current-user-first-name=${name}`}
        >
          <UserPhoto src="https://picsum.photos/200/300" name="Johann" />

          <p
            class="top-arrow grd pointer-events-none absolute top-full right-0 opacity-0 delay-75"
            id={`current-user-first-name=${name}`}
          >
            <span
              class="rounded-lg border border-solid
             border-surface-700 bg-surface-900 py-1 px-3 text-sm"
            >
              {name}
            </span>
          </p>
        </div>

        <UserOptions />
      </>
    );
  }
);

export const UserOptions = component$(() => {
  const state = useStore({
    changeStatus: false,
    mouseOver: false,
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
          <p class="before-ball--empty flex items-center gap-2 text-xs text-surface-300 ">
            Active
          </p>
        </div>
      </header>

      <RowContainerButton
        className="mx-4 flex items-center gap-2 font-medium 
        text-surface-400 hover:border-surface-400 hover:text-surface-300"
        onClick$={() => (state.changeStatus = !state.changeStatus)}
        onMouseOver$={() => (state.mouseOver = true)}
        onMouseOut$={() => (state.mouseOver = false)}
      >
        <i class="">{state.mouseOver ? "😁" : "🫥"}</i>
        <p class="text-xs">Update your status</p>
      </RowContainerButton>

      <ul class="grid">
        <UserOptionsItems>Set yourself as away</UserOptionsItems>
        <UserOptionsItems>
          Pulse notifications
          <span class="material-symbols-out">navigate_next</span>
        </UserOptionsItems>
        <UserOptionsItems>Profile</UserOptionsItems>
        <UserOptionsItems separator={true}>Preferences</UserOptionsItems>
        <UserOptionsItems>Sing out of XXX</UserOptionsItems>
      </ul>
    </section>
  );
});

export const UserOptionsItems = component$(
  ({ separator = false }: UserOptionsItemsProps) => {
    useStyles$(styles);

    return (
      <li
        class={`my-1 grid cursor-pointer py-1 px-4
        ${separator ? "" : ""}`}
      >
        <Slot />
      </li>
    );
  }
);
