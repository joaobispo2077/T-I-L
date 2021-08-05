import {
  mapSectionTwoColumns,
  mapSectionContent,
  mapSections,
  mapTextGrid,
  mapImageGrid,
} from './mapSections';

import mockSections from './data.json';

describe('Map sections', () => {
  it('should render predefined section if no data is provided', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(mockSections.sections);
    expect(data[0]).toEqual(
      expect.objectContaining({
        component: 'section.section-two-columns',
      }),
    );
  });

  it('should receive section when sent invalid text/image grid', () => {
    const withoutTextGrid = [
      {
        __component: 'section.section-grid',
        text_grid: undefined,
      },
    ];
    const withoutImageGrid = [
      {
        __component: 'section.section-grid',
        text_grid: undefined,
      },
    ];

    expect(mapSections(withoutTextGrid)).toEqual(withoutTextGrid);
    expect(mapSections(withoutImageGrid)).toEqual(withoutImageGrid);
  });

  it('should receive section when sent invalid data', () => {
    const withoutTextOrImageGrid = [
      {
        __component: 'section.section-grid',
      },
    ];

    const withoutComponent = [{}];

    expect(mapSections(withoutTextOrImageGrid)).toEqual(withoutTextOrImageGrid);
    expect(mapSections(withoutComponent)).toEqual(withoutComponent);
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      metadata: {
        background: false,
        section_id: 'intro',
      },
      content:
        '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
    });

    expect(data).toEqual({
      background: false,
      component: 'section.section-content',
      html: '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
      sectionId: 'intro',
      title: 'news coverage and some surprises',
    });
  });

  it('shoud map section text grid', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      _id: '60df303eb90cfa3918d450aa',
      title: 'My grid.',
      description:
        'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
      metadata: {
        background: false,
        section_id: 'grid',
      },
      text_grid: [
        {
          _id: '60df303eb90cfa3918d450ab',
          title: 'Teste 1',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '60df303eb90cfa3918d450ab',
        },
        {
          _id: '60df303eb90cfa3918d450ac',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          title: 'Teste 2',
          __v: 0,
          id: '60df303eb90cfa3918d450ac',
        },
        {
          _id: '60df303eb90cfa3918d450ad',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          title: 'Teste 3',
          __v: 0,
          id: '60df303eb90cfa3918d450ad',
        },
      ],
    });

    expect(data).toEqual(
      expect.objectContaining({
        component: 'section.section-grid-text',
        title: 'My grid.',
        description:
          'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        hasBackground: false,
        sectionId: 'grid',
        grid: [
          {
            _id: '60df303eb90cfa3918d450ab',
            title: 'Teste 1',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
            __v: 0,
            id: '60df303eb90cfa3918d450ab',
          },
          {
            _id: '60df303eb90cfa3918d450ac',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
            title: 'Teste 2',
            __v: 0,
            id: '60df303eb90cfa3918d450ac',
          },
          {
            _id: '60df303eb90cfa3918d450ad',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
            title: 'Teste 3',
            __v: 0,
            id: '60df303eb90cfa3918d450ad',
          },
        ],
      }),
    );
  });

  it('shoud map section image grid', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '60df5a0fb90cfa3918d450bf',
      title: 'Gallery',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias',
      text_grid: [],
      image_grid: [
        {
          _id: '60df5a0fb90cfa3918d450c0',
          __v: 0,
          image: {
            _id: '60df5d3ab90cfa3918d450d5',
            alternativeText: 'Museu',
            url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        _id: '60df5a10b90cfa3918d450c2',
        name: 'gallery',
        section_id: 'gallery',
        __v: 0,
        id: '60df5a10b90cfa3918d450c2',
      },
      __v: 2,
      id: '60df5a0fb90cfa3918d450bf',
    });

    expect(data).toEqual(
      expect.objectContaining({
        component: 'section.section-grid-image',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias',
        grid: [
          {
            altText: 'Museu',
            src: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625251128/photo_1511894395104_279931d816da_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mj_Uy_NTA_2_MDM_and_ixlib_rb_1_2_34dcd9f19a.jpg',
          },
        ],
        hasBackground: false,
        sectionId: 'gallery',
        title: 'Gallery',
      }),
    );
  });

  it('should map sections two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '60df5e7ab90cfa3918d450dd',
      metadata: {
        background: true,
        _id: '60df5e7ab90cfa3918d450e2',
        __v: 0,
        name: 'contact',
        section_id: 'contact',
        id: '60df5e7ab90cfa3918d450e2',
      },
      __v: 1,
      description:
        'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
      title: 'January brings us Firefox 85',
      image: {
        _id: '60df2dd7b90cfa3918d45076',
        name: 'javascript.svg',
        alternativeText: 'Pessoas segurando logos do HTML, CSS e Javascript',
        caption: 'Pessoas segurando logos do HTML, CSS e Javascript',
        hash: 'javascript_b9d280e07f',
        ext: '.svg',
        mime: 'image/svgxml',
        size: 30.31,
        url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238996/javascript_b9d280e07f.svg',
        provider_metadata: {
          public_id: 'javascript_b9d280e07f',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['60df2f78b90cfa3918d45086', '60df5e7ab90cfa3918d450dd'],
        createdAt: '2021-07-02T15:16:39.322Z',
        updatedAt: '2021-07-02T18:46:09.640Z',
        __v: 0,
        id: '60df2dd7b90cfa3918d45076',
      },
      id: '60df5e7ab90cfa3918d450dd',
    });

    expect(data).toEqual({
      background: true,
      component: 'section.section-two-columns',
      description:
        'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
      image: {
        alternativeText: 'Pessoas segurando logos do HTML, CSS e Javascript',
        url: 'https://res.cloudinary.com/dtzgb4r5p/image/upload/v1625238996/javascript_b9d280e07f.svg',
      },
      sectionId: 'contact',
      title: 'January brings us Firefox 85',
    });
  });
});
