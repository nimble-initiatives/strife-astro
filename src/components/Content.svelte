<script lang="ts">
  export let id;
  export let background = false;
  export let imageAlign = 'left';
  export let image = {};
  export let video = {};
  export let text = '';
</script>

<section
  {id}
  class:py-16={background}
  class:md:py-20={background}
  class:lg:py-28={background}
  class:bg-zinc-200={background}
  class:my-16={!background}
  class:md:my-20={!background}
  class:lg:my-28={!background}
>
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 xl:gap-16 items-center">
      <div class="w-full" class:lg:order-2={imageAlign === 'right'}>
        {#if !video?.__media}
          <picture>
            <source
              srcset={image?.mobile?.source?.url}
              media="(max-width: 500px)"
              width="600"
              height="300"
              data-property-media="mobile"
            />
            <source
              srcset={image?.tablet?.source?.url}
              media="(min-width: 501px) and (max-width: 861px)"
              width="728"
              height="364"
              data-property-media="tablet"
            />
            <source
              srcset={image?.desktop?.source?.url}
              media="(min-width: 862px)"
              width="716"
              height="537"
              data-property-media="desktop"
            />
            <img
              src={image?.desktop?.source?.url}
              alt=""
              width="716"
              height="537"
              class="w-full block rounded-2xl aspect-2/1 lg:aspect-4/3 object-cover"
            />
          </picture>
        {/if}

        {#if video?.__media}
          <video
            class="w-full block rounded-2xl object-cover aspect-2/1 lg:aspect-4/3"
            playsinline
            controls={video?.controls}
            muted
            loop={video?.loop}
            autoplay={video?.playing}
            poster={video?.poster?.source?.url ?? null}
          >
            <source src={`${video?.url}#t=${video?.startTime}`} type="video/mp4" />
          </video>
        {/if}
      </div>

      <div
        class="w-full prose lg:prose-lg"
        class:lg:order-1={imageAlign === 'right'}
        data-placeholder="Här kan vi skriva en placeholder-text"
      >
        {@html text}
      </div>
    </div>
  </div>
</section>
