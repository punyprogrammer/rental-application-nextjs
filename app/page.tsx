import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/homepage/CategoriesList";
import PropertiesContainer from "@/components/homepage/PropetiesContainer";
import { Suspense } from "react";

export default function HomePage({
  searchParams,
}: {
  searchParams: {
    category?: string;
    search?: string;
  };
}) {
  console.log("SEARCH", searchParams);
  return (
    <section>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>
    </section>
  );
}
