import { ANGULARHIGHCHARTSPOCPage } from './app.po';

describe('angularhighchartspoc App', () => {
  let page: ANGULARHIGHCHARTSPOCPage;

  beforeEach(() => {
    page = new ANGULARHIGHCHARTSPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
