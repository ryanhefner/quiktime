# ⏱ quicktime

Quickly format duration time values in a condensed format.

## Install

Via [npm](https://npmjs.com/package/quicktime)

```sh
npm install quicktime
```

Via [Yarn](https://yarn.pm/quicktime)

```sh
yarn add quicktime
```

## How to use

**Without Options**
```
import quicktime from 'quicktime'

console.debug(quicktime(1200))

===

Output: 1.2 ms

```

**With Options**
```
import quicktime from 'quicktime`

console.debug(quicktime(1234, { maximumFractionDigits: 3 }))

===

Ourput: 1.234 ms
```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
