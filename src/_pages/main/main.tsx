import { fetchCats } from '@/src/features/fetch-cats';
import { MainPageContainer } from '@/src/widgets/main-page-container';

export const MainPage = async () => {
  const cats = await fetchCats();

  return <MainPageContainer initialCats={cats} />;
};
