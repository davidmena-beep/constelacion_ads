# Constelación ADS · Evaluaciones de Talento Humano (v1.2.0)

Frontend estático (Vite) para GitHub + Bolt. El backend y la base de datos viven en Google Apps Script + Google Sheets (`apps-script/`).

## 1. Backend y base de datos (Google)
1. Crea una Hoja de cálculo nueva: **BD · Evaluaciones Talento Humano**.
2. **Extensiones → Apps Script**. En *Configuración del proyecto* activa "Mostrar archivo appsscript.json".
3. Crea un archivo por cada uno de `apps-script/` (Code, Api, Motor, Db, Esquema, Setup, Seed `.gs`) y reemplaza `appsscript.json`. No existe Index.html en este modo.
4. Ejecuta la función `instalar` (autoriza los permisos). Crea las 14 pestañas, siembra 6 tests + 7 matrices y muestra en *Registro de ejecución* el usuario `admin` y su **clave temporal**.
5. **Implementar → Nueva implementación → Aplicación web**: Ejecutar como **Yo** · Acceso **Cualquier persona**. Copia la URL que termina en `/exec`.
6. Verifica: abrir esa URL en el navegador debe mostrar `{"ok":true,"servicio":"Evaluaciones Talento Humano · API",...}`.
7. Al cambiar código en Apps Script: *Implementar → Administrar implementaciones → Editar → Versión nueva* (la URL no cambia).

## 2. Conectar el frontend
Edita `public/config.js` y pega la URL `/exec`:
```js
window.ADS_API_URL = 'https://script.google.com/macros/s/XXXXXXXX/exec';
```

## 3. GitHub
```bash
git init && git add . && git commit -m "ADS Evaluaciones v1.2.0"
git branch -M main
git remote add origin https://github.com/<usuario>/<repositorio>.git
git push -u origin main
```

## 4. Bolt
1. En bolt.new elige **Import from GitHub** (o abre `https://bolt.new/~/github.com/<usuario>/<repositorio>`).
2. Bolt instala y ejecuta (`npm install`, `npm run dev`). Comprueba el inicio de sesión.
3. **Publish** (Netlify). Build: `npm run build` · salida: `dist`.

## 5. Primer uso
Ingresa con `admin` + clave temporal → el sistema exige cambiarla → carga Catálogos (Sucursales/Áreas) → Usuarios → publica evaluaciones.
