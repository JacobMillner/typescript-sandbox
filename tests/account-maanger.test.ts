import { AccountManager } from '../accounts/account-manager';

test('register user', () => {
  let ac = new AccountManager();
  expect(ac.register('test_user', 'test_pass')).toStrictEqual({
    email: 'test_user',
    password: 'test_pass',
    isActive: false,
  });
});
