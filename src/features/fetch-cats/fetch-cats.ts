'use server';

import { Cat } from '@/src/shared/models';

export async function fetchCats(): Promise<Cat[]> {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=20`,
    {
      next: { revalidate: 300 },
      headers: {
        'x-api-key': `${process.env.API_KEY}`,
      },
    }
  );

  return await response.json();
}
