# Blog 1: What are some differences between interfaces and types in TypeScript?

The main difference between interface and type is we can use interface just for declare type for reference type.But using type we can delcare for reference and primitive type;


```typescript
reference
type User =  {
  name: string;
  age: number;
}


primitive
type Name = string;


reference
interface User {
  name: string;
  age: number;
}
```
if we want to merge two type or interface we have use extends keyword for ifterface . In type we have to use &.


```typescript
type Person = { name: string };
type Employee = Person & { id: number };

interface Person {
  name: string;
}
interface Employee extends Person {
  id: number;
}

```
# Blog 2: Explain the difference between any, unknown, and never types in TypeScript.

any:if we use any type there is no type checking. meaning we use any type and we can change the value.
```typescript
let value: any = 5;
value = "hello"; 

```
unknown:we can assign any value in type unknown, but we can't use it directly without checking type.

```typescript
let value: unknown = 5;
if (typeof value === "number") {
  value.toFixed();  
}
```

never: The never type represents values or functions that never return or never complete, like functions that throw errors or run infinite loop.
```typescript
typescript
function throwError(message: string): never {
  throw new Error(message);
}
```