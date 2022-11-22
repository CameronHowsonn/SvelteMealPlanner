import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: `@import './src/app.scss';`,
      },
    }),
  ],
};

export default config;
