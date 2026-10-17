function openModal() {
  document.getElementById('login-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('login-modal').classList.add('hidden');
}

function scrollToId(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('login-modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// Live-Bestellung / Wunsch-Formular
function submitWunsch(e) {
  e.preventDefault();
  var datum = document.getElementById('w-datum').value;
  var zeit = document.getElementById('w-zeit').value;
  if (!datum || !zeit) {
    alert('Bitte gib Tag und Uhrzeit deines Wunschtermins an.');
    return false;
  }
  alert(
    'Danke für deine Wunsch-Bestellung! Wir haben sie erhalten und melden uns ' +
    'schnellstmöglich mit einer Bestätigung für den ' + datum + ' um ' + zeit + ' Uhr.'
  );
  e.target.reset();
  return false;
}
