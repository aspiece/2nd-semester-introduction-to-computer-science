// Lightweight quiz enhancement; no dependencies or network requests.
(function () {
  function init() {
    document.querySelectorAll('.quiz .q[data-answer]').forEach(function (q) {
      var answer = (q.getAttribute('data-answer') || '').trim().toLowerCase();
      var items = q.querySelectorAll('ul > li');
      if (!items.length || !/^[a-z]$/.test(answer)) return;
      var explanation = q.querySelector('.why');
      if (explanation) explanation.hidden = true;
      var feedback = document.createElement('p');
      feedback.setAttribute('role', 'status');
      feedback.setAttribute('aria-live', 'polite');
      q.appendChild(feedback);
      items.forEach(function (item, i) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'quiz-opt';
        while (item.firstChild) button.appendChild(item.firstChild);
        item.appendChild(button);
        button.addEventListener('click', function () {
          if (q.dataset.solved === 'true' || button.disabled) return;
          if (String.fromCharCode(97 + i) === answer) {
            q.dataset.solved = 'true';
            button.classList.add('right');
            feedback.textContent = 'Correct!';
            if (explanation) explanation.hidden = false;
            q.querySelectorAll('.quiz-opt').forEach(function (b) { b.disabled = true; });
          } else {
            button.classList.add('wrong');
            button.disabled = true;
            feedback.textContent = 'Not quite. Try again.';
          }
        });
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
