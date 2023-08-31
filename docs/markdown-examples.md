# Przykłady rozszerzeń Markdown 💜

Ta strona demonstruje niektóre z wbudowanych rozszerzeń markdown dostarczanych przez VitePress. 🚀

## Podświetlanie składni

VitePress zapewnia podświetlanie składni obsługiwane przez [Shiki](https://github.com/shikijs/shiki), z dodatkowymi funkcjami, takimi jak podświetlanie linii:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Kontenery 

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
To jest okno informacyjne.
:::

::: tip
To jest wskazówka.
:::

::: warning
To jest ostrzeżenie.
:::

::: danger
To niebezpieczne ostrzeżenie.
:::

::: details
To jest blok szczegółów.
:::

## Zdjęcia

**input**

```
![An image](https://images.pexels.com/photos/106118/pexels-photo-106118.jpeg)
```

**output**

![](https://images.pexels.com/photos/106118/pexels-photo-106118.jpeg)


## Emotikony

**Input**

```
:tada: :100:
```

**Output**

🎉 💯

Szukasz emotem oto [lista wszystkich emotek](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 

## Źródła wiedzy

Zapoznaj się z dokumentacją [pełna lista rozszerzeń markdown](https://vitepress.dev/guide/markdown).
