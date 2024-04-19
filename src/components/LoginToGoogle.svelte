<script lang="ts">
  import {fetchGoogleSheets} from "../services/apis/GoogleAPI"
  export let storage_token: string | undefined;

  function googleLogin() {
    if (!chrome.identity) {
      console.error("chrome.identity is not available.");
      return;
    }

    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError);
        alert("Login Failed: " + chrome.runtime.lastError);
        return;
      }
      storage_token = token;
      fetchGoogleSheets(token!)
    });
  }
</script>

<button
  on:click={googleLogin}
  class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
>
  <img
    class="w-6 h-6"
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    loading="lazy"
    alt="google logo"
  />
  <span class="text-base">Login with Google</span>
</button>
