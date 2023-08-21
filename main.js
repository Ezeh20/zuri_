const header = document.getElementById('header')
const toggle = document.getElementById('toggle')
const UL = document.getElementById('UL')
const codes = document.getElementById('codes')
const small = document.getElementById('small')


//nav toggle
toggle.addEventListener('click', () => {
    header.classList.toggle('active')
})

const codesLarge = ['ZUR000 87BJA', 'KUR000 7BJA', 'AUR1 137BJA', 'ZUR00 87BJA', 'KUR000 7BJA', 'AUR12013 BJA',
    'ZUR0001 BJA', 'KUR 0187BJA', 'AUR1201 BJA', 'AUR1201 BJA'
]

const codesSmall = ['ZUR 000', 'KUR 000', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120',
    'ZUR 000', 'KUR 000', 'AUR 120', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120',
    'ZUR 000', 'KUR 000', 'AUR 120', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120',
    'ZUR 000', 'KUR 000', 'AUR 120', 'AUR 120', 'AUR 120', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120',
    'ZUR 000', 'KUR 000', 'AUR 120', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120',
    'ZUR 000', 'KUR 000', 'AUR 120', 'AUR 120','AUR 120', 'AUR 120', 'AUR 120', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120',
    'ZUR 000', 'KUR 000', 'AUR 120', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120', 'ZUR 000', 'KUR 000', 'AUR 120',
    'ZUR 000', 'KUR 000', 'AUR 120', 'AUR 120',
]

codes.innerHTML = codesLarge.map((itm)=>{
    return `<p class="cod">${itm}</p>`
}).join("")

small.innerHTML = codesSmall.map((itm)=>{
    return `<p class="cod2">${itm}</p>`
}).join("")