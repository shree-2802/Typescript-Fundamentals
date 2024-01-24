# Repo Details

This repo is created in-order to learn about REACT-TYPESCRIPT concepts in detail

## Concepts
  Type creation for
     ->Passing particular string as a prop
     ->ArrayOfObjects
     ->Passing children to a component
     ->Passing JSX as child to a component
     ->Event Passing
     ->Passing CSS Styles
### Type Assertion:
   Here we can tell the typescript that this value is currently null and after the start is will be the same type throughout.
     
     const [user,setUser]=useState<userType>({} as userType) ===> (Here initially the value is null and never become null again)

### Discriminated union:
     In discriminated union we give the type for a function or variable with or.

          example => handleClick: handleClickType1 | handleClickType2