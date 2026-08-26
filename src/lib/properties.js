import { supabase } from "./supabase.js";

export async function getAllProperties() {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    console.error("Error obteniendo propiedades:", error.message);
    return [];
  }
  return data;
}

export async function getPropertyBySlug(slug) {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return null;
  return data;
}

export const communes = ["Chillán", "Chillán Viejo", "San Carlos", "Bulnes"];
export const types = ["Casa", "Departamento", "Condominio", "Terreno"];
