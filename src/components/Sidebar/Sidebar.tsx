import { component$ } from "@builder.io/qwik";

import { BaseSection, Icon } from "@components/Global";
import { CollapsibleList, SidebarItem } from "@components/Sidebar";

export const Sidebar = component$(() => {
  return (
    <BaseSection className="relative" titleId="main-sidebar">
      <button
        q:slot="header"
        class="absolute inset-0 flex items-center gap-1 pl-4 pr-16 text-surface-200"
      >
        <h1 class="text-xl font-semibold" id="main-sidebar">
          Test
        </h1>
        <Icon className="text-lg ">keyboard_arrow_down</Icon>
      </button>
      <button
        q:slot="header"
        class=" absolute inset-y-0 right-4 my-auto grid h-8 w-8 place-content-center rounded-full bg-surface-200  text-surface-900"
      >
        <Icon className="-translate-y-[1px] text-xl">edit_square</Icon>
      </button>

      <section
        class="overflow-auto"
        aria-labelledby="current-page-selected=XXX"
      >
        <header>
          <nav>
            <ul class="">
              <SidebarItem title="Threads">d</SidebarItem>
              <SidebarItem title="Direct Messages">h</SidebarItem>
              <SidebarItem title="Mentions & Reactions">v</SidebarItem>
              <SidebarItem title="Chat Connect">x</SidebarItem>
              <SidebarItem title="More">m</SidebarItem>
            </ul>
          </nav>
        </header>

        <CollapsibleList>
          <h2 q:slot="summary">Channels</h2>

          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
        </CollapsibleList>

        <CollapsibleList>
          <h2 q:slot="summary">Channels</h2>

          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
          <SidebarItem title="laksjdçlfkja slkdjf çlaksj dçflkajs çdlkfj açslkdj f">
            <b class="text-lg font-bold">#</b>
          </SidebarItem>
        </CollapsibleList>
      </section>

      <footer class="mt-auto flex items-center gap-2 border-t border-solid border-surface-700 py-2 px-4 text-surface-300">
        <Icon className="text-lg">headphones</Icon>
        <b class="text-xs">Start a huddle</b>
      </footer>
    </BaseSection>
  );
});
