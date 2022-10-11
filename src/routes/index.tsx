import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Chat, Sidebar } from "@components";

export default component$(() => {
  return (
    <main class="grid" style={`grid-template-columns: 20% 80% auto;`}>
      <Sidebar />
      <Chat />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
