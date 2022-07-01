# ⏱ quiktime

Quickly format duration time values in a condensed format.

## Install

Via [npm](https://npmjs.com/package/quiktime)

```sh
npm install quiktime
```

Via [Yarn](https://yarn.pm/quiktime)

```sh
yarn add quiktime
```

## How to use

**Without Options**
```
import quiktime from 'quiktime'

console.debug(quiktime(1200))

===

Output: 1.2 ms

```

**With Options**
```
import quiktime from 'quiktime`

console.debug(quiktime(1234, { maximumFractionDigits: 3 }))

===

Ourput: 1.234 ms
```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
