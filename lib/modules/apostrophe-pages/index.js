// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'template-with-hypens',
      label: 'Template with Hypens'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ],
  allowedSubpageTypes: {
      home: [ 'template-with-hypens'],
      template-with-hypens: ['home']
  }
};
