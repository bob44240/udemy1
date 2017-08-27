import { Udemy1Page } from './app.po';

describe('udemy1 App', () => {
  let page: Udemy1Page;

  beforeEach(() => {
    page = new Udemy1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
