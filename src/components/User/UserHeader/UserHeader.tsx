import { component$, useStore, useStyles$ } from "@builder.io/qwik";
import { UserPhoto, UserOptions } from "@components/User";

import styles from "./styles.scss?inline";

type UserProps = {
  hasNotifications?: boolean;
  name: string;
};

export const UserHeader = component$(
  ({ hasNotifications, name }: UserProps) => {
    const state = useStore({
      showOptions: false,
    });

    useStyles$(styles);

    return (
      <>
        <button
          class={`relative ml-auto mr-5 cursor-pointer
           hover:brightness-110 [&:hover>p]:opacity-100 [&:hover>p]:delay-700 ${
             hasNotifications || "before-ball--notification"
           }`}
          aria-labelledby={`current-user-first-name=${name}`}
          onClick$={() => (state.showOptions = !state.showOptions)}
        >
          <UserPhoto src="https://picsum.photos/200/300" name="Johann" />

          {!state.showOptions && (
            <p
              class="top-arrow pointer-events-none absolute top-full right-0 grid opacity-0 delay-75"
              id={`current-user-first-name=${name}`}
            >
              <span
                class="rounded-lg border border-solid
             border-surface-700 bg-surface-900 py-1 px-3 text-sm"
              >
                {name}
              </span>
            </p>
          )}
        </button>

        {state.showOptions && <UserOptions />}
      </>
    );
  }
);
