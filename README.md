# Bulma Theme ISPRA
## Tema Bulma personalizzato per ISPRA

[![npm](https://img.shields.io/npm/v/@isprambiente/bulma-theme-ispra.svg)](https://www.npmjs.com/package/@isprambiente/bulma-theme-ispra)

## Caratteristiche
- Basato su **Bulma**, con personalizzazioni per ISPRA
- Compatibile con **SASS, SCSS e CSS**
- Facile da installare tramite **NPM, Yarn o Bun**
- Disponibile via **CDN** per un'implementazione immediata

## Contributi e Supporto
Hai idee per migliorare il tema? Apri una **issue** o contribuisci su [GitHub](https://github.com/isprambiente/bulma-theme-ispra).
Per domande e supporto, puoi contattarci via email o consultare la documentazione ufficiale.

## Compatibilità
- Compatibile con **Bulma v1.x**
- Testato su **moderni browser** (Chrome, Firefox, Edge, Safari)

## Installazione rapida
Il tema Bulma per ISPRA può essere installato usando uno dei seguenti package manager:

### NPM

```sh
npm install @isprambiente/bulma-theme-ispra
```

**oppure**

### Yarn

```sh
yarn add @isprambiente/bulma-theme-ispra
```

**oppure**

### Bun

```sh
bun add @isprambiente/bulma-theme-ispra
```

### Import

#### **SASS**

```sh
@import '@isprambiente/bulma-theme-ispra';
```

#### **SCSS**
```sh
@forward '@isprambiente/bulma-theme-ispra';
```

#### **CSS**
Importazione da file locale

```sh
@import '@isprambiente/bulma-theme-ispra/dist/bulma-theme-ispra.css'
@import '@isprambiente/bulma-theme-ispra/dist/bulma-theme-ispra.min.css'
```
Oppure, per caricarlo tramite CDN direttamente in HTML:

```sh
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@isprambiente/bulma-theme-ispra/dist/bulma-theme-ispra.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@isprambiente/bulma-theme-ispra/dist/bulma-theme-ispra.min.css">
```


## Esempio di utilizzo
Ecco come applicare il tema ISPRA in una pagina HTML con Bulma:

```sh
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulma Theme ISPRA Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@isprambiente/bulma-theme-ispra/dist/bulma-theme-ispra.min.css">
</head>
<body>
    <section class="hero is-primary">
        <div class="hero-body">
            <h1 class="title">Benvenuti nel tema Bulma ISPRA</h1>
            <p class="subtitle">Un esempio di implementazione rapida</p>
        </div>
    </section>
    <div class="container">
        <button class="button is-success">Cliccami</button>
    </div>
</body>
</html>
```