import { ServiceCounterPipe } from './service-counter.pipe';

describe('ServiceCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new ServiceCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
