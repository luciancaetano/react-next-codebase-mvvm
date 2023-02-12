# Fast and scalable React Typescript Starter
## Features
- [x] React
- [x] Typescript
- [x] scalable
- [x] codegen

# important package.json scripts
- `dev` starts the development server
- `build` compiles the application
- `lint` runs the linter
- `stylelint` runs the style linter

## Presentation
This project is a collection of all the experience practiced with react and other frameworks like angular, vue, etc.

## Paths and alias
The paths and alias are configured in the `tsconfig.json` file.

| Path |  Alias | Description  |
|---|---|---|
| `src/pages`  | -  | Next.js pages |
| `src/styles`  | `@styles/*`  | Global styles  |
| `src/components/elements`  | `@components/elements/*`  | Generic and simple components like buttons, inputs, etc.  |
| `src/components/partials`  | `@components/partials/*`  | More Complex ui related components  |
| `src/components/layouts`  | `@components/layouts/*`  | Components used to organize the application's layout  |
| `src/hooks`  | `@hooks/*`  | Custom hooks  |
| `src/utils`  | `@utils/*`  | Custom utilities  |
| `src/config`  | `@config/*`  | Configuration files for the application  |

# Codegen
Just run the command for more information
```bash
./codegen -h # for *nix
codegen -h # for windows
```
```sh
Usage: codegen [options] <type> <name>

Create a new component

Arguments:
  type             Type of component to create [element, partial, page, layout]
  name             Name of component to create

Options:
  -d, --dir <dir>  Directory to create component in
  -h, --help       display help for command
```
### Generated [element, partial, layout] Code Structure
Filenames are pascal case, and the folder name is the same as the component name.

```bash
├── src
│   ├── components
│   │   ├── [type]
│   │   │   ├── [name]
│   │   │   │   ├── [name].tsx
│   │   │   │   ├── [name].module.scss
│   │   │   │   ├── [name].types.ts
│   │   │   │   ├── [name].view-model.ts
│   │   │   │   └── index.ts
```
- `[type]` is the type of component, it can be `element`, `partial` or `layout`.
- `[name]` is the name of the component.
- `[name].tsx` is the component file, or component view.
- `[name].module.scss` is the component styles file.
- `[name].types.ts` is the component types file.
- `[name].view-model.ts` is the component view model file.
- `index.ts` is the component index file, the component is exported as default and the component types are exported as named export.

### Page Only
Filenames are kekbab case, and the folder name is the same as the page name.

```bash
├── src
│   ├── pages
│   │   ├── [name]
│   │   │   ├── index.page.tsx
│   │   │   ├── [name].module.scss
│   │   │   ├── [name].types.ts
│   │   │   ├── [name].view-model.ts
│   │   │   └── index.ts
```
- `index.page.tsx` is the name of the component.
- `[name].tsx` is the component file, or component view.
- `[name].module.scss` is the component styles file.
- `[name].types.ts` is the component types file.
- `[name].view-model.ts` is the component view model file.
- No index barrel file is created.
