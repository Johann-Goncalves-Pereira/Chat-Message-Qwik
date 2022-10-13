import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Chat } from "@components";

export default component$(() => {
  return <Chat />;
});

export const head: DocumentHead = {
  title: "Home",
};
