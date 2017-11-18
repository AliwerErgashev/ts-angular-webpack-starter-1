import { ICRandom } from './ICRandom';
import { ICGost89Cipher } from './ICGost89Cipher';
import { ICBuffer } from './ICBuffer';
import { ICHMac } from './ICHMac';

export class ICCipher {
  static encrypt(dh, data) {
    const iv = ICRandom.generate(8);
    const enc = ICGost89Cipher.cfbe(dh.bytes(), ICBuffer.createBuffer(data), iv.bytes());
    const dig = ICHMac.digest("UZDST1106II", iv, enc.bytes());
    iv.putBuffer(enc);
    iv.putBuffer(dig);
    return iv.toRawString();
  }

  static decrypt(dh, rawString) {
    const buffer = ICBuffer.createBuffer(ICBuffer.fromRawString(rawString));
    if (buffer.length() < 41) {
      throw new Error('Invalid input data!');
    }
    const iv = buffer.getBytes(8);
    const enc = buffer.getBytes(buffer.length() - 32);
    const dig = ICBuffer.createBuffer(buffer.getBytes());
    const dig1 = ICHMac.digest("UZDST1106II", ICBuffer.createBuffer(iv), enc);
    if (dig.toHex() !== dig1.toHex()) {
      throw new Error('Invalid checksum!');
    }
    return ICGost89Cipher.cfbd(dh.bytes(), ICBuffer.createBuffer(enc), iv).toUtf8();
  }
}
