const AccessTokenManager = require('../../../aplication/security/AccessTokenManager');
const mockAccessTokenManager = new AccessTokenManager();
const VerifyAccessToken = require('../../../aplication/useCases/VerifyAccessToken');

test('should resolve with the decoded user data (ID) when OAuth JWT access token is valid', async () => {
  // given
  mockAccessTokenManager.decode = () => {
    return { uid: 1234 };
  };

  // when
  const result = await VerifyAccessToken('some-jwt-access-token', { accessTokenManager: mockAccessTokenManager });

  // then
  expect(result).toEqual({ uid: 1234 });
});

test('should throw an Error when OAuth JWT access token is invalid', () => {
  expect(() => {
    // given
    mockAccessTokenManager.decode = () => null;

    // when
    VerifyAccessToken('a-wrong-jwt-access-token', { accessTokenManager: mockAccessTokenManager });
  }).toThrowError('Invalid access token');
});
