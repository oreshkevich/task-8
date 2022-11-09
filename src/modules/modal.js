import ConfettiGenerator from 'confetti-js';

const modal = () => {
  const canvasSettings = {
    target: 'canvas',
    max: 200,
    props: ['square', 'triangle', 'line', 'circle'],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    rotate: true,
    origin: {
      y: 1,
      x: 2,
    },
  };

  const canvas = new ConfettiGenerator(canvasSettings);
  canvas.render();
  const modalBtn = document.querySelectorAll('.more');
  console.log(modalBtn);
  const modal = document.querySelector('.modal');

  modalBtn.forEach((item) => {
    console.log(item);
    item.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  });

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal__close')) {
      modal.classList.add('hidden');
    }
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
};

export default modal;
