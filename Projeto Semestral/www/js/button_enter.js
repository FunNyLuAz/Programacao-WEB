function addButtonEnter(enterButtonId) {
      // Adiciona o evento para pressionar o botão apertando Enter
      document.addEventListener("keypress", function(event) {
            if (event.key == "Enter") {
                  event.preventDefault();
                  document.getElementById(enterButtonId).click();
            }
      });
}
