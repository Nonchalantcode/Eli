import './scrabble.css'
import $ from 'jquery'
import syllableCombinations from './sorted_combinations.txt'

console.log({ syllableCombinations })

function partition(size, coll, pad = []) {
    if (size <= 0) throw new Error("Partition size must be greater than 0");
    
    let result = [];
    for (let i = 0; i < coll.length; i += size) {
      let chunk = coll.slice(i, i + size);
      if (chunk.length < size) {
        chunk = chunk.concat(pad.slice(0, size - chunk.length));
      }
      result.push(chunk);
    }
    
    return result;
  }

$.when($.ready).then(function () {
    /** @type {string} */
    let combinations = syllableCombinations

    $('main').append('<div class="syllables-container"></div>')

    let partitionSize = 15;
    /** @type {string[]} */
    let combinationsColl = combinations
        .trim()
        .split(' ')
    /** @type {string[][]} */
    let coll = partition(partitionSize, combinationsColl, ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u'])
    coll.forEach((syllables, idx) => {
        $('.syllables-container').append(`<div class="row-${idx + 1}"></div>`)
        let container = $(`.syllables-container .row-${idx + 1}`)
        syllables.forEach(syllable => {
            container.append(`<div class="syllable">
                        <span>${syllable}</span>
                    </div>`)
        })
    })
})