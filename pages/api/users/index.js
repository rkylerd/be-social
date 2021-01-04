// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getStory } from "../../../shared/api";
export default async (req, res) => {
  res.statusCode = 200
  const userStory = await getStory('rkylerd');

  res.json({ name: 'John Doe' })
}
