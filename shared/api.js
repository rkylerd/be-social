import axios from 'axios';
import { externalApi } from '../config'

const GET = async (url) => {
    try {
        return await axios.get(url);
    } catch (err) {
        console.log(`Error while calling '${url}' endpoint.`, err);
        return { error: err.toString() }
    }
};

const getStory = async (handle) => {
    try {
        return await GET(`${externalApi}users/${handle}/story`);
    } catch (err) {
        throw new Error(err.toString())
    }
};

export {
    getStory
}