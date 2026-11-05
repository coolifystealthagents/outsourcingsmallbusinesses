const library = [7289719,7857510,6169033];
export function journalThumbnail(asset: unknown): string { const key=typeof asset === "string" ? asset : ""; let h=0; for(const c of key) h=(Math.imul(h,31)+c.charCodeAt(0))>>>0;return "/design-photography/"+library[h%library.length]+".webp"; }
