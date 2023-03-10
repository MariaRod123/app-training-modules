# Ejercicio creación de módulos en Nest

1- Crear el proyecto usando --strict desde la consola escribo: nest new --strict [nombre-proyecto]

2- Una vez creado el proyecto, entro en la carpeta del mismo y desde la consola creo cada módulo con el comando: nest generate [nombre-modulo]. Hago esto para cada uno de los módulos que necesite crear.


![2023-02-20_20h59_34](https://user-images.githubusercontent.com/72228855/220507033-6b064c88-2248-4515-8c1f-f7b78981fc1f.png)



3- Luego que se crean los módulos tengo que crear para cada uno una carpeta llamada controller utilizo el comando: mkdir controller.

![2023-02-18_19h05_12](https://user-images.githubusercontent.com/72228855/220507345-0e0f059e-7e33-4d00-bc22-dd0c0e31a69b.png)


4- Luego me posiciono en la carpeta controller y empiezo a crear el controlador correspondiente al módulo con el comando: nest generate controller [nombre-controlador]. Realizo lo mismo para cada módulo dentro de su carpeta controller correspondiente.

5- Para crear los servicios creo una carpeta llamada service en cada uno de los módulos y luego por consola escribo: nest generate service [nombre-servicio]

6- Los servicios creados en el punto anterior, deben de ser inyectados en los controladores de sus respectivos módulos. Deben de ser usados cumpliendo las siguientes direcciones:
   - Users (GET users/message) : debe de traer como resultado el siguiente mensaje: Hola desde el servicio Users
   
   Resultado:
   
   ![2023-02-21_23h27_37](https://user-images.githubusercontent.com/72228855/220506145-57f60e7a-0b97-4d75-9944-2d4be899bfa0.png)

   
   
   - Tasks (GET task/message): debe de traer como resultado el siguiente mensaje: Hola desde el servicio Tasks
   
   Resultado:
   
   ![2023-02-21_23h29_11](https://user-images.githubusercontent.com/72228855/220506203-08a5fdff-52e2-40cc-a5d3-3d0a77ed7c27.png)

   
   
   - Contacts (GET contacts/message): debe de traer como resultado el siguiente mensaje: Hola desde el servicio Contacts
   
   Resultado:
   
   ![2023-02-21_23h30_17](https://user-images.githubusercontent.com/72228855/220506377-8ed28c5d-bc3c-4183-9b81-8a0048b7d7e3.png)



