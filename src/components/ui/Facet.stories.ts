import Facet from "./Facet.astro";
export default {
  title: 'Components/Facet',
  component: Facet,
  args:  {
    title: 'Facet example',
    facets: [
      { title: 'Facet 1', path: '/blog/facet1' },
      { title: 'Facet 2', path: '/blog/facet2', count: 3 },
    ],
  },
};
export const Default = {};
