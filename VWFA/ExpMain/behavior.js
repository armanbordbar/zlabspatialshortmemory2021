function shuffle(array) {
  // While there remain elements to shuffle...
  for(let i = array.length - 1; i > 0; i--) {
  	const j = Math.floor(Math.random() * i);
  	const temp = array[i];
  	array[i] = array[j];
  	array[j] = temp;
  }
  return array;
}

function ImageSectionManage(stimulus) {
	let PracticeBlock = document.createElement("section");
	PracticeBlock.id = "Practice";
	document.body.appendChild(PracticeBlock);
	let PracticePicture = document.createElement("div");
	PracticePicture.id = "PracticePicture";
	PracticePicture.prepend(stimulus);
	PracticeBlock.appendChild(PracticePicture);
	this.id = PracticeBlock.id;
}

function ExpImageSectionManage(stimulus,bg) {
	let PracticeBlock = document.createElement("section");
	PracticeBlock.id = "Practice";
	document.body.appendChild(PracticeBlock);
	let PracticePicture = document.createElement("div");
	PracticePicture.id = "PracticePicture";
	PracticePicture.prepend(stimulus);
	PracticeBlock.appendChild(PracticePicture);
	document.body.style.backgroundColor = `rgb(${bg[0]},${bg[1]},${bg[2]})`;
	this.id = PracticeBlock.id;
}

function DrawFixation(cross) {
	let CrossBlock = document.createElement("section");
	CrossBlock.id = "CrossSection";
	document.body.appendChild(CrossBlock);
	let CrossDiv = document.createElement("div");
	CrossDiv.id = "CrossDiv";
	let CrossSpan = document.createElement("span");
	CrossSpan.id = "fixation";
	CrossDiv.appendChild(CrossSpan);
	CrossSpan.prepend(cross);
	CrossBlock.appendChild(CrossDiv);
	this.id = CrossBlock.id;

}
function sectionManage(stimulus,message) {
	let TrainBlock = document.createElement("section");
	TrainBlock.id = "P6-Training";
	document.body.appendChild(TrainBlock);
	let Feedback = document.createElement("div");
	Feedback.id = "Feedback";
	TrainBlock.appendChild(Feedback);
	let FeedbackMessage = document.createElement("p");
	FeedbackMessage.id = "feedback";
	FeedbackMessage.innerHTML = message;
	Feedback.appendChild(FeedbackMessage);
	let TrainPicture = document.createElement("div");
	TrainPicture.id = "Picture";
	TrainPicture.appendChild(stimulus);
	TrainBlock.appendChild(TrainPicture);
	this.id = TrainBlock.id;
}

function sectionManage2(message) {
	let TrainBlock = document.createElement("section");
	TrainBlock.id = "P7-Training";
	document.body.appendChild(TrainBlock);
	let Feedback = document.createElement("div");
	Feedback.id = "What2DoMessage";
	TrainBlock.appendChild(Feedback);
	let FeedbackMessage = document.createElement("p");
	FeedbackMessage.id = "what2domessage";
	FeedbackMessage.innerHTML = message;
	Feedback.appendChild(FeedbackMessage);
	this.id = TrainBlock.id;
}

let inserYourID = document.getElementById("insetID");
inserYourID.innerHTML = "Please enter your ID bellow";
let submitBotton = document.getElementById("submit");
let helloAudio = new Audio("./VWFA-Voice/Final/hello.wav");
let firstPage = document.getElementById("P1-SubjInfo");
let secondPage = document.getElementById('P2-Hello');
let vwfaSubjectID;
submitBotton.onclick = () => {
	vwfaSubjectID = document.getElementById("subjId").value;
	firstPage.remove();
	setTimeout(Page2, 200);
}

function Page2() {
	let HelloMessage = document.getElementById("hello");
	let WelcomeMessage = document.getElementById("welcome");
	HelloMessage.innerHTML = "Hello!";
	WelcomeMessage.innerHTML = "Welcome to the JUNIOR BRAIN SCIENTIST GAMES from the z-lab";
	helloAudio.play();
};

helloAudio.onended = () => {
	helloAudio.pause();
	secondPage.remove();
	finish = setTimeout(Page3, 1000);
}

