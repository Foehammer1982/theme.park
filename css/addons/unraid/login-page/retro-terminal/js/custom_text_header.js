// Custom Text Header //
// ASCII slant font
// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header">
<pre>    _____ __                ________              __   
   / ___// /___  ____  ____ / ____/ /_  ___  ____  / /__ 
   \\__ \\/ / __ \\/ __ \\/ __ \\\\__  / __ \\/ _ \\/ __ \\/ //_/
  ___/ / / /_/ / /_/ / /_/ /__/ / / / /  __/ /_/ / ,<   
 /____/_/ .___/ .___/\\\\____/____/_/ /_/\\\\___/\\\\____/_/|_|  
       /_/   /_/                                        
</pre>
</div>
`;

document.getElementById("login").innerHTML += custom_text_header;
