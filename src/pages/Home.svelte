<script lang="ts">
  import { navigate } from '../lib/router.svelte';



  let selectedType = $state(1); 
  let selectedTime = $state(1);

  const wrestlingTypeOptions = [
    { id: 1, text: "Folkstyle Highschool" }, //  120, 90, 60
    { id: 2, text: "Folkstyle College" }, // 180+120 (no choice)
    { id: 3, text: "Greco" }, //  120, 90, 60
    { id: 4, text: "Freestyle" }, //  120, 90, 60
  ];

  const showSelectTime = $derived(selectedType !== 2);

  const timeOptions = [
    { id: 1, text: "2:00" },
    { id: 2, text: "1:30" },
    { id: 3, text: "1:00" },
  ]

</script>

<div class="page">

  <div class="control-container flex flex-col gap-8">
    <div>

    </div>
    {#if (!!showSelectTime)}
    <div>

    </div>
    {:else}
    <div>
      2:00, 1:00, 1:00
    </div>
    {/if}

    <div class="flex flex-row justify-center items-end gap-4 h-full border-red-600 border-[2px]">
      abc
    </div>











  </div>
 
  <div class="mt-4">

    <p>Currently selected: {selectedType || 'None'}</p>
    <p>show: {showSelectTime || 'None'}</p>

    <button onclick={() => navigate('test')}>
      Test
    </button>

  </div>




</div>

<style>

  .page {
    @apply min-h-screen flex flex-col items-center justify-center;
  }

  .control-container {
    @apply 
      min-w-[600px] max-w-[800px]
      min-h-[400px] max-h-[800px]
    ;
  }

</style>