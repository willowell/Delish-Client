import React from 'react'

// ? From https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
/**
 * Creates and manages a string value, returning handles to the value along with methods
 * for resetting and binding it.
 * @param initialValue The initial value of the variable
 */
export const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: any) => { setValue(event.target.value) }
    }
  }
}

// ? From https://www.robinwieruch.de/local-storage-react
/**
 * Creates and tracks an item in local storage, returning a handle for the item and a setter.
 * @param localStorageKey key for the item in local storage
 */
export const useStateWithLocalStorage = (localStorageKey: string) => {
  const [value, setValue] = React.useState(
    // If the item already exists in local storage, use that
    // Otherwise, use the empty string.
    localStorage.getItem(localStorageKey) ?? ''
  )

  // Whenever value changes, update the corresponding value in local storage.
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value)
  }, [value, localStorageKey])

  return [value, setValue] as const
}
