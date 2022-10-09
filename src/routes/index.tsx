import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <h3>This Is the Page content that will change</h3>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
