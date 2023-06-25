const container = document.querySelector('.container');
const seat = document.querySelector('.seat:not(.rez)');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie')


container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('rez')){
        e.target.classList.toggle('selected')
        total();
    }
})

function total(){
    const selectedSeatCount = container.querySelectorAll('.seat.selected')
    const selectedSeats = selectedSeatCount.length;
    count.innerText = selectedSeats;
    amount.innerText = selectedSeats * select.value
}

select.addEventListener('change',function(e){
    total();
})