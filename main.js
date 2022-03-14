const fs = require('fs');
const { callbackify } = require('util');


try {
    // ENTER THE TRANSCRIBED FILE NAME HERE
    const data = fs.readFileSync('transcribtion.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

	//declarations
	var timestamps = [],
	 	dtimestamps = [],
		texts = [],
	 	delayedtimestamp, correcttimestamp,
		hours, minutes, seconds, index = 0,
		wstream = fs.createWriteStream('srt.srt'),
		scriptstream = fs.createWriteStream('script.txt');

	
	timestamps[index] = {};
	dtimestamps[index] = {};
	texts[index] = {};
	timestamps[0] = "00:00:00,000";




    // print all lines
    lines.forEach((line) => {
		let timestamp = /\[(.*?)\]/g.exec(line);
		let text =  line.substring(timestamp[1].length+3);
		let timearray = timestamp[1].split(":");

		if(timearray.length > 2)
		{
			if(timearray[0].length = 1)
				timearray[0] = '0'.concat(timearray[0]);
			hours = timearray[0];
			if(timearray[1].length = 1)
				timearray[1] = '0'.concat(timearray[1]);
			minutes = timearray[1];
			seconds = timearray[2];
		}
		else {
			hours = "00";
			if(timearray[0].length < 2)
				timearray[0] = '0'.concat(timearray[0]);
			else;
			minutes = timearray[0];
			seconds = timearray[1];
		}
		correcttimestamp = (hours + ":" + minutes + ":" + seconds + ",000");
		delayedtimestamp = (hours + ":" + minutes + ":" + seconds + ",999");
		
		if(index==0)
		{
			index++
			return;
		}
		else if(index < lines.length)
		{
			timestamps[index] = correcttimestamp;
			dtimestamps[index] = delayedtimestamp;
			texts[index] = text;
			//console.log(index)
			const srtline = "\n" + index + "\n" + timestamps[index-1] + " --> " + dtimestamps[index] + "\n" + texts[index-1] + "\n";
			console.log(srtline);
			wstream.write(srtline);
			scriptstream.write(texts[index] + "�");
			index++
		}
    });



} catch (err) {
    //console.error(err);
}
