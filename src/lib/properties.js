import { supabase } from "./supabase.js";

export async function getAllProperties() {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error obteniendo propiedades:", error.message);
    return [];
  }
  return data ?? [];
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

export function getFiltersFrom(properties) {
  const communes = [
    ...new Set(properties.map((p) => p.commune).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b, "es"));
  const types = [
    ...new Set(properties.map((p) => p.property_type).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b, "es"));
  return { communes, types };
}
