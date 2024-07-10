import catsIntance from "./catsInstance";

export const getCat = () => {
    const params = {
        size: "med",
        mime_types: "jpg",
        format: "json",
        has_breeds: true,
        order: "RANDOM",
        page: 0,
        limit: 1,
    }
    return catsIntance.get("/v1/images/search",params);
}

export const getCats = ({limit}) => {
    const params = {
        size: "med",
        mime_types: "jpg",
        format: "json",
        has_breeds: true,
        order: "RANDOM",
        page: 0,
        limit
    }
    console.log(params);
    return catsIntance.get("/v1/images/search",{ params });
}