import EmptyList from "@/components/homepage/EmptyList";
import PropertiesList from "@/components/homepage/PropertiesList";
import { fetchFavorites } from "@/utils/actions/favouriteActions";

async function FavoritesPage() {
  const favorites = await fetchFavorites();

  if (favorites.length === 0) {
    return <EmptyList />;
  }

  return <PropertiesList properties={favorites} />;
}
export default FavoritesPage;
