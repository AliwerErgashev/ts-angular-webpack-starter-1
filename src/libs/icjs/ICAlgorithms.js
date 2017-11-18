import { ICUzdst1106IIDigest } from './ICUzdst1106IIDigest';

export const ICAlgorithms = {};

ICAlgorithms.Digest = {};
ICAlgorithms.Digest.SHA1 = {};

ICAlgorithms.Digest.UZDST1106II = {};

ICAlgorithms.Digest.UZDST1106II.create = function () {
  return new ICUzdst1106IIDigest();
};
