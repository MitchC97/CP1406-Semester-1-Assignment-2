function validateEmail(input) 
{
var rx = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
return rx.test(input);
}