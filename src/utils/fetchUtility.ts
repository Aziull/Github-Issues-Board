export async function fetchWithHandling<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}: ${response.status} ${response.statusText}`);
    }
    const data: T = await response.json();
    return data;
}
