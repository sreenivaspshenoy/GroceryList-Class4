import { MyGroceryAppEventsPage } from './app.po';

describe('my-grocery-app-events App', () => {
  let page: MyGroceryAppEventsPage;

  beforeEach(() => {
    page = new MyGroceryAppEventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
