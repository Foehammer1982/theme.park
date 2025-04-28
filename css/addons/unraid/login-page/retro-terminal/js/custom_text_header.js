// Custom Text Header //
// ASCII slant font
// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header">
<pre>   ____ __               ____ __           __ 
  / __// /_ ___ _ ____  / __// /___  ___  / /_
 _\\ \\ / __// _ \\`// __/ / _/ / // -_)/ -_)/ __/
/___/ \\__/ \\_,_//_/   /_/  /_/ \\__/ \\__/ \\__/  
</pre>
</div>
`;

document.getElementById("login").innerHTML += custom_text_header;
