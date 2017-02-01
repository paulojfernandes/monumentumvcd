
$(document).ready(function () {
  $('.carousel').carousel({ interval: false });

  /* affix the navbar after scroll below header */
  $('#nav').affix({
    offset: {
      top: $('header').height() - $('#nav').height()
    }
  });
  /* stay de login menu open or closed */
  $('html').click(function () {
    //Hide the menus if visible
  });

  $('#login-nav').click(function (event) {
    event.stopPropagation();
  });
  /*  */

  /* highlight the top nav as scrolling occurs */
  $('body').scrollspy({ target: '#nav' })

  /* smooth scrolling for scroll to top */
  $('.scroll-top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 700);
  })



  /* copy loaded thumbnails into carousel */
  $('.panel .img-responsive').on('load', function () {

  }).each(function (i) {
    if (this.complete) {
      var item = $('<div class="item"></div>');
      var itemDiv = $(this).parent('a');
      var title = $(this).parent('a').attr("title");

      item.attr("title", title);
      $(itemDiv.html()).appendTo(item);
      item.appendTo('#modalCarousel .carousel-inner');
      if (i == 0) { // set first item active
        item.addClass('active');
      }
    }
  });

  /* activate the carousel */
  $('#modalCarousel').carousel({ interval: false });

  /* change modal title when slide changes */
  $('#modalCarousel').on('slid.bs.carousel', function () {
    $('.modal-title').html($(this).find('.active').attr("title"));
  })



  /*-------------------------------*/
  /*  LOGIN                        */
  /*-------------------------------*/

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $("#passRecovery-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $('#passRecovery-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#passRecovery-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $('#passRecovery-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $('#passRecovery-form-link').click(function (e) {
    $("#passRecovery-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#register-form").fadeOut(100);

    $('#register-form-link').removeClass('active');
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });






  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbiOa7CgCnawImYjb9iFzGC_gCLA01vGI",
    authDomain: "monumentum-a06f3.firebaseapp.com",
    databaseURL: "https://monumentum-a06f3.firebaseio.com",
    storageBucket: "monumentum-a06f3.appspot.com",
    messagingSenderId: "312149783763"
  };
  firebase.initializeApp(config);




  /*-------------------------------*/
  /*           DATABASE            */
  /*-------------------------------*/


  var locaisMapa = []
  if (sessionStorage.getItem('locais') != null) {
    locaisMapa = JSON.parse(sessionStorage.getItem('locais').toString());
  }


  var ref = firebase.database().ref().child("locais");
  var locais = ref.child("locais");

  locais.on('value', snap => {
    console.log(snap.val())
    locaisMapa = (snap.val());
    sessionStorage.setItem("locais", JSON.stringify(locaisMapa));

    addMarker();

  })


  // obter qual o Utilizador que iniciou sessao 
  firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
      var email = user.email;
      console.log(user.email)
      $("#emailLogado").empty();
      // User is signed in.       
      $('#btnLogin').hide();
      $("#btnLogout").show();
      $("#emailLogado").append(email);
      $("#inicioNav").after('<li id="btnPlanear"><a href="Planear.html">Planear Viagem</a></li>');


    } else {


      console.log("fim sessao:")
      // No user is signed in.
      $('#btnPlanear').remove();
      $('#btnLogout').hide();
      $("#btnLogin").show();
      // limpar os locais selecionados quando termina sessão
      sessionStorage.removeItem("locaisSelecionados");
      if (title == "PLANEAR") {
        swal({
          title: 'Acesso Negado!',
          text: 'Será redirecionado para a Página Principal',
          timer: 5000
        }).then(
          function () {
            window.location = "index.html";
          },

          function (dismiss) {
            if (dismiss === 'timer') {
              window.location = "index.html";
            }
            else {
              window.location = "index.html";
            }
          }
          )


      }

    }
  });




  // função para criar utilizadores
  $('#registar').click(function () {

    var email = $('#EmailRegist').val();
    var password = $('#PassRegist').val();
    var nome = $('#nomeRegist').val();
    console.log(email, password, nome)

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("cod:" + errorCode + "mess:" + errorMessage)
      if (errorCode == 'auth/weak-password') {
        swal('Password Curta(Minimo 6 caractes)');
      } else if (errorCode == 'auth/email-already-in-use') {
        swal('Email Já em Uso !');
      }
      else if (errorCode == 'auth/invalid-email') {
        swal('Email Inválido');
      }
      else if (errorCode == 'auth/operation-not-allowed') {
        swal('Inscrições Fechadas');
      }
    });

  });

  // função para login 
  $('#login').click(function () {

    var email = $('#EmailLogin').val();
    var password = $('#PassLogin').val();
    console.log(email, password)

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("cod:" + errorCode + "mess:" + errorMessage)

      if (errorCode == 'auth/invalid-email') {
        swal('Formato Email Inválido')
      }
      else if (errorCode == 'auth/user-disabled') {
        swal('Dados Errados!');
      }
      else if (errorCode == 'auth/user-not-found') {
        swal('Dados Errados!');
      }
      else if (errorCode == 'auth/wrong-password') {
        swal('Dados Errados!');
      }
      else {
        console.log("cod:" + errorCode + "mess:" + errorMessage)
      }

    });

  });




  // função para logout 
  $('#btnLogout1').click(function () {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      window.location = "index.html";
    }, function (error) {
      // An error happened.
      console.log("cod:" + errorCode + "mess:" + errorMessage)
    });
  });

  // função para reset password 
  $('#recuperar').click(function () {

    var emailAddress = $("#EmailRecovery").val();

    firebase.auth().sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      swal("Enviado");
    }, function (error) {
      // An error happened.
      swal("Ocorreu um Erro !");
    });
  });



  /*-------------------------------*/
  /*      LOCAIS SELECIONADOS      */
  /*-------------------------------*/
  var locaisSelecionados = [];
  if (sessionStorage.getItem('locaisSelecionados') != null) {
    locaisSelecionados = JSON.parse(sessionStorage.getItem('locaisSelecionados').toString());
  }
  function adicionarlocalSelecionado(nome) {
    this.nome = nome;
    this.lugar = false;
    locaisSelecionados.push(this.nome);
    sessionStorage.setItem("locaisSelecionados", JSON.stringify(locaisSelecionados));

  }
  function removerlocalSelecionado(nome) {
    this.nome = nome;
    for (var i = 0; i < locaisSelecionados.length; i++) {

      if (nome == locaisSelecionados[i]) {
        locaisSelecionados.splice(i, 1)
        sessionStorage.setItem("locaisSelecionados", JSON.stringify(locaisSelecionados));
      }
    }
  }

  // butao adicionar lugar selecionado
  $(document).on('click', '#adicionar', function () {
    var titulo = $("#titulo").html();
    var lugar = false;


    if ($("#btnPlanear").length) {
      if (locaisSelecionados.length == 0) {
        adicionarlocalSelecionado(titulo)
      }
      else {
        for (var i = 0; i < locaisSelecionados.length; i++) {

          if (titulo == locaisSelecionados[i]) {
            swal("Lugar já adicionado")
            lugar = true
          }
        }
        if (lugar == false)
          adicionarlocalSelecionado(titulo)
      }

    } else {
      swal("Inicie Sessão para Adicionar Local	");
    }

    //adicionarlocalSelecionado(titulo)
    console.log(locaisSelecionados);

  })

  // butao remover lugar selecionado
  $("#tabela").on('click', '#remover', function () {
    // get the current row
    var currentRow = $(this).closest("tr");

    var nomeMonumento = currentRow.find("td:eq(0)").text(); // get current row 1st TD value


    removerlocalSelecionado(nomeMonumento)
    console.log(locaisSelecionados);
    adicionarTabelaLocais()
    deleteMarkers();
    addMarker()
    //location.reload();

    //swal(nomeMonumento);
  });

  // quando a pagina do locais abrir meter os locais selecionados
  var title = $('title').text();

  if (title == "PLANEAR") {
    adicionarTabelaLocais();
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        latlocalGPS = position.coords.latitude,
          lnglocalGPS = position.coords.longitude
        $("#inicio").append("<option selected >Sua Localização</option>\n");
      }, showError);
    } else {
      // Browser doesn't support Geolocation
      swal('BROWSER NÃO SUPORTA GEOLOCALIZAÇÃO')

    }

  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        swal('LOCALIZAÇÃO BLOQUEADA')
        break;
      case error.POSITION_UNAVAILABLE:
        swal('LOCALIZAÇÃO DESCONHECIDA')
        break;
      case error.TIMEOUT:
        swal('REQUEST TO GET LOCATION TIMEOUT')
        break;
      case error.UNKNOWN_ERROR:
        swal('ERRO DESCONHECIDO')
        break;
    }
  }


  function adicionarTabelaLocais() {
    if (sessionStorage.getItem('locaisSelecionados') == null) {
      $("#texto").append(" <tr><td> É preciso Adicionar um Monumento primeiro </td><td>" + "<button type='button' onclick=location.href='monumentos.html'  class='btn btn-danger'>Ir para Momunentos</button>" + "</td></tr>\n")
    }
    else {
      locaisSelecionados = JSON.parse(sessionStorage.getItem('locaisSelecionados').toString());

      $("#texto").empty();
      $("#inicio").empty();
      $("#fim").empty();

      console.log(locaisSelecionados)

      for (var i = 0; i < locaisSelecionados.length; i++) {

        $("#texto").append(" <tr><td>" + locaisSelecionados[i] + "</td><td>" + "<button type='button'  id='remover' class='btn btn-danger'>Remover</button>" + "</td></tr>\n");
        $("#inicio").append("<option>" + locaisSelecionados[i] + "</option>\n");
        $("#fim").append("<option>" + locaisSelecionados[i] + "</option>\n");

      }
      if (locaisSelecionados.length == 0) {
        $("#inicio").empty();
        $("#texto").append(" <tr><td> É preciso Adicionar um Monumento primeiro </td><td>" + "<button type='button' onclick=location.href='monumentos.html' class='btn btn-danger'>Ir para Momunentos</button>" + "</td></tr>\n")
      }
    }
  }







  /* -------------------------------*/
  /*   MAPS                       */
  /*-------------------------------*/

  var map;
  var marker;
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  function initMap() {

    var centro = { lat: 41.353913, lng: -8.742480 };
    map = new google.maps.Map(document.getElementById('map'), {
      center: centro,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.HYBRID,
    });
  }

  google.maps.event.addDomListener(window, 'load', initMap) //initMap();

  var marker;
  var marcadores = [];

  // Adds a marker to the map and push to the array.
  function addMarker() {

    locaisMapa = JSON.parse(sessionStorage.getItem('locais').toString());
    console.log(locaisMapa)
    var infoWindow = new google.maps.InfoWindow();
    // ciclo para verificar quais os locais que foram selecionados.
    for (var i = 0; i < locaisMapa.length; i++) {
      for (var j = 0; j < locaisSelecionados.length; j++) {
        var data = locaisMapa[i];
        if (data.titulo == locaisSelecionados[j]) {

          latLng = new google.maps.LatLng(data.lat, data.lng);

          // Creating a marker and putting it on the map
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: data.titulo
          });
          (function (marker, data) {


            var StringInfo = '<div id="content"><div id="siteNotice"></div>' +
              '<h4>' + data.titulo + '</h4>'

            '</div></div>';

            // Attaching a click event to the current marker
            google.maps.event.addListener(marker, "click", function (e) {
              infoWindow.setContent(StringInfo);
              infoWindow.open(map, marker);
            });

          })(marker, data);
          marcadores.push(marker);

        }
      }
    }

  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < marcadores.length; i++) {
      marcadores[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    marcadores = [];
  }
  $(document).on('click', '#planear', function () {
    swal("viagem planeada")
    directionsDisplay.setMap(null);
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay)

  });

  $(document).on('click', '#limparViagem', function () {

    directionsDisplay.setMap(null);
    //location.reload()


  });

  var latlocalGPS;
  var lnglocalGPS;
  /*calcular direções */
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var origem = $("#inicio").val();// obter qual a origem selecionada pelo Utilizador
    var fim = $("#fim").val(); //obter qual fim selecionado pelo Utilizador
    var deslocacao = $("#deslocacao").val(); // Obter o tipo de deslocaçao selecionado pelo utilizador
    var latOrigem;
    var lngtOrigem;
    var latFim;
    var lngFim;
    var tipoDeslocacao;
    if (deslocacao == "Carro") {
      tipoDeslocacao = "DRIVING"
    }
    else if (deslocacao == "A Pé") {
      tipoDeslocacao = "WALKING"
    }



    // ciclo para obter as coordenadas de fim e de inicio
    for (var i = 0; i < locaisMapa.length; i++) {
      var data = locaisMapa[i];

      if (data.titulo == origem) {
        latOrigem = data.lat;
        lngtOrigem = data.lng;
      } else if (origem == "Sua Localização") {

        latOrigem = latlocalGPS;
        lngtOrigem = lnglocalGPS;
      }
      if (data.titulo == fim) {
        latFim = data.lat;
        lngFim = data.lng;
      }
    }

    var waypts = []

    for (var i = 0; i < locaisMapa.length; i++) {
      for (var j = 0; j < locaisSelecionados.length; j++) {
        var data = locaisMapa[i];
        if ((data.titulo == locaisSelecionados[j]) && (data.titulo != origem) && (data.titulo != fim)) {
          // console.log("entrei");
          waypts.push({
            location: { lat: data.lat, lng: data.lng },
            stopover: true
          });
        }
      }
    }

    console.log(" direcoes" + i)

    directionsService.route({
      origin: { lat: latOrigem, lng: lngtOrigem },
      destination: { lat: latFim, lng: lngFim },
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode[tipoDeslocacao]
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });



  }

  // When modal window is open, this script resizes the map and resets the map center
  $("#myModal").on("shown.bs.modal", function (e) {
    google.maps.event.trigger(map, "resize");
    map.setZoom(15);
    return map.setCenter(marcadores[0].position);
  });

  $('#myModal').on('hide.bs.modal', function (e) {
    location.reload();
  })

  /*function allMarcador() {
   
    locaisMapa = JSON.parse(sessionStorage.getItem('locais').toString());
    console.log(locaisMapa)
    var infoWindow = new google.maps.InfoWindow();
    for (var i = 0; i < locaisMapa.length; i++) {
     
        var data = locaisMapa[i];
        
 
          latLng = new google.maps.LatLng(data.lat, data.lng);
 
          // Creating a marker and putting it on the map
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: data.titulo
          });
 
          (function (marker, data) {
 
 
            var StringInfo = '<div id="content"><div id="siteNotice"></div>' +
              '<h3>' + data.titulo + '</h3>' +
              '<div>' +
              '<p>' + data.descr + '</p>' +
 
              '</div></div>';
 
            // Attaching a click event to the current marker
            google.maps.event.addListener(marker, "click", function (e) {
              infoWindow.setContent(StringInfo);
              infoWindow.open(map, marker);
            });
 
          })(marker, data);
 
 
         
        
      
    }
  }*/






});