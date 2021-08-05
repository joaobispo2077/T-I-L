import { mapData } from '.';

describe('Map data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData();
    expect(pageData).toEqual(
      expect.objectContaining({
        footer: '',
        slug: '',
        title: '',
      }),
    );
  });

  it('should map data when there is data', () => {
    const pageData = mapData({
      footer_text: '<p> Hello World </p>',
      slug: 'slug',
      title: 'title',
    });
    expect(pageData).toEqual(
      expect.objectContaining({
        footer: '<p> Hello World </p>',
        slug: 'slug',
        title: 'title',
      }),
    );
  });
});
