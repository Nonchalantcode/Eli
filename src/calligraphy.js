import './styles/calligraphy.scss'
import fontNames from './font_names.txt'

/** @type {string} */
let allFonts = fontNames
let fontsColl = allFonts
    .trim()
    .split('\n')

$.when($.ready).then(function () {
    try {
        $('main').append(`<h1 class="page-name is-size-3-mobile is-size-1 has-text-centered">Caligrafía</h1>`)

        let radioFontOptions = $('.radios.font')
        
        fontsColl.forEach(fontOption => {
            radioFontOptions.append(`
                <label class="has-text-black radio">
                    <input type="radio" name="font" value="${fontOption}" />
                    ${fontOption}
                </label>
            `)
        })

        document.querySelector('.radios.font label > input').setAttribute('checked', 'true')

        document.querySelector('.page-name').contentEditable = 'false'
        document.querySelector('main').contentEditable = 'plaintext-only'
        let fontRadioButtons = $('.radios.font input')
        let colorRadioButtons = $('.radios.color input')

        let currentFont = [...document.querySelectorAll('.radios.font input')]
            .filter(el => {
                /** @type {HTMLInputElement} */
                let element = el
                return element.hasAttribute('checked')
            })
            .pop()
            .value;

        let colorsOptions = [...document.querySelectorAll('.radios.color input')]
        let currentColor = colorsOptions
            .filter(el => {
                /** @type {HTMLInputElement} */
                let element = el
                return element.hasAttribute('checked')
            })
            .pop()
            .value;

        let currentFontSize = 30
            
        document
            .querySelectorAll('.radios.color input')
            .forEach(item => {
                try {
                    /** @type {HTMLInputElement} */
                    let el = item
                    let span = el.nextElementSibling
                    span.classList.add('color-choice', 'ml-2')
                    span.style.display = 'inline-block'
                    span.style.backgroundColor = '#' + el.value
                    span.style.width = '30px'
                    span.style.height = '30px'
                    span.style.border = '1px solid #000'
                } catch (err) {
                    console.log(err)
                }
            });
    
        fontRadioButtons.on('change', function (ev) {
            /** @type {HTMLInputElement} */
            let input = ev.target
            
            $('.calligraphy-row .wording')
                .removeClass(`f-${currentFont}`)
                .addClass(`f-${input.value}`)
    
            currentFont = input.value
        })

        colorRadioButtons.on('change', function(ev) {
            document
                .querySelectorAll('.calligraphy-row .wording')
                .forEach(item => {
                    /** @type {HTMLElement} */
                    let el = item
                    el.style.color = '#' + ev.target.value
                })
        })
    
        for (let i = 0; i <= 5; i++) {
            $('main').append(
                `
                    <div class="calligraphy-row">
                        <p style="color: #${currentColor}; font-size: ${currentFontSize}px;" class="cursive wording f-${currentFont}">Elizabeth Victoria</p>
                    </div>
                `
            )
        }
    
        let dropdown = $('#controls')
    
        dropdown.on('click', function () {
            dropdown.toggleClass('is-active', 'has-background-primary')
        })

        $('#font-size').on('change', function(ev) {
            /** @type {HTMLInputElement} */
            let target = ev.target
            let v = target.value
            document
                .querySelectorAll('.calligraphy-row .wording')
                .forEach(item => {
                    /** @type {HTMLElement} */
                    let el = item
                    el.style.fontSize = v + 'px'
                    currentFontSize = v
                })
        })

        $('#valignment').on('change', function(ev) {
            /** @type {HTMLInputElement} */
            let target = ev.target
            let v = target.value
            document
                .querySelectorAll('.calligraphy-row .wording')
                .forEach(item => {
                    /** @type {HTMLElement} */
                    let el = item
                    el.style.top = v + 'px'
                })
        })

        $("#print").on('click', function() {
            window.print()
        })

    } catch (err) {
        console.log({err})
    }
    
})