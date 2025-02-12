import { expect, test } from 'vitest'
import { getSeason } from './seasons.ts'

test('getSeason retourne la saison 2024/2025 si la date est entre septembre et décembre 2024', () => {
    const date = new Date('2024-11-10')
    expect(getSeason(date)).toBe('2024-2025')
})

test('getSeason retourne la saison 2024/2025 si la date est entre janvier et juillet 2025', () => {
    const date = new Date('2025-01-10')
    expect(getSeason(date)).toBe('2024-2025')
})


test('getSeason retourne la saison 2025/2026 si la date est entre Août et Décembre 2025', () => {
    const date = new Date('2025-09-10')
    expect(getSeason(date)).toBe('2025-2026')
})