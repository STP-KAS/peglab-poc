export const NETWORK = 'testnet-10';
export const MAX_SOMPI = 1_000_000_000n;
export const MAX_FEE = 3_000_000n;
export const LOCK_TIME_THRESHOLD = 500_000_000_000n;

export class ReceiptError extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'ReceiptError';
    this.code = code;
  }
}
