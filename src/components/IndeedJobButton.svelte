<script lang="ts">
  import AeroApplyLogo from "./AeroApplyLogo.svelte";
  import Checkmark from "./Checkmark.svelte";
  import GoogleSheetsLogo from "./GoogleSheetsLogo.svelte";

  export let title: string;
  export let url: string;
  export let location: string;
  export let jobDesc: string;
  export let salary: string;

  let isMessageSuccessful = false;

  function sendMessage() {
    // This function will send the data to a background script
    console.log({ title, url, location, jobDesc, salary });
    chrome.runtime.sendMessage({ title, url, location, jobDesc });
    isMessageSuccessful = true;
  }
</script>

<div data-extension-added="true" class="w-full flex gap-2 justify-start items-center">
  <button
    class="border-aero-apply-blue border-2 px-4 py-4 rounded-xl flex gap-2 items-center justify-center"
    on:click={sendMessage}
  >
    <AeroApplyLogo />
    <span class="font-bold">Save Job with</span>
    <GoogleSheetsLogo />
  </button>
  {#if isMessageSuccessful}
    <Checkmark />
  {/if}
</div>
