import { Movie } from './movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie('testActor', 'testCountry', 'testDescription', 'testGenre', 0, 'test/IMBD/url', 'test/img/url', 'testLanguage', 'testScore', 'testRating', 'testTime', 'testTagline', 'testTitle', 'testUserRatingt', 'testVotes', 'testYear', 'testDirector')).toBeTruthy();
  });
});
