const { algoliasearch, instantsearch } = window;
const { autocomplete } = window['@algolia/autocomplete-js'];
const { createLocalStorageRecentSearchesPlugin } = window[
  '@algolia/autocomplete-plugin-recent-searches'
];
const { createQuerySuggestionsPlugin } = window[
  '@algolia/autocomplete-plugin-query-suggestions'
];

const searchClient = algoliasearch('RCSRXUKCU7', '22aec755f281fb5dff6a838372d674d7');

const search = instantsearch({
  indexName: 'products_index',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },

});
search.addWidgets([
  // RIGHT PANEL - searchbox, results, stats
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search Spencer and Williams...',
  }),
  // RESULTS TEMPLATE
    instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: (hit, { html, components }) => html`
        <div>
          <img src="${hit.image}" align="left" alt="${hit.name}" />
          <div class="hit-name">
            ${components.Highlight({ hit, attribute: "name" })}
          </div>
          <div class="hit-description">
            ${components.Highlight({ hit, attribute: "description" })}
          </div>
          <div class="hit-rating">
            ${components.Highlight({ hit, attribute: "rating" })}
          </div>
          <div class="hit-price">$${hit.price}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
    instantsearch.widgets.stats({
    container: "#stats"
  }),
  // pagination
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  // LEFT PANEL - REFINEMENTS: brands, hierarchical categories, price, rating, + CLEAR REFINEMENTS
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
    searchable: true,
    searchablePlaceholder: 'Search for a brand',
    searchableIsAlwaysActive: true,
    limit: 10,
    showMore: true,
    showMoreLimit: 100
  }),
  instantsearch.widgets.clearRefinements({
    container: "#clear-refinements",
  }),
  instantsearch.widgets.hierarchicalMenu({
    container: "#hierarchical-categories",
    attributes: [
    "hierarchicalCategories.lvl0",
    "hierarchicalCategories.lvl1",
    "hierarchicalCategories.lvl2",
    "hierarchicalCategories.lvl3",
    "hierarchicalCategories.lvl4"
    ],
  }),
  instantsearch.widgets.numericMenu({
    container: "#numeric-menu",
    attribute: "price",
    items: [
    { label: "All" },
    { label: "Less than 500$", end: 500 },
    { label: "Between 500$ - 1000$", start: 500, end: 1000 },
    { label: "More than 1000$", start: 1000 },
  ],
  }),
  instantsearch.widgets.ratingMenu({
    container: "#rating",
    attribute: "rating",
  }),
  instantsearch.widgets.toggleRefinement({
    container: "#free-shipping",
    attribute: "free_shipping",
    on: true,
    templates: {
    labelText: "Free shipping only"
    },
  }),
]);


search.start();
