import type { Template } from "@strifeapp/types";

const Homes: Template = {
  name: 'Homes',
  displayName: 'Home',
  collection: 'Homes',
  type: 'Home',
  editors: [
    {
      label: 'Sections',
      description: 'The sections that make up the home page.',
      editor: {
        name: 'str-chapters',
        propertyName: 'sections',
        type: 'chapters',
        attributes: {
          hint: '<p>Home page sections</p>',
        },
        options: {
          availableTypes: ["text","content","hero","bento"],
        }
      },
      searchable: false
    }
  ],
  templateType: 'dt',
  normalizedName: 'home',
  disableUrl: false,
  archived: false,
  icon: 'home',
  hint: 'Homepage for the Strife demo. The page is built up of an arbitrary number of sections consisting of different types of content. The sections can be sorted in any order.',
  searchfields: [],
  filteredFields: [],
}

export default Homes;