let instructionAudio1 = new Audio("./VWFA-Voice/Final/vwfa_intro.wav");
let Instruction1Message = document.getElementById("instruction1");
let Instruction2Message = document.getElementById("instruction2");
let Instruction3Message = document.getElementById("instruction3");
let Instruction4Message = document.getElementById("instruction4");

let thirdPage = document.getElementById('P3-Instruction');
let instructionAudio2 = new Audio("./VWFA-Voice/Final/watch.wav");
let Instruction5Message = document.getElementById("instruction5");

function Page3() {
	Instruction1Message.innerHTML = "In this game, you will see some pictures of objects, faces, words, funny-looking scrambled words and squiggly lines.";
	Instruction2Message.innerHTML = "You will press the button when you see an image repeat."
	Instruction3Message.innerHTML = "So, if you see the same image twice in a row, press the SPACE button.."
	Instruction4Message.innerHTML = "Remember to only press the button once and don\'t hold the button down."
	instructionAudio1.play();
}

  instructionAudio1.onended = () => {
	instructionAudio1.pause();
	thirdPage.remove();
	setTimeout(Page4, 1000);
  }

  function Page4() {
	Instruction5Message.innerHTML = "The pictures will change quickly so try to watch carefully.";
	instructionAudio2.play();
  }

let forthPage = document.getElementById('P4-Instruction');
let instructionAudio3 = new Audio("./VWFA-Voice/Final/4.wav");
let Instruction6Message = document.getElementById("instruction6");

  function Page5() {
	Instruction6Message.innerHTML = "let's try a few!";
	instructionAudio3.play();
  }

  
  instructionAudio2.onended = () => {
	instructionAudio2.pause();
	forthPage.remove();
	setTimeout(Page5, 1000);
  }

  let FeedbackAudioNoMatch = new Audio("./VWFA-Voice/Final/Nomatch.wav");
let FeedbackAudioMissed = new Audio("./VWFA-Voice/Final/miss.wav");
let FeedbackAudioNoPush1 = new Audio("./VWFA-Voice/Final/DonPush.wav");
let trainImage1 = new Image();
trainImage1.src = "./stimuli/face_pngs_grid/grid_face_draw1_1.png";
let fifthPage = document.getElementById('P5-Instruction');
let Block1;
function Page6() {
  Block1 = new sectionManage(trainImage1, "Don\'t push!");
  FeedbackAudioNoPush1.play();
}

instructionAudio3.onended = () => {
  instructionAudio3.pause();
  fifthPage.remove();
  setTimeout(Page6, 1000);
}

let trainImage2 = new Image();
trainImage2.src = "./stimuli/face_pngs_grid/grid_face_draw1_3.png";

let FeedbackAudioNoPush2 = new Audio("./VWFA-Voice/Final/DonPush.wav");
let Block2;
function Page7() {
  Block2 = new sectionManage(trainImage2, "Don\'t push!");
  FeedbackAudioNoPush2.play();
}

FeedbackAudioNoPush1.onended = () => {
  FeedbackAudioNoPush1.pause();
  document.getElementById(Block1.id).remove();
  setTimeout(Page7, 1000);
}

let FeedbackAudioNoPush3 = new Audio("./VWFA-Voice/Final/DonPush.wav");
let trainImage3 = new Image();
trainImage3.src = "./stimuli/face_pngs_grid/grid_face_draw2_1.png";
let Block3;
function Page8() {
  Block3 = new sectionManage(trainImage3, "Don\'t push!");
  FeedbackAudioNoPush3.play();
}

FeedbackAudioNoPush2.onended = () => {
  FeedbackAudioNoPush2.pause();
  document.getElementById(Block2.id).remove();
  setTimeout(Page8, 1000);
}

let trainImage4 = new Image();
trainImage4.src = "./stimuli/face_pngs_grid/grid_face_draw2_4.png";
let FeedbackAudioNoPush4 = new Audio("./VWFA-Voice/Final/DonPush.wav");
let Block4;
function Page9() {
  Block4 = new sectionManage(trainImage4, "Don\'t push!");
  FeedbackAudioNoPush4.play();
}

FeedbackAudioNoPush3.onended = () => {
  FeedbackAudioNoPush3.pause();
  document.getElementById(Block3.id).remove();
  setTimeout(Page9, 1000);
}

