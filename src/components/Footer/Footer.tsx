import { component$, useStore, useClientEffect$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  const clock = useStore({
    hour: 0,
    min: 0,
  });

  useClientEffect$(() => {
    const updateClock = () => {
      const now = new Date();
      clock.hour = now.getHours();
      clock.min = now.getMinutes();
    };
    updateClock();
    const tmrId = setInterval(updateClock, 1000);
    return () => clearInterval(tmrId);
  });

  const h = clock.hour.toString().padStart(2, "0");
  const m = clock.min.toString().padStart(2, "0");

  const currentTime = h + ":" + m;

  return (
    <footer class="bg-surface-900 px-2 pt-[2px]">
      <p class="flex items-center gap-1 text-xs text-surface-400">
        <span class="material-symbols-rounded text-xs">schedule</span>
        {currentTime}
      </p>
    </footer>
  );
});
