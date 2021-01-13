import { Actor } from './actor';

describe('Actor', () => {
  it('should create an instance', () => {
    expect(new Actor('testActor', 0)).toBeTruthy();
  });
});
