// Culto Fútbol MX — leyendas. Formato: Nombre|Posición|Club|Época|Media|Estilo
// Apodo opcional como séptimo campo.
// Posición: POR, DEF, MED, DEL. Estilo: at (portero), mu (central), la (lateral),
// co (contención), cr (creativo), ll (llegador/extremo), g (goleador), v (veloz), c (completo).
// Las medias son estimaciones editables de la mejor etapa de cada jugador en la liga.
window.CULTO_RAW = `
Jorge Campos|POR|Pumas|90|88|at
Óscar Pérez|POR|Cruz Azul|00|86|at
Adolfo Ríos|POR|América|90|84|at
Oswaldo Sánchez|POR|Chivas|00|86|at
Guillermo Ochoa|POR|América|00|88|at
Pablo Larios|POR|Cruz Azul|80|84|at
Miguel Marín|POR|Cruz Azul|70|85|at
Héctor Miguel Zelada|POR|América|80|84|at
Nahuel Guzmán|POR|Tigres|10|87|at
Jesús Corona|POR|Cruz Azul|10|84|at
Moisés Muñoz|POR|América|10|81|at
Alfredo Talavera|POR|Toluca|10|82|at
Hernán Cristante|POR|Toluca|00|84|at
Félix Fernández|POR|Atlante|90|80|at
Agustín Marchesín|POR|América|10|84|at
Rodolfo Cota|POR|León|10|80|at
Ignacio Calderón|POR|Chivas|70|84|at
Adrián Chávez|POR|América|90|81|at
Sergio Bernal|POR|Pumas|90|81|at
Nicolás Navarro|POR|Necaxa|90|82|at
Óscar Ustari|POR|Pachuca|10|80|at
Tiago Volpi|POR|Toluca|10|82|at
Carlos Acevedo|POR|Santos|20|80|at
Luis Malagón|POR|América|20|82|at
Camilo Vargas|POR|Atlas|20|84|at
Jonathan Orozco|POR|Monterrey|10|81|at
Cirilo Saucedo|POR|Tijuana|10|79|at
Miguel Calero|POR|Pachuca|00|86|at
Federico Vilar|POR|Atlante|00|82|at
Luis Michel|POR|Chivas|00|79|at
Jaime Gómez|POR|Chivas|60|85|at
Esteban Andrada|POR|Monterrey|20|83|at
Raúl Gudiño|POR|Chivas|20|78|at
Ricardo La Volpe|POR|Atlante|70|79|at
Rafael Márquez|DEF|Atlas|90|89|mu
Claudio Suárez|DEF|Pumas|90|87|mu
Carlos Salcido|DEF|Chivas|00|85|la
Duilio Davino|DEF|América|90|83|mu
Ricardo Osorio|DEF|Cruz Azul|00|83|la
Francisco Javier Rodríguez|DEF|Chivas|00|82|mu|Maza
Héctor Moreno|DEF|Monterrey|20|84|mu
Carlos Salcedo|DEF|Tigres|20|81|mu
Jesús Gallardo|DEF|Monterrey|20|80|la
Miguel Layún|DEF|América|10|82|la
Paul Aguilar|DEF|América|10|82|la
Diego Reyes|DEF|Tigres|10|81|mu
Néstor Araujo|DEF|Santos|10|82|mu
Hugo Ayala|DEF|Tigres|10|84|mu
Juninho|DEF|Tigres|10|83|mu
Jorge Torres Nilo|DEF|Tigres|10|81|la
Israel Jiménez|DEF|Tigres|10|79|la
Luis Rodríguez|DEF|Tigres|10|79|la
Aquivaldo Mosquera|DEF|América|10|82|mu
Nicolás Sánchez|DEF|Monterrey|10|81|mu
José María Basanta|DEF|Monterrey|10|82|mu
Severo Meza|DEF|Monterrey|10|79|la
Edgar Dueñas|DEF|Toluca|00|79|mu
Paulo da Silva|DEF|Toluca|00|83|mu
Julio César Domínguez|DEF|Cruz Azul|10|81|mu
Leobardo López|DEF|Pachuca|00|78|la
Joel Huiqui|DEF|Cruz Azul|00|78|mu
Raúl Gutiérrez|DEF|Atlante|90|79|mu
Ignacio Ambriz|DEF|Necaxa|90|82|mu
Juan de Dios Ramírez Perales|DEF|Pumas|90|79|la
José Antonio Castro|DEF|América|00|79|la
Ricardo Rojas|DEF|América|00|80|la
Rafael Amador|DEF|Pumas|80|80|la
Fernando Quirarte|DEF|Chivas|80|83|mu
Félix Cruz Barbosa|DEF|Pumas|80|81|mu
Mario Trejo|DEF|Pumas|80|80|la
Arturo Vázquez Ayala|DEF|Pumas|70|81|mu
Alfredo Tena|DEF|América|80|84|mu
Javier Guzmán|DEF|Cruz Azul|70|80|mu
Alberto Quintano|DEF|Cruz Azul|70|84|mu
Gustavo Peña|DEF|Cruz Azul|70|82|mu
Raúl Servín|DEF|Pumas|80|79|mu
Salvador Carmona|DEF|Toluca|00|80|la
Dárvin Chávez|DEF|Monterrey|10|78|la
Efraín Juárez|DEF|Pumas|00|77|la
Marco Antonio Palacios|DEF|Pumas|00|79|mu|Pikolín I
Héctor Reynoso|DEF|Chivas|00|79|mu
Jonny Magallón|DEF|Chivas|00|77|mu
Jair Pereira|DEF|Chivas|10|77|mu
Antonio Briseño|DEF|Chivas|20|77|mu
Gilberto Sepúlveda|DEF|Chivas|20|77|mu
Jorge Sánchez|DEF|América|20|79|la
Bruno Valdez|DEF|América|10|80|mu
Israel Reyes|DEF|América|20|79|mu
Sebastián Cáceres|DEF|América|20|79|mu
Igor Lichnovsky|DEF|Tigres|20|78|mu
Juan Escobar|DEF|Cruz Azul|20|79|mu
Pablo Aguilar|DEF|Cruz Azul|10|80|mu
Adrián Aldrete|DEF|Cruz Azul|10|77|la
Mario Méndez|DEF|Toluca|00|78|la
Hiram Mier|DEF|Monterrey|10|78|mu
Gerardo Flores|DEF|Cruz Azul|10|77|la
Efraín Velarde|DEF|Pumas|10|77|la
Darío Verón|DEF|Pumas|00|83|mu
Joaquín Beltrán|DEF|Pumas|00|80|mu
Juan Reynoso|DEF|Cruz Azul|90|83|mu
Osvaldo Batocletti|DEF|Tigres|70|82|mu
Juan Jasso|DEF|Chivas|60|80|mu
Guillermo Sepúlveda|DEF|Chivas|60|82|mu
José Villegas|DEF|Chivas|60|84|la
Arturo Chaires|DEF|Chivas|60|80|mu
Stefan Medina|DEF|Monterrey|20|79|la
William Tesillo|DEF|León|20|79|mu
Anderson Santamaría|DEF|Atlas|20|78|mu
Kevin Álvarez|DEF|Pachuca|20|77|la
Óscar Rojas|DEF|América|00|78|la
Manuel Vidrio|DEF|Pachuca|00|78|mu
Luis Ernesto Pérez|MED|Monterrey|00|82|co
Pável Pardo|MED|Atlas|90|85|co
Gerardo Torrado|MED|Cruz Azul|00|83|co
Ramón Ramírez|MED|Chivas|90|85|ll
Alberto García Aspe|MED|Necaxa|90|87|cr
Alex Aguinaga|MED|Necaxa|90|90|cr
Benjamín Galindo|MED|Chivas|80|88|cr
Tomás Boy|MED|Tigres|80|87|cr
Carlos Reinoso|MED|América|70|88|cr
Cristóbal Ortega|MED|América|80|85|co
Daniel Brailovsky|MED|América|80|84|cr
Manuel Negrete|MED|Pumas|80|84|ll
Leonardo Cuéllar|MED|Pumas|70|82|co
Javier Aguirre|MED|América|80|79|co
Héctor Pulido|MED|Cruz Azul|70|83|co
Fernando Bustos|MED|Cruz Azul|70|80|co
Jorge Aravena|MED|Puebla|80|83|cr
Alberto Coyote|MED|Chivas|90|80|co
Paulo César Chávez|MED|Chivas|90|80|cr
Germán Villa|MED|América|90|81|co
Marcelino Bernal|MED|Toluca|90|80|co
Joaquín del Olmo|MED|Veracruz|90|79|co
Isidoro Díaz|MED|Chivas|60|83|cr
Jesús Arellano|MED|Monterrey|00|83|ll|Cabrito
Adolfo Bautista|MED|Chivas|00|82|cr
Ramón Morales|MED|Chivas|00|81|cr
Alberto Medina|MED|Chivas|00|79|ll|Venado
Jaime Lozano|MED|Pumas|00|80|cr
Israel Castro|MED|Pumas|00|79|co
Sinha|MED|Toluca|00|86|cr
Carlos Esquivel|MED|Toluca|00|80|ll
Gabriel Caballero|MED|Pachuca|00|84|cr
Andrés Chitiva|MED|Pachuca|00|81|cr
Damián Manso|MED|Pachuca|00|83|cr
Juan Pablo Rodríguez|MED|Santos|00|80|cr
Daniel Ludueña|MED|Santos|00|82|cr|Hachita
Fernando Arce|MED|Santos|00|80|cr
César Delgado|MED|Cruz Azul|00|81|ll|Chelito
Christian Giménez|MED|Cruz Azul|10|84|cr
Daniel Osorno|MED|Atlas|90|84|cr
Andrés Guardado|MED|Atlas|00|85|ll
Pablo Barrera|MED|Pumas|00|80|ll
Javier Cortés|MED|Pumas|10|77|ll
Walter Ayoví|MED|Monterrey|10|81|ll
Neri Cardozo|MED|Monterrey|10|81|ll
Avilés Hurtado|MED|Monterrey|10|82|ll
Carlos Rodríguez|MED|Monterrey|10|79|co
Rodolfo Pizarro|MED|Monterrey|10|81|ll
Maximiliano Meza|MED|Monterrey|20|81|ll
Sergio Canales|MED|Monterrey|20|86|cr
Celso Ortiz|MED|Monterrey|20|79|co
Guido Pizarro|MED|Tigres|10|85|co
Rafael Carioca|MED|Tigres|10|84|co
Lucas Zelarayán|MED|Tigres|10|83|cr
Javier Aquino|MED|Tigres|10|80|ll
Damián Álvarez|MED|Tigres|10|80|ll
Lucas Lobos|MED|Tigres|10|82|cr
Florian Thauvin|MED|Tigres|20|82|ll
Luis Quiñones|MED|Tigres|20|80|ll
Sebastián Córdova|MED|Tigres|20|80|cr
Diego Lainez|MED|Tigres|20|79|ll
Juan Pablo Vigón|MED|Tigres|20|80|co
Rubens Sambueza|MED|América|10|83|cr
Guido Rodríguez|MED|América|10|82|co
Edson Álvarez|MED|América|10|82|co
Diego Valdés|MED|América|20|83|cr
Álvaro Fidalgo|MED|América|20|84|cr
Richard Sánchez|MED|América|20|80|co
Héctor Herrera|MED|Pachuca|10|82|co
Erick Gutiérrez|MED|Pachuca|10|80|cr
Víctor Guzmán|MED|Pachuca|20|79|ll
Marco Fabián|MED|Chivas|10|80|cr
Isaác Brizuela|MED|Chivas|10|78|ll
Orbelín Pineda|MED|Chivas|10|81|cr
Roberto Alvarado|MED|Chivas|20|80|ll
Fernando Beltrán|MED|Chivas|20|79|co
Luis Montes|MED|León|10|82|cr
Carlos Peña|MED|León|10|80|cr|Gullit
Elías Hernández|MED|León|10|80|ll
Jean Meneses|MED|León|20|80|ll
Aldo Rocha|MED|Atlas|20|80|co
Luis Romo|MED|Cruz Azul|20|81|co
Brian Lozano|MED|Santos|10|79|cr
Christian Bermúdez|MED|Atlante|00|79|ll
Antonio Mohamed|MED|Toros Neza|90|83|cr
Juan Carlos Valenzuela|MED|América|00|77|co
José Juan Vázquez|MED|León|10|79|co
Jesús Molina|MED|Santos|10|79|co
Osvaldo Martínez|MED|América|10|80|cr
Gonzalo Pineda|MED|Pumas|00|80|co
Hugo Sánchez|DEL|Pumas|70|93|g
Evanivaldo Castro "Cabinho"|DEL|Atlante|70|92|g
Carlos Hermosillo|DEL|Cruz Azul|90|88|g
Jared Borgetti|DEL|Santos|00|90|g
Luis Roberto Alves "Zague"|DEL|América|90|87|c
Cuauhtémoc Blanco|DEL|América|90|90|c
Luis García|DEL|Pumas|90|84|g
Luis Hernández|DEL|Necaxa|90|86|v
Ricardo Peláez|DEL|Necaxa|90|83|g
Francisco Fonseca|DEL|Cruz Azul|00|83|g|Kikín
José Saturnino Cardozo|DEL|Toluca|00|92|g|Diablo Mayor
Salvador Cabañas|DEL|América|00|89|c|Chava
Matías Vuoso|DEL|Santos|00|82|g
Sebastián Abreu|DEL|Cruz Azul|00|80|g
Bruno Marioni|DEL|Pumas|00|82|g
Omar Bravo|DEL|Chivas|00|84|g
Francisco Palencia|DEL|Cruz Azul|90|82|v
Christian Benítez|DEL|Santos|10|86|v
Oribe Peralta|DEL|Santos|10|85|c
Darwin Quintero|DEL|Santos|10|82|v
Javier Hernández|DEL|Chivas|00|82|g
Héctor Mancilla|DEL|Toluca|00|81|g
Vicente Sánchez|DEL|Toluca|00|83|c
Emanuel Villa|DEL|Cruz Azul|10|82|g
Julián Quiñones|DEL|Atlas|20|83|v
Jonathan Rodríguez|DEL|Cruz Azul|20|83|c
Nicolás Castillo|DEL|Pumas|10|81|g
Juan Ignacio Dinenno|DEL|Pumas|20|80|g
Luis Flores|DEL|Pumas|80|83|c
Enrique Borja|DEL|América|70|86|g
François Omam-Biyik|DEL|América|90|83|v
Kalusha Bwalya|DEL|América|90|81|c
Germán Arangio|DEL|Toros Neza|90|81|g
Giancarlo Maldonado|DEL|Atlante|00|81|g
Rafael Márquez Lugo|DEL|Morelia|00|82|g
Miguel Sabah|DEL|Morelia|10|78|v
Daniel Guzmán|DEL|Tecos|90|80|g
Gerónimo Barbadillo|DEL|Tigres|80|85|v
Carlos Poblete|DEL|Puebla|80|82|g
Horacio López Salgado|DEL|Cruz Azul|70|83|v
Octavio Muciño|DEL|Cruz Azul|70|82|g
Salvador Reyes|DEL|Chivas|60|88|g
Héctor Hernández|DEL|Chivas|60|84|g
Crescencio Gutiérrez|DEL|Chivas|60|81|v
Vicente Pereda|DEL|Toluca|70|83|g
Ítalo Estupiñán|DEL|Toluca|70|84|g
Juan Carlos Cacho|DEL|Pachuca|00|79|v
Franco Jara|DEL|Pachuca|10|81|c
Nicolás Ibáñez|DEL|Pachuca|20|81|g
Hirving Lozano|DEL|Pachuca|10|84|v
Djaniny Tavares|DEL|Santos|10|83|g
Julio Furch|DEL|Atlas|20|81|g
Humberto Suazo|DEL|Monterrey|00|88|g
Aldo de Nigris|DEL|Monterrey|10|82|g
Dorlan Pabón|DEL|Monterrey|10|81|v
Rogelio Funes Mori|DEL|Monterrey|10|86|g
Germán Berterame|DEL|Monterrey|20|82|c
Guillermo Franco|DEL|Monterrey|00|82|g|Guille
André-Pierre Gignac|DEL|Tigres|10|92|c
Eduardo Vargas|DEL|Tigres|10|81|v
Enner Valencia|DEL|Tigres|10|81|v
Jürgen Damm|DEL|Tigres|10|79|v
Nicolás López|DEL|Tigres|20|80|g
Mauro Boselli|DEL|León|10|85|g
Ángel Mena|DEL|León|20|84|c
Matías Britos|DEL|León|10|78|g
Matías Alustiza|DEL|Puebla|10|80|g|Chavo
Raúl Jiménez|DEL|América|10|80|c
Henry Martín|DEL|América|20|83|g
Alexis Vega|DEL|Chivas|20|82|v
Alan Pulido|DEL|Chivas|10|81|g
Uriel Antuna|DEL|Cruz Azul|20|80|v
Santiago Giménez|DEL|Cruz Azul|20|83|g
Mariano Pavone|DEL|Cruz Azul|10|80|g
Claudio López|DEL|América|00|80|v|Piojo
Rodrigo Ruiz|DEL|Santos|00|80|c|Pony
Johan Vásquez|DEF|Pumas|20|80|mu
César Montes|DEF|Monterrey|20|82|mu
Jesús Angulo|DEF|Tigres|20|78|la
Fernando Navarro|DEF|León|10|78|la
Juan Pablo Sorín|DEF|Cruz Azul|00|80|la
Gerardo Arteaga|DEF|Santos|20|79|la
Michael Arroyo|MED|América|10|79|ll
Ronaldinho|MED|Querétaro|10|82|cr
Missael Espinoza|MED|Monterrey|90|79|ll
Leonardo Fernández|MED|Toluca|20|81|cr
Ángel Reyna|MED|América|10|80|cr
Jesús Dueñas|MED|Tigres|10|79|co
Fernando Gorriarán|MED|Tigres|20|81|co
Pedro Aquino|MED|León|20|80|co
Luis Chávez|MED|Pachuca|20|81|cr
Luis Gabriel Rey|DEL|Morelia|00|81|g
Raúl Ruidíaz|DEL|Morelia|10|82|v
Ismael Sosa|DEL|Pumas|10|80|v
Emilio Butragueño|DEL|Celaya|90|81|c
Iván Zamorano|DEL|América|00|82|g
Jorge Comas|DEL|Veracruz|80|83|g
José Juan Macías|DEL|Chivas|20|79|g
Javier Orozco|DEL|Cruz Azul|10|78|g
Jackson Martínez|DEL|Jaguares|10|84|g|Cha Cha Cha
Claudinho|DEL|Morelia|90|82|g
Richard Núñez|DEL|Cruz Azul|00|81|c|Súper Richard
Raúl Arellano|DEL|Chivas|60|84|v|Pina
Ángel Sosa|DEL|Necaxa|00|78|v|Rambo
Hugo Norberto Castillo|DEL|América|00|80|c|Misionero
Reinaldo Navia|DEL|Morelia|00|82|g
Fidel Martínez|DEL|Tijuana|10|80|v
Duvier Riascos|DEL|Tijuana|10|79|v
Sebastián González|DEL|Atlante|00|81|g|Chamagol
Luciano Figueroa|DEL|Cruz Azul|00|82|g|Lucho
Alfredo Moreno|DEL|San Luis|00|84|g|Chango
Roque Santa Cruz|DEL|Cruz Azul|10|80|g
Luis Ángel Landín|DEL|Morelia|00|79|v
Erick Torres|DEL|Chivas|10|79|g|Cubo
Santiago Fernández|DEL|América|00|76|c
Walter Erviti|MED|Monterrey|00|82|cr
Leandro Augusto|MED|Pumas|10|80|co
José Luis López|MED|Pumas|00|79|co|Parejita
José Damasceno|MED|Pumas|90|81|cr|Tiba
Raúl Lara|DEF|América|90|81|mu
Isaac Terrazas|DEF|América|90|79|mu
Aarón Galindo|DEF|Cruz Azul|00|80|mu
Ismael Rodríguez|DEF|América|00|79|mu
Hugo Sánchez Guerrero|DEF|Tigres|00|78|mu
Felipe Baloy|DEF|Santos|10|81|mu
Alejandro Palacios|POR|Pumas|10|81|at|Pikolín II
Gustavo Campagnuolo|POR|Tigres|00|79|at
Edgar Hernández|POR|Atlas|10|77|at
Robert de Pinho|DEL|Atlas|00|83|g
Julio Daniel Frías|DEL|Indios|00|75|g|Maleno
Juan Pablo García|MED|Atlas|00|79|ll|Loquito
José Antonio Noriega|MED|Morelia|90|80|co|Tato
Juan Arango|MED|Pachuca|00|83|cr
Margarito González|DEF|Querétaro|00|76|mu
Walter Gaitán|MED|Tigres|00|85|cr|Divino
Luis Ángel Mendoza|MED|América|10|79|ll|Quick
Juan Carlos Silva|MED|América|00|75|ll|Torito
Manuel Pérez|MED|Atlas|00|79|cr|Tripa
Fabián Peña|MED|Necaxa|00|79|co|Ruso
Walter Silvani|DEL|Pachuca|00|80|g|Cuqui
Elgabry Rangel|DEF|Tecos|00|75|la
Antonio Pérez|POR|Atlas|00|74|at|Poeta
Sergio Pérez Moya|DEF|Puebla|10|76|la|Cherokee
Jorge Iván Estrada|DEF|Santos|10|78|la|Gutty
Héctor Altamirano|DEF|Santos|00|79|la|Pity
Denis Caniza|DEF|Santos|00|81|la
Manuel Sol|MED|Chivas|00|78|co
Juan Carlos Leaño|DEF|Tecos|00|74|mu|Cheto
Kléber Boas|DEL|América|00|81|g
Hugo Rodallega|DEL|Necaxa|00|81|v
Melvin Brown|DEF|Cruz Azul|00|80|mu
Mario Pérez Guadarrama|DEF|América|70|81|la|Pichojos
Mario Pérez Zúñiga|DEF|Necaxa|00|77|la
Milton Núñez|DEL|Pachuca|00|78|v|Tyson
Víctor Dávila|DEL|León|20|82|c
Edson Puch|DEL|Necaxa|10|79|v
Antonio Rodríguez|POR|Chivas|10|78|at|Tona
Hugo González|POR|Monterrey|10|77|at
Gibrán Lajud|POR|Tijuana|10|74|at
Óscar Jiménez|POR|América|20|76|at
Kevin Mier|POR|Cruz Azul|20|80|at
Nicolás Vikonis|POR|Puebla|10|75|at
Liborio Sánchez|POR|Querétaro|10|72|at
Jesús Orozco|DEF|Chivas|20|77|mu|Chiquete
Emilio Lara|DEF|América|20|73|la
Ramón Juárez|DEF|América|20|74|mu
Willer Ditta|DEF|Cruz Azul|20|79|mu
Ignacio Rivero|DEF|Cruz Azul|20|79|la|Nacho
Rodrigo Huescas|DEF|Cruz Azul|20|73|la
Luis Reyes|DEF|Atlas|20|75|la
Diego Barbosa|DEF|Atlas|20|72|la
Diego Novaretti|DEF|León|10|76|mu
Ignacio González|DEF|León|10|73|la
Edwin Hernández|DEF|León|10|74|la
Óscar Murillo|DEF|Pachuca|10|79|mu
Gustavo Cabral|DEF|Pachuca|20|75|mu
Raúl López|DEF|Chivas|10|72|la
Miguel Ponce|DEF|Chivas|10|73|la
Hedgardo Marín|DEF|Chivas|10|72|mu
Jesús Sánchez|DEF|Chivas|10|73|la
Alejandro Mayorga|DEF|Chivas|20|71|la
Cristian Calderón|DEF|Chivas|20|73|la|Chicote
Hernán Pellerano|DEF|Tijuana|10|76|mu
Javier Gandolfi|DEF|Tijuana|10|76|mu
Joel Sánchez|DEF|Chivas|90|74|la
Leandro Cufré|DEF|Atlas|10|74|mu
Alan Mozo|DEF|Pumas|20|74|la
Nicolás Freire|DEF|Pumas|20|76|mu
Luis Fuentes|DEF|Pumas|10|74|la
Jorge Villafaña|DEF|Santos|10|73|la
Carlos Izquierdoz|DEF|Santos|10|78|mu
Oswaldo Alanís|DEF|Santos|10|73|la
Edgar Castillo|DEF|Santos|00|74|la
Leonel Vangioni|DEF|Monterrey|10|75|la
Sergio Ramos|DEF|Monterrey|20|84|mu
Yasser Corona|DEF|Querétaro|10|72|mu
Clemente Ovalle|DEF|Atlante|00|72|la
Erik Lira|MED|Cruz Azul|20|78|co
Rafael Baca|MED|Cruz Azul|10|74|co
Yoshimar Yotún|MED|Cruz Azul|10|77|cr
Carlos Rotondi|MED|Cruz Azul|20|74|ll
Lorenzo Faravelli|MED|Cruz Azul|20|76|cr
Alexis Gutiérrez|MED|Cruz Azul|20|74|cr
Jonathan dos Santos|MED|América|20|77|c
Alejandro Zendejas|MED|América|20|76|ll
Mateus Uribe|MED|América|10|81|c
Renato Ibarra|MED|América|10|77|v
Giovani dos Santos|MED|América|10|76|cr
Nicolás Benedetti|MED|América|20|74|cr
Juan Carlos Medina|MED|Atlas|10|74|co
Rodrigo Millar|MED|Atlas|10|73|c
Jairo Torres|MED|Atlas|20|73|ll
Fernando González|MED|Chivas|20|74|co|Oso
Jorge Enríquez|MED|Chivas|10|74|co|Chatón
Michael Pérez|MED|Chivas|10|72|co
Patricio Araujo|MED|Chivas|00|72|co
Xavier Báez|MED|Chivas|00|73|cr
Marcel Ruiz|MED|Toluca|20|77|c
Helinho|MED|Toluca|20|79|ll
Rafael García|MED|Toluca|00|75|co
Carlos María Morales|MED|Toluca|00|76|cr
Pablo Barrientos|MED|Toluca|10|75|cr
David Cabrera|MED|Pumas|10|74|c
Erick Sánchez|MED|Pachuca|20|77|cr
Elías Montiel|MED|Pachuca|20|73|cr
Jaime Correa|MED|Pachuca|00|75|co
Romario Ibarra|MED|Pachuca|20|73|v
Arturo González|MED|Monterrey|20|74|cr|Ponchito
Jonathan Urretaviscaya|MED|Monterrey|10|76|ll
Óliver Torres|MED|Monterrey|20|80|cr
Jesús Manuel Corona|MED|Monterrey|20|79|ll|Tecatito
Juan Brunetta|MED|Tigres|20|80|cr
Ozziel Herrera|MED|Tigres|20|74|v
Danilinho|MED|Tigres|10|75|v
Manuel Viniegra|MED|Tigres|00|73|cr
Lucas Romero|MED|León|20|74|co
Diego González|MED|Santos|10|76|cr
Bryan Rabello|MED|Santos|10|76|cr
Néstor Calderón|MED|Santos|10|73|ll
Cristian Pellerano|MED|Tijuana|10|76|co
Raúl Enríquez|MED|Tijuana|10|73|co
Joe Corona|MED|Tijuana|10|73|cr
Kevin Castañeda|MED|Tijuana|20|75|cr
Jefferson Montero|MED|Morelia|10|77|v
Aldo Ramírez|MED|Morelia|00|74|co
Paulinho|DEL|Toluca|20|85|g
Enrique Triverio|DEL|Toluca|10|76|g
Fernando Uribe|DEL|Toluca|10|76|g
Edgar Benítez|DEL|Toluca|10|75|v
José Manuel Abundis|DEL|Toluca|90|76|g
Brian Rodríguez|DEL|América|20|80|v
Roger Martínez|DEL|América|20|77|v
Rodrigo Aguirre|DEL|América|20|75|g
Cecilio Domínguez|DEL|América|10|76|v
Ángel Sepúlveda|DEL|Cruz Azul|20|76|g
Giorgos Giakoumakis|DEL|Cruz Azul|20|76|g
Martín Cauteruccio|DEL|Cruz Azul|10|73|g
Ángel Correa|DEL|Tigres|20|83|c
Lucas Ocampos|DEL|Monterrey|20|80|v
Brandon Vázquez|DEL|Monterrey|20|75|g
Salomón Rondón|DEL|Pachuca|20|82|g
Oussama Idrissi|DEL|Pachuca|20|77|v
Dayro Moreno|DEL|Tijuana|10|80|g
Camilo Sanvezzo|DEL|Querétaro|10|81|g
Felipe Mora|DEL|Pumas|20|74|g
Eduardo Herrera|DEL|Pumas|10|74|g
Martín Bravo|DEL|Pumas|10|75|v
Ismael Íñiguez|DEL|Pumas|00|73|g
Ángel Zaldívar|DEL|Chivas|10|72|g
Joel Campbell|DEL|León|20|74|v
Eduardo Aguirre|DEL|Santos|20|73|g
Christian Tabó|DEL|Puebla|20|75|v
Agustín Delgado|DEL|Necaxa|00|78|g|Tin
Diber Cambindo|DEL|Necaxa|20|73|g
Gustavo Biscayzacú|DEL|Veracruz|00|78|g|Grillo
José Rivas|DEF|Tigres|10|77|mu|Palmera
Nery Castillo|DEL|Pachuca|10|77|v
Sebastián Jurado|POR|Cruz Azul|20|74|at
Andrés Gudiño|POR|Cruz Azul|20|74|at
Carlos Moreno|POR|Pachuca|20|75|at
Julio González|POR|Pumas|20|73|at
Keylor Navas|POR|Pumas|20|84|at
Antony Silva|POR|Puebla|20|74|at
Marcelo Barovero|POR|Necaxa|10|77|at
Raúl Rangel|POR|Chivas|20|76|at
Miguel Jiménez|POR|Chivas|20|73|at
Luis Cárdenas|POR|Monterrey|20|74|at
Alejandro Argüello|DEF|América|00|73|mu
Fausto Pinto|DEF|Pachuca|00|73|mu
Omar Esparza|DEF|Chivas|00|73|la
Mario de Luna|DEF|Chivas|10|72|mu
Kristian Álvarez|DEF|Chivas|10|73|la
José Abella|DEF|Santos|10|73|la
Hugo Nervo|DEF|Atlas|20|73|mu
Ventura Alvarado|DEF|América|10|73|mu
Unai Bilbao|DEF|San Luis|20|74|mu
Sebastián Vegas|DEF|Monterrey|20|76|mu
Emanuel Aguilera|DEF|América|10|74|mu
Josecarlos Van Rankin|DEF|Pumas|10|72|la
Pablo Bennevendo|DEF|Pumas|20|71|la
Lisandro Magallán|DEF|Pumas|20|74|mu
Matheus Doria|DEF|Santos|10|74|mu
Alexis Peña|DEF|Necaxa|20|72|mu
Néstor Vidrio|DEF|Pachuca|10|72|mu
Alejandro Arribas|DEF|Pumas|10|76|mu
Luis Quintana|DEF|Pumas|10|72|mu
Rogelio Chávez|DEF|Cruz Azul|10|72|la
Osmar Mares|DEF|América|10|72|la
Cristian Borja|DEF|América|20|73|la
Gonzalo Piovi|DEF|Cruz Azul|20|76|la
Federico Pereira|DEF|Toluca|20|75|mu
Stiven Barreiro|DEF|León|20|74|mu
Adonis Frías|DEF|León|20|75|mu
Carlos Adrián Morales|MED|Morelia|00|76|cr
Jesús Zavala|MED|Monterrey|10|74|co
Alejandro Castro|MED|Cruz Azul|10|74|co
Federico Mancuello|MED|Cruz Azul|10|75|cr
Hugo Droguett|MED|Cruz Azul|10|76|ll
Ulises Rivas|MED|Santos|20|73|co
Andrés Andrade|MED|América|10|75|cr
Edwin Cardona|MED|Monterrey|10|78|cr
Jonathan González|MED|Monterrey|10|74|co
Matías Kranevitter|MED|Monterrey|20|77|co
Kevin Escamilla|MED|Pumas|10|72|co
Jesús Ricardo Angulo|MED|Tigres|20|74|ll|Canelo
Jordi Cortizo|MED|Querétaro|20|73|cr
Eduardo López|MED|Chivas|10|73|cr|Chofis
Miguel Zepeda|MED|Atlas|00|74|cr
Israel López|MED|Toluca|00|73|co
Allan Saint-Maximin|MED|América|20|80|v
James Rodríguez|MED|León|20|83|cr
Daniel Montenegro|MED|América|10|78|cr
Jonathan Fabbro|MED|Chivas|10|73|cr
Joao Rojas|MED|Cruz Azul|10|73|v
Édgar Méndez|MED|Cruz Azul|10|73|v
José Paradela|MED|Cruz Azul|20|75|cr
Javairô Dilrosun|MED|América|20|74|v
César Huerta|MED|Pumas|20|76|ll|Chino
Adalberto Carrasquilla|MED|Pumas|20|76|c
Juan Iturbe|MED|Pumas|20|73|v
Egidio Arévalo Ríos|MED|Tigres|10|77|co
Carlos Sánchez|MED|Monterrey|10|80|c|Pato
Antonio Ríos|MED|Toluca|10|74|co
Gustavo Ferrareis|MED|Puebla|20|73|cr
Gabriel Pereyra|MED|Atlante|00|75|cr
Federico Viñas|DEL|América|20|76|g
Antonio de Nigris|DEL|Monterrey|00|74|g
Sergio Santana|DEL|Chivas|00|74|g
Bryan Angulo|DEL|Cruz Azul|20|73|g
Jorge Ruvalcaba|DEL|Pumas|20|73|v
Gabriel Fernández|DEL|Pumas|20|74|g|Toro
Guillermo Martínez|DEL|Pumas|20|72|g|Memote
Darío Benedetto|DEL|América|10|80|g|Pipa
Esteban Paredes|DEL|Atlante|10|77|g
Herculez Gómez|DEL|Puebla|10|74|g
Omar Arellano|DEL|Chivas|00|72|v
Iván Alonso|DEL|Toluca|10|76|g
Silvio Romero|DEL|América|10|73|g
Milton Caraglio|DEL|Cruz Azul|10|74|g
Mauro Quiroga|DEL|Necaxa|20|73|g
Santiago Ormeño|DEL|Puebla|20|73|g
Alexis Canelo|DEL|Toluca|20|74|g
Lucas Di Yorio|DEL|León|20|72|g
Anthony Martial|DEL|Monterrey|20|79|v
Cade Cowell|DEL|Chivas|20|73|v
Carlos González|DEL|Pumas|10|74|g
Rafael Sóbis|DEL|Tigres|10|77|c
Joffre Guerrón|DEL|Tigres|10|75|v
Vincent Janssen|DEL|Monterrey|20|76|g
Harold Preciado|DEL|Santos|20|76|g
Darío Cvitanich|DEL|Pachuca|10|75|g
Gustavo Bou|DEL|Tijuana|10|74|g
Daniel Villalva|DEL|Veracruz|10|73|v
Ramiro Funes Mori|DEF|Cruz Azul|20|75|mu
Alan Cervantes|MED|Santos|20|73|co
Giovani Casillas|MED|Chivas|10|71|ll
Michael Estrada|DEL|Toluca|20|74|g
Juan Otero|MED|Santos|20|73|v
`;

