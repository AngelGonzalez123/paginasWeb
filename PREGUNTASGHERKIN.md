# PREGUNTAS GUERKIN

*1.	Como se llama el lenguaje que define la estructura y sintaxis básica para la descripción de pruebas que pueden ser entendidas tanto por clientes como por técnicos.
    	*R// GUERKIN
     
*2.	Cuál es la función de Guerkin? 
R// Generar pruebas para documentación viva que describe perfectamente como se comporta el sistema enriquecido y manteniendo la documentación.

*3.	El formato de Guerkin fue introducido por la herramienta?
R// Cudumber

*4.	Para que nos sirve la pirámide de pruebas automatizadas?
R// Tambien conocida como la pirámide de tests.
En la parte inferior de la pirámide se ubican los test unitarios los cuales representan la parte más extensa de la pirámide de automatización. Los test unitarios brindan feedback muy específico y rápido.
En el otro extremo de la pirámide se encuentran los test de usuario que testean la aplicación punta-a-punta a través de la interface de usuario. Generalmente querremos tener pocos de estos test debido a su fragilidad y alto costo de mantenimiento.

*5.	Que es el elemento Feature (Caracterisica)
R// Es el  que proporciona el encabezado o el marco para el archivo Feature. Tiene un titulo y un texto con una descripción de alto nivel de la función de la aplicación que se detalla en el archivo.

*6.	Con que otro nombre se conoce el Feature?
R// Caracteristica

*7.	Que contiene el elemento Feature?
R// Contiene un listado de Scenarios que componen el feature, los cuales pueden agrupar por tags.

*8.	Que es un Escenario?
R// Un escenario es una lista de pasos a seguir que se darán según el contexto del Guerkin.

*9.	Cuáles son las palabras claves utilizadas en el escenario?
R//	 Given = Dado que
 	When= Cuando
	Then= Entonces

*10.	Que es el Background (Antecedentes)
R// Utilizamos el background para definir precondiciones para cada uno de los escenarios a correr y así no ser repetitivos y focalizar los escenarios en la prueba específica. 

*11.	Que es el Escenario Outline (Esquema del escenario)?
R// Es el que nos permite introducir variables en nuestros escenarios y asi simplificar pruebas que requieren los mismos pasos pero que pueden tener datos variados.

