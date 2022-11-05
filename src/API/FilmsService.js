import axios from 'axios'

export default class FilmsService {
    static async getTop(page) {
        const res = await axios
            .get(
                'https://kinopoiskapiunofficial.tech/api/v2.2/films/top',
                {
                    params: {
                        'type': 'TOP_100_POPULAR_FILMS',
                        page,
                    },
                    headers: {
                        'X-API-KEY': '7e579f51-ec0f-40c8-9324-7f0fba2a9813',
                        'Content-Type': 'application/json',
                    },
                }
            )
        return res.data
    }

    static async getFilmById(id,) {
        const res = await axios
            .get(
                `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
                {
                    headers: {
                        'X-API-KEY': '7e579f51-ec0f-40c8-9324-7f0fba2a9813',
                        'Content-Type': 'application/json',
                    },
                }
            )
        return res.data
    }

    static async getFilmByWord(keyword) {
        const res = await axios
            .get(
                'https://kinopoiskapiunofficial.tech/api/v2.2/films/',
                {
                    params: {
                        keyword,
                    },
                    headers: {
                        'X-API-KEY': '7e579f51-ec0f-40c8-9324-7f0fba2a9813',
                        'Content-Type': 'application/json',
                    },
                }
            )
        return res.data
    }
}