import quicktime from './index'

describe('quicktime', () => {
  it('outputs milliseconds - defaults', () => {
    expect(quicktime(963)).toMatch('963 ms')
  })

  it('outputs seconds - default options', () => {
    expect(quicktime(1200)).toMatch('1.2 sec')
  })

  it('outputs minutes - default options', () => {
    expect(quicktime(62345)).toMatch('1.04 min')
  })

  it('outputs hours - default options', () => {
    expect(quicktime(723450)).toMatch('2.01 hr')
  })

  it('outputs days - default options', () => {
    expect(quicktime(86423400)).toMatch('1 days')
  })

  it('outputs months - default options', () => {
    expect(quicktime(2592234000)).toMatch('1 mo')
  })

  it('outputs years - default options', () => {
    expect(quicktime(30758423400)).toMatch('1 yr')
  })
})
