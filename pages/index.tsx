import React from 'react';
import LayoutWrapper from '../components/layout';
import ProductLists from '../components/layout/productlists';

export default function Home() {
  return (
    <LayoutWrapper>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <ProductLists />
        </div>
      </section>
    </LayoutWrapper >
  );
}