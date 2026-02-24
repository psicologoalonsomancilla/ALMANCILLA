# Guía de Despliegue - Psicólogo Alonso Mancilla

## 🚀 Opción recomendada: GitHub + Vercel (Gratuito)

### Paso 1: Crear cuenta en GitHub
1. Ve a https://github.com
2. Crea una cuenta gratuita
3. Verifica tu email

### Paso 2: Crear repositorio
1. En GitHub, haz clic en "New repository"
2. Nombre: `psicologo-alonso-mancilla` (o el que prefieras)
3. Deja en "Público" (necesario para Vercel gratuito)
4. NO marques "Add a README"
5. Clic en "Create repository"

### Paso 3: Subir el código

#### Opción A: Por web (más fácil)
1. Descarga esta carpeta como ZIP
2. Extrae el contenido
3. En GitHub, dentro de tu repositorio, haz clic en "Add file" → "Upload files"
4. Arrastra todos los archivos (excepto node_modules y dist)
5. Clic en "Commit changes"

#### Opción B: Por terminal (si sabes usar git)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/psicologo-alonso-mancilla.git
git push -u origin main
```

### Paso 4: Crear cuenta en Vercel
1. Ve a https://vercel.com
2. Clic en "Sign Up"
3. Elige "Continue with GitHub"
4. Autoriza la conexión

### Paso 5: Importar proyecto
1. En Vercel, clic en "Add New Project"
2. Selecciona tu repositorio `psicologo-alonso-mancilla`
3. Clic en "Import"
4. En "Framework Preset" selecciona "Vite"
5. Clic en "Deploy"

### Paso 6: ¡Listo!
- Tu web estará en: `https://psicologo-alonso-mancilla.vercel.app`
- Cada vez que hagas cambios en GitHub, se actualiza automáticamente

---

## 🌐 Conectar tu dominio propio (.cl)

Cuando compres tu dominio (ej: alonsomancilla.cl):

### En Vercel:
1. Ve a tu proyecto
2. Clic en "Settings" → "Domains"
3. Escribe tu dominio y clic "Add"
4. Sigue las instrucciones para configurar DNS

### En Nic.cl (donde compres el dominio):
1. Ve a la configuración DNS de tu dominio
2. Agrega un registro CNAME:
   - Nombre: `www` (o `@` para raíz)
   - Valor: `cname.vercel-dns.com`
3. Guarda cambios

En 24-48 horas tu dominio estará funcionando con HTTPS gratuito.

---

## 📁 Archivos importantes del proyecto

```
├── index.html          # Página principal
├── src/
│   ├── App.tsx         # Componente principal
│   └── ...
├── public/
│   └── images/         # Fotos del box y perfil
├── package.json        # Dependencias
├── vite.config.ts      # Configuración Vite
└── vercel.json         # Configuración Vercel
```

---

## 🔄 Actualizar la web

Cuando quieras hacer cambios:
1. Edita los archivos
2. Sube los cambios a GitHub
3. Vercel se actualiza automáticamente (toma 1-2 minutos)

---

## 💰 Costos

| Servicio | Costo |
|----------|-------|
| GitHub | Gratis |
| Vercel | Gratis (hobby plan) |
| Dominio .cl | ~$10.000 CLP/año |
| **Total inicial** | **$0** |
| **Con dominio** | **~$10.000/año** |

---

## ❓ ¿Problemas?

Si algo no funciona, revisa:
1. ¿Subiste la carpeta `public/images` con las fotos?
2. ¿El archivo `vercel.json` está en la raíz?
3. ¿Seleccionaste "Vite" como framework en Vercel?

---

**¿Necesitas ayuda con algún paso?** Escríbeme y te guío.
