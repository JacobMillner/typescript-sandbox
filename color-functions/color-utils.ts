export const rgbToHex = (r: number, g: number, b: number): string => {
    return [r, g, b]
        .map((decCh) => Math.max(0, Math.min(255, decCh)).toString(16))
        .map((hexCh) => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
        .join();
}

export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    // if we get a short ver of a hex string, split it out, double it, and call this function again
    if (hex.length === 3) {
        let hr = hex[0]
        let hg = hex[1]
        let hb = hex[2]
        return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`)
    }

    let [r, g, b] = [0, 2, 4]
        .map((offset) => hex.substring(offset, offset + 2)) // ['ff', '00', '00']
        .map((hexCh) => parseInt(hexCh, 16)) // [255, 0, 0]

    return { r, g, b }
}
