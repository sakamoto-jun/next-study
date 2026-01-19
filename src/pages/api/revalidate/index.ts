import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await res.revalidate('/rendering/isr/on-demand-revalidation');

    return res.json({ revalidated: true });
  } catch (error) {
    console.error(error);
    return res.json({ revalidated: false });
  }
}
