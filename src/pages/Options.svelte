<script lang="ts">
  import GoogleSheetsLogo from "../components/GoogleSheetsLogo.svelte";
  import LoginToGoogle from "../components/LoginToGoogle.svelte";

  export let storage_token: string | undefined;

  function selectSheet() {

    
  }
</script>

<div class="text-base p-4 text-center">
  {#if !storage_token}
    <h1 class="mb-4">Hello 👋, click below to select a google sheet!</h1>
    <button
      class="px-4 py-2 border flex items-center justify-center mx-auto gap-2 border-slate-200 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      on:click={selectSheet}
    >
      <GoogleSheetsLogo /></button
    >
  {:else}
    <h1>Please log in to save your job applications</h1>
    <LoginToGoogle {storage_token} />
  {/if}
</div>
