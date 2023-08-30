import { getValueFromData } from './value-getter.js'

export default class Rino
{
    constructor()
    {
        this.dataStore = {};
    }

    async buildComponent(templateId, componentId = null)
    {
        const componentNode = document.getElementById(templateId).content.cloneNode(true);
        const tempElement = document.createElement("div");
        tempElement.appendChild(componentNode);
        let componentText = tempElement.innerHTML;
        let resultText = "";

        while (componentText.length > 0)
        {
            let start = componentText.indexOf("{{") + 2;
            let end = componentText.indexOf("}}", start);

            if (start == 1 || end == -1)
            {
                resultText = resultText + componentText;
                break;
            }

            resultText = resultText + componentText.substring(0, start - 2);
            let target = componentText.substring(start, end).trim();
            componentText = componentText.substring(end + 2);

            if (target.substring(0, 5) == "data.")
            {
                resultText = resultText + await getValueFromData(target, this.dataStore);
            }
            else if (target.substring(0, 9) == "component")
            {
                let targetArray = target.split(",");
                let componentName = targetArray[1].trim();

                if (targetArray.length > 2)
                {
                    let childComponentId = targetArray[2].trim();
                    resultText = resultText + await this.buildComponentText(componentName, `${ componentId }-${ childComponentId }`);
                }
                else
                {
                    resultText = resultText + await this.buildComponentText(componentName);
                }
            }
            else
            {
                resultText = resultText + `{{ ${ target } }}`;
            }
        }

        const result = document.createElement("div");
        result.innerHTML = resultText;
        if (componentId) result.setAttribute('id', componentId);

        return result;
    }

    async buildComponentText(templateId, componentId = null)
    {
        const componentNode = document.getElementById(templateId).content.cloneNode(true);
        const tempElement = document.createElement("div");
        tempElement.appendChild(componentNode);
        let componentText = tempElement.innerHTML;
        let resultText = "";

        while (componentText.length > 0)
        {
            let start = componentText.indexOf("{{") + 2;
            let end = componentText.indexOf("}}", start);

            if (start == 1 || end == -1)
            {
                resultText = resultText + componentText;
                break;
            }

            resultText = resultText + componentText.substring(0, start - 2);
            let target = componentText.substring(start, end).trim();
            componentText = componentText.substring(end + 2);

            if (target.substring(0, 5) == "data.")
            {
                resultText = resultText + await getValueFromData(target, this.dataStore);
            }
            else if (target.substring(0, 9) == "component")
            {
                let targetArray = target.split(",");
                let componentName = targetArray[1].trim();

                if (targetArray.length > 2)
                {
                    let childComponentId = targetArray[2].trim();
                    resultText = resultText + await this.buildComponentText(componentName, `${ componentId }-${ childComponentId }`);
                }
                else
                {
                    resultText = resultText + await this.buildComponentText(componentName);
                }
            }
            else
            {
                resultText = resultText + `{{ ${ target } }}`;
            }
        }

        const result = document.createElement("div");
        result.innerHTML = resultText;
        if (componentId) result.setAttribute('id', componentId);

        return result.outerHTML;
    }
}