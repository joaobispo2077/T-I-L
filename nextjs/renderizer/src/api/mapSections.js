export const mapperSections = [
  'section.section-content',
  'section.section-grid',
  'section.section-two-columns',
];

export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapTextGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: {
      background: hasBackground = false,
      section_id: sectionId = '',
    } = {},
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    hasBackground,
    sectionId,
    grid,
  };
};
export const mapImageGrid = (section = {}) => {
  const {
    title = '',
    description = '',
    metadata: {
      background: hasBackground = false,
      section_id: sectionId = '',
    } = {},
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    hasBackground,
    sectionId,
    grid: grid.map(({ image: { url: src, alternativeText: altText } }) => ({
      src,
      altText,
    })),
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image: { url: src = '', alternativeText } = {},
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component: component,
    title: title,
    description: description,
    image: {
      url: src,
      alternativeText: alternativeText,
    },
    background: background,
    sectionId: sectionId,
  };
};
