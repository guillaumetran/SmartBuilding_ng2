import { SmartBuildingNg2Page } from './app.po';

describe('smart-building-ng2 App', function() {
  let page: SmartBuildingNg2Page;

  beforeEach(() => {
    page = new SmartBuildingNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
