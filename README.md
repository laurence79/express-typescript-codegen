# Express Typescript Code Generator

Generate typed request handlers from an OpenApi spec.

```sh
$ express-typescript-codegen generate -h

Usage: express-typescript-codegen generate [options] <spec-filename-or-url>

Generates typescript code from the spec.

Options:
  --template <template>                         the type to output. client, express, express-di or types. Default "client". "server" is an alias for express-di.
  --filename <filename>                         the file to output. Defaults to <service-name><output-type>.generated.ts
  --service-name <name>                         the name of the service. Defaults to info.title from the open api document
  --not-required-type <nullable|optional|both>  what type fields should be if they are not in the required list. Defaults to undefined (default: "optional")
  --readonly-dtos                               specifies that fields in DTOs, and array types therein should be prefixed with `readonly`. Defaults to false (default: false)
  --empty-type <unknown|never|{}>               what type should be generated for objects with no properties. Defaults to unknown for all templates expect msw-handlers where the default is never (default: "")
  -h, --help                                    display help for command
```