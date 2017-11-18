import { ICPkcs5 } from './ICPkcs5';

export const ICRandom = function () { };

ICRandom.generate = function (length) {
  if (length < 8 || length > 1024) {
    length = 8;
  }

  return ICPkcs5.pbkdf2("UZDST1106II", Date.now().toString(), Date.now().toString(), 100, length);
}
