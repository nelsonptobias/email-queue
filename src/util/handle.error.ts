export const handlePromiseException = <T, U = Error>(promise: Promise<T>): Promise<[U | null, T | undefined]> => {
    return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>((error: U) => Promise.resolve([error, undefined]))
}
