// web/app/products/category/[slug]/page.tsx
import { notFound, redirect } from 'next/navigation';
import { 
  getCategoryBySlug, 
  getProductsByCategory,
  getMainCategories 
} from '@/data/productsData';
import CategoryTypesGrid from '@/components/products/CategoryTypesGrid';

interface Props {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  // Await the params promise
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const categoryProducts = getProductsByCategory(slug);
  const mainCategories = getMainCategories();
  
  if (!category || categoryProducts.length === 0) {
    notFound();
  }
  
  // If this category only has 1 product, redirect to product detail
  if (categoryProducts.length === 1) {
    redirect(`/products/${categoryProducts[0].slug}`);
  }
  
  return (
    <main className="category-page">
      <CategoryTypesGrid 
        category={category} 
        products={categoryProducts}
        mainCategories={mainCategories}
      />
    </main>
  );
}