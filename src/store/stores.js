import { writable, derived } from "svelte/store";

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const allCategoryData = writable({});
export const individualCategoryData = writable({});

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const allCategoryDataExport = derived(allCategoryData, ($apiData) => {
  if ($apiData?.categories?.length > 0) {
    return $apiData?.categories.splice(0, 7);
  }

  return [];
});

export const individualCategoryDataExport = derived(
  individualCategoryData,
  ($apiData) => {
    console.log($apiData);
    if ($apiData?.meals?.length > 0) {
      return $apiData?.meals;
    }

    return [];
  }
);
