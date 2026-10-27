// Sineus landings pt-BR
(function(){
  // menú móvil
  window.toggleNav=function(){
    var n=document.getElementById('ltNav');
    if(n) n.classList.toggle('open');
  };
  // Formulario -> WhatsApp con evento de GTM
  window.waForm=function(e, phone){
    if(e) e.preventDefault();
    var f=e&&e.target?e.target:document.getElementById('waForm');
    var nome=(f&&f.nome?f.nome.value:'')||'';
    var msg=(f&&f.msg?f.msg.value:'')||'';
    var texto='Olá! Sou '+nome+'. '+msg;
    var url='https://api.whatsapp.com/send?phone=5492615451540&text='+encodeURIComponent(texto);
    // evento para Tag Manager (activador "form_whatsapp")
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:'form_whatsapp'});
    window.open(url,'_blank');
    return false;
  };
})();
