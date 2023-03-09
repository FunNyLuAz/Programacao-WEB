
function alert_msg(message, onEndDo) {
      // Mostra o alerta com o fundo
      var body = document.getElementsByTagName("body")[0];

      if (document.getElementsByName("alert-opacityBackground").length <= 0 && document.getElementsByName("alert").length <= 0) {
            disableScroll();

            var content = "";

            content += '<div class="alert-opacityBackground" id="alert-opacityBackground"></div>';

            content += '<div class="alert" id="alert">';
            content += '<div class="alert-item msg">';
            content += '<h2>' + message + '</h2>';
            content += '</div>';
            content += '<div class="alert-item ok">';
            content += '<button class="button" onclick="removeAlert(\'alert\', \'alert-opacityBackground\')"><h5>OK</h5></button>';
            content += '</div>';
            content += '</div>';

            body.insertAdjacentHTML('beforeend', content);

            document.getElementById('alert').addEventListener('click', onEndDo);
      }
}

function removeAlert(alertId, alert_opacityBackgroundId) {
      // Remove o alerta e o fundo
      var alert_opacityBackground = document.getElementById(alert_opacityBackgroundId);
      var alert = document.getElementById(alertId);

      enableScroll();

      alert_opacityBackground.remove();
      alert.remove();
}

function disableScroll() {
      // Disabilita o scroll
      LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
      TopScroll = window.pageYOffset || document.documentElement.scrollTop;
      window.onscroll = function() {
            window.scrollTo(LeftScroll, TopScroll);
      };

      document.addEventListener('wheel', preventScroll, {passive: false});
}

function enableScroll() {
      // Habilita o scroll
      window.onscroll = function () {};

      document.removeEventListener('wheel', preventScroll);
}

function preventScroll(event) {
      // Previne o uso do scroll do mouse
      event.preventDefault();
      event.stopPropagation();

      return false;
}
