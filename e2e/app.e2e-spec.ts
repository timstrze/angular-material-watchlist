import { WatchListPage } from './app.po';

describe('watch-list App', () => {
  let page: WatchListPage;

  beforeEach(() => {
    page = new WatchListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