let FeedbackAudioNoPush5 = new Audio("./VWFA-Voice/Final/DonPush.wav");
let trainImage5 = new Image();
trainImage5.src = "./stimuli/face_pngs_grid/grid_face_draw3_1.png";
let Block5;
function Page10() {
  Block5 = new sectionManage(trainImage5, "Don\'t push!");
  FeedbackAudioNoPush5.play();
}

FeedbackAudioNoPush4.onended = () => {
  FeedbackAudioNoPush4.pause();
  document.getElementById(Block4.id).remove();
  setTimeout(Page10, 1000);
}

let trainImage6 = new Image();
trainImage6.src = "./stimuli/face_pngs_grid/grid_face_draw3_1.png";
let FeedbackAudioPush = new Audio("./VWFA-Voice/Final/push.wav");
let Block6;
function Page11() {
  Block6 = new sectionManage(trainImage6, "Push!");
  FeedbackAudioPush.play();
}

FeedbackAudioNoPush5.onended = () => {
  FeedbackAudioNoPush5.pause();
  document.getElementById(Block5.id).remove();
  setTimeout(Page11, 1000);
}

let greatVoice = new Audio("./VWFA-Voice/Final/great.wav");
let cntrl = true;
let counter = 0;
let finish;
let Keycontrol;
let whichOne;

function Page11() {
	counter++;
	clearTimeout(finish);
	FeedbackAudioPush.play();
	Block6 = new sectionManage(trainImage6, "Push!");
	
	let Keycontrol = function() {
		if(event.key === ' ') {
			whichOne = 1;
			cntrl = false;
			FeedbackAudioPush.pause();
			document.getElementById(Block6.id).remove();
			clearTimeout(finish);
			window.document.removeEventListener("keypress", Keycontrol);
			document.getElementById("output").innerHTML = "Great!";
			greatVoice.play();
		}
	};
	if(counter > 3) {
		whichOne = 2;
		cntrl  = false;
		FeedbackAudioPush.pause();
		for (let index = 0; index < counter; index++) {
			document.getElementById(Block6.id).remove();
		}
		clearTimeout(finish);
		window.document.removeEventListener("keypress", Keycontrol);
		document.getElementById("output").innerHTML = "OOPPSS! You missed one";
		FeedbackAudioMissed.play();
	}
	
	if(cntrl) {
		window.document.addEventListener("keypress", Keycontrol);
	}
	if (cntrl === false) {
		clearTimeout(finish);
	};
	
	if (cntrl) {
		finish = setTimeout(Page11, 4000);
	}
}
let Block7;
let goodPress = new Audio("./VWFA-Voice/Final/goodpress.wav");
if(whichOne != 2) {
	greatVoice.onended = () => {
		greatVoice.pause();
		Block7 = new sectionManage(trainImage6, "You pressed SPACE button because you saw the picture a second time right after the first one. Good job!");
		document.getElementById("output").remove();
		goodPress.play();
	}
}

if(whichOne != 1) {
	FeedbackAudioMissed.onended = () => {
		FeedbackAudioMissed.pause();
		Block7 = new sectionManage(trainImage6, "You pressed SPACE button because you saw the picture a second time right after the first one. Good job!");
		document.getElementById("output").remove();
		goodPress.play();
	}
}

let Block19;
let PracticeVoice = new Audio("./VWFA-Voice/Final/practice.wav");
goodPress.onended = () => {
	goodPress.pause();
	document.getElementById(Block7.id).remove();
	Block19 = new sectionManage2("Do you want more practice? If so press SPACE!");
	PracticeVoice.play();
}


