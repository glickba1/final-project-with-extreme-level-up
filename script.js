const body = document.querySelector('body');
let firstAnnouncerMessage = [
	"They start moving the ball up the field with precision",
]
let finalAnnouncerMessage = "With a gorgeous through ball to the striker they are inside the penalty box only the goalie can stop them now"

function createNewCard() {
	let cardElement = document.createElement("div")
	cardElement.classList.add("card")
	cardElement.innerHTML = `<div class="card-down"></div>\n<div class="card-up"></div>`;
	return cardElement
}
createNewCardTest();


function appendNewCard(parentElement) {
	let cardElement = createNewCard()
	parentElement.appendChild(cardElement)
	return cardElement

}
appendNewCardTest();


function shuffleSixCardImageClasses() {
	let sixCardClasses = ["image-1","image-1","image-2","image-2","image-3","image-3","image-4","image-4","image-5","image-5","image-6","image-6"]	
	return _.shuffle(sixCardClasses)
}

shuffleSixCardImageClassesTest()

function shuffleEightCardImageClasses() {
		let eightCardClasses = ["image-1","image-1","image-2","image-2","image-3","image-3","image-4","image-4","image-5","image-5","image-6","image-6","image-7","image-7","image-8","image-8"]
		return _.shuffle(eightCardClasses)
}

shuffleEightCardImageClassesTest()

function shuffleTenCardImageClasses() {
	let tenCardClasses = ["image-1","image-1","image-2","image-2","image-3","image-3","image-4","image-4","image-5","image-5","image-6","image-6","image-7","image-7","image-8","image-8","image-9","image-9","image-10","image-10"]	
	return _.shuffle(tenCardClasses)
}

shuffleTenCardImageClassesTest()

function shuffleTwelveCardImageClasses() {
		let twelveCardClasses = ["image-1","image-1","image-2","image-2","image-3","image-3","image-4","image-4","image-5","image-5","image-6","image-6","image-7","image-7","image-8","image-8","image-9","image-9","image-10","image-10","image-11","image-11","image-12","image-12"]
		return _.shuffle(twelveCardClasses)
}

shuffleTwelveCardImageClassesTest()

function createSixCards(parentElement, shuffleSixImageClasses) {
  let cardArray = []
	for(let i = 0; i < 12; i++){
		let newCard = appendNewCard(parentElement)
		let imageClass = shuffleSixImageClasses[i]
		newCard.classList.add(imageClass)
		cardArray.push ({
			index: i,
			element: newCard,
			imageClass: shuffleSixImageClasses[i],
		})
	}
	return cardArray
}

createSixCardsTest()

function createEightCards(parentElement, shuffleEightImageClasses) {
  let cardArray = []
	for(let i = 0; i < 16; i++){
		let newCard = appendNewCard(parentElement)
		let imageClass = shuffleEightImageClasses[i]
		newCard.classList.add(imageClass)
		cardArray.push ({
			index: i,
			element: newCard,
			imageClass: shuffleEightImageClasses[i],
		})
	}
	return cardArray
}

createEightCardsTest()

function createTenCards(parentElement, shuffleTenImageClasses) {
  let cardArray = []
	for(let i = 0; i < 20; i++){
		let newCard = appendNewCard(parentElement)
		let imageClass = shuffleTenImageClasses[i]
		newCard.classList.add(imageClass)
		cardArray.push ({
			index: i,
			element: newCard,
			imageClass: shuffleTenImageClasses[i],
		})
	}
	return cardArray
}

createTenCardsTest()

function createTwelveCards(parentElement, shuffleTwelveImageClasses) {
  let cardArray = []
	for(let i = 0; i < 24; i++){
		let newCard = appendNewCard(parentElement)
		let imageClass = shuffleTwelveImageClasses[i]
		newCard.classList.add(imageClass)
		cardArray.push ({
			index: i,
			element: newCard,
			imageClass: shuffleTwelveImageClasses[i],
		})
	}
	return cardArray
}

createTwelveCardsTest()


function doCardsMatch(cardObject1, cardObject2) {
	if(cardObject1.imageClass==cardObject2.imageClass){
		return true
	} else {return false}
}
doCardsMatchTest();

let counters = {};

function incrementCounter(counterName, parentElement) {
	if( counters[counterName] === undefined){
		 	counters[counterName]=0
 }
	counters[counterName]++
	parentElement.innerHTML=counters[counterName]
}
incrementCounterTest();

let lastCardFlipped = null;


