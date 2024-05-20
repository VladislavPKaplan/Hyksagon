function generateImage(prompt) {
  // Очистить холст
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Параметры генерации
  let minCharSize = 10;
  let maxCharSize = 50;
  let minSpacing = 5;
  let maxSpacing = 20;
  let minOpacity = 0.1;
  let maxOpacity = 0.5;
  let colors = ["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"];

  // Разбить текст на слова
  let words = prompt.split(" ");

  // Для каждого слова
  for (let word of words) {
      // Случайный размер шрифта
      let fontSize = randomInt(minCharSize, maxCharSize);

      // Случайное положение
      let x = randomInt(minSpacing, canvas.width - maxSpacing - fontSize);
      let y = randomInt(minSpacing, canvas.height - maxSpacing - fontSize);

      // Случайный цвет
      let color = colors[randomInt(0, colors.length - 1)];

      // Случайная прозрачность
      let opacity = randomFloat(minOpacity, maxOpacity);

      // Случайный стиль шрифта
      let fontStyle = ["normal", "italic", "bold"][randomInt(0, 2)];

      // Нарисовать слово
      ctx.fillStyle = color;
      ctx.font = `${fontStyle} ${fontSize}px sans-serif`;
      ctx.fillText(word, x, y);
  }
}

бесы смерд тут раздел 

_______CVtКамера рендлер замена цудалить точка паргарфм 

