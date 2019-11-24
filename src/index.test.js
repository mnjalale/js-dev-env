import { expect } from 'chai';
import { JSDOM } from 'jsdom';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html',() => {
  it('should say Hello World!', () => {
    return JSDOM.fromFile('./src/index.html').then(dom => {
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Hello, welcome to my page!');
      });
  })
})


