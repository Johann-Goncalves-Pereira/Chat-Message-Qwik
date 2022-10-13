import { component$ } from "@builder.io/qwik";
import { BaseSection } from "@components/Global";

export const Chat = component$(() => {
  return <BaseSection titleId="direct-chat-message"></BaseSection>;
});
