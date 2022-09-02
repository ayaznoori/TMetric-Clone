const db = () => {
  return {
    "teams": [
      {
        "id": "",
        "teamName": "Team Frontend",
        "teamLead": "Chandler",
        "teamMembers": [
          {
            "user": "Chandler",
            "status": false,
            "startedAt": "",
            "FinishedAT": "",
            "TotalTimeToday": "",
            "currentTask": ""
          },
          {
            "user": "John Todd",
            "status": false,
            "startedAt": "",
            "FinishedAT": "",
            "TotalTimeToday": "",
            "currentTask": ""
          },
          {
            "user": "Mark Simmons",
            "status": false,
            "startedAt": "",
            "FinishedAT": "",
            "TotalTimeToday": "",
            "currentTask": ""
          }
        ]
      },
      {
        "id": "",
        "teamName": "Team Backend",
        "teamLead": "Joey",
        "teamMembers": [
          {
            "user": "Joey",
            "status": false,
            "startedAt": "",
            "FinishedAT": "",
            "TotalTimeToday": "",
            "currentTask": ""
          },
          {
            "user": "Dustin",
            "status": false,
            "startedAt": "",
            "FinishedAT": "",
            "TotalTimeToday": "",
            "currentTask": ""
          },
          {
            "user": "Conor",
            "status": false,
            "startedAt": "",
            "FinishedAT": "",
            "TotalTimeToday": "",
            "currentTask": ""
          }
        ]
      }
    ],
    "teamMembers": [
      {
        "id":"chandler123",
        "user": "Chandler",
        "status": true,
        "startedAt": "Did Not Work Today",
        "FinishedAT": "",
        "TotalTimeToday": "",
        "currentTask": "",
        "teamLead":"Chandler",
        "teamId":"12345"
      },
      {
        "id":"john123",
        "user": "John Todd",
        "status": false,
        "startedAt": "Did Not Work Today",
        "FinishedAT": "",
        "TotalTimeToday": "",
        "currentTask": "",
        "teamLead":"Chandler",
        "teamId":"12345"
      },
      {
        "id":"mark123",
        "user": "Mark Simmons",
        "status": false,
        "startedAt": "Did Not Work Today",
        "FinishedAT": "",
        "TotalTimeToday": "",
        "currentTask": "",
        "teamLead":"Chandler",
        "teamId":"12345"
      },
      {
        "id":"joey123",
        "user": "Joey",
        "status": false,
        "startedAt": "Did Not Work Today",
        "FinishedAT": "",
        "TotalTimeToday": "",
        "currentTask": "",
        "teamLead":"Joey",
        "teamId":"78910"
      },
      {
        "id":"dustin123",
        "user": "Dustin",
        "status": false,
        "startedAt": "Did Not Work Today",
        "FinishedAT": "",
        "TotalTimeToday": "",
        "currentTask": "",
        "teamLead":"Joey",
        "teamId":"78910"
      },
      {
        "id":"conor123",
        "user": "Conor",
        "status": true,
        "startedAt": "Did Not Work Today",
        "FinishedAT": "",
        "TotalTimeToday": "",
        "currentTask": "",
        "teamLead":"Joey",
        "teamId":"78910"
      }
    ],
    "pricing":[
      {"team":1,"business":{"monthly":7,"annually":70},"professional":{"monthly":5,"annually":50}},
      {"team":2,"business":{"monthly":14,"annually":140},"professional":{"monthly":10,"annually":100}},
      {"team":3,"business":{"monthly":21,"annually":210},"professional":{"monthly":15,"annually":150}},
      {"team":4,"business":{"monthly":28,"annually":280},"professional":{"monthly":20,"annually":200}},
      {"team":5,"business":{"monthly":35,"annually":350},"professional":{"monthly":25,"annually":250}},
      {"team":6,"business":{"monthly":42,"annually":420},"professional":{"monthly":30,"annually":300}},
      {"team":7,"business":{"monthly":49,"annually":490},"professional":{"monthly":35,"annually":350}},
      {"team":8,"business":{"monthly":56,"annually":560},"professional":{"monthly":40,"annually":400}},
      {"team":9,"business":{"monthly":63,"annually":630},"professional":{"monthly":45,"annually":450}},
      {"team":10,"business":{"monthly":70,"annually":700},"professional":{"monthly":50,"annually":500}},
      {"team":11,"business":{"monthly":77,"annually":770},"professional":{"monthly":55,"annually":550}},
      {"team":12,"business":{"monthly":84,"annually":840},"professional":{"monthly":60,"annually":600}},
      {"team":13,"business":{"monthly":91,"annually":910},"professional":{"monthly":65,"annually":650}},
      {"team":14,"business":{"monthly":98,"annually":980},"professional":{"monthly":70,"annually":700}}
  
    ]
  }
  
}

export default db