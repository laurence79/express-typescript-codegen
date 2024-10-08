# Express Typescript Code Generator

Generate typed request handlers from an OpenApi spec.

```sh
$ express-typescript-codegen generate -h

Usage: cli generate [options] <spec-filename-or-url>

Generates typescript code from the spec.

Options:
  --template <template>                         the type to output. client, server or types. Default client
  --filename <filename>                         the file to output. Defaults to <service-name><output-type>.generated.ts
  --service-name <name>                         the name of the service. Defaults to info.title from the open api document
  --not-required-type <nullable|optional|both>  what type fields should be if they are not in the required list. Defaults to undefined (default: "optional")
  --readonly-dtos                               specifies that fields in DTOs, and array types therein should be prefixed with `readonly`. Defaults to false (default: "optional")
  -h, --help                                    display help for command
```