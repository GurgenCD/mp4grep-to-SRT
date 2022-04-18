# mp4grep-to-SRT
Simple Javascript function that turns the madeup transcription syntax generated by [mp4grep](https://github.com/o-oconnell/mp4grep) into an SRT syntax compliant file

# Usage
CD to the root folder of the script using a command line
The script requires an argument(full name of the mp4grep generated transcription file) which has no flags, and parses whatever is written after  **main.js**.
> node main.js text.transcribed.txt

After a short while, the script will create two different files:
1. The generated .srt version of the script
2. Text only .txt file

# Example

```
[0:08] your dog rodent insensitive tweet
[0:10] you can eat here are
[0:11] all meg the sensitivity mob
[0:13] it was just a joke
```

turns into
```
1
00:00:00,000 --> 00:00:10,000
your dog rodent insensitive tweet

2
00:00:10,000 --> 00:00:11,000
you can eat here are

3
00:00:11,000 --> 00:00:13,000
all meg the sensitivity mob

4
00:00:13,000 --> 00:00:15,000
it was just a joke
```
