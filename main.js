function getTime(seconds) {
    if (seconds > 359999) {
        return `Просил же меньше 359999 вводить`
    } else if (!seconds) {
        return 'И чего не ввел?'
    }

  const padStart = (num) => {
    return `${String(num).padStart(2, "0")}`;
  };
  if (seconds < 60) {
    return `00:00:${padStart(seconds)}`;
  }

  const getSeconds = (num) => {
    if (num > 59) {
      return false;
    } else {
      return padStart(num);
    }
  };

  const getMinutes = (num) => {
    if (num > 3599) {
      return false;
    } else {
      const minutes = Math.floor(num / 60);
      return `${padStart(minutes)}:${getSeconds(num - minutes * 60)}`;
    }
  };
  const getHours = (num) => {
    if (num > 359999) {
      return false;
    } else {
      const hours = Math.floor(num / 60 / 60);
      return `${padStart(hours)}:${getMinutes(num - hours * 60 * 60)}`;
    }
  };
  if (seconds < 3600) {
    return `00:${getMinutes(seconds)}`;
  } else if (seconds < 360000) {
    return `${getHours(seconds)}`;
  }
}

const text = document.querySelector("input[type=number]");
const btn = document.querySelector("input[type=submit]");
const result = document.querySelector('.result')

document.addEventListener('DOMContentLoaded', () => {
    text.focus()
})

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const seconds = Number(text.value);
  const time = getTime(seconds);
  result.textContent = time
  text.value = ''
});
