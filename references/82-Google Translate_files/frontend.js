jQuery(document).ready(function($){function get_cookie(name){if(typeof Cookies!='undefined'){return Cookies.get(name);}
if(typeof $.cookie!='undefined'){return $.cookie(name);}
return null;}
function remove_cookie(name,cookie_path){if(typeof Cookies!='undefined'){return Cookies.remove(name,{path:cookie_path});}
if(typeof $.cookie!='undefined'){return $.removeCookie(name,{path:cookie_path});}
return false;}
try{var supports_html5_storage=('sessionStorage'in window&&window['sessionStorage']!==null);if(supports_html5_storage&&get_cookie('aelia_user_logged_in')){var fragment_name='wc_fragments';if((typeof wc_cart_fragments_params!=='undefined')&&wc_cart_fragments_params&&wc_cart_fragments_params.fragment_name){fragment_name=wc_cart_fragments_params.fragment_name;}
console.log('User logged in, refreshing cart fragments');sessionStorage.removeItem(fragment_name,'');var cookie_path=get_cookie('aelia_user_logged_in');remove_cookie('aelia_user_logged_in',cookie_path);}}
catch(exception){var error_msg='Aelia - Exception occurred while accessing window.sessionStorage. '+
'This could be caused by the browser disabling cookies. '+
'COOKIES MUST BE ENABLED for the site to work correctly. '+
'Exception details below.';console.log(error_msg);console.log(exception);}});