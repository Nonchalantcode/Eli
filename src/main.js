import './styles/main.scss'
import './fontawesome/css/all.min.css'
import $ from 'jquery'



$.when($.ready).then(function () {
    let dropdown = $('#dropdown-container')

    dropdown.on('click', function (ev) {
        ev.stopPropagation()
        dropdown.toggleClass('is-active', 'has-background-primary')
    })
    
})