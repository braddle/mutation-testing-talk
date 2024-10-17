import {defineConfig} from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        exclude: [
            "**/node_modules/**",
            "**/.{idea,git,cache,output,temp}/**"
        ],
        typecheck: {enabled: true},
        include: ["**/*.{test,spec,integration}.?(c|m)[jt]s?(x)"]
    }
})