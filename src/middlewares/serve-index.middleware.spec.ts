import { ServeIndexMiddleware } from './serve-index.middleware';

describe('ServeIndexMiddleware', () => {
  it('should be defined', () => {
    expect(new ServeIndexMiddleware()).toBeDefined();
  });
});
