import {Component} from "angular2/core";


@Component ({
	selector: 'varchar2000',
	templateUrl: 'app/templates/splash-page.html'
})

export class VarChar2000 { 
	
	private charsLeft: number = 2000;
	private commentString: string;

	constructor() {
		this.comment();
	}


	private countChar(text: HTMLInputElement): void {
		this.charsLeft = 2000 - text.value.length;
		this.comment();
	}
	
	private comment(): void {

		let outputArr: string[] = [
			'Let\'s get started...',
			'You are on your way!',
			'Nice!!',
			'So far so good.',
			'Keep it up.',
			'You\'re getting there.',
			'Almost Done?',
			'Well keep going I guess...',
			'Long winded.',
			'Definition of Verbose: Containing more words than necessary.',
			'You are running out of space.',
			'Definition of Concise: expressing or covering much in few words.  NOT YOU',
			'COME ON NOW!!!!',
			'Blah Blah Blah',
			'You\'re making me SAD.',
			'Whatever. I don\'t care anymore...'
		];

		if(this.charsLeft === 2000) {
			this.commentString = outputArr[0];
			if(document.readyState ==='complete')
				{	document.getElementById("displayArea").style.backgroundColor = "lightgreen"; }
		}
		else if(this.charsLeft < 2000 && this.charsLeft > 1950)
			{ this.commentString = outputArr[1]; }
		else if(this.charsLeft <= 1950 && this.charsLeft > 1500)
			{ this.commentString = outputArr[2]; }
		else if(this.charsLeft <= 1500 && this.charsLeft > 1250)
			{ this.commentString = outputArr[3]; }
		else if(this.charsLeft <= 1250 && this.charsLeft > 1100)
			{ this.commentString = outputArr[4]; }
		else if(this.charsLeft <= 1100 && this.charsLeft > 1000)
			{ this.commentString = outputArr[5]; }
		else if(this.charsLeft <= 1000 && this.charsLeft > 800) {
			this.commentString = outputArr[6];
			document.getElementById("displayArea").style.backgroundColor = "lightyellow";
		}
		else if(this.charsLeft <= 800 && this.charsLeft > 600)
			{ this.commentString = outputArr[7]; }
		else if(this.charsLeft <= 600 && this.charsLeft > 500) {
			this.commentString = outputArr[8];
			document.getElementById("displayArea").style.backgroundColor = "lightcoral";
		}
		else if(this.charsLeft <= 500 && this.charsLeft > 400)
			{ this.commentString = outputArr[9]; }
		else if(this.charsLeft <= 400 && this.charsLeft > 300)
			{ this.commentString = outputArr[10]; }
		else if(this.charsLeft <= 300 && this.charsLeft > 200)
			{ this.commentString = outputArr[11]; }
		else if(this.charsLeft <= 200 && this.charsLeft > 100)
			{ this.commentString = outputArr[12]; }
		else if(this.charsLeft <= 100 && this.charsLeft > 50)
			{ this.commentString = outputArr[13]; }
		else if(this.charsLeft <= 50 && this.charsLeft > 0)
			{ this.commentString = outputArr[14]; }
		else {
			this.commentString = outputArr [15];
			document.getElementById("displayArea").style.backgroundColor = "lightblue";
		}

	}
	
	
}