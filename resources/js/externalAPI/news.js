const apiKey = "0783ea48b34e4d558c3301f7857cd57b";

export const articles = (
    page = 1,
    category = "",
    country = "ru",
    search = ""
) => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${search}&pageSize=8&page=${page}&apiKey=${apiKey}`)
        .then(response => response.json());
};