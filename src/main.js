import './main.css'
import './fontawesome/css/all.min.css'
import $ from 'jquery'



$.when($.ready).then(function () {
    let dropdown = $('#dropdown-container')
    let body = document.body

    dropdown.on('click', function () {
        dropdown.toggleClass('is-active', 'has-background-primary')
    })
    
})