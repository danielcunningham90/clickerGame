const ctaClicker=document.querySelector(".clicker"),ctaReset=document.querySelector(".reset-button"),ctaUpgradeCpc=document.querySelector(".upgrade-cpc"),displayCounter=document.querySelector(".clicker-stats__counter"),displayCpc=document.querySelector(".clicker-stats__cpc"),displayCps=document.querySelector(".clicker-stats__cps"),displayUpgradeCpcCost=document.querySelector(".upgrade-cpc__cost"),displayUpgradeCpcIncr=document.querySelector(".upgrade-cpc__increase");let valueCounter=0,valueCpc=1,valueCps=0,upgradeCpcLevel=1,upgradeCpcCost=50,upgradeCpcIncr=1;function dataSet(){localStorage.setItem("clickerGameCounter",valueCounter),localStorage.setItem("clickerGameCPC",valueCpc),localStorage.setItem("clickerGameCPS",valueCps),localStorage.setItem("clickerGameUpgradeCpcLevel",upgradeCpcLevel),localStorage.setItem("clickerGameUpgradeCpcCost",upgradeCpcCost),localStorage.setItem("clickerGameUpgradeCpcIncr",upgradeCpcIncr)}function resetGame(){localStorage.clear(),valueCounter=0,valueCpc=1,valueCps=0,upgradeCpcLevel=1,upgradeCpcCost=50,upgradeCpcIncr=1,initGame()}function loadGame(){valueCounter=Number(localStorage.getItem("clickerGameCounter")),valueCpc=Number(localStorage.getItem("clickerGameCPC")),valueCps=Number(localStorage.getItem("clickerGameCPS")),upgradeCpcLevel=Number(localStorage.getItem("clickerGameUpgradeCpcLevel")),upgradeCpcIncr=Number(localStorage.getItem("clickerGameUpgradeCpcIncr")),upgradeCpcCost=Number(localStorage.getItem("clickerGameUpgradeCpcCost"))}function initGame(){localStorage.getItem("clickerGame")?loadGame():(localStorage.setItem("clickerGame",!0),dataSet()),displayCounter.innerHTML=valueCounter,displayCpc.innerHTML=valueCpc,displayCps.innerHTML=valueCps,displayUpgradeCpcCost.innerHTML=upgradeCpcCost,displayUpgradeCpcIncr.innerHTML=upgradeCpcIncr}function saveGame(){dataSet(),loadGame()}function handleClickerClick(){displayCounter.innerHTML=valueCounter+=valueCpc,saveGame()}function buyUpgradeCPC(){valueCounter>=upgradeCpcCost?(valueCounter-=upgradeCpcCost,valueCpc+=upgradeCpcIncr,upgradeCpcLevel++,saveGame()):alert("Du brauchst mehr Clicks...")}initGame(),ctaClicker.addEventListener("click",handleClickerClick),ctaReset.addEventListener("click",resetGame),ctaUpgradeCpc.addEventListener("click",buyUpgradeCPC);