const tot = [0, 1]
var r = document.getElementById('result')
var fcont = 0
function flip() {
  clear()
  fcont+=1
  if (fcont>0){
    document.getElementById('f').innerText = 'Flip Again?'
  }
  var o = {'Head':0, 'Tail':0}
  var v = document.getElementById('times').value
  if (v<1000000){
    for (var i = 1; i <= v; i++) {
      var ran = tot[Math.floor(Math.random() * tot.length)]
      if (ran == 0) {
        var e = 'Head'
        o.Head += 1
      } else if (ran == 1) {
        var e = 'Tail'
        o.Tail += 1
      }
    }
    if (o.Head > o.Tail) {
      var c = 'Head Wins'
    } else if (o.Tail > o.Head) {
      var c = 'Tail Wins'
    } else if (o.Head == o.Tail) {
      var c = 'Draw, retry'
    }
    r.innerHTML = `${c}
    <div class="progress" style="height: 30px;">
      <div class="progress-bar" role="progressbar" style="width: ${((o.Head/v)*100).toFixed(1)}%" aria-valuenow="${((o.Head/v)*100).toFixed(1)}" aria-valuemin="0" aria-valuemax="100">${((o.Head/v)*100).toFixed(1)}% Head</div>
      <div class="progress-bar bg-success" role="progressbar" style="width: ${((o.Tail/v)*100).toFixed(1)}%" aria-valuenow="${((o.Tail/v)*100).toFixed(1)}" aria-valuemin="${((o.Head/v)*100).toFixed(1)}" aria-valuemax="100">${((o.Tail/v)*100).toFixed(1)}% Tail</div>
      </div>`
  } else {
    r.innerHTML = 'Choose below 1000000'
  }
}

function clear() {
  var v = document.getElementById('times').value
  v=1
  r.innerHTML = ' '
}