let practiceImage1 = new Image();
practiceImage1.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 3.47.36 PM.png";
let practiceImage2 = new Image();
practiceImage2.src = "./stimuli/face_pngs_grid/grid_face_draw8_2.png";
let practiceImage3 = new Image();
practiceImage3.src = "./stimuli/face_pngs_grid/grid_face_draw3_3.png";
let practiceImage4 = new Image();
practiceImage4.src = "./stimuli/face_pngs_grid/grid_face_draw15_2.png";
let practiceImage5 = new Image();
practiceImage5.src = "./stimuli/face_pngs_grid/grid_face_draw13_1.png";
let practiceImage6 = new Image();
practiceImage6.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 2.15.18 PM.png";
let practiceImage7 = new Image();
practiceImage7.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 2.14.17 PM.png";
let practiceImage8 = new Image();
practiceImage8.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 2.11.20 PM.png";
let practiceImage9 = new Image();
practiceImage9.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 2.08.30 PM.png";
let practiceImage10 = new Image();
practiceImage10.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 1.53.31 PM.png";
let practiceImage11 = new Image();
practiceImage11.src = "./stimuli/face_pngs_grid/grid_face_draw16_1.png";
let practiceImage12 = new Image();
practiceImage12.src = "./stimuli/face_pngs_grid/grid_face_draw5_2.png";
let practiceImage13 = new Image();
practiceImage13.src = "./stimuli/face_pngs_grid/grid_face_draw7_2.png";
let practiceImage14 = new Image();
practiceImage14.src = "./stimuli/face_pngs_grid/grid_face_draw12_4.png";
let practiceImage15 = new Image();
practiceImage15.src = "./stimuli/face_pngs_grid/grid_face_draw14_2.png";
let practiceImage16 = new Image();
practiceImage16.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 1.52.58 PM.png";
let practiceImage17 = new Image();
practiceImage17.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 1.54.30 PM.png";
let practiceImage18 = new Image();
practiceImage18.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 2.11.20 PM.png";
let practiceImage19 = new Image();
practiceImage19.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 2.15.09 PM.png";
let practiceImage20 = new Image();
practiceImage20.src = "./stimuli/face_pngs_grid/grid_Screen Shot 2014-04-11 at 3.47.23 PM.png";

let Stimulus;
let ResponseTime = 0;
let ReactionTime = 0;
let RespondOrNot = '';
let ShouldRespond = '';
let WhichStim = '';
function loadVoice(voice) {
	return new Promise(function(resolve) {
		var voiceDuration = voice.duration;
		voice.play();
		resolve(voiceDuration);
	});
}

