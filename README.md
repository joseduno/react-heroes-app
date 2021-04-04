# Aplicacion donde se muestra:

- Uso de reducers
- Implementación de contextos (useContext), util para compartir información entre componentes hermanos. Ver los archivos AuthContext.js, HeroesApp.js, LoginScreen.js, Navbar.js
- Como renderizar componentes pasando parametros por la url. Ver DashboardRoutes.js, HeroCard.js, HeroScreen.js
- Trabajar con query params para condicionar o especificar que componentes renderizar, además de hacer que la insteraccion del usuario modifique los query params (por ejemplo los cambios en una caja de texto) con el history.push(). Ver SearchScreen.js
- Recordar ultimo path visitado despues de expirar/cerrar sesión, esto mejora la experiencia de usuario, ya que al iniciar sesión nuevamente, se renderiza la ultima pantalla visitada. Ver LoginScreen.js, PrivateRoute.js
- Implementación de rutas, tanto privadas como publicas. Ver todos los archivos de la carpeta 'routes'
- Testing de los componentes de react utilizados para gestionar las rutas
- Como emular el llamado a funciones en entornos de prueba usando jest.fn()
- Como y cuando utilizar MemoryRouter y Route en entornos de pruebas, de rutas o componentes que utilizar la url para renderizarse. Ver SearchScreen.test.js
- Como emular el llamado a renderizar un componente que depende de la url y de sus query params. Ver SearchScreen.test.js
- Como emular la implementación de contextos en entornos de prueba. Ver LoginScreen.test.js
- 

### Notas adicionales:

- La aplicación implementa un sistema de autenticación irreal, util solamente por razones educativas, especialmente para mostrar como guardar y obtener información del localStorage de los navegadores
- Se utilizó React 16, ya que en React 17, la funcion 'mount' de librería utilizada para implementar los tests (enzyme) no funciona.