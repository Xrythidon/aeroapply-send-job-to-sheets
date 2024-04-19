import LoginToGoogle from "../components/LoginToGoogle.svelte";
import Options from "../pages/Options.svelte";
import { storage } from "../storage";
import "../tailwind.css";

// Options
// https://developer.chrome.com/docs/extensions/mv3/options/

async function render() {
  const target = document.getElementById("app");

  const {storage_token} = await storage.get()

  if (target) {
    new Options({
      target,
      props: { storage_token },
    });

  }

}

document.addEventListener("DOMContentLoaded", render);