// Nacionalidad (código ISO de 2 letras) para la química de Selección. Quien no aparece aquí es mexicano (MX).
// Para naturalizados se usa la selección que representaron.
window.CULTO_PAIS_RAW = {
  AR: "Nahuel Guzmán;Agustín Marchesín;Hernán Cristante;Federico Vilar;Nicolás Navarro;Óscar Ustari;Esteban Andrada;Ricardo La Volpe;Héctor Miguel Zelada;Miguel Marín;Nicolás Sánchez;José María Basanta;Osvaldo Batocletti;Daniel Brailovsky;Antonio Mohamed;Walter Gaitán;Lucas Lobos;Guido Pizarro;Lucas Zelarayán;Damián Álvarez;Damián Manso;Daniel Ludueña;César Delgado;Neri Cardozo;Maximiliano Meza;Guido Rodríguez;Rubens Sambueza;Emanuel Villa;Bruno Marioni;Mariano Pavone;Claudio López;Juan Pablo Sorín;Juan Ignacio Dinenno;Franco Jara;Nicolás Ibáñez;Julio Furch;Mauro Boselli;Matías Alustiza;Rodrigo Ruiz;Ismael Sosa;Walter Erviti;Hugo Norberto Castillo;Luciano Figueroa;Alfredo Moreno;Gustavo Campagnuolo;Julio Daniel Frías;Walter Silvani;Germán Arangio;Jorge Comas;Santiago Fernández;Ángel Sosa;Leandro Cufré;Diego Novaretti;Hernán Pellerano;Cristian Pellerano;Javier Gandolfi;Leonel Vangioni;Gustavo Cabral;Nicolás Freire;Carlos Izquierdoz;Lorenzo Faravelli;Carlos Rotondi;Pablo Barrientos;Enrique Triverio;Martín Bravo;Diego González;Lucas Romero;Juan Brunetta;Ángel Correa;Lucas Ocampos;Hugo Nervo;Emanuel Aguilera;Lisandro Magallán;Gonzalo Piovi;Federico Mancuello;Matías Kranevitter;Daniel Montenegro;José Paradela;Darío Benedetto;Silvio Romero;Milton Caraglio;Mauro Quiroga;Alexis Canelo;Lucas Di Yorio;Darío Cvitanich;Gustavo Bou;Daniel Villalva;Gabriel Pereyra;Marcelo Barovero;Ramiro Funes Mori",
  UY: "Sebastián Abreu;Vicente Sánchez;Richard Núñez;Carlos María Morales;Jonathan Rodríguez;Brian Lozano;Leonardo Fernández;Fernando Gorriarán;Nicolás López;Matías Britos;Rodrigo Aguirre;Brian Rodríguez;Sebastián Cáceres;Christian Tabó;Martín Cauteruccio;Jonathan Urretaviscaya;Ignacio Rivero;Nicolás Vikonis;Gustavo Biscayzacú;Federico Pereira;Egidio Arévalo Ríos;Carlos Sánchez;Federico Viñas;Iván Alonso;Gabriel Fernández",
  CL: "Carlos Reinoso;Jorge Aravena;Carlos Poblete;Alberto Quintano;Ricardo Rojas;Iván Zamorano;Humberto Suazo;Héctor Mancilla;Nicolás Castillo;Eduardo Vargas;Reinaldo Navia;Rodrigo Millar;Bryan Rabello;Igor Lichnovsky;Diego Valdés;Jean Meneses;Víctor Dávila;Edson Puch;Sebastián González;Felipe Mora;Hugo Droguett;Sebastián Vegas;Esteban Paredes",
  CO: "Aquivaldo Mosquera;Darwin Quintero;Avilés Hurtado;Duvier Riascos;Dorlan Pabón;Jackson Martínez;Mateus Uribe;Andrés Chitiva;Luis Quiñones;Dayro Moreno;Stefan Medina;William Tesillo;Willer Ditta;Óscar Murillo;Kevin Mier;Camilo Vargas;Miguel Calero;Diber Cambindo;Roger Martínez;Nicolás Benedetti;Hugo Rodallega;Luis Gabriel Rey;Fernando Uribe;Cristian Borja;Stiven Barreiro;Andrés Andrade;Edwin Cardona;James Rodríguez;Harold Preciado;Juan Otero",
  EC: "Alex Aguinaga;Ángel Mena;Christian Benítez;Walter Ayoví;Enner Valencia;Michael Arroyo;Renato Ibarra;Romario Ibarra;Jefferson Montero;Ítalo Estupiñán;Fidel Martínez;Agustín Delgado;Joao Rojas;Bryan Angulo;Joffre Guerrón;Michael Estrada",
  PY: "Salvador Cabañas;José Saturnino Cardozo;Roque Santa Cruz;Celso Ortiz;Richard Sánchez;Paulo da Silva;Darío Verón;Pablo Aguilar;Bruno Valdez;Juan Escobar;Cecilio Domínguez;Denis Caniza;Osvaldo Martínez;Edgar Benítez;Antony Silva;Juan Iturbe;Carlos González;Jonathan Fabbro",
  BR: "Juninho;Rafael Carioca;Danilinho;Helinho;Claudinho;Ronaldinho;Camilo Sanvezzo;Tiago Volpi;Robert de Pinho;Leandro Augusto;Kléber Boas;José Damasceno;Evanivaldo Castro \u0022Cabinho\u0022;Matheus Doria;Rafael Sóbis;Gustavo Ferrareis",
  PE: "Raúl Ruidíaz;Anderson Santamaría;Pedro Aquino;Yoshimar Yotún;Juan Reynoso;Gerónimo Barbadillo;Santiago Ormeño",
  VE: "Juan Arango;Giancarlo Maldonado;Salomón Rondón",
  ES: "Emilio Butragueño;Sergio Canales;Óliver Torres;Álvaro Fidalgo;Sergio Ramos;Unai Bilbao;Alejandro Arribas;Édgar Méndez",
  FR: "André-Pierre Gignac;Florian Thauvin;Allan Saint-Maximin;Anthony Martial",
  US: "Brandon Vázquez;Joe Corona;Edgar Castillo;Jorge Villafaña;Alejandro Zendejas;Ventura Alvarado;Herculez Gómez;Cade Cowell",
  PT: "Paulinho", GR: "Giorgos Giakoumakis", MA: "Oussama Idrissi", CR: "Joel Campbell;Keylor Navas", PA: "Felipe Baloy;Adalberto Carrasquilla",
  NL: "Javairô Dilrosun;Vincent Janssen", HN: "Milton Núñez", CM: "François Omam-Biyik", ZM: "Kalusha Bwalya", CV: "Djaniny Tavares"
};

