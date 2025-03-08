import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    testPathIgnorePatterns: ['<rootDir>/e2e'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/__mocks__/svgrMock.tsx',
    },
}

export default createJestConfig(config)
