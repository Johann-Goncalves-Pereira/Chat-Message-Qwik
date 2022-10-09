import { component$ } from "@builder.io/qwik";

import { SearchBar } from "@components/Header";
import { UserHeader } from "@components/User";

export const Header = component$(() => {
  return (
    <header class="grid grid-cols-[1fr_2fr_1fr] items-center bg-surface-950 py-3">
      <SearchBar className="col-start-2" />
      <UserHeader name="Johann" />
    </header>
  );
});
