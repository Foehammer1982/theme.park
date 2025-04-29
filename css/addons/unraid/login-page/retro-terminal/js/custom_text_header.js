//Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\


let custom_text_header = `
<div class="custom-text-header"> <pre>
   _____  __                  ______ __             __ 
  / ___/ / /_ ____ _ _____   / ____// /___   ___   / /_
  \\__ \\ / __// __ \`// ___/  / /_   / // _ \\\ / _ \\\\ / __/
 ___/ // /_ / /_/ // /     / __/  / //  __//  __// /_  
/____/ \\__/ \\__,_//_/     /_/    /_/ \\___/ \\___/ \\__/ 
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header;
