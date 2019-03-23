# Custom Filter Hook Example

### Run

`yarn start`

### Lint

`yarn lint`
(also runs on commit)

### Build

`yarn build`

## What this is

This project is intended to demo how we can use a custom hook and several components to almost completely decouple the state management logic from a list rendering component into smaller, re-usable pieces.

- The custom hook (called `useFilterState`) manages the ways by which we should filter the items in a list, without knowing anything about the list it's filtering.

- The `SearchBar` component handles everything about searching through the list, without needing any access to the list itself.

- The `StartsWithFilter` component is similar; it has the logic for filtering the list by the first letter of each item, without having access to the list.

The only piece that knows about the list array and the items it contains is the `List` component itself; the other pieces independently take care of the logic, and are entirely re-usable elsewhere.

### The Hook

The `useFilterState` custom hook keeps track of filter functions, associating them with a name. The state it holds may look something like this:

```js
{
  name: (str) => str.includes(/* some bound value */),
  startsWithLetter: (str) => str[0] === /* some bound value */,

  /* etc */
}
```

Each of these functions accepts a single string and returns true/false. If we call `.filter` on a list of strings and pass one of these functions, it'll filter the list.

The `useFilterState` hook's return value is an object containing two functions: `addOrUpdateFilter`, and `applyFilters`.

- Calling `addOrUpdateFilter` and passing a name and filter function will update the hook's state to include your filter function.

- Calling `applyFilters` and passing a list will return a new list that has been filtered by all the filter functions in the hook's state.

The components `SearchBar` and `StartsWithFilter` both accept an `addOrUpdateFilter` function, and do all their logic with that. Neither of them ever have to understand anything about the list they'll be filtering, or any of the other filtering logic components.
