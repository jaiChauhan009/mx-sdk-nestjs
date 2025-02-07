import { UrlUtils } from "../../src/utils/url.utils";

describe('isLocalhost', () => {
  it('should return true', () => {
    expect(UrlUtils.isLocalhost('https://localhost:2000')).toBeTruthy();
    expect(UrlUtils.isLocalhost('http://localhost:2000')).toBeTruthy();
  });

  it('should return false', () => {
    expect(UrlUtils.isLocalhost('dharitri.com')).toBeFalsy();
    expect(UrlUtils.isLocalhost('http://dharitri.com')).toBeFalsy();
    expect(UrlUtils.isLocalhost('https://dharitri.com')).toBeFalsy();
  });
});