let YouMissedOne = new Audio("./VWFA-Voice/Final/miss.wav");
let DidntMatch = new Audio("./VWFA-Voice/Final/Nomatch.wav");
let YouDidGreat = new Audio("./VWFA-Voice/Final/great.wav");
let feedbackAudioArray = [YouMissedOne, DidntMatch, YouDidGreat];
let WhichPlayed;
let voiceDur = [2];
let result = {};
let vwfaResults = [];
let ErrCount = 0;
let CorrCount = 0;
let RespCntrl = 0;
function CheckResponse(RespondOrNot, ShouldRespond) {
	return new Promise(function(resolve) {
		WhichPlayed = 3;
		if(RespondOrNot == 'yes' && ShouldRespond == 'no') {
			ErrCount++;
			loadVoice(feedbackAudioArray[1]).then(DidntMatchDur => {voiceDur.push(DidntMatchDur);
				WhichPlayed = 2;
				resolve(1);
			});
		} else if(RespondOrNot == 'yes' && ShouldRespond == 'yes') {
			CorrCount++;
			loadVoice(feedbackAudioArray[2]).then(YouDidGreatDur => {voiceDur.push(YouDidGreatDur);
				WhichPlayed = 1;
				resolve(1);
			});
			
		} else if(RespondOrNot == 'no' && ShouldRespond == 'yes') {
			ErrCount++;
			loadVoice(feedbackAudioArray[0]).then(YouMissedOneDur => {voiceDur.push(YouMissedOneDur);
				WhichPlayed = 0;
				resolve(1);
			});
		} else if(RespondOrNot == 'no' && ShouldRespond == 'no'){
			voiceDur.push(0);
			resolve(0);
		}
	});
};
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let stopPoint = 0;
async function Results2Table(TableName, ResultsArray)  {
		//TableName = Subject ID//
		const vwfaExperiment = { TableName, ResultsArray };
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(vwfaExperiment)
		};
		const finishMes = await fetch('/VWFA/ExpData', options);
		const FinishMessage = await finishMes.json();
		//const LastMessage = await JSON.parse(FinishMessage);
		if(FinishMessage.status == "success") {
			EndofTheExp();
		}
		console.log(FinishMessage);

	}

	let finishUp = 0;
	function PutImage(stimulus,yn) {
		let Responded = 'no';
		let ShouldResponded = yn;
		Stimulus = new ImageSectionManage(stimulus);
		stimulus.decode().then(() => 
		{
				stopPoint++;
				document.body.addEventListener('keypress', Eventhandler);
				wait(500).then(() => {document.getElementById(Stimulus.id).remove()}).then(() => {Cross = new DrawFixation("+");
				wait(500).then(() => {
					document.getElementById(Cross.id).remove();
					CheckResponse(Responded, ShouldResponded).then(StopValue => {
					document.body.removeEventListener('keypress', Eventhandler);
					if(StopValue == 1 && ErrCount <= 3 && CorrCount <= 3) {
							PracticePhase();
					} else if(StopValue == 0 && ErrCount <= 3 && CorrCount <= 3) {
							PutImage(ShuffledpracticeImageArray[stopPoint],must[stopPoint]);
							finishORnot = true;
					} else if(ErrCount > 3 || CorrCount > 3) {
						HandleGameStart();
						return
						}
					});
				});
			});
				
		});
		function Eventhandler(event) {
			if(event.code == "Space") {
				Responded = 'yes';
			}
		}
	};

	let ReadyVoice2 = new Audio("./VWFA-Voice/Final/Ready2.wav");
	function HandleGameStart() {
		feedbackAudioArray[WhichPlayed].pause();
		Block20 = new sectionManage2("Are you ready for the real game? <br><br> Remember, if you try hard you will get a gift from z-lab!  <br><br> If you are ready press SPACE to start the game.");
		ReadyVoice2.play();
	}

	let PracticeStartTime;
	PracticeVoice.onended = () => {
		PracticeVoice.pause();
		document.addEventListener('keypress', PracticeHandler);
			
	};
	function PracticeHandler(event) {
		if(event.code == "Space") {
			PracticeStartTime = Date.now();
			document.getElementById(Block19.id).remove();
			PracticePhase();
		}
	}


	let must = [];
	let ShuffledpracticeImageArray = [];
	let randomSequence = [];
	let practiceImageArray = [practiceImage1, practiceImage2, practiceImage4, practiceImage6, practiceImage7, practiceImage8, practiceImage10, practiceImage11, practiceImage12, practiceImage15];
	function PracticePhase() {
		document.removeEventListener('keypress', PracticeHandler);
		stopPoint = 0;
		ShuffledpracticeImageArray = [];
		randomSequence = [];
		let sequence = [1,2,3,4,5,6,7,8,9,10];
		randomSequence = shuffle(sequence);
		let repeatedImageIndex = 3 + Math.floor(Math.random() * 7);
		randomSequence.splice(repeatedImageIndex+1,0,randomSequence[repeatedImageIndex]);
		for (let index = 0; index < randomSequence.length; index++) {
			must[index] = 'no';
			if (index == repeatedImageIndex+1) {
				must[index] = 'yes';
			};
			ShuffledpracticeImageArray.push(practiceImageArray[randomSequence[index]-1]);
		}
		wait(voiceDur[voiceDur.length - 1]*1000).then(() => { 
			PutImage(ShuffledpracticeImageArray[stopPoint],must[stopPoint]);
		});
	}



	async function RequestOfStim() {
		const Please = { "MyRequest": "Please send my data" };
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(Please)
		};
		const response = await fetch('/VWFA/ExpSeq', options);
		const json = await response.json();
		const ExpDataSeq = await JSON.parse(json);
		
		LetsStartExp(ExpDataSeq);
	};
	let ExpStimulus;
	let ExpEndPoint = 0;
	let Images = [];
	let ImgCompltSet = [];
	let Repetitions = [];
	let Conditions = [];
	let ExpLength = 0;
	let StimSrc;
	let ImgBackground = [];
	function LetsStartExp(JsonObj) {
		Images = JsonObj.ExpSeqImg;
		Repetitions = JsonObj.ExpSeqRep;
		Conditions = JsonObj.ExpSeqCond;
		ImgBackground = JsonObj.ExpColorSeq;
		ExpLength = Repetitions.length;
		for (let index1 = 0; index1 < Images.length; index1++) {
			const element = Images[index1];
			for (let index2 = 0; index2 < element.length; index2++) {
				let img = element[index2];
				//searchedString = "/app/VWFA/ExpMain";
				//let str2cutInd = searchedString.length;
				//let imgSrc = img.slice(str2cutInd);
				let imgSrc = img.replace('/app/VWFA/ExpMain/', '/VWFA/');
				StimSrc = String(imgSrc);
				ImgCompltSet.push(StimSrc);
			}	
		}
		wait(2000).then(() => SetExpImage(ImgCompltSet[ExpEndPoint],Repetitions[ExpEndPoint], Conditions[ExpEndPoint], ImgBackground[ExpEndPoint]));
	}
	let ExpEndTime = 0;
	function SetExpImage(stimulusExp,IsORnot, Cond,bg) {
		let RespondOrNot = 0;
		let ShouldRespond = IsORnot;
		let HowFastResponded = 0;
		let StimImg = new Image();
		StimImg.src = stimulusExp;
		let ExpStimulus = new ExpImageSectionManage(StimImg,bg);
		let WhichStimuli = stimulusExp;
		StimImg.decode().then(() => 
		{	ExpEndPoint++;
			let ExpStartTrialTime = Date.now();
			document.addEventListener('keypress', (event) => {
				if(event.key === ' ') {
					RespondOrNot = 1;
					ResponseTime = Date.now();
					ReactionTime = ResponseTime - ExpStartTrialTime;
					HowFastResponded = ReactionTime;
				}
			});
			let Cross = new Object();
			wait(500).then(() => document.getElementById(ExpStimulus.id).remove()).then(() => { Cross = new DrawFixation("+");
			wait(192).then(() =>  { EndOfExpTrialTime = Date.now();
				CheckSubjResponse(ExpStartTrialTime, Cond, WhichStimuli, ShouldRespond, RespondOrNot, HowFastResponded, EndOfExpTrialTime).then(() => {
					if(ExpEndPoint < ExpLength) {
						SetExpImage(ImgCompltSet[ExpEndPoint],Repetitions[ExpEndPoint], Conditions[ExpEndPoint],ImgBackground[ExpEndPoint]);
					}
					else {
						document.getElementById(Cross.id).remove();
						document.body.style.backgroundColor = "rgb(128,128,128)";
						ExpEndTime = Date.now();
						Results2Table(vwfaSubjectID, vwfaResults);
					}
				});
			});
		});
		});
	};
	let EndOfExpTrialTime = 0
	function CheckSubjResponse(start, condition, stim,  ShoulorNot, responses, reaction,end) {
		return new Promise(function(resolve) {
			result = {};
			result.WhichCond = condition;
			result.StartTrialTime = start;
			result.WhichStimuli = stim;
			result.ShouldRespond = ShoulorNot;
			result.RespondOrNot = responses;
			result.HowFastResponded = reaction;
			result.EndOfTrialTime = end;

			if(responses == 1 && ShoulorNot == 0) {
				result.Correctness = 0;
				vwfaResults.push(result);
				resolve();

			} else if(responses == 1 && ShoulorNot == 1) {
				result.Correctness = 1;
				vwfaResults.push(result);
				resolve();				
			} else if(responses == 0 && ShoulorNot == 1) {
				result.Correctness = 0;
				vwfaResults.push(result);
				resolve();
			} else if(responses == 0 && ShoulorNot == 0){
				result.Correctness = 1;
				vwfaResults.push(result);
				resolve();
			}
		});
	};

	ReadyVoice2.onended = () => {
		ReadyVoice2.pause();
		document.addEventListener('keypress', ExpStartHandler);
			
	};
let ExpStartTime = 0;
	function ExpStartHandler(event) {
		if(event.code == "Space") {
			ExpStartTime = Date.now();
			document.getElementById(Block20.id).remove();
			RequestOfStim();
		}
	}
	let Block21;
	let TheEndVoice = new Audio("./VWFA-Voice/Final/TheEnd.wav"); 
	function EndofTheExp() {
		Block21 = new sectionManage2("You did a great job! <br><br> Thanks so much for your participation!");
		TheEndVoice.play();
	}
	

	