import { NgAmChartsPage } from './app.po';

describe('ng-am-charts App', () => {
  let page: NgAmChartsPage;

  beforeEach(() => {
    page = new NgAmChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
