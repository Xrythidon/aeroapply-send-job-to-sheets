import LoginToGoogle from "../components/LoginToGoogle.svelte";
import { storage } from "../storage";
import "../tailwind.css";

// Action popup
// https://developer.chrome.com/docs/extensions/reference/action/

async function render() {
  const target = document.getElementById("app");

  const {storage_token} = await storage.get()

  if (target) {
    new LoginToGoogle({
      target,
      props: { storage_token },
    });

  }

}

document.addEventListener("DOMContentLoaded", render);
