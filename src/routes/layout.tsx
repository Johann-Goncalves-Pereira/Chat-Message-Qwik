import { component$, Slot } from "@builder.io/qwik";
import { Header, Footer } from "@components";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
