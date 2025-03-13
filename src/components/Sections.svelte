<script lang="ts">
  import { onMount } from "svelte";
  import { subscribe } from "@strifeapp/strife";
  import Hero from './Hero.svelte';
  import RichText from './RichText.svelte';
  import Content from './Content.svelte';
  import Bento from './Bento.svelte';
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
    {#if section['@strife'].template === 'content'}
      <Content {...section} />
    {/if}
    {#if section['@strife'].template === 'text'}
      <RichText {...section} />
    {/if}
    {#if section['@strife'].template === 'bento'}
      <Bento {...section} />
    {/if}
  {/each}
</div>