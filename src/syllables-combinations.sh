#!/bin/bash

vowels=(a e i o u)
letters=({a..z})

combinations=''
temp_file=$(mktemp -p $(pwd))

for letter in ${letters[@]} "qu" "ñ" "rr" "br" "ch" "cl" "bl"
do
    if [[ $letter == ${vowels[0]} ]] ||
	   [[ $letter == ${vowels[1]} ]] ||
	   [[ $letter == 'q' ]] ||
	   [[ $letter == ${vowels[2]} ]] ||
	   [[ $letter == ${vowels[3]} ]] ||
	   [[ $letter == ${vowels[4]} ]];
    then
	continue
    elif [[ $letter == 'qu' ]]
    then
	echo "${letter}${vowels[1]}" >> $temp_file
	echo "${letter}${vowels[2]}" >> $temp_file
    else
	echo "${letter}${vowels[0]}" >> $temp_file
	echo "${letter}${vowels[1]}" >> $temp_file
	echo "${letter}${vowels[2]}" >> $temp_file
	echo "${letter}${vowels[3]}" >> $temp_file
	echo "${letter}${vowels[4]}" >> $temp_file
    fi

done

sorted_combinations=''

for combination in $(cat $temp_file | sort)
do
    sorted_combinations+="${combination} "
done

echo $sorted_combinations > sorted_combinations.txt
rm $temp_file

exit 0
