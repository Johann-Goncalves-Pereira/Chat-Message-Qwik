import { PropFunction } from "@builder.io/qwik";

export type SimpleComponentProps = {
  className?: string;
};

export type SimpleComponentEventsPros = SimpleComponentProps & {
  onClick$: PropFunction<() => any>;
};
