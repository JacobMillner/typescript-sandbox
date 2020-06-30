import { rgbToHex } from '../color-functions/color-utils';

test('test rgbToHex, red', () => {
  expect(rgbToHex(255, 0, 0)).toBe('ff,00,00');
});
