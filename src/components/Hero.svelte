<script lang="ts">
  export let id: string = '';
  export let size: 'small' | 'large' = 'large';
  export let align: 'center' | 'left' = 'left';
  export let heading: string = '';
  export let text: string = '';
  export let cta: {
    text: string;
    href: string;
    target?: string;
  } | undefined;
  export let image: {
    mobile?: { source: { url: string } };
    tablet?: { source: { url: string } };
    desktop?: { source: { url: string } };
  } | undefined;
  export let video: {
    __media: boolean;
    controls?: boolean;
    loop?: boolean;
    playing?: boolean;
    poster?: { source: { url: string } };
    url: string;
    startTime?: number;
  } | undefined;
</script>

<section
  {id}
  class:relative={true}
  class:text-white={true}
  class:antialiased={true}
  class:h-hero={size === "small"}
  class:h-screen={size === "large"}
  class:max-h-[900px]={size === "large"}
>
  <div
    class="absolute inset-0 z-20 bg-zinc-900 bg-opacity-75 flex justify-center flex-col"
  >
    <div
      class:container={true}
      class:mx-auto={true}
      class:flex={true}
      class:flex-col={true}
      class:text-center={align === "center"}
      class:items-center={align === "center"}
    >
      <h1 class="text-2xl md:text-4xl lg:text-7xl font-bold mb-2 max-w-4xl" data-placeholder="Här kan vi skriva en placeholder-text">{heading}</h1>
      <p class="max-w-2xl text-lg mb-7" data-placeholder="Här kan vi skriva en placeholder-text">{text}</p>
      {#if cta?.text && cta?.href}
        <p class="max-w-2xl">
          <a
            href={cta.href}
            class="font-bold underline underline-offset-4 hover:no-underline"
            target={cta.target === '_blank' ? '_blank' : undefined}
          >{cta.text}</a>
        </p>
      {/if}
    </div>
  </div>

  {#if !video?.__media}
    <picture>
      <source
        srcset={image?.mobile?.source?.url}
        media="(max-width: 400px)"
        width="400"
        height="500"
        data-property-media="mobile"
      >
      <source
        srcset={image?.tablet?.source?.url}
        media="(min-width: 401px) and (max-width: 860px)"
        width="860"
        height="500"
        data-property-media="tablet"
      >
      <source
        srcset={image?.desktop?.source?.url}
        media="(min-width: 861px)"
        width="1366"
        height="500"
        data-property-media="desktop"
      >
      <img
        src={image?.desktop?.source?.url}
        loading="lazy"
        alt=""
        width="1366"
        height="500"
        class="w-full h-full object-cover"
      >
    </picture>
  {:else}
    <video
      class="w-full h-full object-cover"
      playsinline
      controls={video?.controls}
      muted
      loop={video?.loop}
      autoplay={video?.playing}
      poster={video?.poster?.source?.url ?? undefined}
    >
      <source src="{video.url}#t={video.startTime}" type="video/mp4" />
    </video>
  {/if}
</section>

