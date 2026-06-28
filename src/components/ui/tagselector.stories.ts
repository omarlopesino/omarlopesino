import TagsSelector from "./TagsSelector.astro";

export default {
  title: 'Components/TagsSelector',
  component: TagsSelector,
  args: {
    name: 'tags',
    tags: [
      {key: 'tag1', label: 'Tag 1'},
      {key: 'tag2', label: 'Tag 2'},
      {key: 'tag3', label: 'Tag 3'},
      {key: 'tag4', label: 'Tag 4'},
      {key: 'tag4', label: 'Tag 5'}
    ],
  }
};

export const Default = {};
