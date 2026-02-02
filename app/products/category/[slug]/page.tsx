// web/app/products/category/[slug]/page.tsx
import { notFound, redirect } from 'next/navigation';
import { 
  getCategoryBySlug, 
  getProductsByCategory,
  getMainCategories,
  getSubcategories
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
  const subcategories = getSubcategories(slug);
  const mainCategories = getMainCategories();
  
  if (!category) {
    notFound();
  }
  
  // If category has no products AND no subcategories, show 404
  if (categoryProducts.length === 0 && subcategories.length === 0) {
    notFound();
  }
  
  // If this category has subcategories (like "bead-mills"), show them
  if (subcategories.length > 0) {
    // Pass subcategories as "products" to display them as cards
    const subcategoryCards = subcategories.map(subcat => {
      const subcatProducts = getProductsByCategory(subcat.slug);
      return {
        ...subcat,
        // Add product-like properties for the grid
        id: subcat.id,
        name: subcat.name,
        slug: subcat.slug,
        shortDescription: subcat.description,
        image: subcatProducts[0]?.image || '/images/products/placeholder.jpg',
        // Mark this as a subcategory so the grid can link differently
        isSubcategory: true,
        productCount: subcatProducts.length
      };
    });
    
    return (
      <main className="category-page">
        <CategoryTypesGrid 
          category={category} 
          products={subcategoryCards as any}
          mainCategories={mainCategories}
          isShowingSubcategories={true}
        />
      </main>
    );
  }
  
  // If this category only has 1 product (and no subcategories), redirect to product detail
  if (categoryProducts.length === 1) {
    redirect(`/products/${categoryProducts[0].slug}`);
  }
  
  return (
    <main className="category-page">
      <CategoryTypesGrid 
        category={category} 
        products={categoryProducts}
        mainCategories={mainCategories}
        isShowingSubcategories={false}
      />
    </main>
  );
}

// Generate static params for all categories including subcategories
export async function generateStaticParams() {
  const { getAllCategories } = await import('@/data/productsData');
  const categories = getAllCategories();
  
  return categories.map((category) => ({
    slug: category.slug,
  }));
}
