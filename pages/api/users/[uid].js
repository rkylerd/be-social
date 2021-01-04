// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getStory } from "../../../shared/api";

export default async (req, res) => {
    const {
        query: { uid },
    } = req
    try {
        const { data = {} } = await getStory(uid);
        res.send(data);
    } catch(err) {
        return { error: err.toString() }
    }
}