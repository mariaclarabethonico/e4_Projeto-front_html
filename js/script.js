
$(document).ready(function(){
  $('.owl-carousel').show();
  $('.owl-carousel').owlCarousel({
  	loop:true, 
  	items: 1,
  	autoplay:true,
  	autoplayTimeout:5000
  });
});

$(".formulario").submit(function(e) {
	var nome      = $('.nome').val();
	var email     = $('.email').val();
	var objetivo  = $('.objetivo').val();
	var intuito   = $('input[name=intuito]:checked', '.formulario').val()
	var mensagem  = $('.mensagem').val();

	$('.nome').val("");
	$('.email').val("");
	$('.objetivo').val("");
	$('.mensagem').val("");

	mensagemLoading = msgSucesso('Enviando mensagem, aguarde');
	$('.mensagem-retorno').html(mensagemLoading);

	if(nome == '' || objetivo == '' || email == '' || mensagem == '' || intuito == ''){
	  mensagemErro = msgErro();
	  $('.mensagem-retorno').html(mensagemErro);
	} else {
	  $.get( "index.php", { p: "home", acao: "envia-email", nome:nome, objetivo:objetivo, email:email, intuito:intuito, mensagem:mensagem }).done(function( data ) {
	    if(data == 'preencher'){
	      mensagemErro = msgErro();
	      $('.mensagem-retorno').html(mensagemErro);
	    } else {
	      if(data != 'false'){
	        $('.mensagem-retorno').html(data);
	      } else {
	        mensagemErro = msgErro();
	        $('.mensagem-retorno').html(mensagemErro);
	      }   
	    }   
	  });
	}
	e.preventDefault();
});

function msgErro(){
  Swal.fire({
    title: 'Erro ao enviar mensagem',
    type: 'warning'
  });
}

function msgSucesso(){
  Swal.fire({
    title: 'Sucesso ao enviar mensagem',
    type: 'success'
  });
}