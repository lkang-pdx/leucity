import { LeucityPage } from './app.po';

describe('leucity App', () => {
  let page: LeucityPage;

  beforeEach(() => {
    page = new LeucityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
