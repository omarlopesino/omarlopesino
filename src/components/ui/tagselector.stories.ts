import TagsSelector from "./TagsSelector.astro";

export default {
  title: 'Components/TagsSelector',
  component: TagsSelector,
  args: {
    name: 'tags',
    tags: [
      {id: 'tag1', label: 'Tag 1'},
      {id: 'tag2', label: 'Tag 2'},
      {id: 'tag3', label: 'Tag 3'},
      {id: 'tag4', label: 'Tag 4'},
      {id: 'tag4', label: 'Tag 5'}
    ],
  }
};

export const Default = {};
