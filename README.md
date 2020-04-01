# Pig Latin Generator

#### Translate english to pig latin!

#### By Austin Butler

## Description

_Pig latin word generator webpage built with HTML, CSS, Bootstrap, and js/jquery_

## Specs

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  * Example input: 3
  * Example output: 3
* The program does nothing to a single letter consonant. 
  * Example input: j
  * Example output: j
* The program adds "ay" to single-letter words beginning with a vowel.
  * Example input: i
  * Example output: iay
* The program add “ay” to the end of multiple letter words beginning with a vowel. 
  * Example input: austin
  * Example output: austinay 
* The program moves consonant to the end of the word and adds “ay” to the end of a word that begins with one     consonant. 
  * Example input: soup
  * Example output: oupsay
* The program treats “y” as a consonant for words that begin with it. 
  * Example input: your
  * Example output: ouryay
* The program moves first consecutive consonants to the end and adds “ay” to the end of a word that begins with more than one consonant.
  * Example input: shane 
  *	Example output: aneshay
* The program moves the first consecutive consonants together to the end of the word if they begin with “qu”, and adds “ay” to the end. 
  * Example input: quiet
  * Example output: ietquay
* If the word starts with a consonant and then “qu” follows after it move them all together at the end of the word and add “ay”
  * Example input: squeal
  * Example output: ealsqueay

## Known Bugs

_Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. _

## Support and contact details

_Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code._

## Technologies Used

_Used bootstrap to style and format the page, included some CSS tricks to curve text around my image_

Copyright (c) 2020 **_Austin Butler_**