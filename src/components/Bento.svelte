<script lang="ts">
  export let id;
  export let items;
  export let style;
</script>

<section {id} class="my-16 md:my-20 lg:my-28">
  <div class="container">
    <div class="w-full grid grid-cols-12 auto-rows-max gap-5 row-span">
      {#each items as item, index}
        {#if item.link}
          <a
            href={item.link?.href}
            class="relative rounded-xl col-span-12 p-10 pt-52 col-span-full
              {style === 1 && [3, 4].includes(index) ? 'lg:col-span-6' : ''}
              {style === 2 && index > 3 ? 'lg:col-span-6' : ''}
              {style === 4 && [2, 3].includes(index) ? 'lg:col-span-6' : ''}
              {style === 2 && [1, 2].includes(index) ? 'lg:col-span-8' : ''}
              {style === 3 && index === 0 ? 'lg:col-span-8' : ''}
              {style === 3 && index === 1 ? 'lg:row-span-2' : ''}
              {style === 4 && [0, 1, 4, 5].includes(index) ? 'lg:col-span-3' : ''}
              {style === 3 && index > 0 ? 'lg:col-span-4' : ''}
              {style === 2 && [0, 3].includes(index) ? 'lg:col-span-4' : ''}
              {style === 1 && index < 3 ? 'lg:col-span-4' : ''}"
          >
            <img
              src={item.image?.source.url}
              alt={item.image?.alt}
              class="absolute top-0 left-0 w-full h-full object-cover rounded-xl -z-10"
            />
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-zinc-900 bg-opacity-75 rounded-xl -z-10" />
            <h3 class="text-2xl font-bold mb-3 text-white">{item.heading}</h3>
            <p class="text-white">{item.text}</p>
          </a>
        {:else}
          <div
            class="relative rounded-xl col-span-12 p-10 pt-52 col-span-full
              {style === 1 && [3, 4].includes(index) ? 'lg:col-span-6' : ''}
              {style === 2 && index > 3 ? 'lg:col-span-6' : ''}
              {style === 4 && [2, 3].includes(index) ? 'lg:col-span-6' : ''}
              {style === 2 && [1, 2].includes(index) ? 'lg:col-span-8' : ''}
              {style === 3 && index === 0 ? 'lg:col-span-8' : ''}
              {style === 3 && index === 1 ? 'lg:row-span-2' : ''}
              {style === 4 && [0, 1, 4, 5].includes(index) ? 'lg:col-span-3' : ''}
              {style === 3 && index > 0 ? 'lg:col-span-4' : ''}
              {style === 2 && [0, 3].includes(index) ? 'lg:col-span-4' : ''}
              {style === 1 && index < 3 ? 'lg:col-span-4' : ''}"
          >
            <img
              src={item.image?.source.url}
              alt={item.image?.alt}
              class="absolute top-0 left-0 w-full h-full object-cover rounded-xl -z-10"
            />
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-zinc-900 bg-opacity-75 rounded-xl -z-10" />
            <h3 class="text-2xl font-bold mb-3 text-white">{item.heading}</h3>
            <p class="text-white">{item.text}</p>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
