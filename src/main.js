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

$.when($.ready).then(function () {
    $('main').append(
        `
            <div class="calligraphy-row">
                <p class="wording">Elizabeth Victoria</p>
            </div>
        `
    )
    for (let i = 0; i <= 5; i++) {
        $('main').append(
            `
                <div class="calligraphy-row">
                    <p class="faded wording">Elizabeth Victoria</p>
                </div>
            `
        )
    }

    /* $('main').append('<aside></aside>')
    for (let i = 0; i <= 10; i++) {
        $('main > aside').append(
            `<p class="faded">Elizabeth Victoria</p>`
        )
    } */
})