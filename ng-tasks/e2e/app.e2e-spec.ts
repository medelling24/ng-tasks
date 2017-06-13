import { NgTasksPage } from './app.po';

describe('ng-tasks App', () => {
  let page: NgTasksPage;

  beforeEach(() => {
    page = new NgTasksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
