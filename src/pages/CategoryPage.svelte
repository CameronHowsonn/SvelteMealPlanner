<script>
  import { onMount } from "svelte";
  import {
    individualCategoryData,
    individualCategoryDataExport,
  } from "./../store/stores";
  export let title;

  onMount(async () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`)
      .then((response) => response.json())
      .then((data) => {
        individualCategoryData.set(data);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

{#each $individualCategoryDataExport as meal}
  {JSON.stringify(meal)}
{/each}
