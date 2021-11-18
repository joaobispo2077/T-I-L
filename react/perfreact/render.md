# React Render

## Algorithm

<https://pt-br.reactjs.org/docs/reconciliation.html>

## Higher to Children

```tsx
<Component>
  <Chidlren />
</Component>
```

Sempre que o componente for maior for renderizado, todos os filhos serão renderizados novamente.

## Prop render

```tsx
<Component>
  <Chidlren food={"cake"} />
</Component>
```

Sempre que o componente for maior mudar as proriedades que são passadas para os filhos, todos os filhos serão renderizados novamente.

## Hooks (useState, useContext, useReducer)

```tsx
function Component() {
  const [food, setFood] = useState("cake");

  return (
    <>
      <button onClick={() => setFood("cake")}>Cake</button>
      <button onClick={() => setFood("ice cream")}>Ice Cream</button>
      <button onClick={() => setFood("pizza")}>Pizza</button>
      <Child food={food} />
    </>
  );
}
```

Sempre que o valor em algum desses hooks mudar, afetará os componentes que utilizam esses hooks.

## Render flow

1. Gerar uma nova versão do componente que precisa ser renderizado.
2. Comparar a versão anterior com a nova versão.
3. Se a versão for diferente, renderizar a nova versão.
