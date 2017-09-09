import { RubycasesPage } from './app.po';

describe('rubycases App', () => {
  let page: RubycasesPage;

  beforeEach(() => {
    page = new RubycasesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
