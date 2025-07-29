import { menuItem } from "../../../../data/menu";
import { notFound } from "next/navigation";
import MenuCategoryClient from "./MenuCategoryClient";
import { slugToCategory } from "../utils";

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
