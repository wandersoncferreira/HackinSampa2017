import { HackInSampaPage } from './app.po';

describe('hack-in-sampa App', function() {
  let page: HackInSampaPage;

  beforeEach(() => {
    page = new HackInSampaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
