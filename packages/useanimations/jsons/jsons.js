import alertCircle from './alertCircle.json';
import alertOctagon from './alertOctagon.json';

const jsons = import.meta.glob(["./*.json"])

const jsonData = {};

for (const path in jsons) {
    const jsonName = path.replace(/^\.\/(.*)\.\w+$/, '$1');
    jsonData[jsonName] =  await jsons[path]();
}

export default jsonData
