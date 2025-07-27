import { menuItem } from "../../../../data/menu";
import { menuCategories } from "../../../../data/menuCategories";
import { notFound } from "next/navigation";
import MenuCategoryClient from "./MenuCategoryClient";

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

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function MenuCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  
  // Convert slug back to category name using the helper function
  const category = slugToCategory(categorySlug);

  // Get all items for this category
  const categoryItems = menuItem.filter((item) => item.category === category);

  // If category doesn't exist, show 404
  if (categoryItems.length === 0) {
    notFound();
  }

  // Split items: first 3 as cards, rest as list
  const featuredItems = categoryItems.slice(0, 3);

  return (
    <MenuCategoryClient 
      category={category}
      categoryItems={categoryItems}
      featuredItems={featuredItems}
    />
  );
}
