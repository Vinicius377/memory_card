const main = document.querySelector("main");
let names = [
  "😃 ",
  "😄 ",
  "😁 ",
  "😆 ",
  "😅 ",
  "😂 ",
  "🤣  ",
  "😊 ",
  "😇 ",
  "🙂 ",
  "🙃 ",
  "😉 ",
  "😍 ",
  "🥰 ",
  "😘 ",
  "😗 ",
  "😙 ",
  "😝 ",
];
let countOnclick = 0;
let countSuccess = 0;
let isRunning = false;
const dificulty = {
  facil: 8,
  normal: 12,
  dificil: 18,
};

const resetCard = (element) => {
  countOnclick = 0;
  element.classList.remove("cardOnclick");
};

const starting = document.querySelector("#starting");
const header = document.querySelector("header");

starting.addEventListener("click", () => {
  let dificultyChosen;
  const dificultyInput = document.getElementsByName("dificuldade");

  dificultyInput.forEach((input) => {
    if (input.checked) {
      dificultyChosen = dificulty[input.value];
    }
  });
  createElements(dificultyChosen);
  header.style.display = "none";
  main.style.height = "auto";
});

const validateValues = (event) => {
  //*Fluxo de validação dos valores
  if (countOnclick == 2 && event.target.classList.contains("cardOnclick")) {
    let elementsActive = document.querySelectorAll(".cardOnclick");
    let notSucsess = [];

    elementsActive.forEach((card) => {
      if (!card.classList.contains("sucess")) {
        notSucsess.push(card);
      }
    });
    //?verificar se os valores sao iguais
    setTimeout(() => {
      if (notSucsess[0].innerHTML === notSucsess[1].innerHTML) {
        elementsActive.forEach((e) => {
          e.classList.add("sucess");
        });
        countSuccess++;
      }
      notSucsess.forEach((element) => resetCard(element));
      isRunning = false;
    }, 600);
  }
  if (countOnclick < 2) {
    setTimeout(() => {
      isRunning = false;
    }, 200);
  }
};

const handleCard = (event, count) => {
  //*Adicionando a classe de card ativo
  if (!event.target.classList.contains("cardOnclick")) {
    event.target.classList.add("cardOnclick");
    countOnclick++;
  }
  validateValues(event);
  //*Fluxo de sucesso

  if (countSuccess + 1 == count && countOnclick == 2) {
    alert("parabens");
    main.style.height = "0";
    header.style.display = "flex";
  }
};

// *criando cards
const createElements = (quantityElements) => {
  main.innerHTML = "";
  for (let i = 0; i < quantityElements * 2; i++) {
    let index = i < quantityElements ? i : i - quantityElements;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = names[index];
    card.style.order = Math.floor(Math.random() * i);

    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("sucess") && !isRunning) {
        isRunning = true;
        handleCard(e, quantityElements);
      }
    });

    main.appendChild(card);
  }
};
