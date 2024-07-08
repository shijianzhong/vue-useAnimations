import alertCircle from './alertCircle.json';

const jsons = import.meta.glob(["./*.json"])

export const getJsonData = async() =>{

    const jsonData = {};
    for (const path in jsons) {
        const jsonName = path.replace(/^\.\/(.*)\.\w+$/, '$1');
        jsonData[jsonName] =  await jsons[path]();
    }
    return jsonData;
}

