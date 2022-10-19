const riskMatrix = [
  {
    pc: "Accommodation",
    sc: [
      {
        name: "Atrium",
        hsInvest: "Yes",
        investFreq: "Each occurrence",
        prevComp: "Each occurrence",
        auditHist: "Each occurrence",
        partResp: "30 days - 3 requests",
        exceptions:
          "Audit Covers/Investigated/concern resolved within previous 1 year",
        expecPartAct:
          "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
        mm: "1st Chaser",
        gapAct: "Issue Recommendation",
        respEscAct: "Market Manager/\nArea Manager",
        day30: "Issue Recommendation",
        respRelo: "NA",
        concAct: "NA",
        concRelo: "NA"
      },
      {
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
      {
        name: "Bathroom Slippery Surfaces",
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
      {
        name: "Building Structural Safety Concerns",
        hsInvest: "Yes",
        investFreq: "Each occurrence",
        prevComp: "Each occurrence",
        auditHist: "Each occurrence",
        partResp: "30 days - 3 requests",
        exceptions:
          "Audit Covers/Investigated/concern resolved within previous 1 year",
        expecPartAct:
          "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
        mm: "Initial Email",
        gapAct: "Issue Recommendation",
        respEscAct: "Market Manager/\nArea Manager",
        day30: "Issue Recommendation",
        respRelo: "NA",
        concAct: "NA",
        concRelo: "NA"
      },
      {
        name: "Bunk Beds",
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
      {
        name: "Information Pack",
        hsInvest: "Yes",
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
      {
        name: "Mold on shower head AC",
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
      {
        name: "Renovation/Construction Works",
        hsInvest: "Yes",
        investFreq: "Each occurrence",
        prevComp: "Each occurrence",
        auditHist: "Each occurrence",
        partResp: "30 days - 3 requests",
        exceptions:
          "Unless review references safety concerns surrounding renovation/construction works",
        expecPartAct:
          "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
        mm: "Initial Email",
        gapAct: "Issue Recommendation",
        respEscAct: "Market Manager/\nArea Manager",
        day30: "Issue Recommendation",
        respRelo: "NA",
        concAct: "NA",
        concRelo: "NA"
      },
      {
        name: "Slippery/Dangerous Surfaces",
        hsInvest: "Yes/Recommendation\n(dependent on severity/ongoing risk)",
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
      {
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
      {
        name: "Sofa Beds",
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
      {
        name: "Water leaks in rooms & public areas",
        hsInvest: "Yes/Recommendation\n(dependent on severity/ongoing risk)",
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
      }
    ]
  },
  {
    pc: "Child",
    sc: [
      {
        name: "Bunk Beds",
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
      {
        name: "Child Pool Separation",
        hsInvest: "Yes",
        investFreq: "Each occurrence",
        prevComp: "Each occurrence",
        auditHist: "Each occurrence",
        partResp: "30 days - 3 requests",
        exceptions: "",
        expecPartAct:
          "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
        mm: "1st Chaser",
        gapAct: "Issue Recommendation/Physical Audit",
        respEscAct: "Market Manager/\nArea Manager",
        day30: "Issue Recommendation",
        respRelo: "NA",
        concAct: "NA",
        concRelo: "NA"
      },
      {
        name: "Cots broken or unsafe",
        hsInvest: "Yes",
        investFreq: "Each occurrence",
        prevComp: "Each occurrence",
        auditHist: "Each occurrence",
        partResp: "30 days - 3 requests",
        exceptions:
          "Audit Covers/Investigated/concern resolved within previous 1 year",
        expecPartAct:
          "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
        mm: "2nd Chaser",
        gapAct: "Issue Recommendation",
        respEscAct: "Market Manager/\nArea Manager",
        day30: "Issue Recommendation",
        respRelo: "NA",
        concAct: "NA",
        concRelo: "NA"
      },
      {
        name: "Highchairs broken or unsafe",
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
      {
        name: "Kids Club/Play Equipment",
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
      {
        name: "Other",
        hsInvest: "Yes",
        investFreq: "Each occurrence",
        prevComp: "Each occurrence",
        auditHist: "Each occurrence",
        partResp: "30 days - 3 requests",
        exceptions: "",
        expecPartAct:
          "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
        mm: "CBC",
        gapAct: "Issue Recommendation",
        respEscAct: "Market Manager/\nArea Manager",
        day30: "Issue Recommendation",
        respRelo: "NA",
        concAct: "NA",
        concRelo: "NA"
      },
      {
        name: "Room Safety",
        hsInvest: "Yes",
        investFreq: "Each occurrence",
        prevComp: "Each occurrence",
        auditHist: "Each occurrence",
        partResp: "30 days - 3 requests",
        exceptions:
          "Audit Covers/Investigated/concern resolved within previous 1 year",
        expecPartAct:
          "Response to questions, confrimation issues resolved and evidence if required (copies of safety checks/photos of resolution)",
        mm: "CBC",
        gapAct: "Issue Recommendation",
        respEscAct: "Market Manager/\nArea Manager",
        day30: "Issue Recommendation",
        respRelo: "NA",
        concAct: "NA",
        concRelo: "NA"
      }
    ]
  }
];

module.exports = riskMatrix;
