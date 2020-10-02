// 2.
// Есть html-страница, на ней абзац текста на английском языке. Нужно скопировать этот текст в новый абзац, слова начинающиеся с “r”, без учета регистра, выделить красным и переставить буквы в обратном порядке.

// Введите селектор абзаца текста в переменную функции
const textReverse = (cl) => {
  const example = document.querySelector(cl);
  const solution = example.cloneNode(true);
  let temp = [];

  let newText = solution.textContent.split(/[.,/\s?*!-]/);
  for (let i of newText) {
    if (i && i.match(/^r/gi)) {
      temp.push(i)
    }
  }
  newText = temp.map(item => item.split('').reverse().join('').toLowerCase());
  solution.textContent = newText.join(' ');
  solution.style.backgroundColor = 'red';
  document.body.append(solution)
}
textReverse('.example')
