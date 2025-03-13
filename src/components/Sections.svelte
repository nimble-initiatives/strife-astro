<script lang="ts">
  import { onMount } from "svelte";
  import { subscribe } from "@strifeapp/strife";
  import Hero from './Hero.svelte';
  import type { Chapter } from "@strifeapp/types";
  export let sections: Chapter[];

  onMount(() => {
    subscribe(content => sections = content.sections);
  });

</script>

<div>
  {#each sections as section}
    {#if section['@strife'].template === 'hero'}
      <Hero {...section} />
    {/if}
  {/each}
</div>