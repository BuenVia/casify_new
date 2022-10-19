const riskItem = [
  {
    pc: "Accommodation",
    sc: [
      {
        matrix: {
          id: 1,
          name: "Slips/Trips/Falls",
          hsInvest: "Yes",
          investFreq: "Each occurrence",
          prevComp: "Each occurrence",
          auditHist: "Each occurrence",
          partResp: "30 days - 3 requests",
          exceptions:
            "Audit Covers/Investigated/concern resolved within previous 1 year",
          expecPartAct:
            "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
          mm: "Final Chaser",
          gapAct: "Issue Recommendation",
          respEscAct: "Market Manager/\nArea Manager",
          day30: "Issue Recommendation",
          respRelo: "NA",
          concAct: "NA",
          concRelo: "NA"
        },
        questions: [],
        recommendations: []
      },
      {
        matrix: {
          id: 2,
          name: "Bathroom Safety",
          hsInvest: "Recommendatoin",
          investFreq: "Each occurrence",
          prevComp: "Each occurrence",
          auditHist: "Each occurrence",
          partResp: "30 days - 3 requests",
          exceptions: "",
          expecPartAct:
            "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
          mm: "Final Chaser",
          gapAct: "Issue Recommendation",
          respEscAct: "Market Manager/\nArea Manager",
          day30: "Issue Recommendation",
          respRelo: "NA",
          concAct: "NA",
          concRelo: "NA"
        },
        questions: [],
        recommendations: []
      }
    ]
  }
];

module.exports = riskItem;