// Carácter (1 = temple, 3 = normal, 5 = caliente). Quien no aparece es 3.
// Los calientes meten más intensidad, pero se hacen expulsar más.
window.CULTO_CARACTER_RAW = {
  5: "Cuauhtémoc Blanco;Christian Giménez;Rubens Sambueza;Adolfo Bautista;Javier Aguirre;Carlos Salcedo;Héctor Reynoso;Sergio Ramos;Nery Castillo",
  4: "Carlos Salcido;Rafael Márquez;Duilio Davino;Francisco Javier Rodríguez;Joel Huiqui;Jair Pereira;Darío Verón;Juan Pablo Sorín;Edson Álvarez;Sebastián Abreu;Gerardo Torrado;Nahuel Guzmán;Ignacio Ambriz;Edgar Dueñas;Alfredo Tena;Tomás Boy;Paul Aguilar;César Montes;Gilberto Sepúlveda;Leobardo López;Julio César Domínguez;Jesús Dueñas;Severo Meza;Leandro Cufré;Igor Lichnovsky;Lucas Romero;Pedro Aquino;Guido Pizarro;Celso Ortiz;Juan Escobar;Pablo Aguilar;Bruno Valdez;Carlos Reinoso;Alberto Quintano;Egidio Arévalo Ríos;Matías Kranevitter;Esteban Paredes;Aquivaldo Mosquera;Felipe Baloy;Humberto Suazo;Francisco Fonseca;Diego Reyes;Hugo Nervo;Jesús Orozco;Héctor Moreno",
  2: "Jared Borgetti;Claudio Suárez;Ramón Ramírez;Alex Aguinaga;Pável Pardo;Andrés Guardado;Guillermo Ochoa;Ricardo Peláez;Luis Roberto Alves \u0022Zague\u0022;Evanivaldo Castro \u0022Cabinho\u0022;Alfredo Talavera;Carlos Sánchez;Diego Valdés;Álvaro Fidalgo;Juninho;Ronaldinho;Christian Benítez;Damián Manso;Cristóbal Ortega;Miguel Marín;Ramón Morales;Andrés Chitiva;Salvador Cabañas;Kalusha Bwalya;Raúl Jiménez;Oribe Peralta;Alberto García Aspe;Pablo Larios;Jorge Campos",
  1: "Óscar Pérez;Benjamín Galindo;Emilio Butragueño;Hugo Sánchez"
};
