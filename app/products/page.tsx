// web/app/products/page.tsx
import ProductsHero from '@/components/products/ProductsHero';
import MainCategoriesGrid from '@/components/products/MainCategoriesGrid';

export default function ProductsPage() {
  return (
    <main className="products-page">
      <ProductsHero />
      <MainCategoriesGrid />
    </main>
  );
}