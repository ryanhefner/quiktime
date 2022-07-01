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

Output: 1.234 ms
```

### Options

`minimumIntegerDigits: number` - The minimum number of integer digits to use. Possible values are from `1` to `21`; the default is `1`.
`minimumFractionDigits: number` - The minimum number of fraction digits to use. Possible values are from `0` to `20`; the default is `0`.
`maximumFractionDigits: number` - The maximum number of fraction digits to use. Possible values are from `0` to `20`; the default is `2`

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
