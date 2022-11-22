<script>
  import { onMount } from "svelte";
  import { allCategoryData, allCategoryDataExport } from "../../store/stores";
  import CategoryCard from "./CategoryCard.svelte";

  onMount(async () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        allCategoryData.set(data);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

<div class="category-list">
  <h2>Categories</h2>
  <div class="category-list__inner">
    {#each $allCategoryDataExport as category}
      <CategoryCard {category} />
    {/each}
  </div>
</div>

<style lang="scss">
  .category-list {
    padding: 2em;
  }

  .category-list__inner {
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;
    gap: 2em;
    overflow: visible;
    padding: 2em 0 1em 0em;
  }
</style>