function onSixCardFlipped(newlyFlippedCard) {
	var flipCounter = document.getElementById('flip-count')
	incrementCounter("flip",flipCounter)
	if(lastCardFlipped === null){
		lastCardFlipped=newlyFlippedCard
		//console.log(lastCardFlipped)
		return
	} 
	if(!doCardsMatch(lastCardFlipped, newlyFlippedCard)){
			newlyFlippedCard.element.classList.remove("flipped")
			lastCardFlipped.element.classList.remove("flipped")
			//_renderTTS("they are lucky to keep the ball after that pass misses")
			lastCardFlipped = null
		 	//console.log(lastCardFlipped)
			return
	}
	var matchCounter = document.getElementById('match-count')
	incrementCounter("match",matchCounter)
	//console.log(counters)
	newlyFlippedCard.element.classList.add("glow","border-glow")
	lastCardFlipped.element.classList.add("glow","border-glow")
	//matchAudio.play()
	if(counters.match == 1){
		_renderTTS("They start moving the ball up the field with precision")
	}
	if(counters.match == 2){
		_renderTTS("This counterattack may actually work")
	}
	if(counters.match == 3){
		_renderTTS("With that gorgeous pass the attack has reached the midfield line")
	}
	if(counters.match == 4){
		_renderTTS("They are now knocking on the opposing teams door and this looks very promsing")
	}
	if(counters.match == 5){
		_renderTTS("With a gorgeous through ball to the striker they are inside the penalty box only the goalie can stop them now")
	}
	if(counters.match === 6){
		winAudio.play()
	}
	lastCardFlipped = null
	//console.log(lastCardFlipped)
}
function onEightCardFlipped(newlyFlippedCard) {
	var flipCounter = document.getElementById('flip-count')
	incrementCounter("flip",flipCounter)
	if(lastCardFlipped === null){
		lastCardFlipped=newlyFlippedCard
		console.log(lastCardFlipped)
		return
	} 
	if(!doCardsMatch(lastCardFlipped, newlyFlippedCard)){
			newlyFlippedCard.element.classList.remove("flipped")
			lastCardFlipped.element.classList.remove("flipped")
			lastCardFlipped = null
		 	console.log(lastCardFlipped)
			return
	}
	var matchCounter = document.getElementById('match-count')
	incrementCounter("match",matchCounter)
	console.log(counters)
	newlyFlippedCard.element.classList.add("glow","border-glow")
	lastCardFlipped.element.classList.add("glow","border-glow")
	matchAudio.play()
	if(counters.match === 8){
		winAudio.play()
	}
	lastCardFlipped = null
	//console.log(lastCardFlipped)
}
function onTenCardFlipped(newlyFlippedCard) {
	var flipCounter = document.getElementById('flip-count')
	incrementCounter("flip",flipCounter)
	if(lastCardFlipped === null){
		lastCardFlipped=newlyFlippedCard
		//console.log(lastCardFlipped)
		return
	} 
	if(!doCardsMatch(lastCardFlipped, newlyFlippedCard)){
			newlyFlippedCard.element.classList.remove("flipped")
			lastCardFlipped.element.classList.remove("flipped")
			lastCardFlipped = null
		 	//console.log(lastCardFlipped)
			return
	}
	var matchCounter = document.getElementById('match-count')
	incrementCounter("match",matchCounter)
	//console.log(counters)
	newlyFlippedCard.element.classList.add("glow","border-glow")
	lastCardFlipped.element.classList.add("glow","border-glow")
	matchAudio.play()
	if(counters.match === 10){
		winAudio.play()
	}
	lastCardFlipped = null
	//console.log(lastCardFlipped)
}
function onTwelveCardFlipped(newlyFlippedCard,) {
	var flipCounter = document.getElementById('flip-count')
	incrementCounter("flip",flipCounter)
	if(lastCardFlipped === null){
		lastCardFlipped=newlyFlippedCard
		//console.log(lastCardFlipped)
		return
	} 
	if(!doCardsMatch(lastCardFlipped, newlyFlippedCard)){
			newlyFlippedCard.element.classList.remove("flipped")
			lastCardFlipped.element.classList.remove("flipped")
			lastCardFlipped = null
		 	//console.log(lastCardFlipped)
			return
	}
	var matchCounter = document.getElementById('match-count')
	incrementCounter("match",matchCounter)
	//console.log(counters)
	newlyFlippedCard.element.classList.add("glow","border-glow")
	lastCardFlipped.element.classList.add("glow","border-glow")
	matchAudio.play()
	
	if(counters.match === 12){
		winAudio.play()
	}
	lastCardFlipped = null
	//console.log(lastCardFlipped)
}





function resetGameSixCard() {

	let cardContainer = document.getElementById("card-container")
	while (cardContainer.firstChild) {
	cardContainer.removeChild(cardContainer.firstChild)
	cardContainer.classList.remove("eightCardStyles","tenCardStyles","twelveCardStyles")
	cardContainer.classList.add("sixCardStyles")
}
	document.getElementById("match-count").innerText = 0
	document.getElementById("flip-count").innerText = 0
	counters = {}
	lastCardFlipped = null;
	setUpSixCardGame()
}
function resetGameEightCard() {

	let cardContainer = document.getElementById("card-container")
	while (cardContainer.firstChild) {
	cardContainer.removeChild(cardContainer.firstChild)
	cardContainer.classList.remove("sixCardStyles","tenCardStyles","twelveCardStyles")
	cardContainer.classList.add("eightCardStyles")
}
	document.getElementById("match-count").innerText = 0
	document.getElementById("flip-count").innerText = 0
	counters = {}
	lastCardFlipped = null;
	setUpEightCardGame()
}
function resetGameTenCard() {

	let cardContainer = document.getElementById("card-container")
	while (cardContainer.firstChild) {
	cardContainer.removeChild(cardContainer.firstChild)
	cardContainer.classList.remove("sixCardStyles","eightCardStyles","twelveCardStyles")
	cardContainer.classList.add("tenCardStyles")
}
	document.getElementById("match-count").innerText = 0
	document.getElementById("flip-count").innerText = 0
	counters = {}
	lastCardFlipped = null;
	setUpTenCardGame()
}
function resetGameTwelveCard() {

	let cardContainer = document.getElementById("card-container")
	while (cardContainer.firstChild) {
	cardContainer.removeChild(cardContainer.firstChild)
	cardContainer.classList.remove("sixCardStyles","eightCardStyles","tenCardStyles")
	cardContainer.classList.add("twelveCardStyles")
}
	document.getElementById("match-count").innerText = 0
	document.getElementById("flip-count").innerText = 0
	counters = {}
	lastCardFlipped = null;
	setUpTwelveCardGame()
}


// ⛔️ Set up the game. Do not edit below this line! ⛔️
setUpSixCardGame();