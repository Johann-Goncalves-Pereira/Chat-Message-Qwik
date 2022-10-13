import { component$, Slot } from "@builder.io/qwik";
import { Header, Footer, Sidebar } from "@components";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="grid" style={`grid-template-columns: 20% 80% auto;`}>
        <Sidebar />
        <Slot />
      </main>
      <Footer />
    </>
  );
});
