const mongoose = require("mongoose");

const matrixSchema = new mongoose.Schema({
  Level: {
    type: String,
    require: true
  },
  primCat: {
    type: String,
    require: true
  },
  secCat: {
    type: String,
    require: true
  },
  actionSla: {
    type: String,
    require: true
  },
  hs: {
    type: String,
    require: true
  },
  mm: {
    type: String,
    require: true
  },
  legal: {
    type: String,
    require: true
  },
  commsPr: {
    type: String,
    require: true
  },
  ceCustOut: {
    type: String,
    require: true
  },
  curFutGuestRelo: {
    type: String,
    require: true
  },
  stopSell: {
    type: String,
    require: true
  },
  delistInit: {
    type: String,
    require: true
  },
  hsInvest: {
    type: String,
    require: true
  },
  sitelInvest: {
    type: String,
    require: true
  },
  invFreq: {
    type: String,
    require: true
  },
  prevCompHist: {
    type: String,
    require: true
  },
  checkAuditHist: {
    type: String,
    require: true
  },
  partnerResponseTime: {
    type: String,
    require: true
  },
  exceptionInv: {
    type: String,
    require: true
  },
  expPartnerAct: {
    type: String,
    require: true
  },
  actionGap: {
    type: String,
    require: true
  },
  escActResp: {
    type: String,
    require: true
  },
  thirtyDays: {
    type: String,
    require: true
  },
  relResp: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("Matrix", matrixSchema);
