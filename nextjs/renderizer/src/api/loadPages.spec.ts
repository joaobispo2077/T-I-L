import { loadPages } from './loadPages';
import config from '../config';

describe('load pages', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    global.mockJson = jest
      .fn()
      .mockResolvedValue(Promise.resolve({ toJson: 1 }));

    global.fetch = jest.fn().mockResolvedValue({
      json: global.mockJson,
    });
  });

  it('should call fetch convert data to json', async () => {
    const result = await loadPages();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(config.url + '/pages/');
    expect(global.mockJson).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ toJson: 1 });
  });

  it('should fix received slug', async () => {
    const result = await loadPages('atenção');

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      config.url + '/pages/?slug=ateno',
    );
    expect(global.mockJson).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ toJson: 1 });
  });
});
