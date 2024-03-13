function testUUID(uuid) return "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}".test(uuid);

function GetAnswers(kahootJson) {
}

function GetData() {
  let api = "https://play.kahoot.it/rest/kahoots/";
  let currentTry = 1;
  let maxTries = 2;
  let uuid;
  let uuidValid = false;
  for (let currentTry = 1; currentTry <= maxTries; currentTry++) {
    let UUID = prompt("Enter quiz UUID (Not join number, quiz UUID (Should be in link bar on host's screen (may need to ask to see it))) TRY "+String(currentTry)+"/"+String(maxTries));
    if (testUUID(UUID)) { uuid = String(UUID); uuidValid = true; break; }
  }
  if (uuidValid) {
    let completeLink = api+uuid;
    let data;
    fetch(completeLink, {
      method: 'GET',
      origin: 'play.kahoot.it',
      
    });
  }
}
