# CaloríasApp (React Native)

Esta aplicación fue desarrollada como parte de un encargo para una empresa externa. La app tiene como objetivo ayudar al usuario a visualizar y controlar su progreso calórico diario y semanal, en base a sus objetivos personales de peso y estilo de vida.  

> ⚠️ Este proyecto se encuentra **en desarrollo** y no representa una versión final o publicada.

---

## 📱 Funcionalidades principales

- **Selector de objetivos**: El usuario puede elegir entre mantener, subir o bajar de peso, además de definir edad y género.
- **Bottom Tab Navigator + Stack Navigator**: Navegación fluida entre pantallas principales y secciones internas.
- **Perfil de usuario**:  
  - Avatar editable.  
  - Nombre y @usuario tipo Instagram.
- **Gráfico semanal**:  
  - Uso de `react-native-gifted-charts` para mostrar el progreso de calorías por día (Lunes a Domingo).
- **Progreso de nutrientes**:  
  - Uso de `react-native-paper` para mostrar barras de progreso de carbohidratos, grasas, proteínas, etc.
- **Calendario interactivo**:  
  - Integración con `react-native-calendar-strip` para seleccionar fechas fácilmente y revisar registros anteriores o futuros.

---

## 🧰 Tecnologías y librerías utilizadas

- **React Native** (CLI)
- **TypeScript**
- **react-navigation** (Bottom Tabs + Stack)
- **react-native-paper**
- **react-native-calendar-strip**
- **react-native-gifted-charts**

---

## 🛠️ En desarrollo / Pendiente

- Integración con backend o base de datos.
- Lógica de almacenamiento persistente o sincronización.
- Registro/calculo automático de calorías y alimentos.
- Interfaz más robusta de edición de usuario.
- Control por fecha a largo plazo.

---

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/tuusuario/nombre-del-repo.git
   ```
2. Instala las dependencias:  
   ```bash
   npm install
   ```
3. Ejecuta en Android:  
   ```bash
   npx react-native run-android
   ```
4. Ejecuta en iOS:  
   ```bash
   npx react-native run-ios
   ```

---

## 📸 Capturas (opcional)

<img src="src/assets/screenshots/Screenshot_20250610_211551_fitApp.png" alt="Pantalla principal" width="300" />

---

## 📌 Nota final

Este proyecto fue realizado con fines prácticos y de colaboración con una empresa externa. Algunas funcionalidades específicas fueron desarrolladas a pedido del cliente.  
El proyecto sigue en evolución y puede ser extendido en futuras versiones.
