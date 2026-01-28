# Mi Proyecto Básico

# Proyecto con Configuración Git Específica

Este proyecto está configurado con credenciales Git específicas, sin usar configuración global.

## Configuración Actual
- **Usuario Git**: NombreEspecifico
- **Email Git**: email-especifico@ejemplo.com
- **Ámbito**: Solo este repositorio

## Ramas
- `main`: Rama de producción
- `dev`: Rama de desarrollo

## Workflows
- CI/CD con GitHub Actions

## 🚀 Flujo de Trabajo CI/CD

### Ramas
- **main**: Rama de producción (despliegue automático)
- **dev**: Rama de desarrollo (pruebas automáticas)

### GitHub Actions Workflows

1. **CI - Verificación de Código** (.github/workflows/ci.yml)
   - Se ejecuta en cada push a `main` o `dev`
   - Verifica estructura del proyecto
   - Valida commits

2. **Deploy - Solo para Main** (.github/workflows/deploy.yml)
   - Se ejecuta solo en push a `main`
   - Simula despliegue a producción

3. **Dev Testing** (.github/workflows/dev-test.yml)
   - Se ejecuta en cada push a `dev`
   - Entorno de pruebas
   - Validaciones básicas

## 📊 Estado de los Workflows

[![CI - Verificación de Código](https://github.com/davekinf/proyecto-git-hub-actions/actions/workflows/ci.yml/badge.svg)](https://github.com/davekinf/proyecto-git-hub-actions/actions/workflows/ci.yml)

## 🔄 Flujo de Trabajo Recomendado

1. Trabajar en rama `dev`
2. Hacer push a `dev` → se ejecutan pruebas
3. Crear Pull Request de `dev` a `main`
4. Revisar y mergear → se ejecuta despliegue
