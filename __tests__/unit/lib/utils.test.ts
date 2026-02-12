import { cn } from '@/lib/utils'

describe('cn', () => {
  test('단일 클래스명 문자열을 반환한다', () => {
    expect(cn('text-red-500')).toBe('text-red-500')
  })

  test('여러 클래스명을 공백으로 병합한다', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500')
  })

  test('조건부 클래스명을 처리한다', () => {
    expect(cn('base', true && 'true-class', false && 'false-class')).toBe('base true-class')
  })

  test('falsy 값을 필터링한다', () => {
    expect(cn('base', null, undefined, false, 0, '')).toBe('base')
  })

  test('Tailwind CSS 충돌 클래스를 해결한다', () => {
    // twMerge가 마지막 값을 우선시
    expect(cn('p-4', 'p-8')).toBe('p-8')
    expect(cn('text-sm', 'text-lg')).toBe('text-lg')
  })

  test('배열 형태의 클래스명을 처리한다', () => {
    expect(cn(['text-red-500', 'bg-blue-500'])).toBe('text-red-500 bg-blue-500')
  })

  test('객체 형태의 조건부 클래스를 처리한다', () => {
    expect(cn({ 'text-red-500': true, 'bg-blue-500': false })).toBe('text-red-500')
  })

  test('빈 문자열 입력 시 빈 문자열을 반환한다', () => {
    expect(cn('')).toBe('')
  })

  test('인자 없이 호출 시 빈 문자열을 반환한다', () => {
    expect(cn()).toBe('')
  })
})
