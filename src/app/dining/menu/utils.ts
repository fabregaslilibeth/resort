import { menuCategories } from "../../../data/menuCategories";

// Helper function to convert category name to URL slug
export function categoryToSlug(categoryName: string): string {
  return categoryName
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}

// Helper function to convert URL slug back to category name
export function slugToCategory(slug: string): string {
  // Try to find a category that matches the slug
  const matchingCategory = menuCategories.find((cat) => {
    const categorySlug = categoryToSlug(cat.name);
    return categorySlug === slug;
  });

  if (matchingCategory) {
    return matchingCategory.name;
  }

  // Fallback for other categories
  return slug
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\b(And|With|From|The)\b/g, (match: string) =>
      match.toUpperCase()
    );
} 