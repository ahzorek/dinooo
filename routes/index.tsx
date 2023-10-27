import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx";

export default function Home() {
  const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <IconBrandDeno class="w-20 h-20" />
        <h1 class="text-4xl">Hey!</h1>
        <h2 class="text-2xl">been trying to meet you</h2>
        <h3>Hey</h3>
        <p>Must be a devil between us</p>
        <p>Or whores in my head</p>
        <p>Whores at the door</p>
        <p>Whore in my bed</p>
        <p>But hey</p>
        <p>Where have you been?</p>
        <p>If you go, I will surely die</p>

        <Counter count={count} />
      </div>
    </div>
  );
}
