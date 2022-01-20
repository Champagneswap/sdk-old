export enum CellarAction {
  ADD_ASSET = 1,
  REPAY = 2,
  REMOVE_ASSET = 3,
  REMOVE_COLLATERAL = 4,
  BORROW = 5,
  GET_REPAY_SHARE = 6,
  GET_REPAY_PART = 7,
  ACCRUE = 8,

  // Functions that don't need accrue to be called
  ADD_COLLATERAL = 10,
  UPDATE_EXCHANGE_RATE = 11,

  // Function on BentoBox
  CELLAR_DEPOSIT = 20,
  CELLAR_WITHDRAW = 21,
  CELLAR_TRANSFER = 22,
  CELLAR_TRANSFER_MULTIPLE = 23,
  CELLAR_SETAPPROVAL = 24,

  // Any external call (except to Cellar)
  CALL = 30
}
