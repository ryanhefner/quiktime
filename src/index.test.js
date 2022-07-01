import quiktime from './index'

describe('quiktime', () => {
  it('outputs milliseconds - defaults', () => {
    expect(quiktime(963)).toMatch('963 ms')
  })

  it('outputs seconds - default options', () => {
    expect(quiktime(1200)).toMatch('1.2 sec')
  })

  it('outputs minutes - default options', () => {
    expect(quiktime(62345)).toMatch('1.04 min')
  })

  it('outputs hours - default options', () => {
    expect(quiktime(723450)).toMatch('2.01 hr')
  })

  it('outputs days - default options', () => {
    expect(quiktime(86423400)).toMatch('1 days')
  })

  it('outputs months - default options', () => {
    expect(quiktime(2592234000)).toMatch('1 mo')
  })

  it('outputs years - default options', () => {
    expect(quiktime(30758423400)).toMatch('1 yr')
  })
})
