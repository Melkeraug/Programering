


// 1. Välkomna spelaren till spelet 
// 2. Ge användaren instruktioner om hur spelet går till
// 3. Slumpa ut ett ord till användaren av x antal möjliga med hjälp av en array med ord och random.item, jag kommer även använda math.random som jag använde i guess the number uppgiften
// 4. Användaren ska gissa bokstav med hjälp av vilkor som if, else if och while
//     4a. Användaren har 9 försök på sig
//     4b. Ge använderna en hint om ordet efter 4 försök 
//     4c. Gissar användaren rätt gissa nästa bokstav
//     4d. Gissar användaren fel förlora ett "liv"
// 5. Om användaren klara att gissa ordet skriv "You saved the man!"
// 6. Om användaren inte klarar att gissa ordet på 9 försök skriv "The man is now hanged!"
// 7. Jag anväder mig av olika variabler var av den första gör en array där den lägger in bokstäver i de fyra orden jag har valt, t.ex "B", "O", "X", "I", "N", "G". Samt en variabel som heter random item som då har som uppift att slumpa ut ett av de orden jag har på min lista.
// 8. Jag behöver använda mig av vilkor som gör det möjligt för spelaren att gissa bokstäverna till ordet. Alltså om spelaren gissar rätt/fel ord, om spelaren ska få en hint om ordet och om spelaren har gissat rätt eller fel ord.
// 9. Jag ska göra funktioner som berättar följande: En console log som berättar hur spelat ska spelas och en funktion som slumpar ut ett av orden i listan. Även en funktion som tar bort ett försök varje gång spelaren gissar fel bokstav i ordet.
// 10. De variabler som behöver vara åtkomliga är framförallt "const readline" som alltid behöver kommas åt.

------------------------------------------------------------

Planeringen följdes till en liten del, till en början slängde jag endast in massa kod som jag trodde funka. Detta gick självklart inte och jag började om helt med hjälp av Niklas. Detta gjorde att jag lättare kunde följa min planeringen till en större del. Däremot ändrades lite saker under tidens gång. Små saker som 8 försök istället för 9 och att spelet inte ger någon instruktion när det börjar.