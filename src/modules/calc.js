const calc = (price = 100) => {

  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const totalValue = document.getElementById('total');

  const showResult = total => {
    let startValue = +totalValue.textContent;
    const endValue = total;
    const step = Math.round((endValue - startValue) / 15);

    const animResult = () => {
      startValue += step;
      if (step > 0) {
        if (startValue < endValue) {
          requestAnimationFrame(() => {
            totalValue.textContent = Math.round(startValue);
            return animResult();
          });
        } else {
          totalValue.textContent = Math.round(endValue);
        }
      } else {
        if (startValue > endValue) {
          requestAnimationFrame(() => {
            totalValue.textContent = Math.round(startValue);
            return animResult();
          });
        } else {
          totalValue.textContent = Math.round(endValue);
        }
      }
    };
    animResult();
  };

  const countSum = () => {
    let total = 0;
    let countValue = 1;
    let dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value;
    const squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }

    showResult(total);
  };

  calcBlock.addEventListener('change', e => {
    const target = e.target;

    if (target === calcType || calcSquare || calcCount || calcDay) {
      countSum();
    }
  });
};

export default calc;
