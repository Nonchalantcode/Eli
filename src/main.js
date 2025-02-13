import './main.css'
import $ from 'jquery'

var s0 = 'Mi nombre es Elizabeth Victoria'
var s1 = 'Mi mano toma el mapa'
var s2 = 'Mi mamita me ama'
var s3 = 'Mi mama me mima'
var s4 = 'Mi nana me cuida'
var s5 = 'Me tomo mi agua'
var s6 = 'Me tomo mi jugo'
var s7 = 'Me como mi merienda'
var words = [
    'mano',
    'mesa',
    'misa',
    'moto',
    'música',
    'moneda',
    'mama',
    'mapa',
    'mono',
]

/**
 * 
 * @param {number | undefined} times 
 * @param {string} selector
 * @param {string} mainLetter
 * @returns {void}
 */
function writeText(times = 5, selector = 'main', mainLetter = '') {
    var section
        = document.createElement('section')
    $(selector).append(section)

    console.log({times, mainLetter})
    for (let i = 0; i < times; i++) {
        try {
            var letters
                = new Array(7).fill(`<p class="calitem">${mainLetter}</p>`)
            var lettersRow
                = document.createElement('div')
            lettersRow.classList.add('row')
            $(lettersRow).append(letters)
            $(section).append(lettersRow)
        } catch (err) {
            console.log(err)
        }
    }

    /* if (mainLetter) {
        $(section).append(`<span class='main-letter'>${mainLetter}</span>`)
    } */
}

$.when($.ready).then(function () {
    // $('main').append('<h1 class="text-center">Caligrafía</h1>')
    // writeText(3, 'main', s0)
    $('main').append(
        `<p>Elizabeth Victoria</p>`
    )
    for (let i = 0; i <= 10; i++) {
        $('main').append(
            `<p class="faded">Elizabeth Victoria</p>`
        )
    }

    /* $('main').append('<aside></aside>')
    for (let i = 0; i <= 10; i++) {
        $('main > aside').append(
            `<p class="faded">Elizabeth Victoria</p>`
        )
    } */
})