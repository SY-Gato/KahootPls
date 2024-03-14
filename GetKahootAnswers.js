function testUUID(uuid) return "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}".test(uuid);

function GetAnswers(kahootJson) {
}

function GetData() {
  let api = "https://play.kahoot.it/rest/kahoots/";
  let currentTry = 1;
  let maxTries = 2;
  let uuid;
  let uuidValid = false;
  for (currentTry = 1; currentTry <= 3; currentTry++) {
    let UUID = prompt("Enter quiz UUID (Not join number, quiz UUID (Should be in link bar on host's screen (may need to ask to see it))) TRY "+String(currentTry)+"/"+String(maxTries));
    if (testUUID(UUID)) { uuid = String(UUID); uuidValid = true; break; }
  }
  if (uuidValid) {
    let completeLink = api+uuid;
    let data;
    fetch(completeLink, {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": 'application/json;charset=UTF-8'
      },
      "refferer": 'play.kahoot.it',
      "referrerPolicy": "strict-origin-when-cross-origin",
      "method": 'GET',
      "mode": "cors"
    }).then((response) => {
      alert(response.text());
    });
  }
}

alert("Running...");
GetData();
