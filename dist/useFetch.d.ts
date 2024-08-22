declare function useFetch<T>(url: string): {
    data: T | null;
    loading: boolean;
    error: Error | null;
};
export default useFetch;
