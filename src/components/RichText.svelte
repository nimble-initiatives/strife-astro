<script lang="ts">
  export let background: boolean;
  export let align: string;
  export let text: string;

  console.log(background);
</script>

<section
  class:py-16={background}
  class:md:py-20={background}
  class:lg:py-28={background}
  class:bg-zinc-200={background}
  class:my-16={!background}
  class:md:my-20={!background}
  class:lg:my-28={!background}
>
  <div class="container">
    <div class:prose={true} class:text-center={align === "center"}>
      {@html text}
    </div>
  </div>
</section>