function objToParams(obj) {
    return Object.entries(obj)
        .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
        .join('&');
};

export default objToParams;