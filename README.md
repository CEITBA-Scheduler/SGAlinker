# SGAlinker

Este modulo se encarga de administrar la mayoría de los servicios de infraestructura de la aplicación. Si bien el nombre quedo SGAlinker, su funcionalidad es más ancha. Responsabilidad del sga linker es

- Administrar login de usuarios
- Administrar todas las queries desde sga de ITBA
- Administrar información de los usuarios con bases de datos de firebase

La idea es que el modulo funcione como un unico servicio con funciones para poder modificar la información. Por el momento las que estan implementadas y en funcionamiento son 
- getAllSubjects() :  Observable<{ [id: string] : Subject; } //Obtiene todas las materias de la base de datos en forma de diccionario
- getAllSubjectsAsList() : Observable<Subject[]> //Obtiene todas las materias de la base de datos en forma de lista
- getCommissions(subject : Subject) : Commission[] //Obtiene todas las comisiones de una materia especifica
- getDataFromApi() // se encarga de pedir la información de la API

Las distintas funcionalidades serán documentadas a medida que son agregadas.

## Login tutorial
<https://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial>
