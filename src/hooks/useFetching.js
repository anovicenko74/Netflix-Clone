import { useState } from "react"

export default function useFetching(callback) {
    console.log('use fetching start')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const fetching = async (...args) => {
        try {
            setError('')
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}