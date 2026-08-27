import { supabase } from "./supabase.js";

const BUCKET = "property-images";

/** Sube un archivo a una carpeta (normalmente el slug de la propiedad) y devuelve su URL pública. */
export async function uploadPropertyImage(file, folder) {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return { url: data.publicUrl, path };
}

/** Sube varios archivos en paralelo. */
export async function uploadPropertyImages(files, folder) {
  return Promise.all(
    Array.from(files).map((f) => uploadPropertyImage(f, folder)),
  );
}

/** Extrae el path interno del bucket a partir de una URL pública. */
export function getPathFromUrl(url) {
  const marker = `/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);
  if (idx === -1) return null;
  return decodeURIComponent(url.slice(idx + marker.length));
}

/** Elimina una imagen individual dado su URL pública. */
export async function deletePropertyImage(url) {
  const path = getPathFromUrl(url);
  if (!path) return;
  await supabase.storage.from(BUCKET).remove([path]);
}

/** Elimina todas las imágenes de una propiedad (carpeta completa) al borrarla. */
export async function deletePropertyFolder(folder) {
  const { data, error } = await supabase.storage.from(BUCKET).list(folder);
  if (error || !data || data.length === 0) return;
  const paths = data.map((f) => `${folder}/${f.name}`);
  await supabase.storage.from(BUCKET).remove(paths);
}
